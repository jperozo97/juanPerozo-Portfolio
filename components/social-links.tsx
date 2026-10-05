import type { ComponentType, SVGProps } from "react";
import { BehanceIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/social-icons";
import { site } from "@/content/site";

type Social = { label: string; href: string; Icon: ComponentType<SVGProps<SVGSVGElement>> };

const { email, linkedin, behance, github } = site.contact;

export const socials: Social[] = [
  { label: `Email ${email}`, href: `mailto:${email}`, Icon: MailIcon },
  { label: "LinkedIn", href: linkedin.href, Icon: LinkedInIcon },
  { label: "Behance", href: behance.href, Icon: BehanceIcon },
  { label: "GitHub", href: github.href, Icon: GitHubIcon },
];

// Round icon buttons for email and social profiles.
export function SocialLinks({ include, className = "" }: { include?: string[]; className?: string }) {
  const items = include ? socials.filter((s) => include.some((name) => s.label.startsWith(name))) : socials;

  return (
    <ul className={`flex gap-3 ${className}`}>
      {items.map(({ label, href, Icon }) => (
        <li key={href}>
          <a
            href={href}
            aria-label={label}
            title={label}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="grid size-11 place-items-center rounded-full border border-line transition-[color,background-color,border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-pill hover:bg-pill hover:text-pill-text"
          >
            <Icon className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
