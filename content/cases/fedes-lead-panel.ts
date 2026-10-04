import type { CaseStudy } from "./types";

// Copy source: docs/content.md, "Case study 1: Fedes lead panel".
// Bracketed text is a placeholder for Juan to fill in. Never invent metrics.
export const fedesLeadPanel: CaseStudy = {
  slug: "fedes-lead-panel",
  title: "Fedes lead panel",
  year: "2025",
  summary: "From manual follow-up to a personalized landing for every lead, built in 7 days.",
  eyebrow: "Fedes Consultora · Product design & build · 2025",
  headline: "From manual follow-up to a personalized landing for every lead, built in 7 days",
  intro:
    "Fedes needed a faster way to follow up leads and present proposals. I defined the scope, then designed and built the whole product with Claude Code.",
  metrics: [
    { label: "time to build", value: "7 days" },
    { label: "personalized landing", value: "1 per lead" },
    { label: "lead follow-up", value: "Automated" },
  ],
  facts: [
    { label: "Role", value: "Product design & build" },
    { label: "Duration", value: "7 days" },
    { label: "Sector", value: "Consulting" },
    { label: "Built with", value: "Claude Code" },
  ],
  glance: {
    problem:
      "Lead follow-up was manual and proposals weren't tailored to each prospect. [Confirm and add detail]",
    whatIDid:
      "A landing page plus an admin panel that captures contact-form leads, accepts manual entries and generates a personalized landing for each lead.",
    result:
      "Follow-up is automated and proposals are presented better. Launched recently, so sales impact is still being measured.",
  },
  problem: {
    heading: "Leads arrived, but every follow-up started from scratch.",
    body: [
      "[Describe how leads were tracked and how proposals were presented before this product existed.]",
    ],
  },
  findings: [
    { title: "[Finding 1]", body: "[What you learned about the old process]" },
    { title: "[Finding 2]", body: "[What the team or prospects needed]" },
    { title: "[Finding 3]", body: "[What was missing]" },
  ],
  decisions: [
    {
      title: "One landing page for every lead",
      body: "Each lead gets a page that presents the benefits of working with Fedes, tailored to that prospect.",
      why: "[Why: add the reasoning and what you ruled out]",
      before: { alt: "How proposals were sent before", caption: "[Before: how proposals were presented]" },
      after: { alt: "A generated landing page with sample data", caption: "[After: a generated landing, sample data]" },
    },
    {
      title: "Two ways in: the contact form and manual entry",
      body: "The panel tracks every lead from the contact page and lets the team add leads from other channels by hand.",
      why: "[Why: add the reasoning and what you ruled out]",
      after: { alt: "Lead list in the admin panel with sample data", caption: "[After: lead list with both sources, sample data]" },
    },
    {
      title: "Automate the follow-up, not just the tracking",
      body: "Follow-up no longer depends on manual steps, and proposals arrive in a page made for the prospect.",
      why: "[Why: add the reasoning and what you ruled out]",
      after: { alt: "Lead detail with follow-up status", caption: "[After: lead detail with follow-up status, sample data]" },
    },
  ],
  results: {
    heading: "Follow-up now runs on its own, and each prospect gets a proposal page made for them.",
    body: ["Launched recently, so sales impact is not measured yet."],
    next: "[Next: how you will measure impact]",
  },
};
