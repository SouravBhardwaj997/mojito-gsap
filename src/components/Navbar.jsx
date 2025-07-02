import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        // markers:true
      },
    });
    tl.fromTo(
      "nav",
      {
        background: "transparent",
      },
      {
        background: "#00000050",
        backgroundFilter: "blur(10px)",
      }
    );

    // gsap.to("nav", {
    //   scrollTrigger: {
    //     trigger: "nav",
    //     start: "bottom top",
    //   },
    //   background: "#00000050",
    //   backgroundFilter: "blur(10px)",
    //   ease: "expo.out",
    // });

    // gsap.to("nav", {
    //   scrollTrigger: {
    //     trigger: "nav",
    //     start: "top top",
    //   },
    //   background: "transparent",
    // });
  }, []);
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((el) => (
            <li key={el.id}>
              <a href={el.id}>{el.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
