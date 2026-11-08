import type { Metadata } from "next";
import Link from "next/link";
import Avatar from "@/components/shared/Avatar";
import PageHeader from "@/components/shared/PageHeader";
import ProseSection from "@/components/shared/ProseSection";

export const metadata: Metadata = {
  title: "About",
  description: "Vaibhav Panchal, AI/ML Developer at TestGrid in Navsari, Gujarat.",
  alternates: { canonical: "/about" },
};

const story = [
  {
    heading: "Where I am now",
    body: [
      "I'm Vaibhav, an AI/ML Developer at TestGrid, based in Navsari, Gujarat. I joined in May 2026 and work around CoTester, TestGrid's AI testing agent.",
      "My days are split between building and breaking. I work on the vision model that lets the agent read a screen, on the tools around it, and on testing new agent features before they ship.",
    ],
  },
  {
    heading: "How I got here",
    body: [
      "I started on the web. A React internship at INFOLABZ and then a role at Techreale, working on the Famyll healthcare platform, taught me how software gets delivered in a team.",
      "During my M.E. in Software Engineering at L.D. College of Engineering, I moved towards machine learning. That led to my research on oriented object detection and on hybrid intrusion detection, and to personal projects with LLM agents and RAG.",
    ],
  },
  {
    heading: "What I care about",
    body: [
      "Testing AI has changed how I build it. A demo only shows that something can work. What I want to know is where it stops working and whether I can measure that, which is why evaluation keeps showing up in my projects.",
    ],
  },
  {
    heading: "Outside the work",
    body: [
      "During my M.E. I mentored B.E. students in computer science subjects, and I volunteered at college tech events and coding quizzes.",
      "Away from the desk I play chess and video games, listen to music and keep exploring new technologies.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader seed={51} label="About" title="I like finding out why things break." />

      <div className="page mt-10 grid gap-10 md:grid-cols-[1fr_auto]">
        <div className="grid max-w-[68ch] gap-10">
          {story.map((section) => (
            <ProseSection key={section.heading} {...section} />
          ))}

          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="pill">
              Get in touch
            </Link>
            <Link href="/experience" className="pill">
              Full experience
            </Link>
            <Link href="/work" className="pill">
              Selected work
            </Link>
          </div>
        </div>

        <div className="order-first md:order-none">
          <Avatar size={160} />
        </div>
      </div>
    </>
  );
}
