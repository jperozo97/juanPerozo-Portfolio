import type { MetadataRoute } from "next";
import { cases } from "@/content/cases";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/work/", "/about/", "/contact/", ...cases.map((c) => `/work/${c.slug}/`)];
  return pages.map((path) => ({ url: `${site.url}${path}` }));
}
