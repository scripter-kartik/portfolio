export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center lg:mb-[100px] md:mb-[80px] sm:mb-[70px] mb-[60px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-12 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24">
      <div className="w-screen h-[1px] bg-[#ABB2BF]" />

      <div className="w-full max-w-[1324px] flex flex-col sm:flex-row sm:items-start md:items-center justify-between gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-10 mt-6 sm:mt-8 md:mt-10">        <div className="flex items-start justify-start flex-col gap-3 sm:gap-4 md:gap-5 w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
            <div className="flex items-center">
              <img className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" src="/profile3.png" alt="" />
              <h1 className="text-base sm:text-lg md:text-xl text-white font-fira-code mr-4 sm:mr-6 md:mr-8">Kartik</h1>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-[#ABB2BF] font-fira-code break-all sm:break-normal">
              agarwalkartik704@gmail.com
            </p>
          </div>

          <div className="text-white text-sm sm:text-base md:text-lg font-fira-code">
            <h1>Front-end and Back-end developer</h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <h1 className="text-lg sm:text-xl md:text-2xl text-[#C778DD] font-fira-code mb-2 sm:mb-3 md:mb-5">Media</h1>
          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href="https://github.com/scripter-kartik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" src="/github.png" alt="GitHub" />
            </a>
            <a
              href="https://x.com/dev_kartk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" src="/twitter.png" alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      <p
        style={{ wordSpacing: "5px" }}
        className="text-xs sm:text-sm md:text-base lg:text-lg mt-8 sm:mt-10 md:mt-12 lg:mt-16 font-fira-code text-[#ABB2BF] mb-4 sm:mb-5 text-center px-4"
      >
        © Copyright 2025. Made by Kartik
      </p>
    </div>
  );
}