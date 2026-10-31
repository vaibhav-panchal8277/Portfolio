import { timeline } from "@/content/experience";
import DatedRow from "./DatedRow";
import Panel from "./Panel";

export default function Timeline() {
  return (
    <Panel as="ol">
      {timeline.map((entry) => (
        <DatedRow key={entry.role} label={entry.date}>
          <h3 className="text-lg">{entry.role}</h3>
          <p className="text-muted-strong">{entry.org}</p>
          <p className="mt-2 text-muted-strong">{entry.note}</p>
        </DatedRow>
      ))}
    </Panel>
  );
}
