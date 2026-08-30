import { useEffect, useRef } from "react";
import { EnsoObject } from "./EnsoObject";
import { TopBar } from "./TopBar";
import { useHasFinePointer, usePrefersReducedMotion } from "../hooks/useMotionPrefs";

/** How strongly a layer chases the cursor. 1 = neutral, >1 = foreground, <1 = background. */
const DEPTH = {
  grid: 0.22,
  kanji: 0.5,
  enso: 1,
  core: 1.7,
} as const;

const SWING = { x: 26, y: 20 }; // px of travel at depth 1

export function Hero() {
  const prefersReduced = usePrefersReducedMotion();
  const hasFinePointer = useHasFinePointer();

  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const kanjiRef = useRef<HTMLDivElement>(null);
  const ensoOuterRef = useRef<HTMLDivElement>(null);
  const ensoCoreRef = useRef<HTMLDivElement>(null);
  const crossXRef = useRef<HTMLDivElement>(null);
  const crossYRef = useRef<HTMLDivElement>(null);
  const coordRef = useRef<HTMLSpanElement>(null);

  const motionEnabled = !prefersReduced && hasFinePointer;

  useEffect(() => {
    if (!motionEnabled) return;

    let raf = 0;
    const target = { x: 0, y: 0 }; // normalised pointer, -1 … 1
    const current = { x: 0, y: 0 }; // spring-smoothed follower

    const onPointerMove = (event: PointerEvent) => {
      target.x = (event.clientX / window.innerWidth) * 2 - 1;
      target.y = (event.clientY / window.innerHeight) * 2 - 1;

      // crosshair + live coordinates write directly — zero re-renders.
      // Crosshair is section-local, so it stays true even while scrolled.
      const rect = sectionRef.current?.getBoundingClientRect();
      const localX = rect ? event.clientX - rect.left : event.clientX;
      const localY = rect ? event.clientY - rect.top : event.clientY;
      if (crossXRef.current)
        crossXRef.current.style.transform = `translate3d(${localX}px,0,0)`;
      if (crossYRef.current)
        crossYRef.current.style.transform = `translate3d(0,${localY}px,0)`;
      if (coordRef.current)
        coordRef.current.textContent = `X ${String(event.clientX).padStart(4, "0")} · Y ${String(
          event.clientY,
        ).padStart(4, "0")}`;
    };

    const setLayer = (
      el: HTMLElement | null,
      depth: number,
      scrollFactor: number,
      tilt = 0,
    ) => {
      if (!el) return;
      const x = current.x * SWING.x * depth;
      const y = current.y * SWING.y * depth + window.scrollY * scrollFactor;
      el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)${
        tilt ? ` rotate(${(current.x * tilt).toFixed(2)}deg)` : ""
      }`;
    };

    const tick = () => {
      // critically-damped-ish chase — fast enough to feel attached, slow enough to feel weighted
      current.x += (target.x - current.x) * 0.055;
      current.y += (target.y - current.y) * 0.055;

      setLayer(gridRef.current, DEPTH.grid, -0.04);
      setLayer(kanjiRef.current, DEPTH.kanji, 0.1);
      setLayer(ensoOuterRef.current, DEPTH.enso, -0.06, 3);
      setLayer(ensoCoreRef.current, DEPTH.core, 0);

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, [motionEnabled]);

  return (
    <section id="top" ref={sectionRef} className="relative min-h-svh overflow-hidden">
      {/* ---------- layered background ---------- */}
      <div
        ref={gridRef}
        className="hairline-grid pointer-events-none absolute -inset-x-10 -inset-y-10 will-change-transform"
        aria-hidden="true"
      />
      {/* giant 間 — "ma", the negative space itself */}
      <div
        ref={kanjiRef}
        className="pointer-events-none absolute -bottom-[9%] left-[2%] select-none font-jp leading-none text-paper will-change-transform md:left-[24%]"
        style={{ fontSize: "clamp(16rem, 44vw, 44rem)", opacity: 0.045 }}
        aria-hidden="true"
      >
        間
      </div>
      <div className="noise-layer pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(120% 90% at 70% 20%, transparent 40%, rgba(12,12,14,0.75) 100%)" }}
        aria-hidden="true"
      />

      <TopBar />

      {/* ---------- left vertical rail ---------- */}
      <aside
        className="fade-in absolute bottom-28 left-6 z-10 hidden flex-col items-center gap-8 md:left-10 lg:flex"
        style={{ animationDelay: "1.15s" }}
        aria-hidden="true"
      >
        <span className="v-text-mixed text-[10px] uppercase tracking-[0.34em] text-paper-faint [transform:rotate(180deg)]">
          Portfolio — Vol. 01 / 2026
        </span>
        <span className="h-16 w-px bg-line" />
        <span className="v-text font-jp text-xs tracking-[0.5em] text-paper-dim">余白の美</span>
      </aside>

      {/* ---------- interactive object ---------- */}
      <div className="pointer-events-auto absolute right-[-16%] top-[13%] z-10 w-[68vw] sm:right-[-4%] sm:w-[50vw] lg:right-[4%] lg:top-[16%] lg:w-[34vw] lg:max-w-[540px]">
        <EnsoObject outerRef={ensoOuterRef} coreRef={ensoCoreRef} />
      </div>

      {/* ---------- identity block ---------- */}
      <div className="relative z-20 mx-auto flex min-h-svh w-full max-w-[1680px] flex-col justify-end px-6 pb-8 pt-28 md:px-10 md:pb-10">
        {/* roles overline */}
        <div className="reveal-mask mb-4">
          <p
            className="reveal-line flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.24em] text-paper-dim md:text-xs"
            style={{ animationDelay: "0.25s" }}
          >
            <span>UI/UX Designer</span>
            <span className="text-denki" aria-hidden="true">/</span>
            <span>Front-end Developer</span>
            <span className="hidden text-paper-faint sm:inline" aria-hidden="true">—</span>
            <span className="hidden text-paper-faint sm:inline">Jakarta, ID · 6.2°S 106.8°E</span>
          </p>
        </div>

        <h1 className="font-display font-extrabold uppercase leading-[0.94] tracking-[-0.02em]">
          <span className="reveal-mask">
            <span className="reveal-line text-[clamp(2.55rem,9.6vw,8.6rem)]" style={{ animationDelay: "0.38s" }}>
              <span className="mr-[0.18em] align-top font-mono text-[0.32em] font-medium tracking-normal text-denki">
                M.
              </span>
              Dzul&rsquo;Arsyil
            </span>
          </span>
          <span className="reveal-mask">
            <span
              className="reveal-line text-outline text-[clamp(2.55rem,9.6vw,8.6rem)] md:ml-[7vw]"
              style={{ animationDelay: "0.5s" }}
            >
              Aziz<span className="text-denki" style={{ WebkitTextStroke: "0" }}>.</span>
            </span>
          </span>
        </h1>

        {/* tagline */}
        <div className="reveal-mask mt-6 md:mt-8">
          <p
            className="reveal-line max-w-xl text-[13px] leading-relaxed text-paper-dim md:text-[15px] font-mono"
            style={{ animationDelay: "0.62s" }}
          >
            Designing interfaces<span className="text-denki">.</span> Building digital
            experiences<span className="text-denki">.</span>
            <span className="ml-3 inline-block font-jp text-xs text-paper-faint">設計と構築</span>
          </p>
        </div>

        {/* ---------- meta strip: CTA · scroll cue · coordinates ---------- */}
        <div
          className="fade-in mt-12 flex flex-wrap items-end justify-between gap-x-10 gap-y-6 border-t border-line pt-6 md:mt-16"
          style={{ animationDelay: "0.85s" }}
        >
          <a
            href="#work"
            className="group flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-paper transition-colors duration-300 hover:text-denki focus-visible:text-denki focus-visible:outline-none md:text-sm"
          >
            <span className="font-mono text-[10px] text-paper-faint transition-colors duration-300 group-hover:text-denki">
              01
            </span>
            View selected work
            <span className="relative flex h-px w-12 items-center bg-paper transition-all duration-500 group-hover:w-20 group-hover:bg-denki">
              <svg
                viewBox="0 0 10 10"
                className="absolute -right-[3px] -top-[4.5px] h-[10px] w-[10px] stroke-current"
                fill="none"
                strokeWidth="1.4"
                aria-hidden="true"
              >
                <path d="M1 1l8 4-8 4" />
              </svg>
            </span>
          </a>

          <div className="hidden items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-paper-faint md:flex">
            <span className="relative h-10 w-px overflow-hidden bg-line">
              <span className="pulse-dot absolute left-0 top-0 h-3 w-px bg-denki" />
            </span>
            Scroll
          </div>

          <div className="text-right text-[10px] uppercase leading-relaxed tracking-[0.22em] text-paper-faint md:text-[11px]">
            <span ref={coordRef} className="tabular-nums">
              {motionEnabled ? "X 0000 · Y 0000" : "Cursor — at rest"}
            </span>
            <br />
            <span className="text-paper-dim">
              WIB <span aria-hidden="true">·</span> UTC+7
            </span>
          </div>
        </div>
      </div>

      {/* ---------- crosshair (fine pointers only) ---------- */}
      {motionEnabled && (
        <div className="pointer-events-none absolute inset-0 z-30" aria-hidden="true">
          <div ref={crossXRef} className="absolute inset-y-0 left-0 w-px bg-paper/10" />
          <div ref={crossYRef} className="absolute inset-x-0 top-0 h-px bg-paper/10" />
        </div>
      )}
    </section>
  );
}
