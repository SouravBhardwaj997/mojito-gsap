import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: "676px" });
  useGSAP(() => {
    const titleChars = new SplitText(".title", {
      type: "chars",
    });
    titleChars.chars.forEach((el) => {
      el.classList.add("text-gradient");
    });
    gsap.from(titleChars.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",

      stagger: 0.06,
    });
    const paraSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    gsap.from(paraSplit.lines, {
      delay: 1,
      y: "100",
      opacity: 0,
      stagger: 0.06,
      ease: "expo.out",
    });

    const leafTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    leafTimeline.to(".right-leaf", { y: 100 }, 0);
    leafTimeline.to(".left-leaf", { y: -100 }, 0);

    // const startValue = isMobile ? "top 50%" : "center 60%";
    // const endValue = isMobile ? "120% top" : "bottom top";

    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "video",
    //     start: startValue,
    //     end: endValue,
    //     scrub: true,
    //     pin: true,
    //   },
    // });

    // videoRef.current.onloadedmetadata = () => {
    //   tl.to(videoRef.current, {
    //     currentTime: videoRef.current.duration,
    //   });
    // };

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "126% top" : "100% top";

    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        pin: true,
        scrub: true,
      },
    });
    videoRef.current.onloadedmetadata = () => {
      videoTimeline.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  });
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          className="left-leaf"
          alt="left-leaf"
        />

        <img
          className="right-leaf"
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="hidden md:block space-y-5">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#Cocktails">View cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div>
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
