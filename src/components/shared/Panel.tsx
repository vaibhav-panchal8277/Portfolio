// A glass panel of rows divided by hairlines.
export default function Panel({
  as: Tag = "ul",
  children,
}: {
  as?: "ul" | "ol" | "div";
  children: React.ReactNode;
}) {
  return <Tag className="glass rise divide-y divide-line px-6">{children}</Tag>;
}
