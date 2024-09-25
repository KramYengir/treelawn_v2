import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="h-[95vh] py-24">
      <h2 className="uppercase text-6xl text-mucky-900 font-bold tracking-wide text-center pb-24 mx-auto">
        About us
      </h2>
      <div className="rm-container flex flex-wrap items-center justify-between gap-12">
        {/* images & logo */}
        <div className="relative grid grid-cols-2 max-w-lg aspect-4/3 overflow-hidden">
          <div className="overflow-hidden border-4 border-white bg-gradient-to-br from-apple-800/80 to-apple-950 rounded-2xl ">
            <img
              src="/images/lawnmower-opac.png"
              alt="simple lawnmower graphic"
            />
          </div>
          <div className="overflow-hidden border-4 border-white bg-gradient-to-bl from-apple-800/80 to-apple-950 rounded-2xl ">
            <img src="/images/digger-opac.png" alt="simple digger graphic" />
          </div>
          <div className="overflow-hidden border-4 border-white bg-gradient-to-tr from-apple-800/80 to-apple-950 rounded-2xl ">
            <img
              src="/images/clippers-opac.png"
              alt="simple clippers graphic"
            />
          </div>
          <div className="overflow-hidden border-4 border-white bg-gradient-to-tl from-apple-800/80 to-apple-950 rounded-2xl ">
            <img
              src="/images/chainsaw-opac.png"
              alt="simple chainsaw graphic"
            />
          </div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[40%] rounded-full overflow-hidden">
            <img src="/images/logo.jpg" alt="treelawn logo" />
          </div>
        </div>

        {/* about us info */}
        <div className="flex-1 flex flex-col items-start gap-4 max-w-lg">
          <h3 className="uppercase text-2xl text-apple-900 font-bold tracking-wide">
            What Treelawn represents
          </h3>
          <p>
            At Treelawn, we pride ourselves on over 20 years of dedicated
            experience in the arboriculture and landscaping industry. As a solo
            operator, I bring a personal touch to every project, ensuring
            attention to detail and a focus on customer satisfaction.
          </p>
          <p>
            With a passion for preserving the natural beauty of outdoor spaces,
            Treelawn combines expertise, professional-grade equipment, and
            industry certification to deliver exceptional results. Whether it's
            tree maintenance, garden renovation, or pathway clearing, you can
            trust Treelawn for expert service and lasting quality.
          </p>
          <a href="#contact" className="primary-btn">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
