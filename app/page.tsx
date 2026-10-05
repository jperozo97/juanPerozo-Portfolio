import Link from "next/link";
import { Hero } from "@/components/hero/hero";
import { work } from "@/content/work";

export default function Home() {
  return (
    <>
      <Hero />

      <section aria-labelledby="selected-work" className="container-site pt-20">
        <h2 id="selected-work" className="eyebrow text-muted">
          Selected work
        </h2>
        <ul className="mt-6 border-t border-line">
          {work.map((item) => (
            <li key={item.title} className="border-b border-line">
              {item.href ? (
                <Link href={item.href} className="group block">
                  <WorkRow title={`${item.title} →`} summary={item.summary} year={item.year} />
                </Link>
              ) : (
                <WorkRow title={item.title} summary={item.summary} year={item.year} />
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function WorkRow({ title, summary, year }: { title: string; summary: string; year: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 py-6">
      <div>
        <span className="text-2xl font-semibold tracking-[-0.02em] group-hover:text-accent">{title}</span>
        <p className="mt-1 text-secondary">{summary}</p>
      </div>
      <span className="text-[15px] text-muted">{year}</span>
    </div>
  );
}
