"use client"

import Navbar from "@/components/Navbar"

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="home" className="flex flex-col items-center min-h-screen overflow-x-hidden">
      {/* Social Links - Hidden on mobile, visible on 2xl+ */}
      <div className="hidden 2xl:flex absolute left-3 xl:left-5 top-[-100px] gap-3 w-[32px] flex-col items-center z-[99999] pt-[100px]">
        <img className="w-[4px] h-[80px] xl:w-[6px] xl:h-[191px]" src="/VerticalLine.png" alt="" />
        <a href="https://github.com/scripter-kartik" target="_blank" rel="noopener noreferrer">
          <img className="w-[26px] h-[26px] xl:w-[32px] xl:h-[32px] hover:opacity-80 transition-opacity" src="/github.png" alt="GitHub" />
        </a>
        <a href="https://x.com/dev_kartk" target="_blank" rel="noopener noreferrer">
          <img className="w-[26px] h-[26px] xl:w-[32px] xl:h-[32px] hover:opacity-80 transition-opacity" src="/twitter.png" alt="Twitter" />
        </a>
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="max-w-[1324px] mt-20 sm:mt-24 md:mt-20 lg:mt-56 xl:mt-44 2xl:mt-40 flex flex-col lg:flex-row items-center justify-center gap-36 sm:gap-14 md:gap-16 lg:gap-12 xl:gap-16 2xl:gap-[150px] px-4 sm:px-6 md:px-8 lg:px-8 xl:px-0 pt-4 sm:pt-6">
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start justify-center text-balance gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 w-full lg:w-auto order-2 lg:order-1">
          <h1
            style={{ wordSpacing: "10px" }}
            className="w-full max-w-[700px] text-white text-[22px] sm:text-[26px] md:text-[32px] lg:text-[42px] xl:text-[48px] 2xl:text-[55px] font-semibold leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-center lg:text-left"
          >
            Kartik is a <span className="text-[#C778DD]">front-end</span> and{" "}
            <span className="text-[#C778DD]">back-end</span> developer
          </h1>

          <div className="flex flex-col gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10 2xl:gap-12 w-full items-center lg:items-start">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] 2xl:text-[25px] w-full max-w-[600px] text-[#ABB2BF] font-fira-code text-center lg:text-left leading-relaxed">
              He crafts responsive websites where technologies meet creativity
            </p>
            <button
              onClick={() => scrollToSection('contacts')}
              className="border-[#C778DD] border-2 text-white w-full sm:w-[180px] md:w-[200px] lg:w-[220px] h-[44px] sm:h-[48px] md:h-[52px] px-3 flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl font-fira-code hover:bg-[#C778DD] hover:bg-opacity-10 transition-colors"
            >
              Contact me !!
            </button>
          </div>
        </div>

        {/* Profile Image & Status */}
        <div className="flex flex-col items-center gap-3 sm:gap-3 md:gap-4 w-full lg:w-auto order-1 lg:order-2 mt-2 sm:mt-4 md:mt-0">
          <img
            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-[500px] 2xl:max-w-[600px] h-auto"
            src="/profile.png"
            alt="Kartik Profile"
          />
          <div
            style={{ wordSpacing: "8px" }}
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-[#ABB2BF] border-2 border-[#ABB2BF] p-2 sm:p-2.5 md:p-3 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[420px] xl:w-[470px] text-center"
          >
            currently working on{" "}
            <span className="text-[#C778DD]">Portfolio</span>
          </div>
        </div>
      </div>


      {/* Marquee Section */}
      <div className="dual-border fixed border-[#ABB2BF] p-1 sm:p-2 md:p-2.5 lg:p-3 w-screen h-[50px] sm:h-[60px] md:h-[70px] lg:h-[80px] xl:h-[100px] left-0 bottom-[0.2px] overflow-hidden flex items-center z-10 bg-black">
        <div className="marquee">
          <div className="track">
            <span className="text-[#C778DD]">// Building simple and clean websites — Making things easy to use — Focusing on clarity — </span>
            <span className="text-[#ABB2BF]">// Turning ideas into real projects — Keeping everything smooth — Caring about small details — </span>
            <span className="text-[#C778DD]">// Writing organized code — Improving designs — Making interactions feel natural — </span>
            <span className="text-[#ABB2BF]">// Learning new things every day — Getting better with each project — Keeping work neat and simple — </span>
            <span className="text-[#C778DD]">// Building simple and clean websites — Making things easy to use — Focusing on clarity — </span>
            <span className="text-[#ABB2BF]">// Turning ideas into real projects — Keeping everything smooth — Caring about small details — </span>
          </div>
        </div>
      </div>
    </div>
  );
}