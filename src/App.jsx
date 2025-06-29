import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { About, Cocktails, Hero, Navbar } from "./components/index";

gsap.registerPlugin(SplitText, ScrollTrigger);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
}

export default App;
