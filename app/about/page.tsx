import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { about } from "@/content/about";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: "Product Designer with 6+ years of experience across brand, web and mobile products.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title={site.statement}>
        <p>{site.headline}</p>
      </PageIntro>

      <div className="container-site grid gap-16 pb-8 lg:grid-cols-[1fr_360px] lg:gap-24">
        <section aria-label="Background" className="max-w-[660px] space-y-6">
          {about.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <h2 className="pt-8 text-[28px]">What I do best</h2>
          <ul className="space-y-3 border-l border-line pl-5">
            {about.strengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <h2 className="pt-8 text-[28px]">How I work</h2>
          <ol className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {about.process.map((step, i) => (
              <li key={step} className="border-t border-text pt-3">
                <span className="block text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-xl font-medium tracking-[-0.02em]">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="experience">
          <h2 id="experience" className="eyebrow text-muted">
            Experience
          </h2>
          <ul className="mt-4 border-t border-line">
            {about.experience.map((job) => (
              <li key={job.company} className="border-b border-line py-4">
                <p className="font-semibold">{job.company}</p>
                <p className="text-[15px] text-secondary">{job.role}</p>
                <p className="text-sm text-muted">{job.period}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
