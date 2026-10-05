import type { ReactNode } from "react";
import { hanken } from "@/components/fonts";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { RevealObserver } from "@/components/motion/reveal-observer";
import { htmlLang, type Locale } from "@/content/i18n";
import { profile, site } from "@/content/site";
import { ui } from "@/content/ui";

// Document shell shared by the English and Spanish root layouts.
export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  // Structured data so search engines can show name, role and profiles.
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: profile[locale].role,
    url: site.url,
    email: `mailto:${site.contact.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
    sameAs: [site.contact.linkedin.href, site.contact.behance.href, site.contact.github.href],
  };

  return (
    <html lang={htmlLang[locale]} className={`${hanken.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-pill focus:px-5 focus:py-3 focus:text-pill-text"
        >
          {ui[locale].skip}
        </a>
        <Header locale={locale} />
        {/* Reserves the fixed header's full height so content starts below it. */}
        <div aria-hidden className="h-[102px] shrink-0" />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} />
        <RevealObserver />
        <script
          type="application/ld+json"
          // Static, trusted data defined above.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
