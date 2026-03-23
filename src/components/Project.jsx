export default function Project() {
  return (
    <div
      id="works"
      className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-6 pb-12 sm:py-14 md:py-16 lg:py-20 relative"
    >
      <div className="flex items-center justify-between gap-2 w-full max-w-[1324px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
        <div className="flex items-center gap-2 md:gap-3 w-full">
          <img
            className="w-4 h-5 sm:w-5 sm:h-6 md:w-6 md:h-7 flex-shrink-0"
            src="/hashtag2.png"
            alt=""
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-fira-code text-white whitespace-nowrap">
            projects
          </h1>
          <div className="h-px flex-1 ml-2 sm:ml-4 md:ml-6 lg:ml-10 bg-gradient-to-r from-[#C778DD] via-[#ABB2BF] to-transparent" />
        </div>
      </div>
      <div className="hidden 2xl:block absolute 2xl:left-[-250px] 2xl:top-[300px]">
        <img src="/Frame.png" alt="" className="2xl:w-[50px]" />
      </div>
      <div className="hidden 2xl:block absolute 2xl:right-[-250px] 2xl:top-[500px]">
        <img
          className="w-[80px] h-[130px] xl:w-[110px] xl:h-[180px]"
          src="/Rectangle.png"
          alt=""
        />
      </div>
      <div className="w-full max-w-[1324px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        <div className="group w-full max-w-[410px] mx-auto md:mx-0 transition-transform duration-300 hover:-translate-y-2">
          <div className="border-[1px] border-[#ABB2BF] w-full">
            <img
              className="w-full h-auto object-cover"
              src="/blogspot.png"
              alt="BlogSpot Project"
            />
          </div>
          <div className="border-x-[1px] border-b-[1px] border-[#ABB2BF] w-full min-h-[50px] flex flex-wrap items-center px-3 py-2 gap-2 sm:gap-3 md:gap-4 font-fira-code text-xs sm:text-sm md:text-base text-[#ABB2BF]">
            <p>Next.js</p>
            <p>Tailwind</p>
            <p>MongoDB</p>
            <p>cloudinary</p>
          </div>
          <div className="border-[1px] border-[#ABB2BF] w-full min-h-[165px] sm:min-h-[175px] px-3 sm:px-4 py-3 sm:py-4 md:py-5 text-white font-fira-code flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h1 className="text-xl sm:text-2xl md:text-[28px] lg:text-[30px]">
              BlogForge
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-[#ABB2BF]">
              your blogging workspace
            </p>
            <a
              href="https://blog-forge-weld.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <button className="hover:opacity-80 transition-opacity">
                <img
                  src="/LiveButton.png"
                  alt="View Live Project"
                  className="w-auto max-w-full h-[36px] sm:h-[40px] md:h-[45px]"
                />
              </button>
            </a>
          </div>
        </div>

        <div className="group w-full max-w-[410px] mx-auto md:mx-0 transition-transform duration-300 hover:-translate-y-2">
          <div className="border-[1px] border-[#ABB2BF] w-full">
            <img
              className="w-full h-auto object-cover"
              src="/inkshelf.png"
              alt="InkShelf Project"
            />
          </div>
          <div className="border-x-[1px] border-b-[1px] border-[#ABB2BF] w-full min-h-[50px] flex flex-wrap items-center px-3 py-2 gap-2 sm:gap-3 md:gap-4 font-fira-code text-xs sm:text-sm md:text-base text-[#ABB2BF]">
            <p>Next.js</p>
            <p>Tailwind</p>
            <p>API</p>
            <p>Open Library</p>
          </div>
          <div className="border-[1px] border-[#ABB2BF] w-full min-h-[165px] sm:min-h-[175px] px-3 sm:px-4 py-3 sm:py-4 md:py-5 text-white font-fira-code flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h1 className="text-xl sm:text-2xl md:text-[28px] lg:text-[30px]">
              InkShelf
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-[#ABB2BF]">
              your online bookshelf
            </p>
            <a
              href="https://ink-shelf.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <button className="hover:opacity-80 transition-opacity">
                <img
                  src="/LiveButton.png"
                  alt="View Live Project"
                  className="w-auto max-w-full h-[36px] sm:h-[40px] md:h-[45px]"
                />
              </button>
            </a>
          </div>
        </div>
        <div className="group w-full max-w-[410px] mx-auto md:mx-0 transition-transform duration-300 hover:-translate-y-2">
          <div className="border-[1px] border-[#ABB2BF] w-full">
            <img
              className="w-full h-auto object-cover"
              src="/tunetogether.png"
              alt="Tune-Together Project"
            />
          </div>
          <div className="border-x-[1px] border-b-[1px] border-[#ABB2BF] w-full min-h-[50px] flex flex-wrap items-center px-3 py-2 gap-2 sm:gap-3 md:gap-4 font-fira-code text-xs sm:text-sm md:text-base text-[#ABB2BF]">
            <p>Next.js</p>
            <p>Socket.io</p>
            <p>Clerk</p>
            <p>Tailwind</p>
          </div>
          <div className="border-[1px] border-[#ABB2BF] w-full min-h-[165px] sm:min-h-[175px] px-3 sm:px-4 py-3 sm:py-4 md:py-5 text-white font-fira-code flex flex-col gap-2 sm:gap-3 md:gap-4">
            <h1 className="text-xl sm:text-2xl md:text-[28px] lg:text-[30px]">
              Tune-Together
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-[#ABB2BF]">
              chat powered by music
            </p>
            <a
              href="https://tunetogether.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <button className="hover:opacity-80 transition-opacity">
                <img
                  src="/LiveButton.png"
                  alt="View Live Project"
                  className="w-auto max-w-full h-[36px] sm:h-[40px] md:h-[45px]"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
