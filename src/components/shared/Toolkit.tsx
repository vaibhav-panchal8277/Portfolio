import { toolkit } from "@/content/toolkit";
import Panel from "./Panel";

export default function Toolkit({ limit }: { limit?: number }) {
  return (
    <Panel as="div">
      {toolkit.slice(0, limit).map((group) => (
        <div key={group.group} className="grid gap-3 py-6 md:grid-cols-[12rem_1fr]">
          <h3 className="eyebrow">{group.group}</h3>
          <ul className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Panel>
  );
}
