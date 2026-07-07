"use client";
import { useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { PROJECTS } from "@/constants";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import { useUISound } from "@/hooks/useUISound";
function MobileCardStack({ projects, playClick }) {
  const [dismissed, setDismissed] = useState([]); 
  const [hint, setHint] = useState(true); 
  const current = projects.findIndex((_, i) => !dismissed.includes(i));
  const remaining = projects.filter((_, i) => !dismissed.includes(i)).length;
  const handleDismiss = useCallback((idx) => {
    setDismissed((prev) => [...prev, idx]);
    setHint(false);
  }, []);
  const handleReset = () => {
    setDismissed([]);
    setHint(false);
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full flex justify-center" style={{ height: "430px" }}>
        {projects.map((project, idx) => {
          const isDismissed = dismissed.includes(idx);
          const activeAbove = projects
            .slice(idx + 1)
            .filter((_, i) => !dismissed.includes(idx + 1 + i)).length;
          const stackPos = projects
            .filter((_, i) => !dismissed.includes(i))
            .indexOf(project);
          if (isDismissed || stackPos > 2) return null;
          return (
            <SwipeCard
              key={project.slug}
              project={project}
              stackPos={stackPos}
              isTop={stackPos === 0}
              hint={hint && stackPos === 0}
              onDismiss={() => handleDismiss(idx)}
              playClick={playClick}
            />
          );
        })}
        {remaining === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          >
            <div className="text-4xl">✓</div>
            <p className="text-[#ABB2BF] font-fira-code text-sm">All projects reviewed</p>
            <button
              onClick={handleReset}
              className="mt-2 px-5 py-2 rounded-xl border border-[#C778DD]/30 bg-[#C778DD]/[0.08] text-[#C778DD] font-fira-code text-xs hover:bg-[#C778DD]/[0.15] transition-all duration-200"
            >
              ↺ Start over
            </button>
          </motion.div>
        )}
      </div>
      <div className="flex gap-2 mt-5">
        {projects.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-400 ${
              dismissed.includes(idx)
                ? "w-1.5 bg-[#C778DD]/50"
                : idx === current
                ? "w-5 bg-[#C778DD]"
                : "w-1.5 bg-white/15"
            }`}
          />
        ))}
      </div>
      {remaining > 0 && (
        <p className="mt-3 text-[11px] text-[#6b7280] font-fira-code tracking-wider">
          {remaining} / {projects.length} · swipe to explore
        </p>
      )}
    </div>
  );
}
function SwipeCard({ project, stackPos, isTop, hint, onDismiss, playClick }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const isDragging = useRef(false);
  const rotate = useTransform(x, [-200, 0, 200], [-22, 0, 22]);
  const cardOpacity = useTransform(x, [-220, -80, 0, 80, 220], [0, 1, 1, 1, 0]);
  const leftTint = useTransform(x, [-120, 0], [0.55, 0]);
  const rightTint = useTransform(x, [0, 120], [0, 0.55]);
  const bgScale = 1 - stackPos * 0.05;
  const bgY = stackPos * -10;
  const handleDragEnd = (_, info) => {
    const THROW = 120;
    const VEL = 500;
    if (info.offset.x < -THROW || info.velocity.x < -VEL) {
      animate(x, -500, { type: "spring", stiffness: 260, damping: 18, onComplete: onDismiss });
      animate(y, 60, { duration: 0.35 });
    } else if (info.offset.x > THROW || info.velocity.x > VEL) {
      animate(x, 500, { type: "spring", stiffness: 260, damping: 18, onComplete: onDismiss });
      animate(y, 60, { duration: 0.35 });
    } else {
      animate(x, 0, { type: "spring", stiffness: 400, damping: 28 });
      animate(y, 0, { type: "spring", stiffness: 400, damping: 28 });
    }
  };
  return (
    <motion.div
      style={{
        x: isTop ? x : 0,
        y: isTop ? y : bgY,
        rotate: isTop ? rotate : stackPos * -1.5,
        scale: isTop ? 1 : bgScale,
        opacity: isTop ? cardOpacity : 1,
        zIndex: 10 - stackPos,
        position: "absolute",
        top: 0,
        width: "88vw",
        maxWidth: "380px",
        transformOrigin: "50% 120%",
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      onDragStart={() => { isDragging.current = true; }}
      onDragEnd={handleDragEnd}
      whileTap={isTop ? { cursor: "grabbing" } : {}}
      animate={!isTop ? { scale: bgScale, y: bgY } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`rounded-2xl border border-white/[0.07] bg-[#070A11]/80 backdrop-blur-md overflow-hidden flex flex-col shadow-[0_8px_40px_rgba(0,0,0,0.5)] ${isTop ? "cursor-grab" : ""}`}
    >
      {isTop && (
        <>
          <motion.div
            style={{ opacity: leftTint }}
            className="absolute inset-0 bg-gradient-to-br from-red-500/25 to-transparent rounded-2xl z-20 pointer-events-none"
          />
          <motion.div
            style={{ opacity: rightTint }}
            className="absolute inset-0 bg-gradient-to-bl from-green-500/25 to-transparent rounded-2xl z-20 pointer-events-none"
          />
        </>
      )}
      {hint && (
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ delay: 0.8, duration: 1.8, times: [0, 0.2, 0.8, 1] }}
        >
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
            <span className="text-lg">←</span>
            <span className="text-xs font-fira-code text-white/70 tracking-wider">swipe to explore</span>
            <span className="text-lg">→</span>
          </div>
        </motion.div>
      )}
      <Link
        href={`/projects/${project.slug}`}
        className="block pointer-events-auto"
        onClick={(e) => { if (isDragging.current) { e.preventDefault(); isDragging.current = false; } else { playClick(); } }}
      >
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
          <img
            className="w-full h-full object-cover"
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070A11] via-[#070A11]/20 to-transparent" />
          <span className="absolute bottom-3 right-3 font-fira-code text-[10px] text-white/50 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
            {String(project.slug).slice(0, 2).toUpperCase()}
          </span>
        </div>
      </Link>
      <div className="flex flex-wrap items-center px-4 py-2.5 gap-1.5 border-b border-white/[0.05] bg-white/[0.01]">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="font-fira-code text-[10px] px-2 py-0.5 rounded-full border border-[#C778DD]/20 bg-[#C778DD]/5 text-[#C778DD]/80"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-white tracking-tight leading-tight">
            {project.title}
          </h3>
          <span className="text-[10px] font-fira-code text-[#6b7280] mt-0.5 shrink-0">{project.year}</span>
        </div>
        <p className="text-xs text-[#ABB2BF] leading-relaxed font-fira-code line-clamp-2">
          {project.description}
        </p>
        <div className="mt-2 flex items-center gap-2.5">
          <Link
            href={`/projects/${project.slug}`}
            onClick={playClick}
            className="flex items-center gap-1.5 text-[#C778DD] font-fira-code text-[11px] border border-[#C778DD]/25 bg-[#C778DD]/[0.06] rounded-lg px-3 py-1.5 active:scale-95 transition-transform duration-100"
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
            className="flex items-center gap-1.5 text-[#ABB2BF] font-fira-code text-[11px] border border-white/[0.08] bg-white/[0.03] rounded-lg px-3 py-1.5 active:scale-95 transition-transform duration-100"
          >
            Live
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
export default function Project() {
  const { playClick } = useUISound();
  return (
    <div
      id="works"
      className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-6 pb-10 sm:py-20 relative overflow-hidden"
    >
      <SectionHeader title="projects" />
      <div className="hidden md:grid w-full max-w-[1324px] grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.title}
            className="group w-full rounded-2xl border border-white/[0.07] bg-[#070A11]/60 backdrop-blur-md overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:border-[#C778DD]/40 hover:shadow-[0_8px_40px_rgba(199,120,221,0.14)] flex flex-col h-full"
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
      <div className="md:hidden w-full flex flex-col items-center pt-2">
        <MobileCardStack projects={PROJECTS} playClick={playClick} />
      </div>
    </div>
  );
}