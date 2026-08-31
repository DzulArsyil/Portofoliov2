import { useEffect, useRef, useState, type RefObject } from "react";
import { usePrefersReducedMotion } from "../hooks/useMotionPrefs";

type EnsoObjectProps = {
  /** Receives the spring-driven translate + tilt from the hero's motion loop. */
  outerRef: RefObject<HTMLDivElement>;
  /** Inner core — moved at a different depth for differential parallax. */
  coreRef: RefObject<HTMLDivElement>;
};

const ARC = 80; // degrees of the ensō left open
const DASH_DRAWN = `${ARC} ${100 - ARC}`;

/**
 * Interactive abstract object: an ensō (円相) — the Zen brush circle.
 * Draw-in on load, stroke + gap respond to hover, the whole body is
 * displaced by the cursor through refs (no re-renders in the loop).
 * Sized fluidly by its parent — it renders identically from a 140px
 * mobile supporting role up to the 540px desktop territory.
 */
export function EnsoObject({ outerRef, coreRef }: EnsoObjectProps) {
  const [drawn, setDrawn] = useState(false);
  const [charged, setCharged] = useState(false);
  const prefersReduced = usePrefersReducedMotion();
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReduced) {
      setDrawn(true);
      return;
    }
    timerRef.current = window.setTimeout(() => setDrawn(true), 350);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [prefersReduced]);

  return (
    <div
      ref={outerRef}
      className="relative aspect-square w-full will-change-transform"
      onMouseEnter={() => setCharged(true)}
      onMouseLeave={() => setCharged(false)}
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible">
        {/* slow measurement orbit */}
        <g className="orbit-slow" style={{ transformOrigin: "200px 200px" }}>
          <circle
            cx="200"
            cy="200"
            r="192"
            fill="none"
            stroke="var(--color-line)"
            strokeWidth="1"
            strokeDasharray="1 7"
          />
          <rect x="196" y="-2" width="8" height="8" fill="var(--color-denki)" />
        </g>

        {/* faint full guide ring */}
        <circle cx="200" cy="200" r="158" fill="none" stroke="var(--color-line)" strokeWidth="1" />

        {/* the ensō stroke */}
        <circle
          cx="200"
          cy="200"
          r="158"
          fill="none"
          pathLength={100}
          strokeLinecap="round"
          strokeDasharray={drawn ? (charged ? "97 3" : DASH_DRAWN) : "0 100"}
          strokeDashoffset={25}
          style={{
            transition: `stroke-dasharray 1.3s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.5s ease, stroke-width 0.5s ease`,
            stroke: charged ? "var(--color-denki)" : "var(--color-paper)",
            strokeWidth: charged ? 11 : 9,
          }}
        />

        {/* tick marks — like a printed diagram */}
        {[0, 90, 180, 270].map((deg) => (
          <line
            key={deg}
            x1="200"
            y1="14"
            x2="200"
            y2="26"
            stroke="var(--color-paper-faint)"
            strokeWidth="1"
            transform={`rotate(${deg} 200 200)`}
          />
        ))}
      </svg>

      {/* core — parallaxed separately */}
      <div
        ref={coreRef}
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 will-change-transform md:gap-5"
      >
        <span
          lang="ja"
          className="v-text font-jp text-xl font-medium tracking-[0.45em] text-paper-dim transition-colors duration-500 sm:text-2xl md:text-3xl md:tracking-[0.5em]"
          style={charged ? { color: "var(--color-denki)" } : undefined}
        >
          円相
        </span>
        <span className="text-center text-[9px] uppercase leading-relaxed tracking-[0.2em] text-paper-faint sm:text-[10px] sm:tracking-[0.22em]">
          {charged ? (
            <>
              <span lang="ja" className="text-denki">電気</span> — charged
            </>
          ) : (
            <>object 01 — follows you</>
          )}
        </span>
      </div>

      {/* hanko seal */}
      <div
        className="absolute bottom-[12%] left-[6%] flex h-8 w-8 items-center justify-center border transition-colors duration-500 md:h-9 md:w-9"
        style={{
          borderColor: charged
            ? "var(--color-denki)"
            : "color-mix(in srgb, var(--color-paper) 35%, transparent)",
        }}
      >
        <span lang="ja" className="font-jp text-sm font-medium text-paper-dim">作</span>
      </div>
    </div>
  );
}
