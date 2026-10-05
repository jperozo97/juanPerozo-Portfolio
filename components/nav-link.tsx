"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pill =
  "inline-flex items-center rounded-full bg-pill px-[22px] py-3 text-[15px] transition-[padding,transform,opacity] group-data-[condensed=true]/header:px-5 group-data-[condensed=true]/header:py-2 font-semibold text-pill-text duration-300 ease-out hover:-translate-y-0.5 hover:opacity-90 active:translate-y-0 active:scale-[0.98] aria-[current=page]:ring-2 aria-[current=page]:ring-accent aria-[current=page]:ring-offset-2 aria-[current=page]:ring-offset-bg";
const text = "link-underline pb-0.5 hover:text-accent aria-[current=page]:text-accent";

export function NavLink({ href, label, variant = "text" }: { href: string; label: string; variant?: "text" | "pill" }) {
  const pathname = usePathname();
  // Static export uses trailing slashes; usePathname may or may not include one.
  const base = href.replace(/\/$/, "");
  // Home is only active on the home page itself; other links also match their subpages.
  const active = href === "/" ? pathname === "/" : pathname === base || pathname.startsWith(`${base}/`);

  return (
    <Link href={href} aria-current={active ? "page" : undefined} className={variant === "pill" ? pill : text}>
      {label}
    </Link>
  );
}
