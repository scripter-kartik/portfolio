"use client";
import React, { useState, useEffect } from "react";
import { useUISound } from "@/hooks/useUISound";
import MenuPhysicsBg from "@/components/MenuPhysicsBg";
const Navbar = () => {
  const { playClick } = useUISound();
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
    playClick();
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
        scrolled || isMenuOpen
          ? "bg-[#05070c] border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-center py-2 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[1324px] h-[52px] sm:h-[58px] flex items-center justify-between">
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
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#C778DD] border-2 border-[#05070c] animate-pulse" />
            </div>
            <span className="font-fira-code font-bold text-white text-base sm:text-lg tracking-tight">
              Kartik
            </span>
          </button>
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
          <button
            onClick={() => { playClick(); setIsMenuOpen((v) => !v); }}
            className="lg:hidden flex flex-col gap-[5px] w-9 h-9 justify-center items-center rounded-lg hover:bg-white/[0.05] transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-[#ABB2BF] rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-5 h-0.5 bg-[#ABB2BF] rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-[#ABB2BF] rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Premium Mobile Menu Slide-in Panel */}
      <div
        className={`lg:hidden fixed top-[52px] sm:top-[58px] left-0 right-0 bottom-0 bg-[#05070c] border-t border-white/[0.05] transition-all duration-300 flex flex-col p-6 gap-6 z-40 ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <MenuPhysicsBg />

        {/* Interactive Search Bar Widget */}
        <button
          onClick={() => {
            playClick();
            setIsMenuOpen(false);
            window.dispatchEvent(new CustomEvent("toggle-command-menu"));
          }}
          className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-white/[0.08] bg-[#070A11]/60 text-xs font-fira-code text-[#ABB2BF] hover:text-white transition-all active:scale-[0.98] mt-2 relative z-10"
        >
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#C778DD]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span>Search or run commands...</span>
          </div>
          <span className="text-[10px] text-white/30 border border-white/10 px-1.5 py-0.5 rounded font-sans">⌘K</span>
        </button>

        {/* Links list */}
        <nav className="flex flex-col gap-2 flex-grow relative z-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection(link.id);
              }}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-fira-code text-base transition-all duration-200 text-left border ${
                activeSection === link.id
                  ? "text-white bg-[#C778DD]/10 border-[#C778DD]/30 shadow-[0_0_20px_rgba(199,120,221,0.05)]"
                  : "text-[#ABB2BF] border-transparent hover:text-white hover:bg-white/[0.03]"
              }`}
            >
              <span className="text-[#C778DD] opacity-50">#</span>
              {link.label}
            </button>
          ))}
        </nav>

        {/* Bottom Social Handles */}
        <div className="flex items-center justify-center gap-6 pt-6 border-t border-white/[0.05] pb-6 relative z-10">
          <a href="https://github.com/scripter-kartik" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="GitHub">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1 .07 1.54 1.04 1.54 1.04.9 1.53 2.34 1.1 2.9.84.1-.64.35-1.1.64-1.35-2.22-.25-4.56-1.12-4.56-4.97 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.28.1-2.66 0 0 .85-.27 2.78 1.03A9.62 9.62 0 0 1 12 6.85c.85 0 1.7.11 2.5.33 1.93-1.3 2.78-1.03 2.78-1.03.56 1.38.2 2.41.1 2.66.64.7 1.03 1.61 1.03 2.71 0 3.86-2.35 4.72-4.59 4.97.36.3.69.88.69 1.79v2.65c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/kartik-agarwal-747289376/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.8h2.9V19H5.5V9.8Zm4.72 0H13v1.25h.04c.4-.75 1.38-1.54 2.83-1.54 3.03 0 3.59 2 3.59 4.58V19h-2.9v-4.35c0-1.04-.02-2.38-1.45-2.38-1.46 0-1.68 1.13-1.68 2.3V19h-2.9V9.8Z" />
            </svg>
          </a>
          <a href="https://x.com/0xkar7ik" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="X">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M18.9 3H22l-6.8 7.76L23 21h-6.1l-4.78-6.23L6.66 21H3.54l7.28-8.3L3 3h6.25l4.32 5.74L18.9 3Zm-1.07 16.2h1.72L8.3 4.72H6.45L17.83 19.2Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;