import Link from "next/link";
import { Download } from "lucide-react";
import { site } from "@/content/site";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header data-site-bar className="glass page sticky top-4 z-10 mt-4 rounded-full px-6 py-3 transition-shadow">
      <div className="flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-mono text-xs font-medium tracking-[0.06em] whitespace-nowrap text-accent-alt hover:text-accent"
        >
          VAIBHAV<span className="text-muted">/</span>PANCHAL
        </Link>
        <div className="flex items-center gap-4 lg:gap-6">
          <NavLinks />
          <ThemeToggle className="max-md:hidden" />
          <a href={site.resume} download="Vaibhav_Panchal_Resume.pdf" className="pill hover:border-accent max-md:order-first">
            Résumé
            <Download aria-hidden="true" className="size-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
