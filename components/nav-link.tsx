"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pill =
  "inline-flex items-center rounded-full bg-pill px-[22px] py-3 text-[15px] font-semibold text-pill-text transition-opacity hover:opacity-85 aria-[current=page]:ring-2 aria-[current=page]:ring-accent aria-[current=page]:ring-offset-2 aria-[current=page]:ring-offset-bg";
const text = "hover:text-accent aria-[current=page]:text-accent";

export function NavLink({ href, label, variant = "text" }: { href: string; label: string; variant?: "text" | "pill" }) {
  const pathname = usePathname();
  // Static export uses trailing slashes; usePathname may or may not include one.
  const base = href.replace(/\/$/, "");
  const active = pathname === base || pathname.startsWith(`${base}/`);

  return (
    <Link href={href} aria-current={active ? "page" : undefined} className={variant === "pill" ? pill : text}>
      {label}
    </Link>
  );
}
