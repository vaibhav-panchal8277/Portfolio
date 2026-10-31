import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="glass page sticky top-4 z-10 mt-4 rounded-full px-6 py-3">
      <div className="flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-mono text-xs font-medium tracking-[0.06em] whitespace-nowrap text-accent-alt hover:text-accent"
        >
          VAIBHAV<span className="text-muted">/</span>PANCHAL
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}
