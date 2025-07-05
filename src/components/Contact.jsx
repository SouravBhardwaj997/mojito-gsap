import { useGSAP } from "@gsap/react";
import { openingHours, socials, storeInfo } from "../constants";
import gsap from "gsap";
import { SplitText } from "gsap/all";
const Contact = () => {
  useGSAP(() => {
    const heading = SplitText.create("#contact h2", {
      type: "words",
    });
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
    });

    t1.from(heading.words, {
      yPercent: 100,
      opacity: 0,
      ease: "power1.inOut",
      stagger: 0.03,
    })
      .from(".will-appear h3, .will-appear p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
      })
      .to("#f-right-leaf", {
        y: 50,
        duration: 1,
      })
      .to("#f-left-leaf", {
        y: -50,
        duration: 1,
      });
  });
  return (
    <footer id="contact">
      <img
        src="/images/footer-left-leaf.png"
        alt="footer left leaf"
        id="f-left-leaf"
      />
      <img
        src="/images/footer-right-leaf.png"
        alt="footer right leaf"
        id="f-right-leaf"
      />
      <div className="content">
        <h2>{storeInfo.heading}</h2>
        <div className="will-appear flex flex-col gap-2">
          <h3>Vist our Store</h3>
          <p>{storeInfo.address}</p>
        </div>
        <div className="will-appear flex flex-col gap-2">
          <h3>Contact Us</h3>
          <p>{storeInfo.contact.email}</p>
          <p>{storeInfo.contact.phone}</p>
        </div>
        <div className="will-appear flex flex-col gap-2">
          <h3>Open every day</h3>
          {openingHours.map((el) => (
            <p key={el.day}>
              {el.day} : {el.time}
            </p>
          ))}
        </div>
        <div className="will-appear flex flex-col gap-2">
          <h3>Socials</h3>
          <div className="flex justify-center gap-3">
            {socials.map((social) => (
              <a href={social.url} key={social.name} target="_blank">
                <img key={social.name} src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <img
        src="/images/footer-drinks.png"
        alt="drinks footer"
        className="drink-img"
      />
    </footer>
  );
};

export default Contact;
