export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 mt-16 md:mt-20 lg:mt-24">
      {/* Divider Line */}
      <div className="w-screen h-[1px] bg-[#ABB2BF]" />

      {/* Main Footer Content */}
      <div className="w-full max-w-[1324px] flex flex-col sm:flex-row sm:items-center md:flex-row justify-between gap-8 px-4 md:px-10 md:gap-12 mt-8 sm:mt-10">
        {/* Left Section - Info */}
        <div className="flex items-start justify-start flex-col gap-4 sm:gap-5">
          {/* Logo, Name & Email Row */}
          <div className="flex sm:flex-row items-center gap-3 sm:gap-0">
            <div className="flex items-center">
              <img className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" src="/profile3.png" alt="" />
              <h1 className="text-lg sm:text-xl text-white font-fira-code mr-4 sm:mr-8">Kartik</h1>
            </div>
            <p className="text-[12px] sm:text-base text-[#ABB2BF] font-fira-code break-all sm:break-normal">
              agarwalkartik704@gmail.com
            </p>
          </div>

          {/* Tagline */}
          <div className="text-white text-base sm:text-lg font-fira-code">
            <h1>Front-end and Back-end developer</h1>
          </div>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex flex-col justify-center items-center gap-2 h-1">
          <h1 className="text-xl sm:text-2xl text-[#C778DD] font-fira-code sm:mb-5">Media</h1>
          <div className="flex items-center gap-4 sm:gap-5 mb-">
            <a
              href="https://github.com/scripter-kartik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img className="w-6 h-6 sm:w-7 sm:h-7" src="/github.png" alt="GitHub" />
            </a>
            <a
              href="https://x.com/dev_kartk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img className="w-6 h-6 sm:w-7 sm:h-7" src="/twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p
        style={{ wordSpacing: "5px" }}
        className="text-sm sm:text-base md:text-lg mt-10 sm:mt-12 md:mt-16 font-fira-code text-[#ABB2BF] mb-4 sm:mb-5 text-center"
      >
        © Copyright 2025. Made by Kartik
      </p>
    </div>
  );
}