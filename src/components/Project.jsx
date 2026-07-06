"use client";
import { PROJECTS } from "@/constants";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import { useUISound } from "@/hooks/useUISound";

export default function Project() {
  const { playClick } = useUISound();

  return (
    <div
      id="works"
      className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-6 pb-16 sm:py-20 relative"
    >
      <SectionHeader title="projects" />
      <div className="w-full max-w-[1324px] flex md:grid md:grid-cols-2 xl:grid-cols-3 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory gap-6 md:gap-8 pb-5 md:pb-0 hide-scrollbar scroll-smooth">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.title}
            className="group w-[82vw] sm:w-[60vw] md:w-full rounded-2xl border border-white/[0.07] bg-[#070A11]/60 backdrop-blur-md overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-[#C778DD]/40 hover:shadow-[0_8px_40px_rgba(199,120,221,0.14)] flex flex-col h-full flex-shrink-0 snap-center"
            style={{ animationDelay: `${idx * 0.08}s` }}
          >
            <Link 
              href={`/projects/${project.slug}`} 
              className="block"

              onClick={playClick}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden cursor-pointer">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A11] via-[#070A11]/30 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-400" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C778DD]/20 backdrop-blur-sm border border-[#C778DD]/30 text-[10px] font-fira-code text-[#C778DD] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0">
                  View Details →
                </span>
              </div>
            </Link>
            <div className="flex flex-wrap items-center px-4 py-3 gap-1.5 border-b border-white/[0.05] bg-white/[0.01]">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-fira-code text-[10px] px-2 py-0.5 rounded-full border border-[#C778DD]/20 bg-[#C778DD]/5 text-[#C778DD]/80 group-hover:border-[#C778DD]/40 group-hover:text-[#C778DD] transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="p-5 flex flex-col flex-grow gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#C778DD] transition-colors duration-200 tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-[#ABB2BF] leading-relaxed font-fira-code flex-grow">
                {project.description}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Link
                  href={`/projects/${project.slug}`}
    
                  onClick={playClick}
                  className="flex items-center gap-1.5 text-[#C778DD] font-fira-code text-xs border border-[#C778DD]/25 bg-[#C778DD]/[0.06] rounded-lg px-3 py-1.5 hover:bg-[#C778DD]/[0.12] hover:border-[#C778DD]/50 transition-all duration-200"
                >
                  Case Study
                  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
    
                  onClick={playClick}
                  className="flex items-center gap-1.5 text-[#ABB2BF] font-fira-code text-xs border border-white/[0.08] bg-white/[0.03] rounded-lg px-3 py-1.5 hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  Live
                  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}