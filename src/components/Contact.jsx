export default function Contact() {
  return (
    <div id="contacts" className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 sm:py-14 md:py-16 lg:py-20 relative">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-2 w-full max-w-[1324px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
        <div className="flex items-center gap-2 md:gap-3 w-full">
          <img className="w-4 h-5 sm:w-5 sm:h-6 md:w-6 md:h-7 flex-shrink-0" src="/hashtag2.png" alt="" />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-fira-code text-white whitespace-nowrap">contacts</h1>
          <img className="w-full h-[2px] max-w-[100px] xs:max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[600px] 2xl:max-w-[1324px] ml-2 sm:ml-4 md:ml-6 lg:ml-10" src="/Horizontal.png" alt="" />
        </div>
      </div>

      {/* Decorative Element */}
      <div className="hidden 2xl:block absolute left-[-250px] top-[-100px]">
        <img src="/Frame.png" alt="" className="w-[50px]" />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-[1324px] flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-32 2xl:gap-48">
        {/* Text Content */}
        <div className="w-full lg:w-[55%] xl:w-[60%] order-2 lg:order-1">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-fira-code text-[#ABB2BF] leading-relaxed lg:leading-loose">
            I'm interested in freelance opportunities. However, if you have
            other requests or questions, don't hesitate to contact me
          </p>
        </div>

        {/* Contact Card */}
        <div className="w-full lg:w-[45%] xl:w-[40%] order-1 lg:order-2">
          <div className="border border-[#ABB2BF] px-4 sm:px-5 py-4 sm:py-5 w-full lg:w-auto lg:min-w-[280px] xl:min-w-[320px]">
            <h2 className="text-base sm:text-lg md:text-xl text-white font-fira-code mb-3 sm:mb-4 md:mb-5">
              Message me here
            </h2>

            {/* Twitter/X Link */}
            <a
              href="https://x.com/dev_kartk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 sm:gap-4 items-center mb-3 sm:mb-4 hover:opacity-80 transition-opacity"
            >
              <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" src="/twitter.png" alt="Twitter" />
              <p className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm md:text-base">@dev_kartk</p>
            </a>

            {/* Email Link */}
            <a
              href="mailto:agarwalkartik704@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 sm:gap-4 items-center hover:opacity-80 transition-opacity"
            >
              <img className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" src="/Email.png" alt="Email" />
              <p className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm md:text-base break-all lg:break-normal">
                agarwalkartik704@gmail.com
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}