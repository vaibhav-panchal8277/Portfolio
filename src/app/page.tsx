import Link from "next/link";
import Hero from "@/components/home/Hero";
import ContactLinks from "@/components/shared/ContactLinks";
import DatedRow from "@/components/shared/DatedRow";
import Panel from "@/components/shared/Panel";
import ProjectCard from "@/components/shared/ProjectCard";
import ProjectRow from "@/components/shared/ProjectRow";
import SectionHeader from "@/components/shared/SectionHeader";
import Timeline from "@/components/shared/Timeline";
import Toolkit from "@/components/shared/Toolkit";
import { capabilities } from "@/content/capabilities";
import { projects } from "@/content/projects";
import { research } from "@/content/research";
import { featuredSlugs, work } from "@/content/work";

const featured = featuredSlugs.flatMap((slug) => work.filter((item) => item.slug === slug));

function MoreLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="eyebrow mt-6 inline-block hover:text-fg">
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <>
      <Hero />

      <section className="page section">
        <SectionHeader
          index="01"
          label="What I do"
          intro="Most of my work sits where a model meets a real product. If an AI feature has to work outside the demo, that is what I want to be working on."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <li key={capability.title} className="glass rise p-6">
              <h3 className="eyebrow">{capability.title}</h3>
              <p className="mt-3 text-muted-strong">{capability.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="page section">
        <SectionHeader index="02" label="Selected work" />
        <div className="grid gap-4 lg:grid-cols-3">
          {featured.map((item) => (
            <ProjectCard key={item.slug} item={item} />
          ))}
        </div>
        <MoreLink href="/work">All work</MoreLink>
      </section>

      <section className="page section">
        <SectionHeader index="03" label="Projects" />
        <div className="grid gap-4">
          {projects.slice(0, 2).map((item, i) => (
            <ProjectRow key={item.slug} item={item} flip={i % 2 === 1} />
          ))}
        </div>
        <MoreLink href="/projects">All projects</MoreLink>
      </section>

      <section className="page section">
        <SectionHeader index="04" label="Experience" />
        <Timeline />
        <MoreLink href="/experience">Full experience</MoreLink>
      </section>

      <section className="page section">
        <SectionHeader index="05" label="Research" />
        <Panel>
          {research.map((item) => (
            <DatedRow key={item.id} label={item.status}>
              <h3 className="text-lg">
                <Link href={`/research#${item.id}`} className="hover:text-accent">
                  {item.title}
                </Link>
              </h3>
              <p className="mt-1 text-muted-strong">
                {item.metrics.map((metric) => `${metric.value} ${metric.label}`).join(" · ")}
              </p>
            </DatedRow>
          ))}
        </Panel>
        <MoreLink href="/research">All research</MoreLink>
      </section>

      <section className="page section">
        <SectionHeader index="06" label="Toolkit" />
        <Toolkit limit={3} />
        <MoreLink href="/experience#toolkit">Full toolkit</MoreLink>
      </section>

      <section className="page section">
        <SectionHeader index="07" label="Elsewhere" />
        <ContactLinks />
        <Link href="/contact" className="pill mt-6">
          Get in touch
        </Link>
      </section>
    </>
  );
}
