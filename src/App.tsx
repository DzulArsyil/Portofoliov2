import { Hero } from "./components/Hero";
import { WorkIndex } from "./components/WorkIndex";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only z-50 bg-denki px-4 py-3 text-xs uppercase tracking-[0.2em] text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to selected work
      </a>
      <main id="main" className="relative bg-ink text-paper">
        <Hero />
        <WorkIndex />
        <Footer />
      </main>
    </>
  );
}
