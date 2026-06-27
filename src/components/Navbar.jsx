"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const navLinks = [
    { id: "home", label: "home" },
    { id: "works", label: "works" },
    { id: "about-me", label: "about-me" },
    { id: "contacts", label: "contacts" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
      let current = "home";
      for (const section of sections) {
        if (window.scrollY >= section.offsetTop - 160) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
        scrolled
          ? "bg-[#05070c]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-center py-2 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1324px] h-[52px] sm:h-[58px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity group"
            aria-label="Go to top"
          >
            <div className="relative">
              <img
                src="/kartikLabsLogo.png"
                className="w-8 h-8 rounded-full border border-[#C778DD]/30 group-hover:border-[#C778DD]/60 transition-colors duration-300"
                alt="Kartik Logo"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#05070c] animate-pulse" />
            </div>
            <span className="font-fira-code font-bold text-white text-base sm:text-lg tracking-tight">
              Kartik
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative flex items-center gap-1 px-3.5 py-2 rounded-lg font-fira-code text-sm transition-all duration-200 group ${
                  activeSection === link.id
                    ? "text-white bg-[#C778DD]/10"
                    : "text-[#ABB2BF] hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <span
                  className={`text-[#C778DD] text-xs transition-opacity duration-200 ${
                    activeSection === link.id ? "opacity-100" : "opacity-30 group-hover:opacity-70"
                  }`}
                >
                  #
                </span>
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#C778DD]" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-[5px] w-9 h-9 justify-center items-center rounded-lg hover:bg-white/[0.05] transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-[#ABB2BF] rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-5 h-0.5 bg-[#ABB2BF] rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-[#ABB2BF] rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#05070c]/98 backdrop-blur-2xl border-b border-white/[0.06] transition-all duration-400 overflow-hidden ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col py-4 px-6 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`flex items-center gap-2.5 px-3 py-3 rounded-xl font-fira-code text-lg transition-all duration-200 text-left ${
                activeSection === link.id
                  ? "text-white bg-[#C778DD]/10 border border-[#C778DD]/20"
                  : "text-[#ABB2BF] hover:text-white hover:bg-white/[0.03]"
              }`}
            >
              <span className="text-[#C778DD]">#</span>
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
