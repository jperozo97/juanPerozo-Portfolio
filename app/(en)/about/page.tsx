import type { Metadata } from "next";
import { AboutView } from "@/components/views/about-view";
import { ui } from "@/content/ui";
import { pageMetadata } from "@/lib/metadata";

const t = ui["en"].about;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  ...pageMetadata("en", "/about/", { title: t.metaTitle, description: t.metaDescription }),
};

export default function Page() {
  return <AboutView locale="en" />;
}
