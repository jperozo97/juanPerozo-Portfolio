import { fedesLeadPanel } from "./fedes-lead-panel";
import type { CaseStudy } from "./types";

// Order here is the order on /work. Add a case by creating a file and listing it.
export const cases: CaseStudy[] = [fedesLeadPanel];

export function getCase(slug: string) {
  return cases.find((c) => c.slug === slug);
}

export function getNextCase(slug: string) {
  if (cases.length < 2) return undefined;
  const i = cases.findIndex((c) => c.slug === slug);
  return cases[(i + 1) % cases.length];
}

export type { CaseStudy, CaseImage } from "./types";
