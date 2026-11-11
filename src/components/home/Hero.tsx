import Link from "next/link";
import {
  Cable,
  DatabaseZap,
  FlaskConical,
  MousePointerClick,
  Network,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";
import Avatar from "@/components/shared/Avatar";
import Scene from "@/components/shared/Scene";
import { site, stats } from "@/content/site";

const tiles: { href: string; label: string; icon: LucideIcon; tilt: string; place: string }[] = [
  { href: "/work/ui-element-vision", label: "Vision model", icon: ScanSearch, tilt: "-8deg", place: "lg:top-[14%] lg:left-[9%]" },
  { href: "/work/device-tunnel", label: "Device tunnel", icon: Cable, tilt: "7deg", place: "lg:top-[45%] lg:left-[4%]" },
  { href: "/work/testing-cotester", label: "Testing CoTester", icon: FlaskConical, tilt: "-5deg", place: "lg:bottom-[12%] lg:left-[12%]" },
  { href: "/work/image-tap-locator", label: "Image tap locator", icon: MousePointerClick, tilt: "6deg", place: "lg:top-[38%] lg:right-[9%]" },
  { href: "/projects/mesh-support", label: "MESH Support", icon: Network, tilt: "-7deg", place: "lg:top-[62%] lg:right-[4%]" },
  { href: "/projects/rag-evaluation", label: "RAG evaluation", icon: DatabaseZap, tilt: "8deg", place: "lg:bottom-[9%] lg:right-[14%]" },
];

export default function Hero() {
  return (
    <section className="page grid gap-4 pt-6">
      <div data-hero className="stage grid min-h-[clamp(27rem,62svh,35rem)] place-items-center px-6 py-14 text-center">
        <Scene detect />
        <div className="scrim" />

        <div data-hero-inner className="grid max-w-[40rem] justify-items-center">
          <div data-intro="avatar" className="mb-4">
            <Avatar size={56} />
          </div>
          <h1 className="mb-6">
            <span data-intro="eyebrow" className="eyebrow mb-4 block">
              {site.name} · {site.title}
            </span>
            <span data-intro="title" className="display-text mx-auto block max-w-[17ch] text-hero">
              I test AI until it breaks, then{" "}
              <em className="font-accent font-normal tracking-[-0.01em] text-accent">
                make it hold up
              </em>
              .
            </span>
          </h1>
          <p data-intro="lede" className="max-w-[56ch] text-md text-fg/85">
            AI/ML Developer at TestGrid. I work on the vision models and tools behind
            CoTester, and I spend a lot of my time finding where AI agents fail. Python, computer
            vision and LLM systems.
          </p>

          <ul className="mt-8 flex justify-center gap-2 lg:contents">
            {tiles.map((tile) => (
              <li key={tile.href} data-intro="tile" className={`lg:absolute ${tile.place}`}>
                <Link
                  href={tile.href}
                  aria-label={tile.label}
                  title={tile.label}
                  style={{ "--tilt": tile.tilt } as React.CSSProperties}
                  className="tile"
                >
                  <tile.icon aria-hidden="true" className="size-[45%]" strokeWidth={1.6} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="glass rise grid gap-6 px-6 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <li key={stat.label} className="grid gap-1">
            <span className="stat-number">{stat.value}</span>
            <span className="mono-label max-w-[24ch]">{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
