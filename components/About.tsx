import React from "react";
import AboutCollage from "./AboutCollage";

const About = () => {
  return (
    <section id="about" className="min-h-[90vh] py-24">
      <h2 className="h2 text-mucky-800">Who we are</h2>
      <div className="rm-container grid lg:grid-cols-2 items-center justify-evenly gap-12">
        {/* images & logo */}
        <AboutCollage />

        {/* about us info */}
        <div className="flex-1 flex flex-col items-start gap-4 max-w-lg">
          <h3 className="uppercase text-2xl md:text-3xl text-mucky-900/80 font-extrabold tracking-wide border-l-8 border-apple-800/90 pl-2">
            How I got started in this business
          </h3>
          <p className="pl-2">
            My Name is Martin, a solo operator with over two decades of hands-on
            experience in the arboriculture and landscaping industry. I bring a
            personal touch to every project, ensuring attention to detail and a
            focus on customer satisfaction.
          </p>
          <p className="pl-2">
            With a passion for preserving the natural beauty of outdoor spaces,
            Treelawn combines expertise, professional-grade equipment and
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
