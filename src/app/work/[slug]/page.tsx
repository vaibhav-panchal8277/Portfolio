import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/shared/CaseStudy";
import { work } from "@/content/work";

export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = work.find((entry) => entry.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/work/${item.slug}` },
  };
}

export default async function WorkCaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const index = work.findIndex((entry) => entry.slug === slug);
  if (index === -1) notFound();

  const next = work[(index + 1) % work.length];

  return (
    <CaseStudy
      item={work[index]}
      next={{ label: next.title, href: `/work/${next.slug}` }}
      back={{ label: "All work", href: "/work" }}
    />
  );
}
