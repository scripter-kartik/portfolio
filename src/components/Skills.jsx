export default function Skills() {
  return (
    <div id="skills">
      <div className="flex items-center w-[1324px]">
        <img className="w-6 h-7 mr-2" src="/hashtag2.png" alt="" />
        <h1 className="text-white font-fira-code text-4xl mr-6">skills</h1>
        <img className="w-[320px]" src="/Horizontal.png" alt="" />
      </div>
      <div className="w-[1324px] mt-10 pl-10 flex gap-32">
        <img className="w-[450px]" src="/Frame2.png" alt="" />
        <div className="flex gap-6">
          <div className="border-[1px] border-[#ABB2BF] w-[220px] h-[112px]">
            <div className="px-3 py-2 border-b-[1px] border-[#ABB2BF]">
              <h1 className="text-white text-xl font-fira-code font-semibold">
                Languages
              </h1>
            </div>
            <div className="px-3 py-2">
              <p className="text-[#ABB2BF] font-fira-code">
                Typescript Lua Python JavaScript
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="border-[1px] border-[#ABB2BF] w-[220px]">
              <div className="px-3 py-2 border-b-[1px] border-[#ABB2BF]">
                <h1 className="text-white text-xl font-fira-code font-semibold">
                  Databases
                </h1>
              </div>
              <div className="px-3 py-2">
                <p className="text-[#ABB2BF] font-fira-code">
                  SQLite PostgreSQL Mongo
                </p>
              </div>
            </div>
            <div className="border-[1px] border-[#ABB2BF] w-[220px]">
              <div className="px-3 py-2 border-b-[1px] border-[#ABB2BF]">
                <h1 className="text-white text-xl font-fira-code font-semibold">
                  Other
                </h1>
              </div>
              <div className="px-3 py-2">
                <p className="text-[#ABB2BF] font-fira-code">
                  HTML CSS EJS SCSS REST Jinja
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="border-[1px] border-[#ABB2BF] w-[220px]">
              <div className="px-3 py-2 border-b-[1px] border-[#ABB2BF]">
                <h1 className="text-white text-xl font-fira-code font-semibold">
                  Tools
                </h1>
              </div>
              <div className="px-3 py-2">
                <p className="text-[#ABB2BF] font-fira-code">
                  VSCode Neovim Linux Figma XFCE Arch Git Font Awesome
                </p>
              </div>
            </div>
            <div className="border-[1px] border-[#ABB2BF] w-[220px]">
              <div className="px-3 py-2 border-b-[1px] border-[#ABB2BF]">
                <h1 className="text-white text-xl font-fira-code font-semibold">
                  Frameworks
                </h1>
              </div>
              <div className="px-3 py-2">
                <p className="text-[#ABB2BF] font-fira-code">
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