export default function Contact() {
  return (
    <div>
      <div className="w-[1324px] flex items-center">
        <img className="w-8 h-8 mr-2" src="/hashtag2.png" alt="" />
        <h1 className="mr-5 text-white text-4xl font-fira-code">contacts</h1>
        <img className="w-[250px]" src="/Horizontal.png" alt="" />
      </div>
      <div>
        <img
          className="absolute left-0 top-[3300px] w-[50px]"
          src="/Frame.png"
          alt=""
        />
      </div>
      <div className="w-[1324px] flex mt-16 justify-between">
        <div className="text-[21px] font-fira-code text-[#ABB2BF] w-[662px]">
          <p className="leading-loose">
            I'm interested in freelance oppurtunities. However, if you have
            other request or question, don't hesitate to contact me
          </p>
        </div>
        <div className="border-[1px] border-[#ABB2BF] text-center px-3 py-2 leading-10 h-[150px] flex flex-col justify-center">
          <h1 className="text-xl text-white font-fira-code mb-5">Message me here</h1>
          <div className="flex gap-5 items-center">
            <img className="w-7 h-7 ml-1" src="/twitter.png" alt="" />
            <p className="text-[#ABB2Bf] font-fira-code">@dev_kartk</p>
          </div>
          <div className="flex gap-5 items-center">
            <img src="/Email.png" alt="" />
            <p className="text-[#ABB2Bf] font-fira-code">
              agarwalkartik704@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
