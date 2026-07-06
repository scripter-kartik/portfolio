"use client";

import Navbar from "@/components/Navbar";
import TerminalCard from "@/components/TerminalCard";
import ActiveCard from "@/components/ActiveCard";
import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect } from "react";

/* ── Social links data ───────────────────────────────────────── */
const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/scripter-kartik",
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1 .07 1.54 1.04 1.54 1.04.9 1.53 2.34 1.1 2.9.84.1-.64.35-1.1.64-1.35-2.22-.25-4.56-1.12-4.56-4.97 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.28.1-2.66 0 0 .85-.27 2.78 1.03A9.62 9.62 0 0 1 12 6.85c.85 0 1.7.11 2.5.33 1.93-1.3 2.78-1.03 2.78-1.03.56 1.38.2 2.41.1 2.66.64.7 1.03 1.61 1.03 2.71 0 3.86-2.35 4.72-4.59 4.97.36.3.69.88.69 1.79v2.65c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kartik-agarwal-747289376/",
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
        <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.8h2.9V19H5.5V9.8Zm4.72 0H13v1.25h.04c.4-.75 1.38-1.54 2.83-1.54 3.03 0 3.59 2 3.59 4.58V19h-2.9v-4.35c0-1.04-.02-2.38-1.45-2.38-1.46 0-1.68 1.13-1.68 2.3V19h-2.9V9.8Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/0xkar7ik",
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
        <path d="M18.9 3H22l-6.8 7.76L23 21h-6.1l-4.78-6.23L6.66 21H3.54l7.28-8.3L3 3h6.25l4.32 5.74L18.9 3Zm-1.07 16.2h1.72L8.3 4.72H6.45L17.83 19.2Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:agarwalkartik704@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4.5 7 7.5 6 7.5-6" />
      </svg>
    ),
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 3.5h6l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5Z" />
        <path d="M14 3.5V8h4M9 12h6M9 15h6M9 18h4" />
      </svg>
    ),
  },
];

