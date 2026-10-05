import { cases, type CaseImage } from "./cases";

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
export const work: WorkItem[] = cases.map((c) => ({
  title: c.title,
  summary: c.summary,
  year: c.year,
  href: `/work/${c.slug}/`,
  slug: c.slug,
  cover: c.cover,
}));
