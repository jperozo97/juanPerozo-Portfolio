import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { NotFoundView } from "@/components/views/not-found-view";
import "./globals.css";

// 404 for URLs that match no route. The app has one root layout per language,
// so there is no shared layout to build this from.
export const metadata: Metadata = { title: "404 — Juan Perozo" };

export default function GlobalNotFound() {
  return (
    <SiteShell locale="en">
      <NotFoundView locale="en" />
    </SiteShell>
  );
}
