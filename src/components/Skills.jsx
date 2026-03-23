const fullStackSkills = [
  { name: "ReactJS", tag: "R", tone: "text-sky-400" },
  { name: "NextJS", tag: "N", tone: "text-slate-200" },
  { name: "TypeScript", tag: "TS", tone: "text-blue-400" },
  { name: "Tailwind CSS", tag: "TW", tone: "text-cyan-400" },
  { name: "NodeJS", tag: "NJ", tone: "text-green-400" },
  { name: "ExpressJS", tag: "EX", tone: "text-zinc-300" },
  { name: "PostgreSQL", tag: "PG", tone: "text-blue-300" },
  { name: "MongoDB", tag: "MG", tone: "text-emerald-400" },
  { name: "Prisma", tag: "PR", tone: "text-slate-100" },
  { name: "Zod", tag: "ZD", tone: "text-blue-400" },
  { name: "pnpm", tag: "PN", tone: "text-amber-300" },
  { name: "Bun", tag: "BN", tone: "text-orange-200" },
  { name: "Git", tag: "GT", tone: "text-orange-400" },
  { name: "GitHub", tag: "GH", tone: "text-slate-200" },
  { name: "Vercel", tag: "VC", tone: "text-slate-100" },
  { name: "AWS", tag: "AWS", tone: "text-amber-300" },
  { name: "Docker", tag: "DK", tone: "text-sky-400" },
  { name: "Linux", tag: "LX", tone: "text-yellow-300" },
  { name: "Clerk", tag: "CK", tone: "text-violet-300" },
];

export default function Skills() {
  return (
    <div
      id="skills"
      className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 sm:py-14 md:py-16 lg:py-20 relative"
    >
      <div className="flex items-center justify-between gap-2 w-full max-w-[1324px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
        <div className="flex items-center gap-2 md:gap-3 w-full">
          <img
            className="w-4 h-5 sm:w-5 sm:h-6 md:w-6 md:h-7 flex-shrink-0"
            src="/hashtag2.png"
            alt=""
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-fira-code text-white whitespace-nowrap">
            skills
          </h1>
          <div className="h-px flex-1 ml-2 sm:ml-4 md:ml-6 lg:ml-10 bg-gradient-to-r from-[#C778DD] via-[#ABB2BF] to-transparent" />
        </div>
      </div>

      <div className="w-full max-w-[1324px] flex flex-col gap-8 sm:gap-10 md:gap-12">
        <div className="w-full border border-[#2A2F3A] rounded-2xl p-4 sm:p-6 md:p-8 bg-[#070A11]">
          <p className="text-[#6B7280] font-fira-code tracking-[0.3em] text-[10px] sm:text-xs text-center">
            MY SKILLSET
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center mt-3 sm:mt-4 mb-6 sm:mb-8">
            The Magic Behind
          </h2>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {fullStackSkills.map((skill) => (
              <span
                key={skill.name}
                className="inline-flex items-center gap-2 sm:gap-2.5 h-10 sm:h-11 px-3 sm:px-4 rounded-2xl border border-[#1F2532] bg-[#090C13] text-[#E5E7EB] font-fira-code text-xs sm:text-sm"
              >
                <span
                  className={`min-w-6 h-6 rounded-md bg-[#121723] border border-[#252B38] inline-flex items-center justify-center text-[10px] sm:text-xs font-semibold ${skill.tone}`}
                >
                  {skill.tag}
                </span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-6 items-stretch">
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-base sm:text-lg md:text-xl font-fira-code font-semibold">
                  Languages
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[50px] sm:min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm md:text-base">
                  TypeScript JavaScript Python Lua
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-base sm:text-lg md:text-xl font-fira-code font-semibold">
                  Databases
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[50px] sm:min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm md:text-base">
                  PostgreSQL MongoDB SQLite
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-base sm:text-lg md:text-xl font-fira-code font-semibold">
                  Frameworks
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[50px] sm:min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm md:text-base">
                  Next.js React Express Tailwind CSS
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-base sm:text-lg md:text-xl font-fira-code font-semibold">
                  Tooling
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[50px] sm:min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm md:text-base">
                  Docker Git GitHub AWS Vercel pnpm Bun
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-base sm:text-lg md:text-xl font-fira-code font-semibold">
                  Other
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[50px] sm:min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm md:text-base">
                  Prisma Zod Clerk Linux REST API
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[410px] mx-auto sm:mx-0">
            <div className="border border-[#ABB2BF] w-full">
              <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-[#ABB2BF]">
                <h1 className="text-white text-base sm:text-lg md:text-xl font-fira-code font-semibold">
                  Workflow
                </h1>
              </div>
              <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[50px] sm:min-h-[60px]">
                <p className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm md:text-base">
                  Product planning, API design, deployment, maintenance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
