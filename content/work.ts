// Work list. Each case study will get its own file in /content in phase 2.

export type WorkItem = {
  title: string;
  summary: string;
  year: string;
  // Set once the case study page exists.
  href?: string;
};

export const work: WorkItem[] = [
  {
    title: "Fedes lead panel",
    summary:
      "From manual follow-up to a personalized landing for every lead, built in 7 days.",
    year: "2025",
  },
  { title: "[Project 2]", summary: "[Add a one-line summary]", year: "[Year]" },
  { title: "[Project 3]", summary: "[Add a one-line summary]", year: "[Year]" },
];
