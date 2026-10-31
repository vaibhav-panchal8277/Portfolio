import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import Panel from "./Panel";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", value: "vaibhav-panchal8277", href: site.github },
  { label: "LinkedIn", value: "vaibhav-panchal", href: site.linkedin },
  { label: "Resume", value: "PDF", href: site.resume },
];

export default function ContactLinks() {
  return (
    <Panel>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="group flex items-center justify-between gap-4 py-4 hover:text-accent"
          >
            <span className="mono-label group-hover:text-accent">{link.label}</span>
            <span className="flex min-w-0 items-center gap-2">
              <span className="truncate">{link.value}</span>
              <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-muted" />
            </span>
          </a>
        </li>
      ))}
    </Panel>
  );
}
