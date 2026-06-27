"use client";
import { useEffect, useState } from "react";

const BARS = [
  18, 32, 12, 45, 28, 52, 38, 60, 44, 72, 55, 80, 63, 91, 47, 68, 85, 73, 96,
  82,
];
const TAGS = ["React", "Next", "Node", "Mongo", "TS"];
const COMMITS_TARGET = 347;

export default function ActiveCard() {
  const [count, setCount] = useState(0);
  const maxBar = Math.max(...BARS);

  useEffect(() => {
    let current = 0;
    const step = Math.ceil(COMMITS_TARGET / 60);
    const interval = setInterval(() => {
      current = Math.min(current + step, COMMITS_TARGET);
      setCount(current);
      if (current >= COMMITS_TARGET) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border border-white/[0.08] hover:border-emerald-400/40 rounded-xl bg-[#070A11]/60 backdrop-blur-md p-4 font-mono flex flex-col gap-3 w-full h-full shadow-[0_0_40px_rgba(34,197,94,0.05)] hover:shadow-[0_0_45px_rgba(34,197,94,0.12)] transition-all duration-300 overflow-hidden">
      <div className="flex items-center gap-2 text-xs text-gray-500 font-fira-code">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]" />
        active
      </div>

      <div>
        <div className="text-[26px] font-bold text-white leading-none font-fira-code">
          {count}
        </div>
        <div className="text-[10px] text-gray-500 mt-1 font-fira-code uppercase tracking-wider">commits this year</div>
      </div>

      <div className="flex items-end gap-0.5 h-9">
        {BARS.map((v, i) => (
          <div
            key={i}
            className="flex-1 bg-emerald-950/60 rounded-sm hover:bg-emerald-400 transition-colors duration-200 cursor-default"
            style={{ height: `${(v / maxBar) * 34}px` }}
          />
        ))}
      </div>

      <div className="h-px bg-white/[0.06]" />

      <div className="flex flex-wrap gap-1.5">
        {TAGS.map((tag) => (
          <span
            key={tag}
            className="text-[9px] px-2 py-0.5 border border-emerald-400/20 bg-emerald-400/5 text-emerald-300 rounded-md tracking-wider font-fira-code font-medium uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