/* ── Stats ───────────────────────────────────────────────────── */
const STATS = [
  { value: "1+", label: "yrs exp" },
  { value: "5+", label: "projects" },
  { value: "347", label: "commits" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 100, behavior: "smooth" });
  };

  return (
    <div id="home" className="relative min-h-screen overflow-x-hidden bg-transparent">
      <Navbar />

      <main className="mx-auto flex w-full max-w-[1324px] flex-col px-5 pb-12 pt-24 sm:px-8 sm:pt-28 lg:px-10 lg:pt-24 xl:pt-28">
        <section className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(430px,0.86fr)] lg:gap-10">
          <div className="min-w-0">
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-[#C778DD]/25 bg-[#C778DD]/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#C778DD] font-fira-code">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C778DD] animate-pulse" />
              Full Stack Engineer
            </div>

            <h1 className="animate-fade-up-delay-1 max-w-[14ch] text-left text-[clamp(2.65rem,8.5vw,5.35rem)] font-bold leading-[0.98] tracking-normal text-white lg:text-[clamp(4.15rem,5.45vw,5.45rem)]">
              Full-stack products,
              <span className="mt-1 block bg-gradient-to-r from-white via-[#e8d0f6] to-[#C778DD] bg-clip-text text-transparent">
                shipped clean.
              </span>
            </h1>

            <p className="animate-fade-up-delay-2 mt-6 max-w-[58ch] text-sm leading-relaxed text-[#ABB2BF] font-fira-code sm:text-[15px]">
              I build responsive, high-performance web applications from
              scratch, designed with visual precision and backed by clean,
              scalable code.
            </p>

            <div className="animate-fade-up-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                onClick={() => scrollToSection("contacts")}
                className="btn-gradient-border h-[46px] w-full sm:w-[190px]"
              >
                <span className="text-sm font-medium tracking-wide text-white font-fira-code">
                  Start a Project
                </span>
              </button>
              <button
                onClick={() => scrollToSection("works")}
                className="flex h-[46px] items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 text-sm text-[#E5E7EB] transition-all duration-200 font-fira-code hover:border-white/[0.2] hover:bg-white/[0.07] sm:px-5"
              >
                View Work
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[46px] items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-4 text-sm text-[#ABB2BF] transition-all duration-200 font-fira-code hover:border-[#C778DD]/30 hover:bg-white/[0.07] hover:text-white sm:px-5"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M8 3.5h6l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5Z" />
                  <path d="M14 3.5V8h4M9 12h6M9 15h6M9 18h4" />
                </svg>
                Resume
              </a>
            </div>

            <div className="animate-fade-up-delay-3 mt-8 rounded-2xl border border-white/[0.08] bg-[#070A11]/55 p-4 backdrop-blur-md sm:p-5">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C778DD] opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C778DD]" />
                  </span>
                  <span className="text-xs text-[#ABB2BF] font-fira-code">Available for new work</span>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:min-w-[285px]">
                  {STATS.map((s) => (
                    <div key={s.label} className="min-w-0 border-l border-white/[0.08] pl-3 leading-tight first:border-l-0 first:pl-0 sm:first:border-l sm:first:pl-3">
                      <span className="block text-sm font-bold text-white font-fira-code">{s.value}</span>
                      <span className="block truncate text-[10px] uppercase tracking-wider text-[#6b7280] font-fira-code">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-white/[0.06] pt-4">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-[#7b8190] transition-all duration-150 hover:border-[#C778DD]/45 hover:bg-[#C778DD]/5 hover:text-white"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <aside className="hidden lg:grid min-w-0 gap-4">
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070A11]/60 p-4 shadow-[0_0_50px_rgba(199,120,221,0.07)] backdrop-blur-md sm:p-5">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C778DD]/70 to-transparent" />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#C778DD]/25 bg-[#C778DD]/[0.08] px-3 py-1 text-[11px] uppercase tracking-widest text-[#C778DD] font-fira-code">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C778DD] animate-pulse" />
                  Building now
                </div>
                <span className="text-[11px] text-[#6b7280] font-fira-code">Delhi, India</span>
              </div>

              <div className="mt-5 grid items-end gap-4 sm:grid-cols-[minmax(170px,240px)_1fr]">
                <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-xl border border-[#C778DD]/[0.12] bg-[linear-gradient(180deg,rgba(199,120,221,0.06),rgba(199,120,221,0.01))] sm:min-h-[250px]">
                  <div className="absolute h-40 w-40 rounded-full border border-[#C778DD]/15 bg-[#C778DD]/[0.05] blur-xl" />
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-[#C778DD]/30 bg-[#0d0118] shadow-[0_0_42px_rgba(199,120,221,0.2)] sm:h-36 sm:w-36">
                    <div className="absolute inset-3 rounded-full border border-[#C778DD]/[0.1]" />
                    <svg
                      viewBox="0 0 120 120"
                      className="h-24 w-24 sm:h-28 sm:w-28"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle cx="60" cy="43" r="22" fill="#e8c8ff" opacity="0.85" />
                      <path d="M36 93c4.1-17.1 12.1-25.6 24-25.6S79.9 75.9 84 93" fill="#1a0a2e" />
                      <path d="M39 47c4.8-14 11.8-21 21-21s16.2 7 21 21" stroke="#C778DD" strokeWidth="6" strokeLinecap="round" />
                      <path d="M45 45h30M45 54h30" stroke="#0d0118" strokeWidth="4" strokeLinecap="round" />
                      <path d="M36 93c4.1-17.1 12.1-25.6 24-25.6S79.9 75.9 84 93" stroke="#d4a0e8" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                    <span className="sr-only">Developer avatar</span>
                  </div>
                </div>

                <div className="grid gap-2.5">
                  {["Next.js interfaces", "Node.js APIs", "Realtime systems"].map((item) => (
                    <div key={item} className="flex items-center justify-between gap-3 rounded-lg border border-[#C778DD]/[0.1] bg-[#C778DD]/[0.03] px-3 py-2.5 hover:border-[#C778DD]/25 hover:bg-[#C778DD]/[0.06] transition-colors duration-200">
                      <span className="text-xs text-[#ABB2BF] font-fira-code">{item}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C778DD]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid auto-rows-[228px] items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="min-h-0 min-w-0">
                <TerminalCard />
              </div>
              <div className="min-h-0 min-w-0">
                <ActiveCard />
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-6 pb-4">
          <div className="w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070A11]/55 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.05] px-4 py-3 sm:px-5">
              <div className="flex min-w-0 items-center gap-2">
                <div className="flex shrink-0 gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-[#ef4444]/45" />
                  <div className="h-2 w-2 rounded-full bg-[#eab308]/45" />
                  <div className="h-2 w-2 rounded-full bg-[#22c55e]/45" />
                </div>
                <span className="truncate text-[11px] text-[#6b7280] font-fira-code">contributions · last 12 months</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C778DD] animate-pulse" />
                <span className="text-[11px] text-[#6b7280] font-fira-code">@scripter-kartik</span>
              </div>
            </div>
            <div className="overflow-x-auto hide-scrollbar px-3 py-4 sm:px-5" style={{ WebkitOverflowScrolling: "touch" }}>
              <div style={{ minWidth: "max-content" }}>
                {mounted && (
                  <GitHubCalendar
                    className="github-calendar-purple"
                    username="scripter-kartik"
                    colorScheme="dark"
                    blockSize={11}
                    blockMargin={4}
                    fontSize={11}
                    theme={{
                      light: ["#f5e6fa", "#e1bdf0", "#c778dd", "#a945c7", "#7b2d92"],
                      dark: ["#110a14", "#3e1a4d", "#6f2c8a", "#9b3dba", "#c778dd"],
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
