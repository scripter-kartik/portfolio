import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <div className="flex items-center justify-between gap-2 w-full max-w-[1324px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
      <div className="flex items-center gap-2 md:gap-3 w-full">
        <img
          className="w-4 h-5 sm:w-5 sm:h-6 md:w-6 md:h-7 flex-shrink-0"
          src="/hashtag2.png"
          alt=""
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-fira-code text-white whitespace-nowrap">
          {title}
        </h1>
        <div className="h-px flex-1 ml-2 sm:ml-4 md:ml-6 lg:ml-10 bg-gradient-to-r from-primary via-gray-custom to-transparent" />
      </div>
    </div>
  );
};

export default SectionHeader;
