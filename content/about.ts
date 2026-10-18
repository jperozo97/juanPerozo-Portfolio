import type { Localized } from "./i18n";

type About = {
  headline: string;
  tools: string[];
  intro: string[];
  strengths: string[];
  process: string[];
  experience: { company: string; role: string; period: string }[];
};

// Portrait under /public, e.g. "/images/juan.jpg". Not shown until set.
export const aboutPhoto = undefined as { src: string; alt: Localized<string> } | undefined;

export const about: Localized<About> = {
  en: {
    // From docs/content.md ("Alternative hero line").
    headline: "I design the product, then I build it.",
    // From the profile headline in docs/content.md.
    tools: ["Figma", "Prototyping", "Frontend", "Claude Code"],
    intro: [
      "I'm a Product Designer with 6+ years of experience. I started in brand and visual communication, and for the past few years I've worked on digital products: web apps, mobile apps and data-heavy dashboards. In a small company I'm involved in product decisions end to end: I define what gets built, validate it with high-fidelity prototypes, and work side by side with engineers so it ships as designed.",
      "My frontend background helps me speak the same language as developers. At Fedes, I designed and built in 7 days a lead management panel with Claude Code that automates follow-up and generates a personalized landing page for each prospect.",
    ],
    strengths: [
      "Turning complex workflows and dense data into clear, usable interfaces",
      "Product decisions: scoping, prioritizing and validating before building",
      "High-fidelity prototyping in Figma and in code",
      "Using generative AI across research, ideation and implementation to move faster without lowering quality",
    ],
    process: ["Decide what to build", "Validate with a prototype", "Build", "Measure"],
    experience: [
      { company: "Fedes Consultora", role: "Product Designer", period: "Jul 2025 – Present" },
      { company: "potenzify", role: "Product Designer", period: "Sep 2024 – Feb 2025" },
      { company: "Postealo Agency", role: "Sr. Graphic Designer", period: "Sep 2023 – Aug 2024" },
      { company: "Guardians Esports", role: "Graphic Designer", period: "Mar 2023 – Dec 2023" },
      { company: "Pancafe", role: "Graphic Designer", period: "Dec 2019 – Feb 2023" },
    ],
  },
  es: {
    headline: "Diseño el producto y luego lo construyo.",
    tools: ["Figma", "Prototipado", "Frontend", "Claude Code"],
    intro: [
      "Soy Product Designer con más de 6 años de experiencia. Empecé en marca y comunicación visual, y en los últimos años trabajé en productos digitales: apps web, apps móviles y dashboards con muchos datos. En una empresa chica participo en las decisiones de producto de punta a punta: defino qué se construye, lo valido con prototipos de alta fidelidad y trabajo codo a codo con los desarrolladores para que salga tal como se diseñó.",
      "Mi base en frontend me ayuda a hablar el mismo idioma que los desarrolladores. En Fedes diseñé y construí en 7 días, con Claude Code, un panel de gestión de leads que automatiza el seguimiento y genera una landing personalizada para cada prospecto.",
    ],
    strengths: [
      "Convertir flujos complejos y datos densos en interfaces claras y fáciles de usar",
      "Decisiones de producto: definir el alcance, priorizar y validar antes de construir",
      "Prototipado de alta fidelidad en Figma y en código",
      "Usar IA generativa en investigación, ideación e implementación para avanzar más rápido sin bajar la calidad",
    ],
    process: ["Decidir qué construir", "Validar con un prototipo", "Construir", "Medir"],
    experience: [
      { company: "Fedes Consultora", role: "Product Designer", period: "Jul 2025 – Actualidad" },
      { company: "potenzify", role: "Product Designer", period: "Sep 2024 – Feb 2025" },
      { company: "Postealo Agency", role: "Diseñador gráfico Sr.", period: "Sep 2023 – Ago 2024" },
      { company: "Guardians Esports", role: "Diseñador gráfico", period: "Mar 2023 – Dic 2023" },
      { company: "Pancafe", role: "Diseñador gráfico", period: "Dic 2019 – Feb 2023" },
    ],
  },
};
