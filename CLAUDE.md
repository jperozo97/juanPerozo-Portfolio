# Project: Juan Perozo — Portfolio website

## Who and why
Juan Perozo is a Product Designer (UX/UI). This portfolio has two goals:
1. Land a product designer role (priority, income is urgent).
2. Win freelance work: landing pages, admin panels and MVPs built with Claude Code.

The portfolio must show product decisions and craft, not only visuals. Case studies are the most important part. The home hero is the first impression but must never delay shipping the cases.

## Language
- Talk to Juan in Spanish.
- All website content is in English.
- Code, comments and commit messages are in English.

## Stack (recommended; change only with a reason, and say why)
- Next.js (App Router) + TypeScript + Tailwind CSS.
- `output: 'export'` (static export) so the site can be hosted on Vercel, Netlify or Cloudflare Pages without changes.
- Framer Motion for UI motion. Hero visuals are client components (canvas/WebGL loaded with dynamic import, ssr: false).
- Content as typed data files (MDX or JSON) in `/content`, one file per case study, so adding a case never touches components.
- `next/font` for Hanken Grotesk.

## Design direction
### Case studies and reading pages: DECIDED, "Editorial light"
- Colors (CSS variables): bg #FFFFFF, text #111111, secondary text #4A4A4A and #5B5B5B, lines #E3E3E3, accent #2A3FFF. Dark mode: bg #0E0F12, text #F4F4F5, accent #8C9BFF, lines #2A2C31.
- Type: Hanken Grotesk (400, 500, 600, 700, 800). Body 17px/1.55. Headings weight 600, letter-spacing -0.03em, line-height ~1.02. H1: clamp(40px, 6vw, 76px). Small eyebrow labels: 13px, uppercase, letter-spacing 0.12em, used sparingly.
- Layout: 1200px container, 48px side padding, lots of white space. Primary button is a black pill with white text. No shadows, gradients or emojis.
- Case page structure: eyebrow (company, type of work, year), H1 that includes the result, short paragraph, three metrics, sticky numbered side index (00 At a glance, 01 The problem, 02 What I found, 03 Decisions, 04 Results) that highlights the active section with IntersectionObserver and scrolls smoothly (horizontal sticky bar on mobile), project facts under the index (Role, Duration, Sector, Built with), "At a glance" rows (problem, what I did, result), numbered decisions with before/after images and captions, results, link to next case, contact.
- Reference markup: `reference/case-study/editorial-light.dc.html`.
- Structure inspiration: oscarrgb.com (list of work with hover image swap, case page with sticky index). Take structure and interaction ideas only. Never copy text, images, brand or code.

### Home hero: UNDECIDED, Juan is still exploring
Five single-file prototypes live in `reference/hero/`. Juan liked `hero-motion-blur.html` slightly more than the others but is not convinced by any. Constraints he gave:
- It must feel artistic and original, not a generic 3D object and not a copy of his reference.
- It must say who he is and what he does (a real photo of him and his real work will help; the generated backgrounds feel fake).
- Quality over speed for the hero, but ship the rest of the site first.
Plan: build hero v1 from `hero-motion-blur.html` (ported to a React client component, with `/public/images/hero.jpg` as the photo and the procedural scene as fallback), then iterate with Juan. Keep the hero isolated in `components/hero/` so it can be swapped without touching other pages.

## Content rules
- Never invent metrics or results. Missing facts are placeholders in square brackets, like [Why: add the reasoning].
- Add a script that fails the build if a bracketed placeholder is still visible in published content.
- The Fedes lead panel has no sales results yet (recent launch). Say exactly that.
- Confirm with Juan that Fedes allows showing the project. Use sample data in all screenshots.
- Source of truth for copy: `docs/content.md`.

## Quality bar
- Accessible: real links and buttons, visible focus, contrast 4.5:1, alt text, semantic HTML.
- Respect `prefers-reduced-motion`. Disable heavy effects on low-end mobile. Provide a non-WebGL fallback.
- Performance: Lighthouse mobile above 85. The LCP element (heading) must never depend on a canvas.
- Responsive from 360px up.
- SEO basics and Open Graph image so links look good on LinkedIn.

## How to work
- Work in small phases. Show the result and wait for feedback before the next phase.
- Run lint and `npm run build` before every commit.
- One git branch per change and a pull request, so Vercel creates a preview URL. Juan merges to `main` to publish.
- Ask Juan for assets when needed: hero photo, real project screenshots, answers to bracketed placeholders.

## Phases
1. Scaffold, design tokens, layout, navigation, footer.
2. `/work` list and the case-study template, with the Fedes case from `docs/content.md`.
3. Home with hero v1.
4. About and Contact.
5. SEO, Open Graph, accessibility and performance pass, placeholder check, deploy.

## Next.js version notes
@AGENTS.md
