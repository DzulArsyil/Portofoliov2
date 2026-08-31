import { Reveal } from "./Reveal";

const LINKS = [
  { label: "Linktree", href: "https://linktr.ee/DzulArsyil" },
  { label: "GitHub — ArsyilAziz", href: "https://github.com/ArsyilAziz" },
  { label: "Instagram — @designwithdzul", href: "https://www.instagram.com/designwithdzul/" },
  { label: "LinkedIn — mdzularsyilaziz", href: "https://www.linkedin.com/in/mdzularsyilaziz/" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-line">
      <div className="shell pb-10 pt-20 md:pt-28">
        <Reveal>
          <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-paper-faint">
            <span className="text-denki">02</span> — Contact ·{" "}
            <span lang="ja" className="font-jp tracking-[0.3em]">連絡</span>
          </p>
          <h2 className="font-display font-extrabold uppercase leading-[0.98] tracking-[-0.02em] text-paper">
            <span className="block text-[clamp(2.2rem,7vw,6.2rem)]">Let&rsquo;s make</span>
            <span className="text-outline block text-[clamp(2.2rem,7vw,6.2rem)]">
              something rare<span className="text-denki" style={{ WebkitTextStroke: "0" }}>.</span>
            </span>
          </h2>
        </Reveal>

        <Reveal delay={140} className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <a
            href="https://linktr.ee/DzulArsyil"
            target="_blank"
            rel="noreferrer"
            className="group -ml-2 flex w-fit items-center gap-4 py-3 pl-2 text-sm uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:text-denki md:text-base"
          >
            Start a conversation
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

          {/* verified profiles — the same identity across every platform */}
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-draw py-2 text-[11px] uppercase tracking-[0.18em] text-paper-dim transition-colors duration-300 hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* colophon strip */}
      <div className="border-t border-line">
        <div className="shell flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-5 text-[10px] uppercase tracking-[0.2em] text-paper-faint">
          <span>© 2026 M. Dzul&rsquo;Arsyil Aziz</span>
          <span className="hidden md:inline">
            Set in Syne &amp; IBM Plex Mono ·{" "}
            <span lang="ja" className="font-jp tracking-[0.3em]">間を以て</span>
          </span>
          <a href="#top" className="link-draw py-2 transition-colors duration-300 hover:text-paper">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
