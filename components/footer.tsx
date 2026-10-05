import { SocialLinks } from "@/components/social-links";
import type { Locale } from "@/content/i18n";
import { profile, site } from "@/content/site";
import { ui } from "@/content/ui";

export function Footer({ locale }: { locale: Locale }) {
  const { email } = site.contact;

  return (
    <footer className="mt-24 border-t border-text">
      <div className="container-site flex flex-wrap items-end justify-between gap-8 pt-10 pb-16">
        <div>
          <p className="text-sm text-muted">{ui[locale].footer.together}</p>
          <p className="mt-1 text-[28px] font-semibold tracking-[-0.02em] sm:text-[32px]">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{profile[locale].location}</p>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <a href={`mailto:${email}`} className="link-underline text-[15px] font-semibold hover:text-accent">
            {email}
          </a>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
