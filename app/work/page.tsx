import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies: product decisions, process and results.",
};

// Phase 1 shell. Phase 2 adds the hover image list and case-study pages.
export default function WorkPage() {
  return (
    <>
      <PageIntro eyebrow="Work" title="Case studies">
        <p>How I decided what to build, what I designed, and what changed after it shipped.</p>
      </PageIntro>

      <section aria-label="Projects" className="container-site">
        <ol className="border-t border-line">
          {work.map((item, i) => (
            <li key={item.title} className="border-b border-line">
              <div className="grid gap-2 py-8 sm:grid-cols-[64px_1fr_auto] sm:items-baseline sm:gap-8">
                <span className="text-[15px] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="text-[28px] sm:text-[32px]">{item.title}</h2>
                  <p className="mt-3 max-w-[620px] text-secondary">{item.summary}</p>
                </div>
                <span className="text-[15px] text-muted">{item.year}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
