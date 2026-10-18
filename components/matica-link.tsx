import type { Locale } from "@/content/i18n";
import { site } from "@/content/site";
import { ui } from "@/content/ui";

// Low-key external link to Matica Estudio, Juan's design-by-subscription studio.
export function MaticaLink({ locale, className = "" }: { locale: Locale; className?: string }) {
  return (
    <a
      href={site.matica.href}
      target="_blank"
      rel="noopener"
      className={`group link-underline font-semibold text-text hover:text-accent ${className}`}
    >
      {site.matica.name}
      <span
        aria-hidden
        className="ml-0.5 inline-block transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      >
        ↗
      </span>
      <span className="sr-only"> {ui[locale].newTab}</span>
    </a>
  );
}
