// A drawn night horizon used behind the hero and page headers. The numbers are
// seeded, so every render produces the same picture.

const WIDTH = 1100;
const HEIGHT = 560;

const skyStops = [
  { offset: "0%", color: "#070a14" },
  { offset: "34%", color: "#10203a" },
  { offset: "54%", color: "#2f3a5e" },
  { offset: "66%", color: "#8a5a45" },
  { offset: "74%", color: "#e0963f" },
];

const ridges = [
  { baseY: 398, amp: 30, color: "#5a3f4f" },
  { baseY: 432, amp: 28, color: "#3a2c45" },
  { baseY: 470, amp: 24, color: "#221d35" },
  { baseY: 510, amp: 18, color: "#100f1f" },
];

function seeded(seed: number) {
  let state = seed;
  return () => {
    state = (state * 16807) % 2147483647;
    return state / 2147483647;
  };
}

function ridgePath(rand: () => number, baseY: number, amp: number) {
  const a = rand() * 6.28;
  const b = rand() * 6.28;
  const c = rand() * 6.28;
  let path = `M0 ${HEIGHT}`;
  for (let x = 0; x <= WIDTH; x += 20) {
    const wave =
      Math.sin(x / 170 + a) * 0.6 + Math.sin(x / 70 + b) * 0.28 + Math.sin(x / 31 + c) * 0.12;
    path += ` L${x} ${(baseY + amp * wave).toFixed(1)}`;
  }
  return `${path} L${WIDTH} ${HEIGHT} Z`;
}

function Bracket({ x, y, size, label }: { x: number; y: number; size: number; label: string }) {
  const arm = size * 0.28;
  const corners = [
    `M${x} ${y + arm} V${y} H${x + arm}`,
    `M${x + size - arm} ${y} H${x + size} V${y + arm}`,
    `M${x + size} ${y + size - arm} V${y + size} H${x + size - arm}`,
    `M${x + arm} ${y + size} H${x} V${y + size - arm}`,
  ];
  return (
    <g>
      <path
        d={corners.join(" ")}
        fill="none"
        stroke="var(--color-accent-alt)"
        strokeWidth="1.5"
        opacity="0.8"
      />
      <text
        x={x}
        y={y - 7}
        fill="var(--color-accent-alt)"
        fontFamily="var(--font-mono)"
        fontSize="10"
        letterSpacing="1"
        opacity="0.85"
      >
        {label}
      </text>
    </g>
  );
}

export default function Scene({ seed = 7, detect = false }: { seed?: number; detect?: boolean }) {
  const rand = seeded(seed * 9973);
  const id = `scene-${seed}`;

  const stars = Array.from({ length: 110 }, () => ({
    x: rand() * WIDTH,
    y: rand() * 300,
    r: 0.4 + rand() * 0.9,
    o: 0.25 + rand() * 0.6,
  }));

  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMax slice"
      className="absolute inset-0 -z-10 size-full"
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          {skyStops.map((stop) => (
            <stop key={stop.offset} offset={stop.offset} stopColor={stop.color} />
          ))}
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="100%" r="62%">
          <stop offset="0%" stopColor="#f2a93b" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#f2a93b" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width={WIDTH} height={HEIGHT} fill={`url(#${id}-sky)`} />
      <rect width={WIDTH} height={HEIGHT} fill={`url(#${id}-glow)`} />

      {stars.map((star) => (
        <circle
          key={`${star.x}-${star.y}`}
          cx={star.x.toFixed(1)}
          cy={star.y.toFixed(1)}
          r={star.r.toFixed(2)}
          fill="#ededec"
          opacity={star.o.toFixed(2)}
        />
      ))}

      <circle cx="860" cy="212" r="30" fill="#e9dfc9" opacity="0.92" />
      <circle cx="848" cy="204" r="26" fill="#10172e" opacity="0.18" />

      {ridges.map((ridge) => (
        <path
          key={ridge.baseY}
          d={ridgePath(rand, ridge.baseY, ridge.amp)}
          fill={ridge.color}
        />
      ))}

      {detect && (
        <g className="max-lg:hidden">
          <Bracket x={816} y={168} size={88} label="MOON 0.97" />
          <Bracket x={190} y={360} size={92} label="RIDGE 0.91" />
        </g>
      )}
    </svg>
  );
}
