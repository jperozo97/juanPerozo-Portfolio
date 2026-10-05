import { SocialLinks } from "@/components/social-links";
import { site } from "@/content/site";

export function Footer() {
  const { email } = site.contact;

  return (
    <footer className="mt-24 border-t border-text">
      <div className="container-site flex flex-wrap items-end justify-between gap-8 pt-10 pb-16">
        <div>
          <p className="text-sm text-muted">Let&apos;s work together</p>
          <p className="mt-1 text-[28px] font-semibold tracking-[-0.02em] sm:text-[32px]">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-muted">{site.location}</p>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <a href={`mailto:${email}`} className="text-[15px] font-semibold hover:text-accent">
            {email}
          </a>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
