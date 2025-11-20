"use client"

import Navbar from "@/components/Navbar"

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;

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
      <div className="w-full max-w-[1324px] mt-20 sm:mt-24 md:mt-28 lg:mt-40 xl:mt-30 mb-24 sm:mb-28 md:mb-48 lg:mb-40 flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-20 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Text Content */}
        <div className="flex flex-col items-center justify-center text-balance gap-10 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-20 w-full sm:w-[700px] sm:p-10 h-[300px] lg:w-auto">
          <h1
            style={{ wordSpacing: "10px" }}
            className="w-full max-w-[700px] text-white text-[24px] sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-semibold leading-snug sm:leading-snug md:leading-tight"
          >
            Kartik is a <span className="text-[#C778DD]">front-end</span> and{" "}
            <span className="text-[#C778DD]">back-end</span> developer
          </h1>

          <div className="flex flex-col gap-10 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 w-full">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] w-full max-w-[600px] text-[#ABB2BF] font-fira-code">
              He crafts responsive websites where technologies meet creativity
            </p>
            <button
              onClick={() => scrollToSection('contacts')}
              className="border-[#C778DD] border-2 text-white w-full sm:w-[180px] md:w-[200px] h-[45px] md:h-[50px] px-3 flex items-center justify-center text-base sm:text-lg md:text-xl font-fira-code hover:bg-[#C778DD] hover:bg-opacity-10 transition-colors"
            >
              Contact me !!
            </button>
          </div>
        </div>

        {/* Profile Image & Status */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 w-full lg:w-auto mt-6 sm:mt-8 lg:mt-8 ">
          <img
            className="w-full max-w-[350px] sm:max-w-[300px] md:max-w-[300px] lg:max-w-[600px] xl:max-w-[600px] h-auto"
            src="/profile.png"
            alt="Kartik Profile"
          />
          <div
            style={{ wordSpacing: "8px" }}
            className="text-md sm:text-sm md:text-sm lg:text-lg xl:text-xl text-[#ABB2BF] border-2 border-[#ABB2BF] p-2 md:p-3 w-full max-w-[350px] sm:max-w-[300px] md:max-w-[280px] lg:max-w-[420px] xl:w-[470px] text-center"
          >
            currently working on{" "}
            <span className="text-[#C778DD]">Portfolio</span>
          </div>
        </div>
      </div>


      {/* Marquee Section */}
      <div className="dual-border absolute border-[#ABB2BF] p-2 sm:p-2.5 md:p-3 w-screen h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] left-0 bottom-10 overflow-hidden flex items-center z-10 bg-black">
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