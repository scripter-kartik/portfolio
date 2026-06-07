import SectionHeader from "./SectionHeader";
import { FULL_STACK_SKILLS, SKILL_GROUPS } from "@/constants";

export default function Skills() {
  return (
    <div
      id="skills"
      className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12 sm:py-14 md:py-16 lg:py-20 relative"
    >
      <SectionHeader title="skills" />

      <div className="w-full max-w-[1324px] flex flex-col gap-8 sm:gap-10 md:gap-12">
        <div className="w-full border border-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 bg-dark-bg">
          <p className="text-[#6B7280] font-fira-code tracking-[0.3em] text-[10px] sm:text-xs text-center">
            MY SKILLSET
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center mt-3 sm:mt-4 mb-6 sm:mb-8">
            The Magic Behind
          </h2>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {FULL_STACK_SKILLS.map((skill) => (
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

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-stretch">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="w-full mx-auto sm:mx-0">
              <div className="border border-gray-custom w-full h-full">
                <div className="px-3 sm:px-4 py-2 sm:py-2.5 border-b border-gray-custom">
                  <h1 className="text-white text-base sm:text-lg md:text-xl font-fira-code font-semibold">
                    {group.title}
                  </h1>
                </div>
                <div className="px-3 sm:px-4 py-2 sm:py-3 min-h-[50px] sm:min-h-[60px]">
                  <p className="text-gray-custom font-fira-code text-xs sm:text-sm md:text-base">
                    {group.items.join(" ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
