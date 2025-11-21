export default function About() {
  return (
    <div id="about-me" className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 md:py-16 lg:py-20 relative">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-2 w-full max-w-[1324px] mb-8 md:mb-12 lg:mb-16">
        <div className="flex items-center gap-2 md:gap-3 w-full">
          <img className="w-5 h-6 md:w-6 md:h-7 flex-shrink-0" src="/hashtag2.png" alt="" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-fira-code text-white whitespace-nowrap">about me</h1>
          <img className="w-full h-[2px] max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[1324px] ml-4 md:ml-10" src="/Horizontal.png" alt="" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden 2xl:block absolute left-[-250px] top-[150px]">
        <img src="/Rectangle2.png" alt="" className="w-[80px] h-[130px]" />
      </div>

      {/* Main Content Container */}
      <div className="w-full max-w-[1324px] flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
        {/* Text Content */}
        <div className="w-full lg:w-[55%] xl:w-[60%]">
          <div className="font-fira-code font-extralight text-[#ABB2BF] text-base sm:text-lg lg:text-xl flex flex-col gap-6 sm:gap-8 lg:gap-10 leading-relaxed lg:leading-loose">
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

        {/* Image Section */}
        <div className="w-full lg:w-[45%] xl:w-[40%] flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[450px]">
            {/* Decorative dots - top left */}
            <img
              className="sm:hidden xl:block top-2 -left-2 absolute xl:-left-6 sm:-left-8 xl:top-20 w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 z-10 bg-transparent"
              src="/Frame3.png"
              alt=""
            />

            {/* Profile Image */}
            <div className="relative">
              <img
                className="w-full h-auto object-cover"
                src="/profile2.png"
                alt="Kartik"
              />
              {/* Bottom line */}
              <img
                className="w-[90%] mx-auto mt-1"
                src="/Horizontal.png"
                alt=""
              />
            </div>

            {/* Decorative dots - bottom right */}
            <img
              className="sm:hidden xl:block absolute right-4 -bottom-20 xl:left-48 xl:bottom-56 lg:left-80 lg:bottom-12 w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-transparent"
              src="/Frame3.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Corner decorative dots */}
      <div className="sm:hidden xl:block absolute bottom-40 lg:right-[-4px] lg:bottom-2 bg-transparent">
        <img className="w-20 h-20 lg:w-24 lg:h-24 bg-transparent" src="/Frame3.png" alt="" />
      </div>
    </div>
  );
}