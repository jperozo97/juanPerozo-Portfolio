import Link from "next/link";
import type { CSSProperties } from "react";
import { Hero } from "@/components/hero/hero";
import { Arrow } from "@/components/motion/arrow";
import { PageTransition } from "@/components/motion/page-transition";
import { work } from "@/content/work";

export default function Home() {
  return (
    <PageTransition>
      <Hero />

      <section aria-labelledby="selected-work" className="container-site pt-20">
        <h2 id="selected-work" className="eyebrow text-muted" data-reveal>
          Selected work
        </h2>
        <ul className="mt-6 border-t border-line">
          {work.map((item, i) => (
            <li
              key={item.title}
              className="border-b border-line"
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
            >
              {item.href ? (
                <Link href={item.href} className="group block">
                  <WorkRow title={item.title} summary={item.summary} year={item.year} linked />
                </Link>
              ) : (
                <WorkRow title={item.title} summary={item.summary} year={item.year} />
              )}
            </li>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
}

function WorkRow({ title, summary, year, linked }: { title: string; summary: string; year: string; linked?: boolean }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 py-6">
      <div className="transition-transform duration-500 ease-out group-hover:translate-x-2">
        <span className="text-2xl font-semibold tracking-[-0.02em] transition-colors group-hover:text-accent">
          {title} {linked && <Arrow />}
        </span>
        <p className="mt-1 text-secondary">{summary}</p>
      </div>
      <span className="text-[15px] text-muted">{year}</span>
    </div>
  );
}
