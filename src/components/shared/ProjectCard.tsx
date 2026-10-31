import Link from "next/link";
import type { WorkItem } from "@/content/work";
import PipelineCover from "./PipelineCover";
import SlashList from "./SlashList";

export default function ProjectCard({ item }: { item: WorkItem }) {
  return (
    <article className="glass rise flex flex-col overflow-hidden transition-colors hover:border-[color-mix(in_srgb,var(--color-accent)_45%,transparent)]">
      <PipelineCover nodes={item.cover} />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="eyebrow">{item.eyebrow}</p>
        <h3 className="text-xl">
          <Link href={`/work/${item.slug}`} className="hover:text-accent">
            {item.title}
          </Link>
        </h3>
        <p className="text-muted-strong">{item.summary}</p>
        <SlashList items={item.bullets} className="mt-1 mb-5 text-sm text-muted-strong" />
        <Link
          href={`/work/${item.slug}`}
          aria-label={`Read the case study: ${item.title}`}
          className="pill mt-auto self-start"
        >
          Read the case study
        </Link>
      </div>
    </article>
  );
}
