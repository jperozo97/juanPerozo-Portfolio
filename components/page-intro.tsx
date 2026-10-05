import type { ReactNode } from "react";

// Shared top block for reading pages: eyebrow, H1 and a short paragraph.
export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="container-site pt-12 pb-10 sm:pt-[72px]">
      <p className="eyebrow intro-in text-accent">{eyebrow}</p>
      <h1 className="h1-display intro-rise mt-5 mb-6 max-w-[960px]">{title}</h1>
      {children && <div className="intro-in max-w-[660px] text-xl text-secondary [animation-delay:120ms]">{children}</div>}
    </section>
  );
}
