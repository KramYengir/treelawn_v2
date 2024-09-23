import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="h-[95vh]">
        <h2>About</h2>
      </section>
      <AboutSection />
    </div>
  );
};

export default HomePage;
