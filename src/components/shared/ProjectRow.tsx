import Link from "next/link";
import type { Project } from "@/content/projects";
import PipelineCover from "./PipelineCover";
import SlashList from "./SlashList";

export default function ProjectRow({
  item,
  flip = false,
  heading: Heading = "h3",
}: {
  item: Project;
  flip?: boolean;
  heading?: "h2" | "h3";
}) {
  const caseStudy = item.sections ? `/projects/${item.slug}` : null;

  return (
    <article className="glass rise grid overflow-hidden lg:grid-cols-2">
      <div className={flip ? "lg:order-last" : undefined}>
        <PipelineCover nodes={item.cover} fill />
      </div>

      <div className="flex flex-col gap-3 p-6 md:p-8">
        <p className="eyebrow">{item.eyebrow}</p>
        <Heading className="text-xl">
          {caseStudy ? (
            <Link href={caseStudy} className="hover:text-accent">
              {item.title}
            </Link>
          ) : (
            item.title
          )}
        </Heading>
        <p className="text-accent">Problem: {item.problem}</p>
        <p className="text-muted-strong">{item.summary}</p>
        <SlashList items={item.bullets} className="mt-1 text-sm text-muted-strong" />
        <ul className="mt-2 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>

        {(caseStudy || item.repo || item.live) && (
          <div className="mt-3 flex flex-wrap gap-3">
            {caseStudy && (
              <Link
                href={caseStudy}
                aria-label={`Read the case study: ${item.title}`}
                className="pill"
              >
                Read the case study
              </Link>
            )}
            {item.live && (
              <a href={item.live} className="pill">
                Live demo
              </a>
            )}
            {item.repo && (
              <a href={item.repo} className="pill">
                Source on GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
