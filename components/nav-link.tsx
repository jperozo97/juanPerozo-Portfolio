"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  // Static export uses trailing slashes; usePathname may or may not include one.
  const base = href.replace(/\/$/, "");
  const active = pathname === base || pathname.startsWith(`${base}/`);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className="hover:text-accent aria-[current=page]:text-accent"
    >
      {label}
    </Link>
  );
}
