export type CaseImage = {
  // Path under /public, e.g. "/images/fedes/panel-after.png". Leave out until the asset exists.
  src?: string;
  // Optional muted .mp4 clip under /public, with a .webm of the same name next to it; `src` is then its poster (also used where only a still fits).
  video?: string;
  alt: string;
  caption: string;
};

export type IllustrationKind = "lead-panel" | "matica-app";

export type CaseStudy = {
  slug: string;
  // Short name used in lists and the "next case" link.
  title: string;
  year: string;
  summary: string;
  eyebrow: string;
  // H1. Must include the result.
  headline: string;
  intro: string;
  cover?: CaseImage;
  // Drawn stand-in shown until a real cover screenshot exists (see components/case/case-illustration.tsx).
  illustration: { kind: IllustrationKind; caption: string };
  // Live product, shown with the project facts.
  link?: { label: string; href: string };
  metrics: { label: string; value: string }[];
  facts: { label: string; value: string }[];
  glance: { problem: string; whatIDid: string; result: string };
  problem: { heading: string; body: string[] };
  findings: { title: string; body: string }[];
  decisions: {
    title: string;
    body: string;
    why: string;
    before?: CaseImage;
    after?: CaseImage;
    // Further screens for the decision, shown one under another.
    gallery?: CaseImage[];
  }[];
  results: { heading: string; body: string[]; next?: string };
};
