import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-[90vh] py-24">
      <h2 className="h2 text-mucky-800">Who we are</h2>
      <div className="rm-container grid lg:grid-cols-2 items-center justify-evenly gap-12">
        {/* images & logo */}
        <div className="relative grid grid-cols-2 max-w-lg aspect-4/3 overflow-hidden mx-auto">
          <div className="overflow-hidden border-4 border-mucky-50 rounded-2xl ">
            <img
              src="/images/guy-clipping.jpg"
              alt="simple lawnmower graphic"
            />
          </div>
          <div className="overflow-hidden border-4 border-mucky-50 rounded-2xl ">
            <img src="/images/tree-cutting.jpg" alt="simple digger graphic" />
          </div>
          <div className="overflow-hidden border-4 border-mucky-50 rounded-2xl ">
            <img src="/images/digging.webp" alt="simple clippers graphic" />
          </div>
          <div className="overflow-hidden border-4 border-mucky-50 rounded-2xl ">
            <img src="/images/woodcutter.jpg" alt="simple chainsaw graphic" />
          </div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[40%] bg-mucky-50 rounded-full overflow-hidden">
            <img src="/images/logo-v3.png" alt="treelawn logo" />
          </div>
        </div>

        {/* about us info */}
        <div className="flex-1 flex flex-col items-start gap-4 max-w-lg">
          <h3 className="uppercase text-2xl md:text-3xl text-mucky-900/80 font-extrabold tracking-wide border-l-8 border-apple-800/90 pl-2">
            How I got started in this business
          </h3>
          <p className="pl-2">
            At Treelawn, we pride ourselves on over 20 years of dedicated
            experience in the arboriculture and landscaping industry. As a solo
            operator, I bring a personal touch to every project, ensuring
            attention to detail and a focus on customer satisfaction.
          </p>
          <p className="pl-2">
            With a passion for preserving the natural beauty of outdoor spaces,
            Treelawn combines expertise, professional-grade equipment, and
            industry certification to deliver exceptional results. Whether it's
            tree maintenance, garden renovation, or pathway clearing, you can
            trust Treelawn for expert service and lasting quality.
          </p>
          <a href="#contact" className="primary-btn ml-2">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
