import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });
    const heading = new SplitText(".heading", {
      type: "words",
    });

    t1.from(heading.words, {
      y: 80,
      opacity: 0,
      stagger: 0.02,
    });

    t1.from(".top-grid", {
      y: 30,
      opacity: 0,
      stagger: 0.02,
    });

    t1.from(
      ".bottom-grid",
      {
        y: 30,
        opacity: 0,
        stagger: 0.02,
      },
      "-=0.5"
    );
  });
  return (
    <section id="about">
      <div className="content">
        <div className="md:col-span-5">
          <div className="badge">Best Cocktails</div>
          <h2 className="heading">
            Where every detail matters—from muddle to garnish
          </h2>
        </div>
        <div className="col-span-3"></div>
        <div className="sub-content">
          <p>
            Every cocktail we serve is a reflection of our obsession with detail
            — from the first muddle to the final garnish. That care is what
            turns a simple drink into something truly memorable
          </p>
          <div className="grid grid-cols-2 items-center">
            <div className="border-r border-gray-800">
              <span className="flex text-white">
                {[1, 2, 3, 4, 5].map((el) => (
                  <p className="text-white" key={el}>
                    ⭐
                  </p>
                ))}
              </span>
              <p>
                <span>4.5</span>/5
              </p>
              <div>More than +12000 customers</div>
            </div>
            <div className="relative h-20">
              <div className="rounded-full p-3 noisy">
                <div className=" mx-auto flex flex-row gap-0 items-center h-full w-fit">
                  <img
                    src="/images/profile1.png"
                    className="rounded-full h-10 w-10 border-2 border-white"
                  />
                  <img
                    src="/images/profile2.png"
                    className="rounded-full h-10 w-10 border-2 border-white"
                  />
                  <img
                    src="/images/profile3.png"
                    className="rounded-full h-10 w-10 border-2 border-white"
                  />
                  <img
                    src="/images/profile4.png"
                    className="rounded-full h-10 w-10 border-2 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid mt-16">
        <div className="col-span-1 md:col-span-1 xl:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" />
        </div>
        <div className="col-span-1 md:col-span-1 xl:col-span-3">
          <div className="noisy" />

          <img src="/images/abt2.png" />
        </div>
        <div className="col-span-1 md:col-span-2 xl:col-span-6">
          <div className="noisy" />

          <img src="/images/abt3.png" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="col-span-1 md:col-span-1 xl:col-span-8">
          <div className="noisy" />

          <img src="/images/abt5.png" />
        </div>
        <div className=" col-span-1 md:col-span-1 xl:col-span-4">
          <div className="noisy" />

          <img src="/images/abt4.png" />
        </div>
      </div>
    </section>
  );
};

export default About;
