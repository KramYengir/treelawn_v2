import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center text-white pt-20 h-[95vh] bg-[url('../public/images/garden.webp')] bg-cover bg-center"
    >
      <div className="rm-container flex flex-wrap items-center justify-center gap-x-12 text-balance">
        <h1 className="flex-1 uppercase text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide">
          shape your land the <span className="text-apple-600">right</span> way
        </h1>
        <div className="flex-1 grid align-items-center gap-x-12 gap-y-4">
          <p className="font-medium md:text-lg lg:text-xl max-w-md">
            With over two decades of hands-on experience specializing in tree
            work, Treelawn stands as a trusted one-man operation committed to
            excellence in outdoor services.
          </p>
          <div className="flex gap-4">
            <a href="#services" className="primary-btn">
              Learn More
            </a>{" "}
            <a href="#contact" className="secondary-btn">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
