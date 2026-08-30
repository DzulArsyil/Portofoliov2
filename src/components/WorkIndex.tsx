import { Reveal } from "./Reveal";

type Work = {
  index: string;
  title: string;
  jp: string;
  discipline: string;
  year: string;
};

const WORKS: Work[] = [
  { index: "01", title: "Arka Studio", jp: "光", discipline: "Art direction · WebGL experience", year: "2025" },
  { index: "02", title: "Kopi Tanah", jp: "土", discipline: "E-commerce · Design system", year: "2024" },
  { index: "03", title: "Svarna Finance", jp: "金", discipline: "Product dashboard · Front-end", year: "2024" },
  { index: "04", title: "Halcyon Journal", jp: "紙", discipline: "Editorial platform · Typography", year: "2023" },
];

const REPO_URL = "https://github.com/DzulArsyil/dzularsyil-id";

export function WorkIndex() {
  return (
    <section id="work" className="relative border-t border-line">
      <div className="mx-auto max-w-[1680px] px-6 py-20 md:px-10 md:py-28">
        {/* section head */}
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-paper-faint">
              <span className="text-denki">01</span> — Index
            </p>
            <h2 className="font-display text-4xl font-bold uppercase leading-none tracking-tight text-paper md:text-6xl">
              Selected
              <br />
              <span className="text-outline">Work</span>
              <span className="ml-4 align-top font-mono text-sm font-normal tracking-normal text-paper-faint">
                (04)
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-4 pb-1">
            <span className="v-text font-jp text-sm tracking-[0.4em] text-paper-dim">作品一覧</span>
            <p className="max-w-[200px] text-[11px] leading-relaxed text-paper-faint">
              2023 — 2026.
              <br />
              Full case studies shared on request.
            </p>
          </div>
        </Reveal>

        {/* index rows */}
        <ol className="border-t border-line">
          {WORKS.map((work, i) => (
            <Reveal as="li" key={work.index} delay={i * 90}>
              <article className="group relative grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-line py-6 transition-colors duration-400 hover:bg-ink-2 md:grid-cols-[64px_1fr_auto_auto] md:gap-x-8 md:py-8">
                {/* accent wipe */}
                <span
                  className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-denki transition-transform duration-500 group-hover:scale-y-100"
                  aria-hidden="true"
                />
                <span className="font-mono text-xs text-paper-faint transition-colors duration-300 group-hover:text-denki">
                  {work.index}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight text-paper transition-transform duration-500 ease-out group-hover:translate-x-3 md:text-4xl">
                  {work.title}
                  <span className="ml-3 hidden font-jp text-base font-normal text-paper-faint sm:inline">
                    {work.jp}
                  </span>
                </h3>
                <p className="col-start-2 text-[11px] uppercase tracking-[0.18em] text-paper-faint md:col-start-3 md:col-auto">
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
            href={REPO_URL}
            target="_blank"
            rel="noreferrer"
            className="link-draw text-[11px] uppercase tracking-[0.22em] text-paper-dim transition-colors duration-300 hover:text-denki"
          >
            Open source repository ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
