import type { CoverNode } from "@/content/work";

// Steps run around a 2x2 grid: left to right, down, then right to left.
const slots = [
  { x: 24, y: 40 },
  { x: 226, y: 40 },
  { x: 226, y: 129 },
  { x: 24, y: 129 },
];

const NODE_WIDTH = 150;
const NODE_HEIGHT = 56;

function Connector({ from, to }: { from: { x: number; y: number }; to: { x: number; y: number } }) {
  const midY = NODE_HEIGHT / 2;
  if (from.y === to.y) {
    const rightward = to.x > from.x;
    const x1 = rightward ? from.x + NODE_WIDTH : from.x;
    const x2 = rightward ? to.x - 6 : to.x + NODE_WIDTH + 6;
    const tip = rightward ? to.x : to.x + NODE_WIDTH;
    const y = from.y + midY;
    return (
      <>
        <line x1={x1} y1={y} x2={x2} y2={y} stroke="var(--color-muted)" />
        <polygon points={`${tip},${y} ${x2},${y - 4} ${x2},${y + 4}`} fill="var(--color-muted)" />
      </>
    );
  }
  const x = from.x + NODE_WIDTH / 2;
  const y1 = from.y + NODE_HEIGHT;
  const y2 = to.y - 6;
  return (
    <>
      <line x1={x} y1={y1} x2={x} y2={y2} stroke="var(--color-muted)" />
      <polygon points={`${x},${to.y} ${x - 4},${y2} ${x + 4},${y2}`} fill="var(--color-muted)" />
    </>
  );
}

export default function PipelineCover({
  nodes,
  fill = false,
}: {
  nodes: CoverNode[];
  fill?: boolean;
}) {
  const placed = nodes.slice(0, slots.length);
  const last = placed.length - 1;

  return (
    <div
      aria-hidden="true"
      className={`cover-dots border-b border-(--glass-edge) ${
        fill ? "h-full lg:grid lg:items-center lg:border-b-0" : ""
      }`}
    >
      <svg viewBox="0 0 400 225" className="block w-full">
        {placed.slice(1).map((node, i) => (
          <Connector key={node.label} from={slots[i]} to={slots[i + 1]} />
        ))}

        {placed.map((node, i) => {
          const { x, y } = slots[i];
          const output = i === last;
          return (
            <g key={node.label}>
              <rect
                x={x}
                y={y}
                width={NODE_WIDTH}
                height={NODE_HEIGHT}
                rx="10"
                fill="var(--color-surface)"
                stroke={output ? "var(--color-accent)" : "var(--glass-edge)"}
                strokeWidth="1.5"
              />
              <text
                x={x + NODE_WIDTH / 2}
                y={y + 24}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize="11"
                fontWeight="500"
                letterSpacing="0.8"
                fill={output ? "var(--color-accent)" : "var(--color-fg)"}
              >
                {node.label.toUpperCase()}
              </text>
              <text
                x={x + NODE_WIDTH / 2}
                y={y + 41}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize="9.5"
                fill="var(--color-muted)"
              >
                {node.sub}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
