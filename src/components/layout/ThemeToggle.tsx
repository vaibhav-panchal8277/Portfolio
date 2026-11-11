"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { getServerTheme, getTheme, setTheme, subscribeTheme } from "@/lib/theme";

// Light or dark, one button. `useSyncExternalStore` reads the attribute the inline script set
// before paint; the server snapshot is the default, so the first render matches the markup.
export default function ThemeToggle({ className = "", label = false }: { className?: string; label?: boolean }) {
  const theme = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  const next = theme === "dark" ? "light" : "dark";
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className={`flex items-center gap-2 text-muted-strong hover:text-fg ${className}`}
    >
      <Icon aria-hidden="true" className="size-4" />
      {label && <span className="mono-label">{next === "light" ? "Light theme" : "Dark theme"}</span>}
    </button>
  );
}
