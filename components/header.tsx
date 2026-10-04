import Link from "next/link";
import { NavLink } from "@/components/nav-link";
import { PillLink } from "@/components/pill-link";
import { nav, site } from "@/content/site";

export function Header() {
  return (
    <header className="container-site flex flex-wrap items-center justify-between gap-4 py-7">
      <Link href="/" className="text-lg font-bold tracking-[-0.01em] hover:text-accent">
        {site.name}
      </Link>
      <nav aria-label="Main" className="flex items-center gap-6 text-[15px] font-medium sm:gap-7">
        {nav.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} />
        ))}
        <PillLink href="/contact/">Contact</PillLink>
      </nav>
    </header>
  );
}
