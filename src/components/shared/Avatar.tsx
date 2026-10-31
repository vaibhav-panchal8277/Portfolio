import Image from "next/image";
import { site } from "@/content/site";

export default function Avatar({ size }: { size: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="grid shrink-0 place-items-center overflow-hidden rounded-full border border-(--glass-edge) bg-surface shadow-glass"
    >
      {site.photo ? (
        <Image
          src={site.photo}
          alt={site.name}
          width={size * 2}
          height={size * 2}
          className="size-full object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          style={{ fontSize: size * 0.3 }}
          className="font-mono font-medium tracking-[0.04em] text-accent-alt"
        >
          VP
        </span>
      )}
    </div>
  );
}
