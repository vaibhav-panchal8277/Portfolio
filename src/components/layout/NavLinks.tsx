"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/site";
import ThemeToggle from "./ThemeToggle";

export default function NavLinks() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav aria-label="Main">
      <ul className="hidden gap-6 md:flex">
        {nav.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              className="mono-label hover:text-fg aria-[current=page]:text-accent-alt"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="-my-1 -mr-2 block p-1 text-muted-strong hover:text-fg md:hidden"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {/* A solid surface: a second backdrop filter inside the glass header would not blur. */}
      {open && (
        <ul
          id="mobile-menu"
          className="absolute inset-x-0 top-full mt-2 grid gap-1 rounded-panel border border-line bg-surface p-3 shadow-glass md:hidden"
        >
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="mono-label block rounded-card px-3 py-3 hover:text-fg aria-[current=page]:text-accent-alt"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="border-t border-line pt-1">
            <ThemeToggle label className="w-full rounded-card px-3 py-3" />
          </li>
        </ul>
      )}
    </nav>
  );
}
