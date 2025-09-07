export default function Footer() {
  return (
    <div className="flex flex-col items-center ">
      <div className="w-screen h-[1px] bg-[#ABB2BF]">
        
      </div>
      <div className="w-[1324px] flex justify-between mt-10">
        <div>
          <div className="flex items-center">
            <img className="w-6 h-6 mr-3" src="/logoWhite.png" alt="" />
            <h1 className="text-xl text-white font-fira-code mr-8">Kartik</h1>
            <p className="text-md text-[#ABB2BF] font-fira-code">
              agarwalkartik704@gmail.com
            </p>
          </div>
          <div className="text-white text-lg font-fira-code mt-5">
            <h1>Front-end and Back-end developer</h1>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-2xl text-white font-fira-code mb-5">Media</h1>
          </div>
          <div className="flex items-center gap-5">
            <img src="/github.png" alt="" />
            <img className="w-7 h-7" src="/twitter.png" alt="" />
          </div>
        </div>
      </div>
      <p style={{wordSpacing: "5px"}} className="text-lg mt-16 font-fira-code text-[#ABB2BF] mb-5">
        © Copyright 2025. Made by Kartik
      </p>
    </div>
  );
}
