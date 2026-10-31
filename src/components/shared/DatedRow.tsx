export default function DatedRow({
  label,
  tight = false,
  children,
}: {
  label: string;
  tight?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li className={`grid md:grid-cols-[12rem_1fr] ${tight ? "gap-1 py-5" : "gap-2 py-6"}`}>
      <p className="eyebrow">{label}</p>
      <div>{children}</div>
    </li>
  );
}
