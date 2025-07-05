import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import {
  About,
  Art,
  Cocktails,
  Contact,
  Hero,
  Menu,
  Navbar,
} from "./components/index";

gsap.registerPlugin(SplitText, ScrollTrigger);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
}

export default App;
