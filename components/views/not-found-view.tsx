import { PageTransition } from "@/components/motion/page-transition";
import { PageIntro } from "@/components/page-intro";
import { PillLink } from "@/components/pill-link";
import { localePath, type Locale } from "@/content/i18n";
import { ui } from "@/content/ui";

export function NotFoundView({ locale }: { locale: Locale }) {
  const t = ui[locale].notFound;
  return (
    <PageTransition>
      <PageIntro eyebrow="404" title={t.title}>
        <p>{t.body}</p>
        <div className="mt-10">
          <PillLink href={localePath(locale, "/")}>{t.back}</PillLink>
        </div>
      </PageIntro>
    </PageTransition>
  );
}
