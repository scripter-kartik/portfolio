export default function About() {
  return (
    <div id="about-me" className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 sm:py-14 md:py-16 lg:py-20 mb-20 sm:mb-2 relative">
      <div className="flex items-center justify-between gap-2 w-full max-w-[1324px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
        <div className="flex items-center gap-2 md:gap-3 w-full">
          <img className="w-4 h-5 sm:w-5 sm:h-6 md:w-6 md:h-7 flex-shrink-0" src="/hashtag2.png" alt="" />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-fira-code text-white whitespace-nowrap">about me</h1>
          <img className="w-full h-[2px] max-w-[100px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[600px] 2xl:max-w-[1324px] ml-2 sm:ml-4 md:ml-6 lg:ml-10" src="/Horizontal.png" alt="" />
        </div>
      </div>

      <div className="w-full max-w-[1324px] flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24">
        <div className="w-full lg:w-[55%] order-2 lg:order-1">
          <div className="font-fira-code font-extralight text-[#ABB2BF] text-sm sm:text-base md:text-lg flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 leading-relaxed lg:leading-loose">
            <p className="text-white font-normal">Hello, I'm Kartik!</p>
            <p>
              I'm a self-taught full-stack developer based in Delhi, India. I
              build responsive websites from scratch and turn them into modern,
              user-friendly web experiences.
            </p>
            <p>
              Transforming creativity and knowledge into products has been my
              passion for over a year. I've helped clients establish their
              presence online while always staying up to date with the newest
              technologies and frameworks.
            </p>
            <p>
              Beyond coding, I enjoy exploring new ideas, experimenting with
              designs, and finding better ways to solve problems. I love
              building things that not only work well but also feel smooth,
              intuitive, and enjoyable to use.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-[45%] flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="w-full max-w-[420px] border border-gray-800 rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-gray-500 font-fira-code text-xs">kartik.json</span>
            </div>
            <div className="p-5 sm:p-6 font-fira-code text-sm sm:text-base flex flex-col gap-3">
              <p className="text-gray-500">{"{"}</p>
              <div className="flex flex-col gap-2 pl-4">
                <p>
                  <span className="text-[#C778DD]">"name"</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-green-400">"Kartik"</span>
                  <span className="text-gray-400">,</span>
                </p>
                <p>
                  <span className="text-[#C778DD]">"role"</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-green-400">"Full Stack Developer"</span>
                  <span className="text-gray-400">,</span>
                </p>
                <p>
                  <span className="text-[#C778DD]">"location"</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-green-400">"Delhi, India"</span>
                  <span className="text-gray-400">,</span>
                </p>
                <p>
                  <span className="text-[#C778DD]">"experience"</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-orange-400">"1+ years"</span>
                  <span className="text-gray-400">,</span>
                </p>
                <p>
                  <span className="text-[#C778DD]">"stack"</span>
                  <span className="text-gray-400">: [</span>
                </p>
                <div className="pl-4 flex flex-col gap-1">
                  <p><span className="text-green-400">"Next.js"</span><span className="text-gray-400">,</span></p>
                  <p><span className="text-green-400">"React"</span><span className="text-gray-400">,</span></p>
                  <p><span className="text-green-400">"Node.js"</span><span className="text-gray-400">,</span></p>
                  <p><span className="text-green-400">"MongoDB"</span><span className="text-gray-400">,</span></p>
                  <p><span className="text-green-400">"Tailwind"</span></p>
                </div>
                <p><span className="text-gray-400">],</span></p>
                <p>
                  <span className="text-[#C778DD]">"available"</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-blue-400">true</span>
                </p>
              </div>
              <p className="text-gray-500">{"}"}</p>
              <p className="text-gray-500 flex items-center gap-1 mt-2">
                <span className="text-[#C778DD]">$</span>
                <span className="text-white">open to work</span>
                <span className="inline-block w-2 h-4 bg-[#C778DD] animate-pulse ml-1" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}