import { ArrowRight } from "lucide-react";

export default function PipelineStrip({ steps }: { steps: string[] }) {
  return (
    <ol
      aria-label="Pipeline steps"
      className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-2xs tracking-[0.06em] uppercase"
    >
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          <span className={i === steps.length - 1 ? "text-accent" : "text-muted-strong"}>
            {step}
          </span>
          {i < steps.length - 1 && <ArrowRight aria-hidden="true" className="size-3 text-muted" />}
        </li>
      ))}
    </ol>
  );
}
