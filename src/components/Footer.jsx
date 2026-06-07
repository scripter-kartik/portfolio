export default function Footer() {
  const mediaButtonClass =
    "h-10 w-10 rounded-lg border border-[#1F2532] bg-[#070A11] text-[#9CA3AF] hover:text-white hover:border-[#C778DD80] transition-all duration-200 inline-flex items-center justify-center";
  const calendarLink =
    "https://calendar.google.com/calendar/u/0/r/eventedit?text=Project%20Call%20with%20Kartik%20Labs&details=Let%20us%20discuss%20your%20project%20requirements.";
  const xLink = "https://x.com/0xkar7ik";

  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mt-12 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24">
      <div className="w-full h-[1px] bg-[#ABB2BF]" />

      <div className="w-full max-w-[1324px] flex flex-col sm:flex-row sm:items-start md:items-center justify-between gap-6 sm:gap-8 mt-4 sm:mt-6 md:mt-8">
        <div className="flex items-start justify-start flex-col gap-3 sm:gap-4 md:gap-5 w-full sm:w-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-8">
            <div className="flex items-center gap-3">
              <img
                className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 rounded-full"
                src="/kartikLabsLogo.png"
                alt=""
              />
              <h1 className="text-base sm:text-lg md:text-xl text-white font-fira-code">
                Kartik
              </h1>
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-custom font-fira-code break-all md:break-normal">
              agarwalkartik704@gmail.com
            </p>
          </div>

          <div className="text-white text-sm sm:text-base md:text-lg font-fira-code">
            <h1>Front-end and Back-end developer</h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <h1 className="text-lg sm:text-xl md:text-2xl text-[#C778DD] font-fira-code mb-2 sm:mb-3 md:mb-5">
            Media
          </h1>
          <div className="flex items-center flex-wrap gap-3 sm:gap-4">
            <a
              href="https://github.com/scripter-kartik"
              target="_blank"
              rel="noopener noreferrer"
              className={mediaButtonClass}
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1 .07 1.54 1.04 1.54 1.04.9 1.53 2.34 1.1 2.9.84.1-.64.35-1.1.64-1.35-2.22-.25-4.56-1.12-4.56-4.97 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.28.1-2.66 0 0 .85-.27 2.78 1.03A9.62 9.62 0 0 1 12 6.85c.85 0 1.7.11 2.5.33 1.93-1.3 2.78-1.03 2.78-1.03.56 1.38.2 2.41.1 2.66.64.7 1.03 1.61 1.03 2.71 0 3.86-2.35 4.72-4.59 4.97.36.3.69.88.69 1.79v2.65c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={mediaButtonClass}
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.8h2.9V19H5.5V9.8Zm4.72 0H13v1.25h.04c.4-.75 1.38-1.54 2.83-1.54 3.03 0 3.59 2 3.59 4.58V19h-2.9v-4.35c0-1.04-.02-2.38-1.45-2.38-1.46 0-1.68 1.13-1.68 2.3V19h-2.9V9.8Z" />
              </svg>
            </a>
            <a
              href={xLink}
              target="_blank"
              rel="noopener noreferrer"
              className={mediaButtonClass}
              aria-label="X"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.9 3H22l-6.8 7.76L23 21h-6.1l-4.78-6.23L6.66 21H3.54l7.28-8.3L3 3h6.25l4.32 5.74L18.9 3Zm-1.07 16.2h1.72L8.3 4.72H6.45L17.83 19.2Z" />
              </svg>
            </a>
            <a
              href="mailto:agarwalkartik704@gmail.com"
              className={mediaButtonClass}
              aria-label="Email"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                <path d="m4.5 7 7.5 6 7.5-6" />
              </svg>
            </a>
            <a
              href={calendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className={mediaButtonClass}
              aria-label="Schedule call"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
                <path d="M8 3.5v4M16 3.5v4M3.5 9.5h17" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <p
        style={{ wordSpacing: "5px" }}
        className="text-xs sm:text-sm md:text-base lg:text-lg mt-8 sm:mt-10 md:mt-12 lg:mt-16 font-fira-code text-gray-custom mb-4 sm:mb-5 text-center px-4"
      >
        © Copyright 2026. Made by Kartik
      </p>
    </div>
  );
}
