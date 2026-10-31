import Link from "next/link";
import type { WorkItem } from "@/content/work";
import PipelineStrip from "./PipelineStrip";
import ProseSection from "./ProseSection";
import SlashList from "./SlashList";

type PageLink = { label: string; href: string };

export default function CaseStudy({
  item,
  next,
  back,
}: {
  item: WorkItem;
  next: PageLink;
  back: PageLink;
}) {
  return (
    <article className="page pt-12">
      <header className="max-w-[46rem]">
        <p className="eyebrow">{item.eyebrow}</p>
        <h1 className="display-text mt-3 text-3xl">{item.title}</h1>
        <p className="mt-5 text-lg text-muted-strong">{item.summary}</p>
        <SlashList items={item.bullets} className="mt-5 text-muted-strong" />
        <ul className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <div className="glass mt-8 px-6 py-5">
        <PipelineStrip steps={item.cover.map((node) => node.label)} />
      </div>

      <div className="mt-12 grid max-w-[68ch] gap-10">
        {item.sections.map((section) => (
          <ProseSection key={section.heading} {...section} />
        ))}
      </div>

      {(item.repo || item.live) && (
        <div className="mt-10 flex flex-wrap gap-3">
          {item.repo && (
            <a href={item.repo} className="pill">
              Source on GitHub
            </a>
          )}
          {item.live && (
            <a href={item.live} className="pill">
              Live site
            </a>
          )}
        </div>
      )}

      <nav
        aria-label="Case studies"
        className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-6"
      >
        <Link href={next.href} className="group min-w-0">
          <span className="mono-label block">Next</span>
          <span className="text-lg font-semibold group-hover:text-accent">{next.label}</span>
        </Link>
        <Link href={back.href} className="eyebrow hover:text-fg">
          {back.label}
        </Link>
      </nav>
    </article>
  );
}
