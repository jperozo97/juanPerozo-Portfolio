// Locales and URL helpers. English lives at the root (/work/), Spanish under /es (/es/work/).

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type Localized<T> = Record<Locale, T>;

export const htmlLang: Localized<string> = { en: "en", es: "es" };
export const ogLocale: Localized<string> = { en: "en_US", es: "es_AR" };

// "/work/" -> "/work/" (en) or "/es/work/" (es). Paths always start and end with "/".
export function localePath(locale: Locale, path: string) {
  return locale === defaultLocale ? path : `/${locale}${path}`;
}

// Locale of a pathname and the same path without the locale prefix.
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const match = pathname.match(/^\/es(\/.*)?$/);
  if (match) return { locale: "es", path: match[1] || "/" };
  return { locale: "en", path: pathname || "/" };
}
