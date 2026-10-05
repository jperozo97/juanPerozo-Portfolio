import type { ComponentType, SVGProps } from "react";
import { BehanceIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/social-icons";
import { site } from "@/content/site";

export function Footer() {
  const { email, linkedin, behance, github } = site.contact;

  const links: { label: string; href: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
    { label: `Email ${email}`, href: `mailto:${email}`, Icon: MailIcon },
    { label: "LinkedIn", href: linkedin.href, Icon: LinkedInIcon },
    { label: "Behance", href: behance.href, Icon: BehanceIcon },
    { label: "GitHub", href: github.href, Icon: GitHubIcon },
  ];

  return (
    <footer className="mt-24 border-t border-text">
      <div className="container-site flex flex-wrap items-end justify-between gap-8 pt-10 pb-16">
        <div>
          <p className="text-sm text-muted">Let&apos;s work together</p>
          <p className="mt-1 text-[28px] font-semibold tracking-[-0.02em] sm:text-[32px]">
            {site.name}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <a href={`mailto:${email}`} className="text-[15px] font-semibold hover:text-accent">
            {email}
          </a>
          <ul className="flex gap-3">
            {links.map(({ label, href, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
