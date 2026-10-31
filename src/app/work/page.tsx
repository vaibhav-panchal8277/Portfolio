import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";
import PipelineCover from "@/components/shared/PipelineCover";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies from my work at TestGrid.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        seed={11}
        label="Work"
        title="What I have built at TestGrid."
        lede="Production tools and testing work from my time at TestGrid. Client names and internal details are left out."
      />

      <section className="page mt-10 grid gap-4">
        {work.map((item, i) => (
          <article
            key={item.slug}
            className="glass rise grid overflow-hidden md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
          >
            <PipelineCover nodes={item.cover} />
            <div className="flex flex-col gap-3 p-6 md:p-8">
              <p className="eyebrow">
                {String(i + 1).padStart(2, "0")} · {item.eyebrow}
              </p>
              <h2 className="text-xl">
                <Link href={`/work/${item.slug}`} className="hover:text-accent">
                  {item.title}
                </Link>
              </h2>
              <p className="text-muted-strong">{item.summary}</p>
              <Link
                href={`/work/${item.slug}`}
                aria-label={`Read the case study: ${item.title}`}
                className="pill mt-2 self-start"
              >
                Read the case study
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
