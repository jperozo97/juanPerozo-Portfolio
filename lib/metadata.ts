import type { Metadata } from "next";
import { localePath, ogLocale, type Locale } from "@/content/i18n";
import { profile, site } from "@/content/site";

const ogImage: Record<Locale, string> = { en: "/og.png", es: "/og-es.png" };

// Root metadata for a locale's layout.
export function rootMetadata(locale: Locale): Metadata {
  const p = profile[locale];
  return {
    metadataBase: new URL(site.url),
    title: { default: `${site.name} — ${p.role}`, template: `%s — ${site.name}` },
    description: p.description,
    authors: [{ name: site.name, url: site.url }],
    ...pageMetadata(locale, "/", { title: `${site.name} — ${p.role}`, description: p.description }),
  };
}

// Canonical, language alternates and social cards for one page.
// A page-level openGraph replaces the root one, so the image is always included.
export function pageMetadata(
  locale: Locale,
  path: string,
  { title, description, type = "website" }: { title: string; description: string; type?: "website" | "article" },
): Metadata {
  const url = localePath(locale, path);
  return {
    alternates: {
      canonical: url,
      languages: { en: localePath("en", path), es: localePath("es", path), "x-default": localePath("en", path) },
    },
    openGraph: {
      type,
      siteName: site.name,
      title,
      description,
      url,
      locale: ogLocale[locale],
      alternateLocale: ogLocale[locale === "en" ? "es" : "en"],
      images: [{ url: ogImage[locale], width: 1200, height: 630, alt: `${site.name}, ${profile[locale].role}` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage[locale]] },
  };
}
