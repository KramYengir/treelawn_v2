import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center text-white pt-20 h-[90vh] bg-[url('../public/images/garden.webp')] bg-cover bg-center"
    >
      <div className="rm-container w-full flex flex-col lg:flex-row items-start lg:items-center justify-evenly gap-x-12 gap-y-12 text-balance">
        <div className="flex-1 flex flex-col items-start justify-center gap-y-4 max-w-md md:max-w-lg lg:max-w-2xl">
          <h1 className="uppercase text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-wide">
            shape your land the <span className="text-apple-600">right</span>{" "}
            way
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-x-12 gap-y-4 max-w-lg">
          <p className="font-medium md:text-lg lg:text-xl max-w-md">
            With over two decades of hands-on experience specializing in tree
            work, Treelawn stands as a trusted one-man operation committed to
            excellence in outdoor services.
          </p>
          <div className="flex gap-4">
            <a href="#services" className="clear-btn">
              My Services
            </a>{" "}
            <a href="#contact" className="primary-btn">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-[50%] translate-x-[50%] translate-y-[20%] flex w-full items-center justify-center gap-[4%] px-12">
        <div className="max-w-24 overflow-hidden bg-gradient-to-t from-apple-950 to-apple-800 rounded-2xl border-2 border-mucky-50 shadow-lg ">
          <img
            src="/images/lawnmower-zoom.png"
            alt="simple lawnmower graphic"
          />
        </div>
        <div className="max-w-24 overflow-hidden bg-gradient-to-t from-mucky-950 to-mucky-800 rounded-2xl border-2 border-mucky-50 shadow-lg ">
          <img src="/images/digger-zoom.png" alt="simple digger graphic" />
        </div>
        <div className="max-w-24 overflow-hidden bg-gradient-to-t from-apple-950 to-apple-800 rounded-2xl border-2 border-mucky-50 shadow-lg ">
          <img src="/images/clippers-zoom.png" alt="simple clippers graphic" />
        </div>
        <div className="max-w-24 overflow-hidden bg-gradient-to-t from-mucky-950 to-mucky-800 rounded-2xl border-2 border-mucky-50 shadow-lg ">
          <img src="/images/chainsaw-zoom.png" alt="simple chainsaw graphic" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
