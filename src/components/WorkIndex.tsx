import { Reveal } from "./Reveal";

type Work = {
  index: string;
  title: string;
  jp: string;
  discipline: string;
  year: string;
  href: string;
  external?: boolean;
};

/**
 * Every entry below is verifiable against the public profiles
 * (GitHub / Instagram) — no invented clients or case studies.
 */
const WORKS: Work[] = [
  {
    index: "01",
    title: "Shizuka Portfolio",
    jp: "静",
    discipline: "Personal portfolio · Motion & front-end",
    year: "—",
    href: "https://github.com/ArsyilAziz/shizuka-portfolio",
    external: true,
  },
  {
    index: "02",
    title: "Detective UI Concept",
    jp: "探",
    discipline: "Anime-inspired UI/UX exploration · Interface design",
    year: "2025",
    href: "https://www.instagram.com/p/DJE22H5TLPZ/",
    external: true,
  },
  {
    index: "03",
    title: "dzularsyil-id",
    jp: "本",
    discipline: "This site · Editorial identity & front-end",
    year: "2026",
    href: "https://github.com/DzulArsyil/dzularsyil-id",
    external: true,
  },
  {
    index: "04",
    title: "Open Brief",
    jp: "次",
    discipline: "Open collaboration · Design × Code × Motion",
    year: "—",
    href: "#contact",
  },
];

export function WorkIndex() {
  return (
    <section id="work" className="relative border-t border-line">
      <div className="shell py-20 md:py-28">
        {/* section head */}
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-paper-faint">
              <span className="text-denki">01</span> — Index
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-tight text-paper sm:text-5xl md:text-6xl">
              Selected
              <br />
              <span className="text-outline">Work</span>
              <span className="ml-4 align-top font-mono text-sm font-normal tracking-normal text-paper-faint">
                (04)
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-4 pb-1">
            <span lang="ja" className="v-text hidden font-jp text-sm tracking-[0.4em] text-paper-dim sm:block">
              作品一覧
            </span>
            <p className="max-w-[220px] text-[11px] leading-relaxed text-paper-faint">
              2025 — 2026.
              <br />
              Full case studies shared on request.
            </p>
          </div>
        </Reveal>

        {/* index rows — mobile: index · title · year / discipline wraps below.
            Desktop: a strict four-column editorial ledger. */}
        <ol className="border-t border-line">
          {WORKS.map((work, i) => (
            <Reveal as="li" key={work.index} delay={i * 90}>
              <article className="group relative grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-line py-6 transition-colors duration-500 hover:bg-ink-2 md:grid-cols-[64px_1fr_auto_auto] md:gap-x-8 md:py-8">
                {/* accent wipe */}
                <span
                  className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-denki transition-transform duration-500 group-hover:scale-y-100"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs text-paper-faint transition-colors duration-300 group-hover:text-denki">
                  {work.index}
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight text-paper sm:text-2xl md:text-4xl">
                  <a
                    href={work.href}
                    {...(work.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-3 focus-visible:text-denki"
                  >
                    {work.title}
                    <span
                      lang="ja"
                      className="ml-3 hidden font-jp text-base font-normal text-paper-faint sm:inline"
                    >
                      {work.jp}
                    </span>
                  </a>
                </h3>
                <p className="col-start-2 pr-14 text-[11px] uppercase tracking-[0.16em] text-paper-faint sm:pr-0 md:col-start-3 md:col-auto md:tracking-[0.18em]">
                  {work.discipline}
                </p>
                <p className="col-start-3 row-start-1 font-mono text-xs text-paper-dim md:col-start-4">
                  {work.year}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-8 flex justify-end" delay={120}>
          <a
            href="https://github.com/ArsyilAziz"
            target="_blank"
            rel="noreferrer"
            className="link-draw py-2 text-[11px] uppercase tracking-[0.22em] text-paper-dim transition-colors duration-300 hover:text-denki"
          >
            Full repository ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
