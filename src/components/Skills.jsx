export default function Skills() {
  return (
    <div id="skills" className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 sm:py-14 md:py-16 lg:py-20 relative">
      <div className="flex items-center justify-between gap-2 w-full max-w-[1324px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
        <div className="flex items-center gap-2 md:gap-3 w-full">
          <img className="w-4 h-5 sm:w-5 sm:h-6 md:w-6 md:h-7 flex-shrink-0" src="/hashtag2.png" alt="" />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-fira-code text-white whitespace-nowrap">skills</h1>
          <img className="w-full h-[2px] max-w-[100px] xs:max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[600px] 2xl:max-w-[1324px] ml-2 sm:ml-4 md:ml-6 lg:ml-10" src="/Horizontal.png" alt="" />
        </div>
      </div>

      <div className="w-full max-w-[1324px] flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16 2xl:gap-32">
        <div className="hidden lg:block flex-shrink-0 order-2 lg:order-1">
          <img
            className="w-full max-w-[280px] lg:max-w-[320px] xl:max-w-[380px] 2xl:max-w-[450px]"
            src="/Frame2.png"
            alt=""
          />
        </div>
        <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-6 order-1 lg:order-2">
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-base sm:text-lg md:text-xl font-fira-code font-semibold">
                  Languages
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[50px] sm:min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm md:text-base">
                  Typescript Lua Python JavaScript
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-base sm:text-lg md:text-xl font-fira-code font-semibold">
                  Databases
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[50px] sm:min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm md:text-base">
                  SQLite PostgreSQL Mongo
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-base sm:text-lg md:text-xl font-fira-code font-semibold">
                  Tools
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[50px] sm:min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm md:text-base">
                  VSCode Neovim Linux Figma XFCE Arch Git Font Awesome
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-base sm:text-lg md:text-xl font-fira-code font-semibold">
                  Other
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[50px] sm:min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm md:text-base">
                  HTML CSS EJS SCSS REST Jinja
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-base sm:text-lg md:text-xl font-fira-code font-semibold">
                  Frameworks
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[50px] sm:min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm md:text-base">
                  React Vue Disnake Discord.js Flask Express.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}