import type { Metadata } from "next";
import { ContactView } from "@/components/views/contact-view";
import { ui } from "@/content/ui";
import { pageMetadata } from "@/lib/metadata";

const t = ui["es"].contact;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  ...pageMetadata("es", "/contact/", { title: t.metaTitle, description: t.metaDescription }),
};

export default function Page() {
  return <ContactView locale="es" />;
}
