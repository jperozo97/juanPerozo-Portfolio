"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NavLink } from "@/components/nav-link";
import { nav, site } from "@/content/site";

// Fixed header. Full width at the top of the page; once the page scrolls it
// contracts into a compact floating bar. A spacer in the layout reserves its
// space, so the change never shifts the page content.
export function Header() {
  const [condensed, setCondensed] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setCondensed(window.scrollY > 24);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      data-condensed={condensed}
      className="group/header pointer-events-none fixed inset-x-0 top-0 z-50 px-3 sm:px-5 lg:px-0"
    >
      <div
        className={`pointer-events-auto mx-auto flex items-center justify-between gap-4 border transition-[max-width,margin,padding,background-color,border-color,border-radius] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
          condensed
            ? "mt-3 max-w-[820px] rounded-full border-line bg-bg/80 py-1.5 pr-1.5 pl-5 backdrop-blur-md"
            : "mt-0 max-w-[1200px] rounded-none border-transparent px-2 py-7 sm:px-7 lg:px-12"
        }`}
      >
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="shrink-0 text-lg font-bold tracking-[-0.01em] transition-colors hover:text-accent"
        >
          {/* Full name on wider screens, monogram on small ones so the menu fits one row. */}
          <span className="hidden sm:inline">{site.name}</span>
          <span className="sm:hidden" aria-hidden>
            JP
          </span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-4 text-[15px] font-medium sm:gap-7">
          {nav.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
          <NavLink href="/contact/" label="Contact" variant="pill" />
        </nav>
      </div>
    </header>
  );
}
