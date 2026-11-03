import type { Metadata } from "next";
import DatedRow from "@/components/shared/DatedRow";
import PageHeader from "@/components/shared/PageHeader";
import Panel from "@/components/shared/Panel";
import PipelineStrip from "@/components/shared/PipelineStrip";
import SectionHeader from "@/components/shared/SectionHeader";
import SlashList from "@/components/shared/SlashList";
import { research } from "@/content/research";
import { site } from "@/content/site";
import { posts } from "@/content/writing";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research in oriented object detection and hybrid intrusion detection, plus writing on AI agents.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        seed={23}
        label="Research"
        title="Research in vision and security."
        lede="Two projects from my M.E. at L.D. College of Engineering: one on detecting small objects from above, one on detecting attacks in network traffic."
      />

      <section className="page mt-10 grid gap-4">
        {research.map((item) => (
          <article key={item.id} id={item.id} className="glass rise scroll-mt-24 p-6 md:p-8">
            <p className="eyebrow">
              {item.area} · {item.status}
            </p>
            <h2 className="mt-3 max-w-[32ch] text-xl">{item.title}</h2>
            <p className="mt-1 text-muted">{item.subtitle}</p>
            <p className="prose-text mt-4 max-w-[68ch]">{item.summary}</p>

            <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
              {item.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col-reverse gap-1">
                  <dt className="mono-label">{metric.label}</dt>
                  <dd className="stat-number">{metric.value}</dd>
                </div>
              ))}
            </dl>

            <SlashList items={item.highlights} className="mt-6 text-muted-strong" />

            <div className="mt-6 border-t pt-5">
              <PipelineStrip steps={item.method} />
            </div>

            {item.repo && (
              <a href={item.repo} className="pill mt-6">
                Source on GitHub
              </a>
            )}
          </article>
        ))}
      </section>

      <section id="writing" className="page section scroll-mt-24">
        <SectionHeader
          index="01"
          label="Writing"
          intro="Notes on building and testing AI systems, on Medium."
        />
        <Panel>
          {posts.map((post) => (
            <DatedRow key={post.url} label={post.date}>
              <h3 className="text-lg">
                <a href={post.url} className="hover:text-accent">
                  {post.title}
                </a>
              </h3>
              <p className="mt-1 max-w-[68ch] text-muted-strong">{post.summary}</p>
            </DatedRow>
          ))}
        </Panel>
        <a href={site.blog} className="pill mt-6">
          All posts on Medium
        </a>
      </section>
    </>
  );
}
