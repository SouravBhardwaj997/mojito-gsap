import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { About, Art, Cocktails, Hero, Navbar } from "./components/index";

gsap.registerPlugin(SplitText, ScrollTrigger);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
}

export default App;
