import { useState } from "react";
import { sliderLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  useGSAP(() => {
    gsap.fromTo(
      ".info",
      {
        opacity: 0,
      },
      { opacity: 1 }
    );

    gsap.fromTo(
      ".details",
      { opacity: 0, yPercent: 100 },
      {
        opacity: 1,
        yPercent: 0,
        ease: "power1.inOut",
      }
    );

    gsap.fromTo(
      ".cocktails img",
      {
        xPercent: prevIndex < currentIndex ? 100 : -100,
      },
      {
        xPercent: 0,
        ease: "power1.inOut",
      }
    );
    const leafTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu",
        start: "-20% top",
        scrub: true,
      },
    });

    leafTimeline.to("#m-right-leaf", {
      yPercent: 40,
    });
    leafTimeline.to(".left-leaf", {
      yPercent: -40,
    });
  }, [currentIndex]);
  const goToSlide = (index) => {
    setPrevIndex(currentIndex);
    const newIndex = (index + sliderLists.length) % sliderLists.length;
    setCurrentIndex(newIndex);
  };

  const getCocktail = (index) => {
    return sliderLists[
      (currentIndex + index + sliderLists.length) % sliderLists.length
    ];
  };
  const currentCocktail = getCocktail(0);
  const nextCocktail = getCocktail(1);
  const prevCocktail = getCocktail(-1);
  return (
    <section id="menu">
      <img
        src="/images/slider-left-leaf.png"
        alt="slider left leaf"
        id="m-left-leaf"
        className="left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="slider right leaf"
        id="m-right-leaf"
      />
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>
      <div className="cocktail-tabs">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white  border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => {
                goToSlide(index);
              }}
            >
              {cocktail.name}
            </button>
          );
        })}
      </div>
      <div className="content">
        <div className="arrows ">
          <button
            className="text-left"
            onClick={() => {
              goToSlide(currentIndex - 1);
            }}
          >
            <span>{prevCocktail.name}</span>
            <img src="/images/left-arrow.png" alt="left arrow" />
          </button>

          <button
            className="text-left"
            onClick={() => {
              goToSlide(currentIndex + 1);
            }}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right arrow"
              className="object-contain"
            />
          </button>
        </div>
        <div className="cocktails">
          <img src={currentCocktail.image} />
        </div>
        <div className="recipe">
          <div className="info ">
            <p>Recipe for:</p>
            <h2 id="title">{currentCocktail.name}</h2>
          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
