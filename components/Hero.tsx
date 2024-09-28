import React from "react";
import ToolIcons from "@/components/ToolIcons";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center text-white pt-20 h-[90vh] bg-[url('../public/images/garden.webp')] bg-cover bg-center"
    >
      <div className="rm-container w-full flex flex-col lg:flex-row items-start lg:items-center justify-evenly gap-x-12 gap-y-12 text-balance">
        <div className="flex-1 flex flex-col items-start justify-center gap-y-4 max-w-md md:max-w-lg lg:max-w-2xl">
          {/* <div className="hidden md:flex">
            <ToolIcons />
          </div> */}
          <h1 className="uppercase text-6xl md:text-7xl xl:text-8xl font-extrabold tracking-wide">
            shape your land the <span className="text-apple-600">right</span>{" "}
            way
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-x-12 gap-y-6 max-w-lg">
          <div className="flex ">
            <ToolIcons />
          </div>
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
    </section>
  );
};

export default Hero;
