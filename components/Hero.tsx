import React from "react";
import ToolIcons from "@/components/ToolIcons";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center text-mucky-50 pt-20 min-h-[90vh] bg-[url('../public/images/garden-sm.webp')] md:bg-[url('../public/images/garden.webp')] bg-cover bg-center"
    >
      <div className="rm-container w-full flex flex-col lg:flex-row items-start lg:items-center justify-evenly gap-x-12 gap-y-12 text-balance">
        <div className="flex-1 flex flex-col items-start justify-center gap-y-4 max-w-md md:max-w-lg lg:max-w-3xl">
          <h1
            className="uppercase text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-wide"
            aria-label="excellence in tree care and landscaping"
          >
            excellence in <span className="text-apple-600">tree care</span> &{" "}
            <span className="text-apple-600">landscaping</span>{" "}
          </h1>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-x-12 gap-y-6 max-w-lg">
          <p className="text-balance font-medium tracking-wide md:text-lg lg:text-xl max-w-md">
            With over two decades of hands-on experience in tree care and
            landscaping, TreeLawn stands as a trusted one-man operation
            dedicated to delivering excellence in outdoor services.
          </p>
          <div className="flex gap-4 pb-12 md:pb-0">
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
