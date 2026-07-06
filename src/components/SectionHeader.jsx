import React from "react";
const SectionHeader = ({ title }) => {
  return (
    <div className="flex items-center gap-3 w-full max-w-[1324px] mb-8 sm:mb-10 md:mb-12 lg:mb-16">
      <span className="text-[#C778DD] font-fira-code text-2xl sm:text-3xl font-bold leading-none select-none">
        #
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-fira-code font-semibold text-white whitespace-nowrap tracking-tight">
        {title}
      </h2>
      <div className="section-line" />
    </div>
  );
};
export default SectionHeader;