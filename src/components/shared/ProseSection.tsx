import type { WorkSection } from "@/content/work";

export default function ProseSection({ heading, body, list }: WorkSection) {
  return (
    <section>
      <h2 className="text-xl">{heading}</h2>
      <div className="prose-text mt-3 grid gap-3">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {list && (
        <ul className="prose-text mt-4 grid gap-2">
          {list.map((entry) => (
            <li key={entry.lead}>
              <strong className="font-semibold text-fg">{entry.lead}</strong> {entry.text}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
