import SectionHeader from "./SectionHeader";
import { FULL_STACK_SKILLS, SKILL_GROUPS } from "@/constants";

const TONE_BG = {
  "text-orange-300": "bg-orange-400/10 border-orange-400/20",
  "text-sky-300": "bg-sky-400/10 border-sky-400/20",
  "text-yellow-300": "bg-yellow-400/10 border-yellow-400/20",
  "text-cyan-300": "bg-cyan-400/10 border-cyan-400/20",
  "text-white": "bg-white/10 border-white/20",
  "text-green-300": "bg-green-400/10 border-green-400/20",
  "text-gray-300": "bg-gray-400/10 border-gray-400/20",
  "text-emerald-300": "bg-emerald-400/10 border-emerald-400/20",
  "text-teal-300": "bg-teal-400/10 border-teal-400/20",
  "text-red-300": "bg-red-400/10 border-red-400/20",
};

export default function Skills() {
  return (
    <div
      id="skills"
      className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-16 sm:py-20 relative"
    >
      <SectionHeader title="skills" />

      <div className="w-full max-w-[1324px] flex flex-col gap-8 sm:gap-10">
        {/* Main skills showcase */}
        <div className="w-full glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#C778DD]/5 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <p className="text-[#C778DD] font-fira-code tracking-[0.3em] text-[10px] sm:text-xs text-center font-semibold uppercase mb-2">
              My Skillset
            </p>
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-7 bg-gradient-to-r from-white via-[#e4c9f5] to-[#C778DD] bg-clip-text text-transparent tracking-tight">
              The Magic Behind
            </h2>

            <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
              {FULL_STACK_SKILLS.map((skill) => (
                <span
                  key={skill.name}
                  className="group inline-flex items-center gap-2.5 h-10 sm:h-11 px-3.5 sm:px-4 rounded-xl border border-white/[0.07] bg-[#0c101b]/70 text-[#E5E7EB] font-fira-code text-xs sm:text-sm hover:border-[#C778DD]/40 hover:bg-[#C778DD]/5 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  <span
                    className={`min-w-[1.5rem] h-6 rounded-md border inline-flex items-center justify-center text-[10px] sm:text-xs font-bold ${skill.tone} ${TONE_BG[skill.tone] || "bg-white/[0.04] border-white/[0.08]"}`}
                  >
                    {skill.tag}
                  </span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skill groups grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.title}
              className="group w-full rounded-xl border border-white/[0.07] bg-[#070A11]/50 backdrop-blur-md overflow-hidden hover:border-[#C778DD]/30 hover:shadow-[0_0_25px_rgba(199,120,221,0.07)] transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-2.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.01]">
                <span className="w-1.5 h-4 rounded-full bg-[#C778DD]/60 group-hover:bg-[#C778DD] transition-colors duration-200" />
                <h3 className="text-white text-sm sm:text-base font-fira-code font-semibold capitalize">
                  {group.title}
                </h3>
              </div>
              {/* Items */}
              <div className="p-4 flex flex-wrap gap-2 flex-grow">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-fira-code text-xs px-2.5 py-1 rounded-lg border border-white/[0.06] bg-white/[0.025] text-[#ABB2BF] hover:text-white hover:border-[#C778DD]/40 hover:bg-[#C778DD]/6 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
