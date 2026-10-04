import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about a product designer role or a freelance project.",
};

export default function ContactPage() {
  const { email, linkedin, behance } = site.contact;

  return (
    <>
      <PageIntro eyebrow="Contact" title="Let's build something worth using">
        <p>
          Open to product designer roles, and to freelance work: landing pages, admin panels and
          MVPs.
        </p>
      </PageIntro>

      <section aria-label="Contact details" className="container-site">
        <a
          href={`mailto:${email}`}
          className="inline-block border-b-2 border-text pb-1 text-[28px] font-semibold tracking-[-0.02em] break-all hover:border-accent hover:text-accent sm:text-[44px]"
        >
          {email}
        </a>
        <ul className="mt-12 grid max-w-[660px] gap-0 border-t border-line sm:grid-cols-2 sm:gap-x-12">
          <li className="border-b border-line py-5">
            <p className="text-sm text-muted">LinkedIn</p>
            <a href={linkedin.href} className="font-medium hover:text-accent" rel="noopener noreferrer">
              {linkedin.label}
            </a>
          </li>
          <li className="border-b border-line py-5">
            <p className="text-sm text-muted">Behance</p>
            <a href={behance.href} className="font-medium hover:text-accent" rel="noopener noreferrer">
              {behance.label}
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
