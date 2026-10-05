import type { CSSProperties } from "react";
import { CopyEmail } from "@/components/copy-email";
import { Arrow } from "@/components/motion/arrow";
import { PageTransition } from "@/components/motion/page-transition";
import { PageIntro } from "@/components/page-intro";
import { SocialLinks } from "@/components/social-links";
import type { Locale } from "@/content/i18n";
import { profile, site } from "@/content/site";
import { ui } from "@/content/ui";

export function ContactView({ locale }: { locale: Locale }) {
  const { email } = site.contact;
  const t = ui[locale].contact;

  return (
    <PageTransition>
      <PageIntro eyebrow={t.eyebrow} title={t.title}>
        <p>{t.intro}</p>
        <p className="mt-2 text-[17px] text-muted">{profile[locale].location}</p>
      </PageIntro>

      <section aria-label={t.emailLabel} className="container-site">
        <a
          href={`mailto:${email}`}
          className="inline-block border-b-2 border-text pb-1 text-[28px] font-semibold tracking-[-0.02em] break-all hover:border-accent hover:text-accent sm:text-[44px]"
        >
          {email}
        </a>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <CopyEmail email={email} labels={{ copy: t.copy, copied: t.copied }} />
          <SocialLinks include={["LinkedIn", "Behance", "GitHub"]} />
        </div>
      </section>

      <section aria-label={t.pathsLabel} className="container-site mt-20">
        <ul className="grid gap-6 md:grid-cols-2">
          {t.paths.map((p, i) => (
            <li
              key={p.eyebrow}
              className="flex flex-col rounded-2xl border border-line p-7 transition-[border-color,transform] duration-500 ease-out hover:-translate-y-1 hover:border-text sm:p-9"
              data-reveal
              style={{ "--reveal-delay": `${i * 100}ms` } as CSSProperties}
            >
              <p className="eyebrow text-accent">{p.eyebrow}</p>
              <h2 className="mt-4 text-[26px] leading-[1.15] tracking-[-0.02em] sm:text-[30px]">{p.title}</h2>
              <p className="mt-3 mb-8 text-secondary">{p.body}</p>
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(p.subject)}`}
                className="group mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-pill px-[22px] py-3 text-[15px] font-semibold text-pill-text transition-[transform,opacity] duration-300 ease-out hover:opacity-90 active:scale-[0.98]"
              >
                {p.cta} <Arrow />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
}
