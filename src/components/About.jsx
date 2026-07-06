import SectionHeader from "./SectionHeader";
export default function About() {
  return (
    <div
      id="about-me"
      className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-16 sm:py-20 relative"
    >
      <SectionHeader title="about me" />
      <div className="w-full max-w-[1324px] flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-16 xl:gap-24">
        <div className="w-full lg:w-[55%] flex flex-col gap-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-white to-[#C778DD] bg-clip-text text-transparent">
              Kartik!
            </span>
          </h2>
          <div className="font-fira-code text-[#ABB2BF] text-sm sm:text-base flex flex-col gap-4 leading-relaxed">
            <p>
              I'm a self-taught full-stack developer based in Delhi, India.
              I build responsive websites from scratch and turn them into
              modern, user-friendly web experiences.
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
          <div className="grid grid-cols-3 gap-2.5 mt-2 w-full sm:w-auto max-w-[500px]">
            {[
              { value: "1+", label: "Experience" },
              { value: "5+", label: "Projects" },
              { value: "∞", label: "Learning" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center px-3 py-2.5 rounded-xl border border-white/[0.07] bg-[#070A11]/50 backdrop-blur-sm hover:border-[#C778DD]/30 transition-all duration-200"
              >
                <span className="text-lg sm:text-xl font-bold text-white font-fira-code">{stat.value}</span>
                <span className="text-[10px] sm:text-[11px] text-[#ABB2BF] font-fira-code mt-0.5 text-center leading-none">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex w-full lg:w-[45%] justify-center lg:justify-end">
          <div className="w-full max-w-[420px] glass-card rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.01]">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]/70" />
              <div className="w-3 h-3 rounded-full bg-[#eab308]/70" />
              <div className="w-3 h-3 rounded-full bg-[#22c55e]/70" />
              <span className="ml-2 text-gray-500 font-fira-code text-xs">kartik.json</span>
            </div>
            <div className="p-4 sm:p-5 font-fira-code text-xs sm:text-sm flex flex-col gap-2.5 break-words">
              <p className="text-gray-600">{"{"}</p>
              <div className="flex flex-col gap-2 pl-4">
                {[
                  { key: "name", value: '"Kartik"', color: "text-green-400" },
                  { key: "role", value: '"Full Stack Developer"', color: "text-green-400" },
                  { key: "location", value: '"Delhi, India"', color: "text-green-400" },
                  { key: "experience", value: '"1+ years"', color: "text-orange-400" },
                ].map((row, i) => (
                  <p key={i}>
                    <span className="text-[#C778DD]">"{row.key}"</span>
                    <span className="text-gray-400">: </span>
                    <span className={row.color}>{row.value}</span>
                    <span className="text-gray-400">,</span>
                  </p>
                ))}
                <p>
                  <span className="text-[#C778DD]">"stack"</span>
                  <span className="text-gray-400">: [</span>
                </p>
                <div className="pl-4 flex flex-col gap-1">
                  {["Next.js", "React", "Node.js", "MongoDB", "Tailwind"].map((s, i, arr) => (
                    <p key={s}>
                      <span className="text-green-400">"{s}"</span>
                      {i < arr.length - 1 && <span className="text-gray-400">,</span>}
                    </p>
                  ))}
                </div>
                <p><span className="text-gray-400">],</span></p>
                <p>
                  <span className="text-[#C778DD]">"available"</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-blue-400">true</span>
                </p>
              </div>
              <p className="text-gray-600">{"}"}</p>
              <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center gap-1.5">
                <span className="text-[#C778DD] font-bold">$</span>
                <span className="text-white text-sm">open to work</span>
                <span className="inline-block w-2 h-4 bg-[#C778DD] animate-pulse ml-0.5 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}