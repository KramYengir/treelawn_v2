"use client";
import { useState } from "react";
import Link from "next/link";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full  bg-neutral-950/60 backdrop-blur-md text-white shadow-lg z-50">
      <div className="rm-container flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="#hero"
          className={`${merriweather.className} relative text-2xl font-bold tracking-wider`}
        >
          <p>
            Tree<span className="text-apple-600">Lawn</span>
          </p>
          <img
            src="/images/grass.png"
            alt="grass"
            className="absolute right-0 bottom-0 translate-x-[100%] translate-y-[10%] h-10 w-auto"
          />
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#about" className="hover:text-green-400">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-green-400">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`md:hidden bg-mucky-50/90 text-mucky-950 font-medium w-full transition-all duration-300 ease-in-out overflow-hidden shadow-lg ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-6">
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
