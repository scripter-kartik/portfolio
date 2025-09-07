export default function Project() {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 w-[1324px]">
        <div className="flex items-center gap-2">
          <img className="w-6 h-7" src="/hashtag2.png" alt="" />
          <h1 className="text-4xl font-fira-code text-white mr-10">projects</h1>
          <img className="w-[600px]" src="/Horizontal.png" alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p className="text-xl text-white font-fira-code font-medium">
            View all
          </p>
          <img className="cursor-pointer" src="/Arrow.png" alt="" />
        </div>
      </div>
      <div className="absolute left-0 top-[1200px]">
        <img src="/Frame.png" alt="" />
      </div>
      <div className="absolute right-0 top-[1400px]">
        <img className="w-[110px] h-[180px]" src="/Rectangle.png" alt="" />
      </div>
      <div className="mt-16 flex gap-12">
        <div>
          <div className="border-[1px] border-[#ABB2BF] w-[410px]">
            <img className="w-[410px]" src="/Image1.jpg" alt="" />
          </div>
          <div className="border-x-[1px] border-b-[1px] border-[#ABB2BF] w-[410px] h-[50px] flex items-center px-3 py-2 gap-4 font-fira-code text-[#ABB2BF]">
            <p>HTML</p>
            <p>SCSS</p>
            <p>Python</p>
            <p>Flask</p>
          </div>
          <div className="border-[1px] border-[#ABB2BF] w-[410px] h-[160px] px-4 py-3 text-white font-fira-code flex flex-col gap-4">
            <h1 className="text-[30px]">ChertNodes</h1>
            <p className="text-[#ABB2BF]">Minecraft servers hosting</p>
            <button>
              <img src="/LiveButton.png" alt="" />
            </button>
          </div>
        </div>
        <div>
          <div className="border-[1px] border-[#ABB2BF] w-[410px]">
            <img className="w-[410px]" src="/Image2.png" alt="" />
          </div>
          <div className="border-x-[1px] border-b-[1px] border-[#ABB2BF] w-[410px] h-[50px] flex items-center px-3 py-2 gap-4 font-fira-code text-[#ABB2BF]">
            <p>Reach</p>
            <p>Express</p>
            <p>Node.js</p>
            <p>HTML</p>
            <p>Discord.js</p>
          </div>
          <div className="border-[1px] border-[#ABB2BF] w-[410px] h-[160px] px-4 py-3 text-white font-fira-code flex flex-col gap-4">
            <h1 className="text-[30px]">ProtectX</h1>
            <p className="text-[#ABB2BF]">Discord anti-crash bot</p>
            <button>
              <img src="/LiveButton.png" alt="" />
            </button>
          </div>
        </div>
        <div>
          <div className="border-[1px] border-[#ABB2BF] w-[410px]">
            <img className="w-[410px]" src="/Image3.png" alt="" />
          </div>
          <div className="border-x-[1px] border-b-[1px] border-[#ABB2BF] w-[410px] h-[50px] flex items-center px-3 py-2 gap-4 font-fira-code text-[#ABB2BF]">
            <p>CSS</p>
            <p>Express</p>
            <p>Node.js</p>
          </div>
          <div className="border-[1px] border-[#ABB2BF] w-[410px] h-[160px] px-4 py-3 text-white font-fira-code flex flex-col gap-4">
            <h1 className="text-[30px]">Kahoot Ans Viewer</h1>
            <p className="text-[#ABB2BF]">Get answers to your kahoot quiz</p>
            <button>
              <img src="/LiveButton.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
