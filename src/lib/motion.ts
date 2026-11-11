// Adapted from aahil-khan/portfolio-canvas lib/site-motion.ts (MIT, © 2026 Aahil Khan).
// See THIRD_PARTY_NOTICES.md.

/** Media queries for `gsap.matchMedia()`, which reverts everything when one stops matching. */
export const MOTION_MEDIA = {
  motion: "(prefers-reduced-motion: no-preference)",
  reduce: "(prefers-reduced-motion: reduce)",
} as const;

// Call these from effects or handlers, never during render: the server can't evaluate them,
// so reading them while rendering would make server and client markup disagree.
export function prefersReducedMotion(): boolean {
  return window.matchMedia(MOTION_MEDIA.reduce).matches;
}

export function hasFinePointer(): boolean {
  return window.matchMedia("(pointer: fine)").matches;
}
