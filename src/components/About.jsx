const About = () => {
  return (
    <section id="about">
      <div className="content">
        <div className="col-span-5">
          <div className="badge">Best Cocktails</div>
          <h2>Where every detail matters—from muddle to garnish</h2>
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
              <span className="flex gap- text-white">
                {[1, 2, 3, 4, 5].map((el) => (
                  <p className="text-white">⭐</p>
                ))}
              </span>
              <p>
                <span>4.5</span>/5
              </p>
              <div>More than +12000 customers</div>
            </div>
            <div className="relative h-20">
              <div className="rounded-full p-3 noisy">
                {/* <div className="flex flex-row">
                  <img
                    src="/images/profile1.png"
                    className="rounded-full h-10 w-10"
                  />
                  <img
                    src="/images/profile2.png"
                    className="rounded-full h-10 w-10"
                  />
                  <img
                    src="/images/profile3.png"
                    className="rounded-full h-10 w-10"
                  />
                  <img
                    src="/images/profile4.png"
                    className="rounded-full h-10 w-10"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
