import { ChevronDown } from "lucide-react";

// A one-line summary that opens to the full detail. Native <details>, so it
// works without JavaScript and the hidden text stays searchable.
export default function Expandable({
  title,
  org,
  summary,
  heading: Heading = "h3",
  className = "py-5",
  children,
}: {
  title: string;
  org?: string;
  summary: string;
  heading?: "h3" | "h4";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <details className={`group ${className}`}>
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
        <div className="min-w-0">
          <Heading className="text-lg">{title}</Heading>
          {org && <p className="text-muted-strong">{org}</p>}
          <p className="mt-1 text-muted-strong">{summary}</p>
        </div>
        <span className="mono-label mt-1.5 flex shrink-0 items-center gap-1 group-hover:text-fg">
          <span className="group-open:hidden max-sm:sr-only">Show details</span>
          <span className="hidden group-open:inline max-sm:sr-only">Hide details</span>
          <ChevronDown aria-hidden="true" className="size-4 transition-transform group-open:rotate-180" />
        </span>
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}
