export default function SlashList({
  items,
  className = "text-muted-strong",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`grid gap-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span aria-hidden="true" className="text-accent">
            /
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
