"use client";

import Navbar from "@/components/Navbar";
import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  const calendarLink =
    "https://calendar.google.com/calendar/u/0/r/eventedit?text=Project%20Call%20with%20Kartik%20Labs&details=Let%20us%20discuss%20your%20project%20requirements.";

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const actionButtonClass =
    "h-11 w-11 rounded-xl border border-[#1F2532] bg-[#070A11] text-[#9CA3AF] hover:text-white hover:border-[#C778DD80] hover:shadow-[0_0_16px_#C778DD33] transition-all duration-200 flex items-center justify-center flex-shrink-0";

  const TooltipButton = ({ text, children }) => (
    <div className="relative group flex overflow-visible">
      {children}

      <div className="pointer-events-none absolute left-1/2 top-14 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100 z-[9999]">
        <div className="whitespace-nowrap rounded-lg border border-[#C778DD80] bg-[#070A11] px-3 py-1 text-xs text-white shadow-[0_0_16px_#C778DD33]">
          {text}
        </div>
      </div>
    </div>
  );

  return (
    <div
      id="home"
      className="relative flex flex-col items-center min-h-screen overflow-x-hidden bg-transparent"
    >
      <Navbar />
      <div className="w-full max-w-[1324px] mt-28 sm:mt-32 md:mt-36 lg:mt-32 xl:mt-28 2xl:mt-40 flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-12 md:gap-14 lg:gap-12 xl:gap-16 2xl:gap-[150px] px-6 sm:px-8 lg:px-10 pt-4 sm:pt-6">
        <div className="flex flex-col items-center lg:items-start justify-center gap-6 w-full lg:w-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[36px] xl:text-[44px] 2xl:text-[60px] font-semibold text-center lg:text-left bg-gradient-to-r from-white to-[#C778DD] bg-clip-text text-transparent leading-tight">
            Full-stack products, shipped clean.
          </h1>

          <div className="flex flex-col gap-4 w-full items-center lg:items-start">
            <p className="text-base sm:text-lg md:text-xl text-[#ABB2BF] font-fira-code text-center lg:text-left leading-relaxed max-w-[62ch]">
              Passionate about crafting seamless web experiences.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#ABB2BF] font-fira-code text-center lg:text-left leading-relaxed max-w-[62ch]">
              Clean on the front. Solid on the back.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-[#ABB2BF] font-fira-code text-center lg:text-left leading-relaxed mb-5 max-w-[62ch]">
              Turning ideas into products that actually work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => scrollToSection("contacts")}
                className="w-full sm:w-[180px] md:w-[200px] lg:w-[260px] h-[44px] sm:h-[48px] md:h-[52px] bg-gradient-to-r from-white to-[#C778DD] p-[2px] flex items-center justify-center text-sm sm:text-base md:text-lg font-fira-code hover:shadow-[0_0_20px_#C778DD55]"
              >
                <span className="w-full h-full bg-[#050505] flex items-center justify-center px-3 text-white">
                  Start your Project
                </span>
              </button>

              <button
                onClick={() => scrollToSection("works")}
                className="hidden sm:flex w-full sm:w-[180px] md:w-[200px] lg:w-[260px] h-[44px] sm:h-[48px] md:h-[52px] bg-gradient-to-r from-[#C778DD] to-white p-[2px] items-center justify-center text-sm sm:text-base md:text-lg font-fira-code hover:shadow-[0_0_20px_#C778DD55]"
              >
                <span className="w-full h-full bg-black flex items-center justify-center px-3 text-white">
                  View our Work
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 w-full max-w-[1324px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="w-full max-w-[960px] mx-auto flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <img className="w-3 h-3 animate-pulse" src="/greendot.png" alt="" />
            <p className="text-gray-400 text-sm sm:text-base">
              Available for opportunities
            </p>
          </div>

          <div className="w-full sm:w-auto overflow-visible">
            <div className="min-w-max flex items-center justify-center sm:justify-start gap-2 overflow-visible">
              <TooltipButton text="View GitHub">
                <a
                  href="https://github.com/scripter-kartik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionButtonClass}
                  aria-label="GitHub"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1 .07 1.54 1.04 1.54 1.04.9 1.53 2.34 1.1 2.9.84.1-.64.35-1.1.64-1.35-2.22-.25-4.56-1.12-4.56-4.97 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.28.1-2.66 0 0 .85-.27 2.78 1.03A9.62 9.62 0 0 1 12 6.85c.85 0 1.7.11 2.5.33 1.93-1.3 2.78-1.03 2.78-1.03.56 1.38.2 2.41.1 2.66.64.7 1.03 1.61 1.03 2.71 0 3.86-2.35 4.72-4.59 4.97.36.3.69.88.69 1.79v2.65c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
                  </svg>
                </a>
              </TooltipButton>

              <TooltipButton text="Connect on LinkedIn">
                <a
                  href="https://www.linkedin.com/in/kartik-agarwal-747289376/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionButtonClass}
                  aria-label="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.8h2.9V19H5.5V9.8Zm4.72 0H13v1.25h.04c.4-.75 1.38-1.54 2.83-1.54 3.03 0 3.59 2 3.59 4.58V19h-2.9v-4.35c0-1.04-.02-2.38-1.45-2.38-1.46 0-1.68 1.13-1.68 2.3V19h-2.9V9.8Z" />
                  </svg>
                </a>
              </TooltipButton>

              <TooltipButton text="Follow on X">
                <a
                  href="https://x.com/0xkar7ik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionButtonClass}
                  aria-label="X"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.9 3H22l-6.8 7.76L23 21h-6.1l-4.78-6.23L6.66 21H3.54l7.28-8.3L3 3h6.25l4.32 5.74L18.9 3Zm-1.07 16.2h1.72L8.3 4.72H6.45L17.83 19.2Z" />
                  </svg>
                </a>
              </TooltipButton>

              <TooltipButton text="Send Email">
                <a
                  href="mailto:agarwalkartik704@gmail.com"
                  className={actionButtonClass}
                  aria-label="Email"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                    <path d="m4.5 7 7.5 6 7.5-6" />
                  </svg>
                </a>
              </TooltipButton>

              <TooltipButton text="View Resume">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionButtonClass}
                  aria-label="Resume"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M8 3.5h6l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5Z" />
                    <path d="M14 3.5V8h4" />
                    <path d="M9 12h6M9 15h6M9 18h4" />
                  </svg>
                </a>
              </TooltipButton>

              <TooltipButton text="Schedule a Call">
                <a
                  href={calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={actionButtonClass}
                  aria-label="Schedule"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
                    <path d="M8 3.5v4M16 3.5v4M3.5 9.5h17" />
                  </svg>
                </a>
              </TooltipButton>

              <button
                type="button"
                onClick={() => scrollToSection("works")}
                className="hidden sm:flex h-11 px-5 rounded-xl border border-[#1F2532] bg-[#070A11] text-[#E5E7EB] hover:text-white hover:border-[#C778DD80] hover:shadow-[0_0_16px_#C778DD33] transition-all duration-200 items-center gap-2 font-fira-code text-sm sm:text-base flex-shrink-0"
              >
                <span>View Work</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1324px] mx-auto px-6 sm:px-8 lg:px-10 mt-10 mb-16">
        <div className="w-full max-w-[960px] mx-auto border border-gray-800 rounded-xl p-4 sm:p-6 bg-transparent overflow-x-auto">
          <div className="flex items-center justify-between mb-6 min-w-[260px] gap-3">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-600" />
                <div className="w-3 h-3 rounded-full bg-gray-600" />
                <div className="w-3 h-3 rounded-full bg-gray-600" />
              </div>
              <p className="text-gray-400 font-fira-code text-sm">
                contributions
              </p>
            </div>
            <p className="text-gray-500 font-fira-code text-xs sm:text-sm">
              @scripter-kartik
            </p>
          </div>

          {mounted && (
            <GitHubCalendar
              username="scripter-kartik"
              colorScheme="dark"
              blockSize={12}
              blockMargin={4}
              fontSize={12}
              theme={{
                dark: ["#1a1a2e", "#3d1a4a", "#6b2d82", "#9b3dba", "#C778DD"],
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
