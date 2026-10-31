import type { Metadata } from "next";
import DatedRow from "@/components/shared/DatedRow";
import PageHeader from "@/components/shared/PageHeader";
import Panel from "@/components/shared/Panel";
import SectionHeader from "@/components/shared/SectionHeader";
import SlashList from "@/components/shared/SlashList";
import Toolkit from "@/components/shared/Toolkit";
import {
  certifications,
  earlierRoles,
  education,
  internship,
  testgridThemes,
} from "@/content/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work at TestGrid and earlier roles, education, certifications and toolkit.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        seed={37}
        label="Experience"
        title="Where I have worked and studied."
        lede="Six months at TestGrid so far, on top of two earlier software roles and a master's in Software Engineering."
      />

      <section className="page mt-10">
        <SectionHeader index="01" label="TestGrid Labs Inc." />
        <div className="glass rise p-6 md:p-8">
          <p className="eyebrow">May 2026 to now · Navsari, Gujarat</p>
          <h3 className="mt-3 text-xl">AI/ML Developer</h3>
          <div className="mt-6 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {testgridThemes.map((theme) => (
              <div key={theme.title}>
                <h4 className="mono-label text-muted-strong">{theme.title}</h4>
                <SlashList items={theme.items} className="mt-3 text-muted-strong" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page section">
        <SectionHeader index="02" label="Earlier role" />
        <Panel as="ol">
          {earlierRoles.map((role) => (
            <DatedRow key={role.role} label={role.date}>
              <h3 className="text-lg">{role.role}</h3>
              <p className="text-muted-strong">{role.org}</p>
              <SlashList items={role.items} className="mt-3 text-muted-strong" />
            </DatedRow>
          ))}
        </Panel>
      </section>

      <section className="page section">
        <SectionHeader index="03" label="Education and internship" />
        <Panel as="ol">
          {education.map((entry) => (
            <DatedRow key={entry.title} label={entry.date}>
              <h3 className="text-lg">{entry.title}</h3>
              <p className="text-muted-strong">
                {entry.org} · {entry.grade}
              </p>
            </DatedRow>
          ))}
          <DatedRow label={internship.date}>
            <h3 className="text-lg">{internship.role}</h3>
            <p className="text-muted-strong">{internship.org}</p>
            <SlashList items={internship.items} className="mt-3 text-muted-strong" />
          </DatedRow>
        </Panel>
      </section>

      <section className="page section">
        <SectionHeader index="04" label="Certifications and recognition" />
        <Panel>
          {certifications.map((entry) => (
            <DatedRow key={entry.title} label={entry.year ?? "Hackathon"} tight>
              <h3 className="text-md font-medium">
                {entry.href ? (
                  <a href={entry.href} className="hover:text-accent">
                    {entry.title}
                  </a>
                ) : (
                  entry.title
                )}
              </h3>
              <p className="text-muted-strong">{entry.issuer}</p>
            </DatedRow>
          ))}
        </Panel>
      </section>

      <section className="page section" aria-labelledby="toolkit">
        <SectionHeader index="05" label="Toolkit" id="toolkit" />
        <Toolkit />
      </section>
    </>
  );
}
