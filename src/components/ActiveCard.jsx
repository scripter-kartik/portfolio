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
    <div className="border border-[#2a1f3d] rounded-lg bg-[#0d0d0d] p-4 font-mono flex flex-col gap-3 w-full">
      {/* Status */}
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]" />
        active
      </div>

      <div>
        <div className="text-[28px] font-bold text-slate-100 leading-none">
          {count}
        </div>
        <div className="text-[10px] text-gray-600 mt-1">commits this year</div>
      </div>

      {/* Bar chart */}
      <div className="flex items-end gap-0.5 h-10">
        {BARS.map((v, i) => (
          <div
            key={i}
            className="flex-1 bg-[#2a1f3d] rounded-sm hover:bg-violet-700 transition-colors duration-200 cursor-default"
            style={{ height: `${(v / maxBar) * 38}px` }}
          />
        ))}
      </div>

      <div className="h-px bg-[#1a1330]" />

      <div className="flex flex-wrap gap-1">
        {TAGS.map((tag) => (
          <span
            key={tag}
            className="text-[9px] px-1.5 py-0.5 border border-[#2a1f3d] text-violet-400 rounded tracking-wide"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
