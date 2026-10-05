import { getCases, type CaseImage } from "./cases";
import { localePath, type Locale } from "./i18n";

export type WorkItem = {
  title: string;
  summary: string;
  year: string;
  // Set when the item has a case study page.
  href?: string;
  // Case study slug, used to pair the preview with the case cover during navigation.
  slug?: string;
  cover?: CaseImage;
};

// Every case study, plus any project added here without one.
export function getWork(locale: Locale): WorkItem[] {
  return getCases(locale).map((c) => ({
    title: c.title,
    summary: c.summary,
    year: c.year,
    href: localePath(locale, `/work/${c.slug}/`),
    slug: c.slug,
    cover: c.cover,
  }));
}
