// Single source for profile, contact and navigation copy.
// English copy comes from docs/content.md; keep both in sync.
import type { Localized } from "./i18n";

// Production URL, used for canonical links, the sitemap and Open Graph.
const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://juanperozo-portfolio.vercel.app";

export const site = {
  url,
  name: "Juan Perozo",
  // Photo used in the home hero, under /public. Leave undefined to use the procedural scene.
  heroPhoto: undefined as string | undefined,
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

export const profile: Localized<{
  role: string;
  headline: string;
  statement: string;
  subline: string;
  description: string;
  location: string;
}> = {
  en: {
    role: "Product Designer (UX/UI)",
    headline: "Product Designer (UX/UI) | Web & Mobile Apps | Figma · Prototyping · Frontend",
    statement: "I design digital products and help decide what's worth building.",
    subline: "Product Designer. Landing pages, admin panels and MVPs, built with Claude Code.",
    description:
      "Juan Perozo is a Product Designer (UX/UI) who designs web and mobile products and builds landing pages, admin panels and MVPs with Claude Code.",
    location: "Based in Buenos Aires, working remotely.",
  },
  es: {
    role: "Product Designer (UX/UI)",
    headline: "Product Designer (UX/UI) | Apps web y móviles | Figma · Prototipado · Frontend",
    statement: "Diseño productos digitales y ayudo a decidir qué vale la pena construir.",
    subline: "Product Designer. Landing pages, paneles de administración y MVPs, construidos con Claude Code.",
    description:
      "Juan Perozo es Product Designer (UX/UI): diseña productos web y móviles y construye landing pages, paneles de administración y MVPs con Claude Code.",
    location: "Desde Buenos Aires, trabajando en remoto.",
  },
};
