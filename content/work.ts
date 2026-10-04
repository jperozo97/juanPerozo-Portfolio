import { cases, type CaseImage } from "./cases";

export type WorkItem = {
  title: string;
  summary: string;
  year: string;
  // Set when the item has a case study page.
  href?: string;
  cover?: CaseImage;
};

// Projects without a case study yet. Remove or fill in before publishing.
const upcoming: WorkItem[] = [
  { title: "[Project 2]", summary: "[Add a one-line summary]", year: "[Year]" },
  { title: "[Project 3]", summary: "[Add a one-line summary]", year: "[Year]" },
];

export const work: WorkItem[] = [
  ...cases.map((c) => ({
    title: c.title,
    summary: c.summary,
    year: c.year,
    href: `/work/${c.slug}/`,
    cover: c.cover,
  })),
  ...upcoming,
];
