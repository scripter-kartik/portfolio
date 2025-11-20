export default function About() {
  return (
    <div id="about-me">
      <div className="w-[1324px] flex items-center">
        <img className="w-7 h-8 mr-6" src="/hashtag2.png" alt="" />
        <h1 className="mr-8 text-white text-4xl font-fira-code font-semibold">
          about-me
        </h1>
        <img className="w-[380px] h-[2px]" src="/Horizontal.png" alt="" />
      </div>
      <div>
        <img
          className="absolute left-0 mt-[150px]"
          src="/Rectangle2.png"
          alt=""
        />
      </div>
      <div className="w-[1324px] flex items-center gap-10">
        <div className="mr-40">
          <div className="font-fira-code font-extralight text-[#ABB2BF] text-xl w-[662px] flex flex-col gap-10 mb-10 leading-loose">
            <p>Hello, i'm Kartik!</p>
            <p>
              I'm a self-taught front-end developer based in Delhi, India. I can
              develop responsive websites from scratch and raise them into
              modern user-friendly web expriences.
            </p>
            <p>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center relative">
          <img className="w-[450px] h-[600px]" src="/profile2.png" alt="" />
          <img className="w-[360px] mt-1" src="/Horizontal.png" alt="" />
          <img
            className="absolute left-4 bg-transparent top-16 w-24 h-24"
            src="/Frame3.png"
            alt=""
          />
          <img
            className="absolute right-8 bg-transparent bottom-60 w-24 h-24"
            src="/Frame3.png"
            alt=""
          />
        </div>
        <img className="absolute right-0 top-[2900px] w-24 h-24" src="/Frame3.png" alt="" />
      </div>
    </div>
  );
}