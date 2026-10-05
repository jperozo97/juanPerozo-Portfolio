"use client";

import { useEffect, useRef, useState } from "react";

export type IndexItem = { id: string; label: string };

// Numbered section index. Sticky side list on desktop, sticky horizontal bar on mobile.
// Highlights the section currently in view.
export function CaseIndex({ items, variant }: { items: IndexItem[]; variant: "side" | "bar" }) {
  const [active, setActive] = useState(items[0]?.id);
  const barRef = useRef<HTMLOListElement>(null);

  // Keep the active item visible in the horizontal bar without moving the page.
  useEffect(() => {
    const bar = barRef.current;
    const link = bar?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!bar || !link) return;
    const left = link.offsetLeft - (bar.clientWidth - link.offsetWidth) / 2;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    bar.scrollTo({ left, behavior: smooth ? "smooth" : "auto" });
  }, [active]);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    // A section is active while it crosses a thin band near the top third of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  const links = items.map((item, i) => {
    const isActive = item.id === active;
    return (
      <li key={item.id} className="relative shrink-0">
        {/* Active marker: slides in on the side list, underlines in the mobile bar. */}
        <span
          aria-hidden
          className={`absolute bg-text transition-transform duration-500 ease-out ${
            variant === "side"
              ? "top-0 -left-[17px] h-full w-0.5 origin-top"
              : "right-3 bottom-0 left-3 h-0.5 origin-left"
          } ${isActive ? "scale-100" : variant === "side" ? "scale-y-0" : "scale-x-0"}`}
        />
        <a
          href={`#${item.id}`}
          aria-current={isActive ? "location" : undefined}
          className={`block font-medium transition-colors duration-300 hover:text-accent ${
            isActive ? "text-text" : "text-muted"
          } ${variant === "bar" ? "px-3 py-3" : ""}`}
        >
          <span className="tabular-nums">{String(i).padStart(2, "0")}</span>
          <span className="ml-2">{item.label}</span>
        </a>
      </li>
    );
  });

  if (variant === "bar") {
    return (
      <nav
        aria-label="Case study sections"
        className="sticky top-16 z-10 -mx-5 border-b border-line bg-bg/95 backdrop-blur md:-mx-12 lg:hidden"
      >
        <ol ref={barRef} className="relative flex overflow-x-auto px-2 text-[14px] [scrollbar-width:none] md:px-9">{links}</ol>
      </nav>
    );
  }

  return (
    <nav aria-label="Case study sections">
      <ol className="flex flex-col gap-2.5 border-l border-line pl-4 text-[15px]">{links}</ol>
    </nav>
  );
}
