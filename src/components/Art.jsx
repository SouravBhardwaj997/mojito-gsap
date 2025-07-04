import { useGSAP } from "@gsap/react";
import { featureLists, goodLists } from "../constants";
import gsap from "gsap";
const Art = () => {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: "10% top",
        pin: true,
        scrub: 2,
      },
    });
    t1.to(".will-fade", {
      opacity: 0,
      y: -10,
      stagger: 0.4,
      ease: "bounce.in",
    });
    t1.to(".masked-img", {
      maskSize: "400%",
      ease: "expo.out",
      duration: 5,
    });
    t1.to(".will-appear", {
      opacity: 1,
    });
  });
  return (
    <section id="art">
      <h2 className="will-fade">The Art</h2>
      <div className="content w-full px-20">
        <ul className="flex flex-col gap-4 will-fade">
          {featureLists.map((el, index) => (
            <li key={index} className="flex gap-3 items-center">
              <img src="/images/check.png" className="w-fit h-fit" />
              {el}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-4 will-fade">
          {goodLists.map((el, index) => (
            <li key={index} className="flex gap-3 items-center">
              <img src="/images/check.png" className="w-fit h-fit" />
              {el}
            </li>
          ))}
        </ul>
      </div>
      <img src="/images/under-img.jpg" className="cocktail-img masked-img " />
      <div className="masked-container">
        <h2 className="will-fade">Sip-Worthy Perfection</h2>
        <div className="will-appear mt-8">
          <h3 className="text-nowrap">Made with Craft Poured with Passion</h3>
          <p>
            This isn’t just a drink. It’s a carefully crafted moment made just
            for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Art;
