// Single source for profile, contact and navigation copy.
// Copy comes from docs/content.md. Keep both in sync.

// Production URL, used for canonical links, the sitemap and Open Graph.
const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://juanperozo-portfolio.vercel.app";

export const site = {
  url,
  location: "Based in Buenos Aires, working remotely.",
  name: "Juan Perozo",
  role: "Product Designer (UX/UI)",
  headline:
    "Product Designer (UX/UI) | Web & Mobile Apps | Figma · Prototyping · Frontend",
  statement: "I design digital products and help decide what's worth building.",
  subline:
    "Product Designer. Landing pages, admin panels and MVPs, built with Claude Code.",
  // Photo used in the home hero, under /public. Leave undefined to use the procedural scene.
  heroPhoto: undefined as string | undefined,
  description:
    "Juan Perozo is a Product Designer (UX/UI) who designs web and mobile products and builds landing pages, admin panels and MVPs with Claude Code.",
  contact: {
    email: "juandpp97@gmail.com",
    linkedin: {
      label: "linkedin.com/in/jperozo97",
      href: "https://www.linkedin.com/in/jperozo97",
    },
    github: {
      label: "github.com/jperozo97",
      href: "https://github.com/jperozo97",
    },
    behance: {
      label: "Behance portfolio",
      href: "https://www.behance.net/gallery/228381143/PORTFOLIO-2025-by-JUANPEROZO",
    },
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work/" },
  { label: "About", href: "/about/" },
] as const;
