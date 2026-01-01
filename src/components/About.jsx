export default function About() {
  return (
    <div id="about-me" className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 sm:py-14 md:py-16 lg:py-20 relative">
      <div className="flex items-center justify-between gap-2 w-full max-w-[1324px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
        <div className="flex items-center gap-2 md:gap-3 w-full">
          <img className="w-4 h-5 sm:w-5 sm:h-6 md:w-6 md:h-7 flex-shrink-0" src="/hashtag2.png" alt="" />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-fira-code text-white whitespace-nowrap">about me</h1>
          <img className="w-full h-[2px] max-w-[100px] xs:max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[600px] 2xl:max-w-[1324px] ml-2 sm:ml-4 md:ml-6 lg:ml-10" src="/Horizontal.png" alt="" />
        </div>
      </div>
      <div className="hidden 2xl:block absolute left-[-250px] top-[150px]">
        <img src="/Rectangle2.png" alt="" className="w-[80px] h-[130px]" />
      </div>
      <div className="w-full max-w-[1324px] flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16 2xl:gap-24">
        <div className="w-full lg:w-[55%] xl:w-[60%] order-2 lg:order-1">
          <div className="font-fira-code font-extralight text-[#ABB2BF] text-sm sm:text-base md:text-lg lg:text-xl flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 leading-relaxed lg:leading-loose">
            <p className="text-white">Hello, I'm Kartik!</p>
            <p>
              I'm a self-taught front-end developer based in Delhi, India. I can
              develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <p>
              Transforming my creativity and knowledge into websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <p>
              Beyond coding, I enjoy exploring new ideas, experimenting with designs, and finding better ways to solve problems. I love building things that not only work well but also feel smooth, intuitive, and enjoyable to use.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[45%] xl:w-[40%] flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[450px]">
            <img
              className="hidden xl:block top-2 -left-2 absolute xl:-left-6 w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 z-10 bg-transparent"
              src="/Frame3.png"
              alt=""
            />
            <div className="relative">
              <img
                className="w-full h-auto object-cover"
                src="/profile2.png"
                alt="Kartik"
              />
              <img
                className="w-[90%] mx-auto mt-1"
                src="/Horizontal.png"
                alt=""
              />
            </div>
            <img
              className="hidden xl:block absolute right-4 -bottom-20 xl:left-48 xl:bottom-56 2xl:left-80 2xl:bottom-12 w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-transparent"
              src="/Frame3.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="hidden xl:block absolute bottom-40 lg:right-[-4px] lg:bottom-2 bg-transparent">
        <img className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-transparent" src="/Frame3.png" alt="" />
      </div>
    </div>
  );
}