import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import GallerySection from "@/components/GallerySection";
import Contact from "@/components/Contact";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <GallerySection /> */}
      <Contact />
    </div>
  );
};

export default HomePage;
