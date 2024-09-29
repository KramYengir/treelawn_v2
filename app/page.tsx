import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import GallerySection from "@/components/GallerySection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <GallerySection /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
