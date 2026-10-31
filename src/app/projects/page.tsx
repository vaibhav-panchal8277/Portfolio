import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ProjectRow from "@/components/shared/ProjectRow";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal projects in multi-agent systems, RAG evaluation and machine learning.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        seed={89}
        label="Projects"
        title="Personal projects."
        lede="Things I built outside TestGrid to go deeper on agents, retrieval, evaluation and machine learning."
      />

      <section className="page mt-10 grid gap-4">
        {projects.map((item, i) => (
          <ProjectRow key={item.slug} item={item} flip={i % 2 === 1} heading="h2" />
        ))}
      </section>
    </>
  );
}
