import type { MetadataRoute } from "next";
import { caseSlugs } from "@/content/cases";
import { localePath } from "@/content/i18n";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/work/", "/about/", "/contact/", ...caseSlugs.map((s) => `/work/${s}/`)];
  return paths.flatMap((path) => {
    const languages = { en: `${site.url}${localePath("en", path)}`, es: `${site.url}${localePath("es", path)}` };
    return [
      { url: languages.en, alternates: { languages } },
      { url: languages.es, alternates: { languages } },
    ];
  });
}
