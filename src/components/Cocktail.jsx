import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../constants/";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#cocktails",
          start: "10% top",
          end: "80% top",
          scrub: true,
        },
      })
      .to("#c-left-leaf", {
        x: 50,
        y: -50,
      })
      .to("#c-right-leaf", {
        x: -50,
        y: -50,
      });
  });
  return (
    <section id="cocktails" className="noisy">
      <img
        src="images/cocktail-left-leaf.png"
        alt="cocktails left leaf"
        id="c-left-leaf"
        className="hidden"
      />
      <img
        src="images/cocktail-right-leaf.png"
        alt="cocktails right leaf"
        id="c-right-leaf"
        className="hidden"
      />
      <div className="list">
        <div className="popular">
          <h2>Most Popular Drinks:</h2>
          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className="flex flex-col">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span> - {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most loved Drinks:</h2>
          <ul>
            {mockTailLists.map((drink) => (
              <li key={drink.name}>
                <div className="flex flex-col">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span> - {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
