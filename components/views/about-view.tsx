import type { CSSProperties, ReactNode } from "react";
import { PageTransition } from "@/components/motion/page-transition";
import { PageIntro } from "@/components/page-intro";
import { PillLink } from "@/components/pill-link";
import { SocialLinks } from "@/components/social-links";
import { about, aboutPhoto } from "@/content/about";
import { localePath, type Locale } from "@/content/i18n";
import { profile } from "@/content/site";
import { ui } from "@/content/ui";

export function AboutView({ locale }: { locale: Locale }) {
  const a = about[locale];
  const t = ui[locale].about;
  return (
    <PageTransition>
      <PageIntro eyebrow={t.eyebrow} title={a.headline}>
        <p>{profile[locale].headline}</p>
        <p className="mt-2 text-[17px] text-muted">{profile[locale].location}</p>
      </PageIntro>

      <div className="container-site grid gap-16 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-24">
        <div className="min-w-0">
          <section aria-label={t.background} className="max-w-[660px] space-y-6 text-[18px]">
            {a.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <Block number="01" title={t.blocks.strengths}>
            <ol className="grid gap-x-10 sm:grid-cols-2">
              {a.strengths.map((s, i) => (
                <li key={s} className="border-t border-line py-5" data-reveal style={delay(i)}>
                  <span className="text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-1.5 font-medium">{s}</p>
                </li>
              ))}
            </ol>
          </Block>

          <Block number="02" title={t.blocks.process}>
            <ol className="grid gap-x-6 gap-y-6 sm:grid-cols-4">
              {a.process.map((step, i) => (
                <li key={step} className="border-t border-text pt-3" data-reveal style={delay(i)}>
                  <span className="block text-sm text-muted">{t.step} {i + 1}</span>
                  <span className="text-xl leading-[1.2] font-medium tracking-[-0.02em]">{step}</span>
                </li>
              ))}
            </ol>
          </Block>

          <Block number="03" title={t.blocks.tools}>
            <ul className="flex flex-wrap gap-2.5">
              {a.tools.map((tool, i) => (
                <li
                  key={tool}
                  className="rounded-full border border-line px-4 py-2 text-[15px] font-medium transition-colors duration-300 hover:border-text"
                  data-reveal
                  style={delay(i)}
                >
                  {tool}
                </li>
              ))}
            </ul>
          </Block>
        </div>

        <aside className="flex flex-col gap-12">
          {aboutPhoto && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={aboutPhoto.src}
              alt={aboutPhoto.alt[locale]}
              className="aspect-[4/5] w-full rounded-2xl object-cover"
            />
          )}

          <section aria-labelledby="experience">
            <h2 id="experience" className="eyebrow text-muted">
              {t.blocks.experience}
            </h2>
            <ol className="mt-4 border-t border-line">
              {a.experience.map((job, i) => (
                <li key={job.company} className="border-b border-line py-4" data-reveal style={delay(i)}>
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
        <div className="flex flex-wrap items-end justify-between gap-8 border-t border-text pt-10" data-reveal>
          <div>
            <h2 id="about-cta" className="text-[32px] sm:text-[44px]">
              {t.cta.title}
            </h2>
            <p className="mt-3 text-secondary">{t.cta.body}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <PillLink href={localePath(locale, "/contact/")}>{t.cta.button}</PillLink>
            <SocialLinks include={["LinkedIn", "Behance", "GitHub"]} />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function Block({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={`about-${number}`} className="mt-20">
      <h2 id={`about-${number}`} data-reveal className="mb-6 text-[28px] leading-[1.15] tracking-[-0.02em]">
        <span className="mr-3 text-muted tabular-nums">{number}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function delay(i: number) {
  return { "--reveal-delay": `${i * 80}ms` } as CSSProperties;
}
