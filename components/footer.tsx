import { site } from "@/content/site";

export function Footer() {
  const { email, linkedin, behance } = site.contact;

  return (
    <footer className="mt-24 border-t border-text">
      <div className="container-site flex flex-wrap items-end justify-between gap-8 pt-10 pb-16">
        <div>
          <p className="text-sm text-muted">Let&apos;s work together</p>
          <p className="mt-1 text-[28px] font-semibold tracking-[-0.02em] sm:text-[32px]">
            {site.name}
          </p>
        </div>
        <ul className="flex flex-col gap-1.5 text-[15px]">
          <li>
            <a href={`mailto:${email}`} className="font-semibold hover:text-accent">
              {email}
            </a>
          </li>
          <li>
            <a href={linkedin.href} className="hover:text-accent" rel="noopener noreferrer">
              {linkedin.label}
            </a>
          </li>
          <li>
            <a href={behance.href} className="hover:text-accent" rel="noopener noreferrer">
              {behance.label}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
