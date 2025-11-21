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
      {/* Social Links - Hidden on mobile, visible on md+ */}
      <div className="hidden 2xl:flex absolute left-3 lg:left-5 top-[-100px] gap-3 w-[32px] flex-col items-center z-[99999] pt-[100px]">
        <img className="w-[4px] h-[80px] lg:w-[6px] lg:h-[191px]" src="/VerticalLine.png" alt="" />
        <a href="https://github.com/scripter-kartik" target="_blank" rel="noopener noreferrer">
          <img className="w-[26px] h-[26px] lg:w-[32px] lg:h-[32px] hover:opacity-80 transition-opacity" src="/github.png" alt="GitHub" />
        </a>
        <a href="https://x.com/dev_kartk" target="_blank" rel="noopener noreferrer">
          <img className="w-[26px] h-[26px] lg:w-[32px] lg:h-[32px] hover:opacity-80 transition-opacity" src="/twitter.png" alt="Twitter" />
        </a>
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="max-w-[1324px] mt-24 sm:mt-28 md:mt-24 lg:mt-48 xl:mt-40 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-16 xl:gap-20 2xl:gap-[150px] px-4 sm:px-8 md:px-12 lg:px-8 xl:px-0">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-center justify-center text-balance gap-8 sm:gap-10 md:gap-6 lg:gap-16 xl:gap-12 w-full sm:w-full md:w-400px lg:w-auto">
          <h1
            style={{ wordSpacing: "10px" }}
            className="w-full max-w-[700px] text-white text-[24px] sm:text-[28px] md:text-[30px] lg:text-5xl xl:text-5xl 2xl:text-[55px] font-semibold leading-snug sm:leading-snug md:leading-tight text-center md:text-center lg:text-left"
          >
            Kartik is a <span className="text-[#C778DD]">front-end</span> and{" "}
            <span className="text-[#C778DD]">back-end</span> developer
          </h1>

          <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-8 xl:gap-12 w-full items-center md:items-center lg:items-start">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] 2xl:text-[25px] w-full max-w-[600px] text-[#ABB2BF] font-fira-code text-center md:text-center lg:text-left">
              He crafts responsive websites where technologies meet creativity
            </p>
            <button
              onClick={() => scrollToSection('contacts')}
              className="border-[#C778DD] border-2 text-white w-full sm:w-[200px] md:w-[220px] h-[48px] md:h-[52px] px-3 flex items-center justify-center text-base sm:text-lg md:text-xl font-fira-code hover:bg-[#C778DD] hover:bg-opacity-10 transition-colors"
            >
              Contact me !!
            </button>
          </div>
        </div>

        {/* Profile Image & Status */}
        <div className="flex flex-col items-center gap-3 sm:gap-3 md:gap-4 w-full md:w-auto lg:w-auto mt-4 sm:mt-6 md:mt-0 lg:mt-8">
          <img
            className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[350px] lg:max-w-[600px] xl:max-w-[600px] h-auto"
            src="/profile.png"
            alt="Kartik Profile"
          />
          <div
            style={{ wordSpacing: "8px" }}
            className="text-sm sm:text-base md:text-base lg:text-lg xl:text-xl text-[#ABB2BF] border-2 border-[#ABB2BF] p-2 md:p-3 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[420px] xl:w-[470px] text-center"
          >
            currently working on{" "}
            <span className="text-[#C778DD]">Portfolio</span>
          </div>
        </div>
      </div>


      {/* Marquee Section */}
      <div className="dual-border fixed border-[#ABB2BF] p-1 sm:p-2.5 md:p-3 w-screen h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] left-0 bottom-[0.2px] overflow-hidden flex items-center z-10 bg-black">
        <div className="marquee">
          <div className="track text-xl">
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