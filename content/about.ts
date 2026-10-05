export const about = {
  // From docs/content.md ("Alternative hero line").
  headline: "I design the product, then I build it.",
  // Portrait under /public, e.g. "/images/juan.jpg". Not shown until set.
  photo: undefined as { src: string; alt: string } | undefined,
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
} as const;
