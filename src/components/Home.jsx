"use client";

import Navbar from "@/components/Navbar";
import {GitHubCalendar} from "react-github-calendar";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

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

  return (
    <div
      id="home"
      className="flex flex-col items-center min-h-screen overflow-x-hidden bg-transparent"
    >
      {/* Social Bar */}
      <div className="hidden 2xl:flex absolute left-3 xl:left-5 top-[-100px] gap-3 w-[32px] flex-col items-center z-[99999] pt-[100px]">
        <img
          className="w-[4px] h-[80px] xl:w-[6px] xl:h-[191px]"
          src="/VerticalLine.png"
          alt=""
        />

        <a
          href="https://github.com/scripter-kartik"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-[26px] h-[26px] xl:w-[32px] xl:h-[32px]"
            src="/github.png"
            alt="GitHub"
          />
        </a>

        <a
          href="https://x.com/dev_kartk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-[26px] h-[26px] xl:w-[32px] xl:h-[32px]"
            src="/twitter.png"
            alt="Twitter"
          />
        </a>
      </div>

      <Navbar />

      {/* Hero Section */}
      <div className="w-full max-w-[1324px] mt-20 sm:mt-24 md:mt-20 lg:mt-32 xl:mt-28 2xl:mt-40 flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-14 md:gap-16 lg:gap-12 xl:gap-16 2xl:gap-[150px] px-4 sm:px-6 md:px-8 lg:px-8 xl:px-0 pt-4 sm:pt-6">
        <div className="flex flex-col items-center lg:items-start justify-center gap-6 w-full lg:w-auto order-2 lg:order-1">
          
          {/* FIXED: removed whitespace-nowrap */}
          <h1 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] xl:text-[44px] 2xl:text-[60px] font-semibold text-center lg:text-left bg-gradient-to-r from-white to-[#C778DD] bg-clip-text text-transparent leading-tight">
            Full-stack products, shipped clean.
          </h1>

          <div className="flex flex-col gap-4 w-full items-center lg:items-start">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#ABB2BF] font-fira-code text-center lg:text-left leading-relaxed">
              Passionate about crafting seamless web experiences.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#ABB2BF] font-fira-code text-center lg:text-left leading-relaxed">
              Clean on the front. Solid on the back.
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#ABB2BF] font-fira-code text-center lg:text-left leading-relaxed mb-5">
              Turning ideas into products that actually work.
            </p>

            {/* FIXED: buttons responsive */}
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
                className="w-full sm:w-[180px] md:w-[200px] lg:w-[260px] h-[44px] sm:h-[48px] md:h-[52px] bg-gradient-to-r from-[#C778DD] to-white p-[2px] flex items-center justify-center text-sm sm:text-base md:text-lg font-fira-code hover:shadow-[0_0_20px_#C778DD55]"
              >
                <span className="w-full h-full bg-black flex items-center justify-center px-3 text-white">
                  View our Work
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="mt-12 w-full max-w-[1324px] mx-auto flex items-center justify-start gap-4 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-0">
        <div className="flex items-center gap-2">
          <img className="w-3 h-3 animate-pulse" src="/greendot.png" alt="" />
          <p className="text-gray-400 text-sm sm:text-base">
            Available for opportunities
          </p>
        </div>
      </div>

      {/* GitHub Calendar */}
      <div className="w-full max-w-[1324px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-0 mt-10 mb-16">
        <div className="border border-gray-800 rounded-xl p-4 sm:p-6 bg-transparent overflow-x-auto">
          <div className="flex items-center justify-between mb-6 min-w-[300px]">
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
            <p className="text-gray-500 font-fira-code text-sm">
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