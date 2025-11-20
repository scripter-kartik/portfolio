"use client"

import Navbar from "@/components/Navbar"

export default function Home() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = -120; // adjust this number (navbar height)
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="home" className="flex flex-col items-center h-screen overflow-x-hidden">
      <div className="absolute left-5 gap-3 w-[32px] h-[311px] flex flex-col items-center">
        <img className="w-[6px] h-[191px]" src="/VerticalLine.png" alt="" />
        <a href="https://github.com/scripter-kartik" target="_blank">
          <img className="w-[32px] h-[32px]" src="/github.png" alt="" />
        </a>
        <a href="https://x.com/dev_kartk" target="_blank">
          <img className="w-[32px] h-[32px]" src="/twitter.png" alt="" />
        </a>
      </div>
      <Navbar />
      <div className="w-[1324px] h-[423px] mt-52 flex items-center gap-20">
        <div className="flex flex-col items-start gap-20">
          <div
            style={{ wordSpacing: "20px" }}
            className="w-[700px] h-[100px] text-white text-5xl font-semibold leading-tight"
          >
            Kartik is a <span className="text-[#C778DD]">front-end</span> and{" "}
            <span className="text-[#C778DD]">back-end</span> developer
          </div>
          <div className="flex flex-col gap-10">
            <div className="text-[20px] w-[600px] text-[#ABB2BF] font-fira-code">
              He crafts responsive websites where technologies meet creativity
            </div>
            <button
              onClick={() => scrollToSection('contacts')}
              className="border-[#C778DD] border-2 text-white w-[200px] h-[50px] px-3 flex items-center justify-center text-xl font-fira-code"
            >
              Contact me !!
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-[600px] h-[500px]" src="/profile.png" alt="" />
          <div
            style={{ wordSpacing: "10px" }}
            className="text-xl text-[#ABB2BF] border-2 border-[#ABB2BF] p-3 w-[470px] text-center"
          >
            currently working on{" "}
            <span className="text-[#C778DD]">Portfolio</span>
          </div>
        </div>
      </div>
      <div className="absolute dual-border border-[#ABB2BF] p-3 w-screen h-[100px] left-0 bottom-2 overflow-hidden flex items-center">
        <div className="marquee">
          <div className="track">
            <span className="text-[#C778DD]">// Building simple and clean websites — Making things easy to use — Focusing on clarity — </span>
            <span className="text-[#ABB2BF]">// Turning ideas into real projects — Keeping everything smooth — Caring about small details — </span>
            <span className="text-[#C778DD]">// Writing organized code — Improving designs — Making interactions feel natural — </span>
            <span className="text-[#ABB2BF]">// Learning new things every day — Getting better with each project — Keeping work neat and simple — </span>

          </div>
        </div>
      </div>


    </div>
  );
}