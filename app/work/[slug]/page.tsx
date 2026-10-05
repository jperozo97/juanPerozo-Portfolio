import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { CaseFigure } from "@/components/case/case-figure";
import { CaseIndex, type IndexItem } from "@/components/case/case-index";
import { PanelMock } from "@/components/case/panel-mock";
import { cases, getCase, getNextCase, type CaseStudy } from "@/content/cases";

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCase(slug);
  if (!study) return {};
  return { title: study.title, description: study.summary };
}

const sections: IndexItem[] = [
  { id: "at-a-glance", label: "At a glance" },
  { id: "the-problem", label: "The problem" },
  { id: "what-i-found", label: "What I found" },
  { id: "decisions", label: "Decisions" },
  { id: "results", label: "Results" },
];

export default async function CasePage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCase(slug);
  if (!study) notFound();
  const next = getNextCase(slug);

  return (
    <article>
      <header className="container-site pt-12 pb-10 sm:pt-[72px]">
        <p className="eyebrow text-accent">{study.eyebrow}</p>
        <h1 className="h1-display mt-5 mb-6 max-w-[960px]">{study.headline}</h1>
        <p className="max-w-[660px] text-xl text-secondary">{study.intro}</p>
      </header>

      <dl className="container-site grid gap-x-12 pb-16 sm:grid-cols-3 sm:pb-[72px]">
        {study.metrics.map((m) => (
          <div key={m.label} className="mt-6 flex flex-col-reverse border-t border-text pt-4">
            <dt className="text-sm text-muted">{m.label}</dt>
            <dd className="text-[36px] leading-[1.15] font-medium tracking-[-0.03em] sm:text-[44px]">
              {m.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="container-site grid grid-cols-[minmax(0,1fr)] gap-x-[72px] pb-24 lg:grid-cols-[200px_minmax(0,1fr)]">
        <CaseIndex items={sections} variant="bar" />

        <aside className="hidden lg:block">
          <div className="sticky top-8">
            <CaseIndex items={sections} variant="side" />
            <Facts study={study} className="mt-8 flex flex-col gap-3.5" />
          </div>
        </aside>

        <div className="min-w-0">
          <Facts study={study} className="grid grid-cols-2 gap-4 py-8 lg:hidden" />

          <Section id="at-a-glance" number={0} label="At a glance">
            <dl className="flex flex-col gap-[18px]">
              <GlanceRow term="The problem">{study.glance.problem}</GlanceRow>
              <GlanceRow term="What I did">{study.glance.whatIDid}</GlanceRow>
              <GlanceRow term="The result">{study.glance.result}</GlanceRow>
            </dl>
          </Section>

          <div className="mb-12">
            {study.cover ? (
              <CaseFigure image={study.cover} />
            ) : (
              <figure>
                <PanelMock />
                <figcaption className="mt-3 text-sm text-muted">
                  Illustrative panel UI with sample data. [Replace with real screenshots]
                </figcaption>
              </figure>
            )}
          </div>

          <Section id="the-problem" number={1} label="The problem">
            <h2 className="mb-4 max-w-[700px] text-[28px] leading-[1.15] tracking-[-0.02em] sm:text-[32px]">
              {study.problem.heading}
            </h2>
            <Prose paragraphs={study.problem.body} />
          </Section>

          <Section id="what-i-found" number={2} label="What I found">
            <ul className="flex max-w-[640px] flex-col gap-4">
              {study.findings.map((f) => (
                <li key={f.title}>
                  <p className="font-bold">{f.title}</p>
                  <p className="text-secondary">{f.body}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="decisions" number={3} label="Decisions">
            <ol className="flex flex-col gap-14">
              {study.decisions.map((d, i) => (
                <li key={d.title}>
                  <p className="text-sm font-bold text-accent">Decision {i + 1}</p>
                  <h3 className="mt-1.5 mb-2.5 text-[24px] leading-[1.2] tracking-[-0.02em] sm:text-[26px]">
                    {d.title}
                  </h3>
                  <p className="mb-2 max-w-[640px] text-secondary">{d.body}</p>
                  <p className="max-w-[640px] text-muted italic">{d.why}</p>
                  {(d.before || d.after) && (
                    <div className={`mt-6 grid gap-6 ${d.before && d.after ? "md:grid-cols-2" : ""}`}>
                      {d.before && <CaseFigure image={d.before} label="Before" />}
                      {d.after && <CaseFigure image={d.after} label="After" />}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </Section>

          <Section id="results" number={4} label="Results">
            <h2 className="mb-4 max-w-[700px] text-[28px] leading-[1.15] tracking-[-0.02em] sm:text-[32px]">
              {study.results.heading}
            </h2>
            <Prose paragraphs={study.results.body} />
            {study.results.next && (
              <p className="mt-3 max-w-[640px] text-muted italic">{study.results.next}</p>
            )}
          </Section>
        </div>
      </div>

      <nav aria-label="More work" className="border-t border-text">
        <div className="container-site py-10">
          {next ? (
            <Link href={`/work/${next.slug}/`} className="group inline-block">
              <span className="block text-sm text-muted">Next case</span>
              <span className="text-[28px] font-semibold tracking-[-0.02em] group-hover:text-accent sm:text-[32px]">
                {next.title} →
              </span>
            </Link>
          ) : (
            <Link href="/work/" className="group inline-block">
              <span className="block text-sm text-muted">More work</span>
              <span className="text-[28px] font-semibold tracking-[-0.02em] group-hover:text-accent sm:text-[32px]">
                All case studies →
              </span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}

function Section({
  id,
  number,
  label,
  children,
}: {
  id: string;
  number: number;
  label: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-label`}
      className="scroll-mt-16 border-t border-line pt-8 pb-12 lg:scroll-mt-8"
    >
      <p id={`${id}-label`} className="eyebrow mb-5 text-muted">
        {String(number).padStart(2, "0")} · {label}
      </p>
      {children}
    </section>
  );
}

function GlanceRow({ term, children }: { term: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-1.5">
      <dt className="flex-[0_0_120px] text-[15px] text-muted">{term}</dt>
      <dd className="flex-[1_1_320px] font-semibold">{children}</dd>
    </div>
  );
}

function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex max-w-[640px] flex-col gap-4 text-secondary">
      {paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

function Facts({ study, className }: { study: CaseStudy; className: string }) {
  return (
    <dl className={`text-sm ${className}`}>
      {study.facts.map((f) => (
        <div key={f.label}>
          <dt className="text-muted">{f.label}</dt>
          <dd className="font-semibold">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
