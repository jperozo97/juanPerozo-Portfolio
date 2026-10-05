import type { Metadata } from "next";
import { CopyEmail } from "@/components/copy-email";
import { PageIntro } from "@/components/page-intro";
import { SocialLinks } from "@/components/social-links";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about a product designer role or a freelance project.",
  alternates: { canonical: "/contact/" },
};

const paths = [
  {
    eyebrow: "Hiring",
    title: "A product designer for your team",
    body: "I'm open to product designer roles. I can walk you through more of my work on a call.",
    subject: "Product designer role",
    cta: "Write about a role",
  },
  {
    eyebrow: "Freelance",
    title: "A landing page, admin panel or MVP",
    body: "I design and build it with Claude Code, from scope to a working product.",
    subject: "Freelance project",
    cta: "Tell me about your project",
  },
];

export default function ContactPage() {
  const { email } = site.contact;

  return (
    <>
      <PageIntro eyebrow="Contact" title="Let's build something worth using">
        <p>Email is the fastest way to reach me. Tell me what you&apos;re working on.</p>
        <p className="mt-2 text-[17px] text-muted">{site.location}</p>
      </PageIntro>

      <section aria-label="Email" className="container-site">
        <a
          href={`mailto:${email}`}
          className="inline-block border-b-2 border-text pb-1 text-[28px] font-semibold tracking-[-0.02em] break-all hover:border-accent hover:text-accent sm:text-[44px]"
        >
          {email}
        </a>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <CopyEmail email={email} />
          <SocialLinks include={["LinkedIn", "Behance", "GitHub"]} />
        </div>
      </section>

      <section aria-label="What are you looking for?" className="container-site mt-20">
        <ul className="grid gap-6 md:grid-cols-2">
          {paths.map((p) => (
            <li key={p.eyebrow} className="flex flex-col rounded-2xl border border-line p-7 sm:p-9">
              <p className="eyebrow text-accent">{p.eyebrow}</p>
              <h2 className="mt-4 text-[26px] leading-[1.15] tracking-[-0.02em] sm:text-[30px]">{p.title}</h2>
              <p className="mt-3 mb-8 text-secondary">{p.body}</p>
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(p.subject)}`}
                className="mt-auto inline-flex w-fit items-center rounded-full bg-pill px-[22px] py-3 text-[15px] font-semibold text-pill-text transition-opacity hover:opacity-85"
              >
                {p.cta} →
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
