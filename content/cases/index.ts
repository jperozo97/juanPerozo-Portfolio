import type { Locale } from "../i18n";
import { fedesLeadPanel } from "./fedes-lead-panel";
import type { CaseStudy } from "./types";

// Order here is the order on /work. Add a case by creating a file (with both
// languages) and listing it here.
const all = [fedesLeadPanel];

export function getCases(locale: Locale): CaseStudy[] {
  return all.map((c) => c[locale]);
}

export function getCase(locale: Locale, slug: string) {
  return getCases(locale).find((c) => c.slug === slug);
}

export function getNextCase(locale: Locale, slug: string) {
  const cases = getCases(locale);
  if (cases.length < 2) return undefined;
  const i = cases.findIndex((c) => c.slug === slug);
  return cases[(i + 1) % cases.length];
}

export const caseSlugs = all.map((c) => c.en.slug);

export type { CaseStudy, CaseImage } from "./types";
