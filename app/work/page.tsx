import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { WorkList } from "@/components/work/work-list";
import { WorkPreview } from "@/components/work/work-preview";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies: product decisions, process and results.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  return (
    <>
      <PageIntro eyebrow="Work" title="Case studies">
        <p>How I decided what to build, what I designed, and what changed after it shipped.</p>
      </PageIntro>

      <section aria-label="Projects" className="container-site">
        <WorkList
          items={work}
          previews={work.map((item) => (
            <WorkPreview
              key={item.title}
              cover={item.cover}
              fallback={item.href ? "panel" : "empty"}
            />
          ))}
        />
      </section>
    </>
  );
}
