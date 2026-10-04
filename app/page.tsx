import Link from "next/link";
import { PillLink } from "@/components/pill-link";
import { site } from "@/content/site";
import { work } from "@/content/work";

// Phase 1 placeholder home. The hero lives in components/hero/ from phase 3.
export default function Home() {
  return (
    <>
      <section className="container-site pt-12 pb-20 sm:pt-[72px]">
        <p className="eyebrow text-accent">{site.role}</p>
        <h1 className="h1-display mt-5 mb-6 max-w-[960px]">{site.statement}</h1>
        <p className="max-w-[660px] text-xl text-secondary">{site.subline}</p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <PillLink href="/work/">See my work</PillLink>
          <Link href="/about/" className="text-[15px] font-medium hover:text-accent">
            About me →
          </Link>
        </div>
      </section>

      <section aria-labelledby="selected-work" className="container-site">
        <h2 id="selected-work" className="eyebrow text-muted">
          Selected work
        </h2>
        <ul className="mt-6 border-t border-line">
          {work.map((item) => (
            <li key={item.title} className="border-b border-line">
              <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 py-6">
                <span className="text-2xl font-semibold tracking-[-0.02em]">{item.title}</span>
                <span className="text-[15px] text-muted">{item.year}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
