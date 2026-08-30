import { Hero } from "./components/Hero";
import { WorkIndex } from "./components/WorkIndex";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="relative bg-ink text-paper">
      <Hero />
      <WorkIndex />
      <Footer />
    </main>
  );
}
