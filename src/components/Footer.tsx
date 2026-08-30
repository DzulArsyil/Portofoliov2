import { Reveal } from "./Reveal";

const REPO_URL = "https://github.com/DzulArsyil/dzularsyil-id";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-line">
      <div className="mx-auto max-w-[1680px] px-6 pb-10 pt-20 md:px-10 md:pt-28">
        <Reveal>
          <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-paper-faint">
            <span className="text-denki">02</span> — Contact · <span className="font-jp tracking-[0.3em]">連絡</span>
          </p>
          <h2 className="font-display font-extrabold uppercase leading-[0.98] tracking-[-0.02em] text-paper">
            <span className="block text-[clamp(2.2rem,7vw,6.2rem)]">Let&rsquo;s make</span>
            <span className="text-outline block text-[clamp(2.2rem,7vw,6.2rem)]">
              something rare<span className="text-denki" style={{ WebkitTextStroke: "0" }}>.</span>
            </span>
          </h2>
        </Reveal>

        <Reveal delay={140} className="mt-10 flex flex-wrap items-center gap-x-12 gap-y-6">
          <a
            href="mailto:hello@dzularsyil.id"
            className="group flex items-center gap-4 text-sm uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:text-denki md:text-base"
          >
            hello@dzularsyil.id
            <svg
              viewBox="0 0 14 14"
              className="h-4 w-4 stroke-current transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              fill="none"
              strokeWidth="1.3"
              aria-hidden="true"
            >
              <path d="M2 12L12 2M5 2h7v7" />
            </svg>
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="link-draw text-[11px] uppercase tracking-[0.22em] text-paper-dim transition-colors duration-300 hover:text-paper"
          >
            GitHub — DzulArsyil
          </a>
        </Reveal>
      </div>

      {/* colophon strip */}
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1680px] flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-5 text-[10px] uppercase tracking-[0.2em] text-paper-faint md:px-10">
          <span>© 2026 M. Dzul&rsquo;Arsyil Aziz</span>
          <span className="hidden md:inline">
            Set in Syne &amp; IBM Plex Mono · <span className="font-jp tracking-[0.3em]">間を以て</span>
          </span>
          <a href="#top" className="link-draw transition-colors duration-300 hover:text-paper">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
