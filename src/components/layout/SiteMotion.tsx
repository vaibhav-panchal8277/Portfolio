"use client";

// Adapted from aahil-khan/portfolio-canvas components/site/motion.tsx (MIT, © 2026 Aahil Khan).
// See THIRD_PARTY_NOTICES.md.

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { ArrowUp } from "lucide-react";
import { MOTION_MEDIA, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Every moving part of the site, in one client component. The pages stay server components;
// this one holds no content, only behaviour. Reduced motion gets the native scroller and no
// animation at all.
export default function SiteMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // Smooth scrolling lives for the whole visit, not per page.
  useEffect(() => {
    const setScrolled = (y: number) => {
      const html = document.documentElement;
      html.dataset.stuck = y > 24 ? "1" : "0";
      html.dataset.far = y > 900 ? "1" : "0";
    };

    if (prefersReducedMotion()) {
      const onScroll = () => setScrolled(window.scrollY);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    // Lenis drives the real scroll position, so ScrollTrigger only needs its update hook and
    // Lenis's frame on gsap's ticker. lagSmoothing(0) stops a dropped frame desyncing scrub.
    const instance = new Lenis({ duration: 1.05, smoothWheel: true, anchors: true });
    lenis.current = instance;
    instance.on("scroll", (e: { scroll: number }) => {
      ScrollTrigger.update();
      setScrolled(e.scroll);
    });
    const raf = (time: number) => instance.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      instance.destroy();
      lenis.current = null;
    };
  }, []);

  // A client-side navigation must start at the top, or at the #section it asked for.
  useEffect(() => {
    const instance = lenis.current;
    if (!instance) return;
    // Wait a frame so the new page has laid out before measuring where the section is.
    const frame = requestAnimationFrame(() => {
      instance.resize();
      const hash = window.location.hash;
      const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
      if (!target) return instance.scrollTo(0, { immediate: true, force: true });
      // Measured from layout (offsetTop), not the box on screen: a section waiting to be
      // revealed is still shifted down by its entry transform.
      let top = 0;
      for (let el: HTMLElement | null = target; el; el = el.offsetParent as HTMLElement | null) {
        top += el.offsetTop;
      }
      instance.scrollTo(Math.max(0, top - 96), { immediate: true, force: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  // Entry animations, rebuilt for each page.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_MEDIA, (ctx) => {
        if (ctx.conditions?.reduce) return;

        // Hero intro on the home page.
        if (document.querySelector("[data-hero]")) {
          gsap
            .timeline({ defaults: { ease: "power3.out" } })
            .from("[data-intro='avatar']", { scale: 0.8, autoAlpha: 0, duration: 0.6 }, 0)
            .from("[data-intro='eyebrow']", { y: 14, autoAlpha: 0, duration: 0.6 }, 0.1)
            .from("[data-intro='title']", { y: 26, autoAlpha: 0, duration: 0.9 }, 0.2)
            .from("[data-intro='lede']", { y: 18, autoAlpha: 0, duration: 0.7 }, 0.45)
            .from("[data-intro='tile']", { y: 18, autoAlpha: 0, duration: 0.5, stagger: 0.06 }, 0.6);

          // The hero drifts up and fades as you scroll past it.
          gsap.to("[data-hero-inner]", {
            yPercent: -10,
            autoAlpha: 0.3,
            ease: "none",
            scrollTrigger: { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: true },
          });
        }

        // Generic entry reveals, batched so a row of cards arrives together.
        gsap.set(".rise", { y: 28, autoAlpha: 0 });
        ScrollTrigger.batch(".rise", {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.09,
              overwrite: true,
            }),
        });
      });

      // Fonts and lazily decoded images move every trigger once they land.
      void document.fonts?.ready.then(() => ScrollTrigger.refresh());

      return () => mm.revert();
    },
    { scope: root, dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <div ref={root}>
      {children}
      <button
        type="button"
        aria-label="Back to top"
        onClick={() =>
          lenis.current ? lenis.current.scrollTo(0) : window.scrollTo({ top: 0, behavior: "auto" })
        }
        className="glass fixed right-5 bottom-5 z-10 grid size-11 place-items-center rounded-full text-muted-strong opacity-0 pointer-events-none transition-opacity duration-300 hover:text-fg in-data-[far=1]:pointer-events-auto in-data-[far=1]:opacity-100"
      >
        <ArrowUp aria-hidden="true" className="size-4" />
      </button>
    </div>
  );
}
