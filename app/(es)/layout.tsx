import type { ReactNode } from "react";
import { SiteShell } from "@/components/site-shell";
import { rootMetadata } from "@/lib/metadata";
import "../globals.css";

export const metadata = rootMetadata("es");

export default function Layout({ children }: { children: ReactNode }) {
  return <SiteShell locale="es">{children}</SiteShell>;
}
