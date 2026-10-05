import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageIntro } from "@/components/page-intro";
import { PillLink } from "@/components/pill-link";
import { SocialLinks } from "@/components/social-links";
import { about } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Product Designer with 6+ years of experience across brand, web and mobile products.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title={about.headline}>
        <p>{site.headline}</p>
      </PageIntro>

      <div className="container-site grid gap-16 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-24">
        <div className="min-w-0">
          <section aria-label="Background" className="max-w-[660px] space-y-6 text-[18px]">
            {about.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <Block number="01" title="What I do best">
            <ol className="grid gap-x-10 sm:grid-cols-2">
              {about.strengths.map((s, i) => (
                <li key={s} className="border-t border-line py-5">
                  <span className="text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-1.5 font-medium">{s}</p>
                </li>
              ))}
            </ol>
          </Block>

          <Block number="02" title="How I work">
            <ol className="grid gap-x-6 gap-y-6 sm:grid-cols-4">
              {about.process.map((step, i) => (
                <li key={step} className="border-t border-text pt-3">
                  <span className="block text-sm text-muted">Step {i + 1}</span>
                  <span className="text-xl leading-[1.2] font-medium tracking-[-0.02em]">{step}</span>
                </li>
              ))}
            </ol>
          </Block>

          <Block number="03" title="Tools">
            <ul className="flex flex-wrap gap-2.5">
              {about.tools.map((tool) => (
                <li key={tool} className="rounded-full border border-line px-4 py-2 text-[15px] font-medium">
                  {tool}
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <aside className="flex flex-col gap-12">
          {about.photo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={about.photo.src}
              alt={about.photo.alt}
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          )}

          <section aria-labelledby="experience">
            <h2 id="experience" className="eyebrow text-muted">
              Experience
            </h2>
            <ol className="mt-4 border-t border-line">
              {about.experience.map((job) => (
                <li key={job.company} className="border-b border-line py-4">
                  <p className="font-semibold">{job.company}</p>
                  <p className="text-[15px] text-secondary">{job.role}</p>
                  <p className="text-sm text-muted">{job.period}</p>
                </li>
              ))}
            </ol>
          </section>
        </aside>
      </div>

      <section aria-labelledby="about-cta" className="container-site mt-24">
        <div className="flex flex-wrap items-end justify-between gap-8 border-t border-text pt-10">
          <div>
            <h2 id="about-cta" className="text-[32px] sm:text-[44px]">
              Have a product to design or build?
            </h2>
            <p className="mt-3 text-secondary">Open to product designer roles and freelance projects.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <PillLink href="/contact/">Get in touch</PillLink>
            <SocialLinks include={["LinkedIn", "Behance", "GitHub"]} />
          </div>
        </div>
      </section>
    </>
  );
}

function Block({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={`about-${number}`} className="mt-20">
      <h2 id={`about-${number}`} className="mb-6 text-[28px] leading-[1.15] tracking-[-0.02em]">
        <span className="mr-3 text-muted tabular-nums">{number}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
