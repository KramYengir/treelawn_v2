import React from "react";
import AboutCollage from "./AboutCollage";

const About = () => {
  return (
    <section id="about" className="min-h-[90vh] py-24">
      <h2 className="h2 text-mucky-800">Our STory</h2>
      <div className="rm-container grid lg:grid-cols-2 items-center justify-evenly gap-12">
        {/* images & logo */}
        <AboutCollage />

        {/* about us info */}
        <div className="flex-1 flex flex-col items-start gap-4 max-w-lg">
          <h3 className="uppercase text-2xl md:text-3xl text-apple-800/90 font-extrabold tracking-wide">
            How I Started TreeLawn
          </h3>
          <p>
            My name is Martin, a solo operator with over two decades of
            experience in arboriculture and landscaping. I started TreeLawn to
            bring my passion for preserving the natural beauty of outdoor spaces
            directly to my clients, providing a personalized touch and attention
            to detail that larger companies often can't offer.
          </p>
          <p>
            With professional-grade equipment, industry certifications, and a
            commitment to customer satisfaction, I ensure that every project,
            from tree maintenance to garden renovations and pathway clearing,
            meets the highest standards. You can trust TreeLawn for expert
            service and lasting quality.
          </p>
          <div className="flex gap-2">
            <a href="/previous-work" className="clear-btn">
              See Previous Work
            </a>
            <a href="#contact" className="primary-btn">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
