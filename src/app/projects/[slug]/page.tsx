import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/shared/CaseStudy";
import { caseStudies } from "@/content/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find((entry) => entry.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/projects/${item.slug}` },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const index = caseStudies.findIndex((entry) => entry.slug === slug);
  if (index === -1) notFound();

  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <CaseStudy
      item={caseStudies[index]}
      next={{ label: next.title, href: `/projects/${next.slug}` }}
      back={{ label: "All projects", href: "/projects" }}
    />
  );
}
