"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LanguageSwitch } from "@/components/language-switch";
import { NavLink } from "@/components/nav-link";
import { localePath, type Locale } from "@/content/i18n";
import { site } from "@/content/site";
import { ui } from "@/content/ui";

// Fixed header. Full width at the top of the page; once the page scrolls it
// contracts into a compact floating bar. A spacer in the layout reserves its
// space, so the change never shifts the page content.
// Below md the links move into a menu panel, so longer Spanish labels always fit.
export function Header({ locale }: { locale: Locale }) {
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const t = ui[locale].nav;

  const links = [
    { href: localePath(locale, "/"), label: t.home, exact: true },
    { href: localePath(locale, "/work/"), label: t.work },
    { href: localePath(locale, "/about/"), label: t.about },
  ];
  const contactHref = localePath(locale, "/contact/");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setCondensed(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Close the mobile menu on navigation, Escape and clicks outside it.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!panelRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  const compact = condensed || open;

  return (
    <header
      data-condensed={compact}
      className="group/header pointer-events-none fixed inset-x-0 top-0 z-50 px-3 sm:px-5 lg:px-0"
    >
      <div ref={panelRef} className="pointer-events-auto mx-auto max-w-[1200px]">
        <div
          className={`mx-auto flex items-center justify-between gap-4 border transition-[max-width,margin,padding,background-color,border-color,border-radius] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
            compact
              ? "mt-3 max-w-[860px] rounded-full border-line bg-bg/80 py-1.5 pr-1.5 pl-5 backdrop-blur-md"
              : "mt-0 max-w-[1200px] rounded-none border-transparent px-2 py-7 sm:px-7 lg:px-12"
          }`}
        >
          <Link
            href={localePath(locale, "/")}
            aria-label={`${site.name}, ${t.home}`}
            className="shrink-0 text-lg font-bold tracking-[-0.01em] transition-colors hover:text-accent"
          >
            {/* Full name on wider screens, monogram on small ones. */}
            <span className="hidden sm:inline">{site.name}</span>
            <span className="sm:hidden" aria-hidden>
              JP
            </span>
          </Link>

          <nav aria-label={t.label} className="hidden items-center gap-7 text-[15px] font-medium md:flex">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} exact={l.exact} />
            ))}
            <LanguageSwitch locale={locale} />
            <NavLink href={contactHref} label={t.contact} variant="pill" />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitch locale={locale} />
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.close : t.menu}
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => !v);
              }}
              className="grid size-11 place-items-center rounded-full bg-pill text-pill-text transition-transform duration-300 active:scale-95"
            >
              <span aria-hidden className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 h-0.5 w-4 rounded bg-current transition-transform duration-300 ${
                    open ? "top-[5px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-4 rounded bg-current transition-transform duration-300 ${
                    open ? "top-[5px] -rotate-45" : "top-[10px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <nav
          id="mobile-menu"
          aria-label={t.label}
          hidden={!open}
          className="mx-auto mt-2 max-w-[860px] rounded-3xl border border-line bg-bg/95 p-6 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l, i) => (
              <li key={l.href} className="menu-item" style={{ animationDelay: `${i * 50}ms` }}>
                <NavLink href={l.href} label={l.label} exact={l.exact} className="block py-2 text-[28px] font-semibold tracking-[-0.02em]" />
              </li>
            ))}
          </ul>
          <div className="menu-item mt-6 flex items-center justify-between gap-4" style={{ animationDelay: "150ms" }}>
            <NavLink href={contactHref} label={t.contact} variant="pill" />
            <LanguageSwitch locale={locale} variant="full" />
          </div>
        </nav>
      </div>
    </header>
  );
}
