export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="absolute left-5 gap-3 w-[32px] h-[311px] flex flex-col items-center">
        <img className="w-[6px] h-[191px]" src="/VerticalLine.png" alt="" />
        <img className="w-[32px] h-[32px]" src="/github.png" alt="" />
        <img className="w-[32px] h-[32px]" src="/twitter.png" alt="" />
      </div>
      <div className=" flex justify-center">
        <div className="w-[1324px] h-[61px] flex items-center justify-between mt-7">
          <div className="flex items-center gap-3">
            <img className="w-[26px] h-[26px]" src="/logoWhite.png" alt="" />
            <h1 className="font-fira-code font-bold text-white text-2xl">
              Kartik
            </h1>
          </div>
          <div className="flex gap-[32px]">
            <div className="flex items-center gap-1">
              <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
              <button className=" font-fira-code text-[#ABB2BF] text-2xl  hover:text-white">
                home
              </button>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
              <button className=" font-fira-code text-[#ABB2BF] text-2xl hover:text-white">
                works
              </button>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
              <button className=" font-fira-code text-[#ABB2BF] text-2xl hover:text-white">
                about-me
              </button>
            </div>
            <div className="flex items-center gap-1">
              <img className="w-[12px] h-[18px]" src="/hashtag.png" alt="" />
              <button className=" font-fira-code text-[#ABB2BF] text-2xl hover:text-white">
                contacts
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1324px] h-[423px] mt-36 flex items-center gap-20">
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
            <button className="border-[#C778DD] border-2 text-white w-[200px] h-[50px] px-3 flex items-center text-xl font-fira-code">
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
      <div className="absolute bottom-4 left-72 bg-transparent">
        <img className="mt-32" src="/quote.png" alt="" />
      </div>
      <div>
        <img
          className="absolute right-0 bottom-16 w-28 h-28"
          src="/Rectangle.png"
          alt=""
        />
      </div>
    </div>
  );
}
