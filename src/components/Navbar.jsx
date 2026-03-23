"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -120;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] backdrop-blur-sm">
      <div className="flex justify-center py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1324px] h-[56px] sm:h-[61px] flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/kartikLabsLogo.png"
              className="w-8 h-8 rounded-full"
              alt=""
            />
            <h1 className="font-fira-code font-bold text-white text-lg sm:text-xl md:text-2xl">
              Kartik
            </h1>
          </div>

          <div className="hidden lg:flex gap-6 xl:gap-8 2xl:gap-[32px]">
            <div className="flex items-center gap-1">
              <img
                className="w-[10px] h-[16px] xl:w-[12px] xl:h-[18px]"
                src="/hashtag.png"
                alt=""
              />
              <button
                onClick={() => scrollToSection("home")}
                className="font-fira-code text-[#ABB2BF] text-lg xl:text-xl 2xl:text-2xl hover:text-white transition-colors"
              >
                home
              </button>
            </div>
            <div className="flex items-center gap-1">
              <img
                className="w-[10px] h-[16px] xl:w-[12px] xl:h-[18px]"
                src="/hashtag.png"
                alt=""
              />
              <button
                onClick={() => scrollToSection("works")}
                className="font-fira-code text-[#ABB2BF] text-lg xl:text-xl 2xl:text-2xl hover:text-white transition-colors"
              >
                works
              </button>
            </div>
            <div className="flex items-center gap-1">
              <img
                className="w-[10px] h-[16px] xl:w-[12px] xl:h-[18px]"
                src="/hashtag.png"
                alt=""
              />
              <button
                onClick={() => scrollToSection("about-me")}
                className="font-fira-code text-[#ABB2BF] text-lg xl:text-xl 2xl:text-2xl hover:text-white transition-colors"
              >
                about-me
              </button>
            </div>
            <div className="flex items-center gap-1">
              <img
                className="w-[10px] h-[16px] xl:w-[12px] xl:h-[18px]"
                src="/hashtag.png"
                alt=""
              />
              <button
                onClick={() => scrollToSection("contacts")}
                className="font-fira-code text-[#ABB2BF] text-lg xl:text-xl 2xl:text-2xl hover:text-white transition-colors"
              >
                contacts
              </button>
            </div>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center relative z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#ABB2BF] transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#ABB2BF] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-[#ABB2BF] transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-[56px] sm:top-[61px] left-0 right-0 bg-black border-t border-[#ABB2BF] transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col py-4 px-6 gap-5 sm:gap-6">
          <div className="flex items-center gap-2">
            <img
              className="w-[10px] h-[16px] sm:w-[12px] sm:h-[18px]"
              src="/hashtag.png"
              alt=""
            />
            <button
              onClick={() => scrollToSection("home")}
              className="font-fira-code text-[#ABB2BF] text-lg sm:text-xl hover:text-white transition-colors text-left"
            >
              home
            </button>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="w-[10px] h-[16px] sm:w-[12px] sm:h-[18px]"
              src="/hashtag.png"
              alt=""
            />
            <button
              onClick={() => scrollToSection("works")}
              className="font-fira-code text-[#ABB2BF] text-lg sm:text-xl hover:text-white transition-colors text-left"
            >
              works
            </button>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="w-[10px] h-[16px] sm:w-[12px] sm:h-[18px]"
              src="/hashtag.png"
              alt=""
            />
            <button
              onClick={() => scrollToSection("about-me")}
              className="font-fira-code text-[#ABB2BF] text-lg sm:text-xl hover:text-white transition-colors text-left"
            >
              about-me
            </button>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="w-[10px] h-[16px] sm:w-[12px] sm:h-[18px]"
              src="/hashtag.png"
              alt=""
            />
            <button
              onClick={() => scrollToSection("contacts")}
              className="font-fira-code text-[#ABB2BF] text-lg sm:text-xl hover:text-white transition-colors text-left"
            >
              contacts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
