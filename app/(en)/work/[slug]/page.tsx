import type { Metadata } from "next";
import { CaseView } from "@/components/views/case-view";
import { caseSlugs, getCase } from "@/content/cases";
import { pageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCase("en", slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    ...pageMetadata("en", `/work/${study.slug}/`, { title: study.headline, description: study.summary, type: "article" }),
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <CaseView locale="en" slug={slug} />;
}
