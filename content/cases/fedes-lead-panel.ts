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
      "Leads lived in a spreadsheet. Follow-up took too much time and too many steps, and proposals went out as a plain document.",
    whatIDid:
      "A landing page plus an admin panel that captures contact-form leads, accepts manual entries and generates a personalized landing for each lead.",
    result:
      "Follow-up is automated and proposals are presented better. Launched recently, so sales impact is still being measured.",
  },
  problem: {
    heading: "Leads arrived, but every follow-up started from scratch.",
    body: [
      "Before this product, the team tracked leads in an Excel spreadsheet. Every follow-up went through manual steps, and proposals were sent as a document.",
    ],
  },
  findings: [
    {
      title: "The spreadsheet cost time",
      body: "Managing leads in Excel meant a lot of lost time and too many steps between a new lead and a follow-up.",
    },
    {
      title: "Leads come from more than one place",
      body: "Some arrive through the website form. Others come from a database or are added by hand.",
    },
    {
      title: "A document doesn't show the work behind it",
      body: "A proposal sent as a plain file didn't tell the client that real work and care went into it.",
    },
  ],
  decisions: [
    {
      title: "One landing page for every lead",
      body: "Each lead gets a page that presents the benefits of working with Fedes, tailored to that prospect.",
      why: "A page made for each prospect raises the quality of the service. The client can see there is work behind the proposal and that their project is taken seriously, which a plain document doesn't convey.",
      before: { alt: "How proposals were sent before", caption: "[Before: how proposals were presented]" },
      after: { alt: "A generated landing page with sample data", caption: "[After: a generated landing, sample data]" },
    },
    {
      title: "Two ways in: the contact form and manual entry",
      body: "The panel tracks every lead from the contact page and lets the team load the rest, by hand or from a database.",
      why: "Leads don't all arrive the same way: some come through the website form, others are imported from a database or entered by hand. The panel had to take all of them, so nothing lives outside it.",
      after: { alt: "Lead list in the admin panel with sample data", caption: "[After: lead list with both sources, sample data]" },
    },
    {
      title: "Automate the follow-up, not just the tracking",
      body: "Follow-up no longer depends on manual steps, and proposals arrive in a page made for the prospect.",
      why: "Most of the lost time was in manual steps between a new lead and a proposal. Moving the spreadsheet into a panel alone wouldn't remove them, so the follow-up itself had to run on its own.",
      after: { alt: "Lead detail with follow-up status", caption: "[After: lead detail with follow-up status, sample data]" },
    },
  ],
  results: {
    heading: "Follow-up now runs on its own, and each prospect gets a proposal page made for them.",
    body: ["Launched recently, so sales impact is not measured yet."],
    next: "Impact on sales will be measured by how many hot leads come in and go on to convert.",
  },
};
