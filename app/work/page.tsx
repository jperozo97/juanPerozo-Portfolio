import type { Metadata } from "next";
import { ViewTransition } from "react";
import { PageTransition } from "@/components/motion/page-transition";
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
    <PageTransition>
      <PageIntro eyebrow="Work" title="Case studies">
        <p>How I decided what to build, what I designed, and what changed after it shipped.</p>
      </PageIntro>

      <section aria-label="Projects" className="container-site">
        <WorkList
          items={work}
          previews={work.map((item) => {
            const preview = <WorkPreview cover={item.cover} fallback={item.href ? "panel" : "empty"} />;
            // Same name as the cover on the case page, so it morphs into place on navigation.
            return item.slug ? (
              <ViewTransition key={item.title} name={`cover-${item.slug}`} share="morph" default="none">
                <div>{preview}</div>
              </ViewTransition>
            ) : (
              <div key={item.title}>{preview}</div>
            );
          })}
        />
      </section>
    </PageTransition>
  );
}
