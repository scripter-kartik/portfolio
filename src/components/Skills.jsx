export default function Skills() {
  return (
    <div id="skills" className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 md:py-16 lg:py-20 relative">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-2 w-full max-w-[1324px] mb-8 md:mb-12 lg:mb-16">
        <div className="flex items-center gap-2 md:gap-3 w-full">
          <img className="w-5 h-6 md:w-6 md:h-7 flex-shrink-0" src="/hashtag2.png" alt="" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-fira-code text-white whitespace-nowrap">skills</h1>
          <img className="w-full h-[2px] max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[1324px] ml-4 md:ml-10" src="/Horizontal.png" alt="" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-[1324px] flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-32">
        {/* Decorative Image */}
        <div className="hidden lg:block flex-shrink-0">
          <img
            className="w-full max-w-[320px] lg:max-w-[380px] xl:max-w-[450px]"
            src="/Frame2.png"
            alt=""
          />
        </div>

        {/* Skills Grid */}
        <div className="w-full flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-6">
          {/* Languages */}
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-lg sm:text-xl font-fira-code font-semibold">
                  Languages
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-sm sm:text-base">
                  Typescript Lua Python JavaScript
                </p>
              </div>
            </div>
          </div>

          {/* Databases */}
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-lg sm:text-xl font-fira-code font-semibold">
                  Databases
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-sm sm:text-base">
                  SQLite PostgreSQL Mongo
                </p>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-lg sm:text-xl font-fira-code font-semibold">
                  Tools
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-sm sm:text-base">
                  VSCode Neovim Linux Figma XFCE Arch Git Font Awesome
                </p>
              </div>
            </div>
          </div>

          {/* Other */}
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-lg sm:text-xl font-fira-code font-semibold">
                  Other
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-sm sm:text-base">
                  HTML CSS EJS SCSS REST Jinja
                </p>
              </div>
            </div>
          </div>

          {/* Frameworks */}
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-lg sm:text-xl font-fira-code font-semibold">
                  Frameworks
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-sm sm:text-base">
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