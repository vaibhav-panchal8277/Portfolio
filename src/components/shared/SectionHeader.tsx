export default function SectionHeader({
  index,
  label,
  intro,
  id,
}: {
  index: string;
  label: string;
  intro?: string;
  id?: string;
}) {
  return (
    <div className="mb-6">
      <h2 id={id} className="mono-label font-normal tracking-[0.08em]">
        <span className="text-accent">{index}</span> / {label}
      </h2>
      {intro && <p className="mt-3 max-w-[56ch] text-md text-muted-strong">{intro}</p>}
    </div>
  );
}
