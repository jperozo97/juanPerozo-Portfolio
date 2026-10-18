"use client";

import { usePathname } from "next/navigation";
import { localePath, splitLocale, type Locale } from "@/content/i18n";
import { ui } from "@/content/ui";

// Link to the same page in the other language. The two languages use separate
// root layouts, so this is a regular link (a full page load), not a client navigation.
export function LanguageSwitch({ locale, variant = "compact" }: { locale: Locale; variant?: "compact" | "full" }) {
  const pathname = usePathname();
  const target: Locale = locale === "en" ? "es" : "en";
  const { path } = splitLocale(pathname.endsWith("/") ? pathname : `${pathname}/`);
  const t = ui[locale].language;

  return (
    <a
      href={localePath(target, path)}
      hrefLang={target}
      lang={target}
      aria-label={t.label}
      title={t.label}
      className={
        variant === "compact"
          ? "inline-flex h-9 items-center gap-1.5 rounded-full border border-line px-3 text-[13px] font-semibold tracking-[0.04em] transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-text"
          : "inline-flex items-center gap-2 text-lg font-medium hover:text-accent"
      }
    >
      <GlobeIcon />
      {variant === "compact" ? t.short : t.switchTo}
    </a>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="8" cy="8" r="6.3" />
      <path d="M1.7 8h12.6M8 1.7c1.8 1.7 2.7 3.8 2.7 6.3S9.8 12.6 8 14.3C6.2 12.6 5.3 10.5 5.3 8S6.2 3.4 8 1.7Z" />
    </svg>
  );
}
