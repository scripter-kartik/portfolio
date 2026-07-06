export default function Footer() {
  const mediaButtonClass =
    "h-10 w-10 shrink-0 rounded-lg border border-white/[0.07] bg-white/[0.03] text-[#6b7280] hover:text-white hover:border-[#C778DD]/40 hover:bg-[#C778DD]/5 transition-all duration-150 inline-flex items-center justify-center";
  const footerIconClass = "footer-icon-svg";
  const calendarLink =
    "https://calendar.google.com/calendar/u/0/r/eventedit?text=Project%20Call%20with%20Kartik%20Labs&details=Let%20us%20discuss%20your%20project%20requirements.";
  const xLink = "https://x.com/0xkar7ik";
  const TooltipButton = ({ text, children }) => (
    <div className="relative group flex">
      {children}
      <div className="pointer-events-none absolute left-1/2 -top-9 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100 z-50 hidden sm:block">
        <div className="whitespace-nowrap rounded-lg border border-[#C778DD]/40 bg-[#070A11]/95 backdrop-blur-md px-3 py-1.5 text-[11px] text-white shadow-[0_0_20px_rgba(199,120,221,0.2)]">
          {text}
        </div>
      </div>
    </div>
  );
  return (
    <footer className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-12 pb-6 relative">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C778DD]/20 to-transparent mb-10" />
      <div className="w-full max-w-[1324px] flex flex-col sm:flex-row sm:items-center justify-between gap-8 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start gap-2">
          <div className="flex items-center gap-2.5">
            <img
              className="w-6 h-6 rounded-full border border-[#C778DD]/30 flex-shrink-0"
              src="/kartikLabsLogo.png"
              alt="Kartik Logo"
            />
            <span className="text-white font-fira-code font-bold text-lg">Kartik</span>
          </div>
          <p className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm">
            Full-stack developer · Delhi, India
          </p>
          <a
            href="mailto:agarwalkartik704@gmail.com"
            className="text-[#ABB2BF] font-fira-code text-xs hover:text-[#C778DD] transition-colors duration-200"
          >
            agarwalkartik704@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-3">
          <p className="text-[#C778DD] font-fira-code text-sm font-semibold tracking-wide">
            Connect
          </p>
          <div className="flex items-center gap-2.5 overflow-visible">
            <TooltipButton text="GitHub">
              <a href="https://github.com/scripter-kartik" target="_blank" rel="noopener noreferrer" className={mediaButtonClass} aria-label="GitHub">
                <svg viewBox="0 0 24 24" className={footerIconClass} fill="currentColor">
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1 .07 1.54 1.04 1.54 1.04.9 1.53 2.34 1.1 2.9.84.1-.64.35-1.1.64-1.35-2.22-.25-4.56-1.12-4.56-4.97 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.28.1-2.66 0 0 .85-.27 2.78 1.03A9.62 9.62 0 0 1 12 6.85c.85 0 1.7.11 2.5.33 1.93-1.3 2.78-1.03 2.78-1.03.56 1.38.2 2.41.1 2.66.64.7 1.03 1.61 1.03 2.71 0 3.86-2.35 4.72-4.59 4.97.36.3.69.88.69 1.79v2.65c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
            </TooltipButton>
            <TooltipButton text="LinkedIn">
              <a href="https://www.linkedin.com/in/kartik-agarwal-747289376/" target="_blank" rel="noopener noreferrer" className={mediaButtonClass} aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" className={footerIconClass} fill="currentColor">
                  <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.8h2.9V19H5.5V9.8Zm4.72 0H13v1.25h.04c.4-.75 1.38-1.54 2.83-1.54 3.03 0 3.59 2 3.59 4.58V19h-2.9v-4.35c0-1.04-.02-2.38-1.45-2.38-1.46 0-1.68 1.13-1.68 2.3V19h-2.9V9.8Z" />
                </svg>
              </a>
            </TooltipButton>
            <TooltipButton text="X / Twitter">
              <a href={xLink} target="_blank" rel="noopener noreferrer" className={mediaButtonClass} aria-label="X">
                <svg viewBox="0 0 24 24" className={footerIconClass} fill="currentColor">
                  <path d="M18.9 3H22l-6.8 7.76L23 21h-6.1l-4.78-6.23L6.66 21H3.54l7.28-8.3L3 3h6.25l4.32 5.74L18.9 3Zm-1.07 16.2h1.72L8.3 4.72H6.45L17.83 19.2Z" />
                </svg>
              </a>
            </TooltipButton>
            <TooltipButton text="Email">
              <a href="mailto:agarwalkartik704@gmail.com" className={mediaButtonClass} aria-label="Email">
                <svg viewBox="0 0 24 24" className={footerIconClass} fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                  <path d="m4.5 7 7.5 6 7.5-6" />
                </svg>
              </a>
            </TooltipButton>
            <TooltipButton text="Schedule Call">
              <a href={calendarLink} target="_blank" rel="noopener noreferrer" className={mediaButtonClass} aria-label="Schedule call">
                <svg viewBox="0 0 24 24" className={footerIconClass} fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
                  <path d="M8 3.5v4M16 3.5v4M3.5 9.5h17" />
                </svg>
              </a>
            </TooltipButton>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1324px] mt-8 pt-5 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-fira-code text-[#ABB2BF] text-xs sm:text-sm">
          © {new Date().getFullYear()} Kartik. All rights reserved.
        </p>
        <p className="font-fira-code text-[#555] text-xs">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}