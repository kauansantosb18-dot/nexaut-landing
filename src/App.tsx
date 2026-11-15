import { Contact } from "./components/Contact";
import { Creations } from "./components/Creations";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Process } from "./components/Process";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Creations />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
