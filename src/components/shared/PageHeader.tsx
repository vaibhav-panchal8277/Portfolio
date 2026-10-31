import Scene from "./Scene";

export default function PageHeader({
  seed,
  label,
  title,
  lede,
}: {
  seed: number;
  label: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="page pt-6">
      <div aria-hidden="true" className="stage h-36 sm:h-44">
        <Scene seed={seed} />
      </div>
      <p className="eyebrow mt-8">{label}</p>
      <h1 className="display-text mt-3 max-w-[20ch] text-3xl">{title}</h1>
      {lede && <p className="mt-4 max-w-[56ch] text-md text-muted-strong">{lede}</p>}
    </section>
  );
}
