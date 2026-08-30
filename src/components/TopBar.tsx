import { useEffect, useState } from "react";

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: "Asia/Jakarta",
});

function JakartaClock() {
  const [now, setNow] = useState(() => timeFormatter.format(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => setNow(timeFormatter.format(new Date())), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums" aria-label="Current time in Jakarta">
      {now} <span className="text-paper-faint">WIB</span>
    </span>
  );
}

export function TopBar() {
  return (
    <header className="fade-in absolute inset-x-0 top-0 z-30" style={{ animationDelay: "0.9s" }}>
      <div className="mx-auto flex max-w-[1680px] items-center justify-between gap-6 px-6 py-5 md:px-10">
        {/* Wordmark */}
        <a href="#top" className="group flex items-baseline gap-2" aria-label="Back to top">
          <span className="font-display text-lg font-extrabold tracking-tight text-paper">
            M.DA
          </span>
          <span className="h-1.5 w-1.5 translate-y-[-1px] bg-denki transition-transform duration-300 group-hover:scale-150" />
        </a>

        {/* Index nav + local time */}
        <nav className="flex items-center gap-5 text-[11px] uppercase tracking-[0.18em] text-paper-dim md:gap-8">
          <a href="#work" className="link-draw transition-colors duration-300 hover:text-paper">
            <span className="text-denki">01</span> Work
          </a>
          <a href="#contact" className="link-draw transition-colors duration-300 hover:text-paper">
            <span className="text-denki">02</span> Contact
          </a>
          <span className="hidden h-3 w-px bg-line sm:block" aria-hidden="true" />
          <span className="hidden items-center gap-2 sm:flex">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-denki" />
            <JakartaClock />
          </span>
        </nav>
      </div>
      <div className="mx-auto h-px max-w-[1680px] bg-line" />
    </header>
  );
}
