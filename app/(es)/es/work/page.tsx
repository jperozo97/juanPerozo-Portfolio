import type { Metadata } from "next";
import { WorkView } from "@/components/views/work-view";
import { ui } from "@/content/ui";
import { pageMetadata } from "@/lib/metadata";

const t = ui["es"].work;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  ...pageMetadata("es", "/work/", { title: t.metaTitle, description: t.metaDescription }),
};

export default function Page() {
  return <WorkView locale="es" />;
}
