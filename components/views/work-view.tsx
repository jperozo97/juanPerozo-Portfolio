import { ViewTransition } from "react";
import { PageTransition } from "@/components/motion/page-transition";
import { PageIntro } from "@/components/page-intro";
import { WorkList } from "@/components/work/work-list";
import { WorkPreview } from "@/components/work/work-preview";
import type { Locale } from "@/content/i18n";
import { ui } from "@/content/ui";
import { getWork } from "@/content/work";

export function WorkView({ locale }: { locale: Locale }) {
  const work = getWork(locale);
  const t = ui[locale].work;

  return (
    <PageTransition>
      <PageIntro eyebrow={t.eyebrow} title={t.title}>
        <p>{t.intro}</p>
      </PageIntro>

      <section aria-label={t.projects} className="container-site">
        <WorkList
          items={work}
          previews={work.map((item) => {
            const preview = <WorkPreview cover={item.cover} fallback={item.href ? "panel" : "empty"} locale={locale} />;
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
