import type { Localized } from "../i18n";
import type { CaseStudy } from "./types";

// Copy source: docs/content.md, "Case study 1: Fedes lead panel".
// Bracketed text is a placeholder for Juan to fill in. Never invent metrics.
const en: CaseStudy = {
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

const es: CaseStudy = {
  slug: "fedes-lead-panel",
  title: "Panel de leads de Fedes",
  year: "2025",
  summary: "Del seguimiento manual a una landing personalizada para cada lead, construido en 7 días.",
  eyebrow: "Fedes Consultora · Diseño y desarrollo de producto · 2025",
  headline: "Del seguimiento manual a una landing personalizada para cada lead, construido en 7 días",
  intro:
    "Fedes necesitaba una forma más rápida de hacer seguimiento a sus leads y presentar propuestas. Definí el alcance y luego diseñé y construí todo el producto con Claude Code.",
  metrics: [
    { label: "para construirlo", value: "7 días" },
    { label: "landing personalizada", value: "1 por lead" },
    { label: "seguimiento de leads", value: "Automático" },
  ],
  facts: [
    { label: "Rol", value: "Diseño y desarrollo de producto" },
    { label: "Duración", value: "7 días" },
    { label: "Sector", value: "Consultoría" },
    { label: "Hecho con", value: "Claude Code" },
  ],
  glance: {
    problem:
      "Los leads vivían en una planilla. El seguimiento llevaba demasiado tiempo y demasiados pasos, y las propuestas se enviaban como un documento plano.",
    whatIDid:
      "Una landing page y un panel de administración que captura los leads del formulario de contacto, acepta cargas manuales y genera una landing personalizada para cada lead.",
    result:
      "El seguimiento está automatizado y las propuestas se presentan mejor. Se lanzó hace poco, así que el impacto en ventas todavía se está midiendo.",
  },
  problem: {
    heading: "Los leads llegaban, pero cada seguimiento empezaba de cero.",
    body: [
      "Antes de este producto, el equipo registraba los leads en una planilla de Excel. Cada seguimiento pasaba por pasos manuales y las propuestas se enviaban como un documento.",
    ],
  },
  findings: [
    {
      title: "La planilla costaba tiempo",
      body: "Gestionar los leads en Excel implicaba mucho tiempo perdido y demasiados pasos entre un lead nuevo y su seguimiento.",
    },
    {
      title: "Los leads llegan por más de un lado",
      body: "Algunos llegan por el formulario de la web. Otros vienen de una base de datos o se cargan a mano.",
    },
    {
      title: "Un documento no muestra el trabajo que hay detrás",
      body: "Una propuesta enviada como un archivo plano no le transmitía al cliente el trabajo y el cuidado que había detrás.",
    },
  ],
  decisions: [
    {
      title: "Una landing page para cada lead",
      body: "Cada lead recibe una página que presenta los beneficios de trabajar con Fedes, adaptada a ese prospecto.",
      why: "Una página hecha para cada prospecto eleva la calidad del servicio. El cliente ve que hay trabajo detrás de la propuesta y que su proyecto se toma en serio, algo que un documento plano no transmite.",
      before: { alt: "Cómo se enviaban las propuestas antes", caption: "[Antes: cómo se presentaban las propuestas]" },
      after: { alt: "Una landing generada con datos de ejemplo", caption: "[Después: una landing generada, datos de ejemplo]" },
    },
    {
      title: "Dos formas de entrada: el formulario y la carga manual",
      body: "El panel registra cada lead que llega desde la página de contacto y permite que el equipo cargue el resto, a mano o desde una base de datos.",
      why: "No todos los leads llegan igual: algunos entran por el formulario de la web y otros se importan de una base de datos o se cargan a mano. El panel tenía que recibirlos a todos, para que nada quede afuera.",
      after: { alt: "Lista de leads del panel con datos de ejemplo", caption: "[Después: lista de leads con ambos orígenes, datos de ejemplo]" },
    },
    {
      title: "Automatizar el seguimiento, no solo el registro",
      body: "El seguimiento ya no depende de pasos manuales, y las propuestas llegan en una página hecha para el prospecto.",
      why: "Casi todo el tiempo perdido estaba en los pasos manuales entre un lead nuevo y una propuesta. Pasar la planilla a un panel no los eliminaba por sí solo, así que el seguimiento tenía que funcionar por su cuenta.",
      after: { alt: "Detalle de un lead con su estado de seguimiento", caption: "[Después: detalle de un lead con su estado de seguimiento, datos de ejemplo]" },
    },
  ],
  results: {
    heading: "El seguimiento ahora funciona solo, y cada prospecto recibe una propuesta hecha para él.",
    body: ["Se lanzó hace poco, así que el impacto en ventas todavía no está medido."],
    next: "El impacto en ventas se medirá por cuántos leads calientes llegan y terminan convirtiendo.",
  },
};

export const fedesLeadPanel: Localized<CaseStudy> = { en, es };
