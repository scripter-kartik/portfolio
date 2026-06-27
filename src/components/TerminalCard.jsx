"use client";
import { useEffect, useRef, useState } from "react";

const sequences = [
  {
    cmd: "npm install @kartik/skills",
    outputs: [
      { text: "npm warn deprecated inflight@1.0.6", type: "warn" },
      { text: "npm warn deprecated glob@7.2.3", type: "warn" },
      { text: "", type: "muted" },
      { text: "  + @types/node@20.11.5", type: "muted" },
      { text: "  + @types/react@18.2.48", type: "muted" },
      { text: "  + typescript@5.4.0", type: "muted" },
      { text: "  + tailwindcss@3.4.1", type: "muted" },
      { text: "  + next@14.2.0", type: "muted" },
      { text: "  + react@18.3.0", type: "muted" },
      { text: "  + react-dom@18.3.0", type: "muted" },
      { text: "  + mongoose@8.1.1", type: "muted" },
      { text: "  + socket.io@4.7.4", type: "muted" },
      { text: "  + socket.io-client@4.7.4", type: "muted" },
      { text: "  + @clerk/nextjs@4.29.3", type: "muted" },
      { text: "  + cloudinary@2.0.1", type: "muted" },
      { text: "  + zod@3.22.4", type: "muted" },
      { text: "  + axios@1.6.7", type: "muted" },
      { text: "", type: "muted" },
      { text: "added 247 packages, audited 248 in 3.2s", type: "success" },
      { text: "64 packages are looking for funding", type: "muted" },
      { text: "  run `npm fund` for details", type: "dim" },
      { text: "", type: "muted" },
      { text: "found 0 vulnerabilities", type: "success" },
    ],
  },
  {
    cmd: "git log --oneline -8",
    outputs: [
      { text: "f3a91bc  feat: real-time chat with socket.io", type: "cyan" },
      { text: "e7d204a  fix: jwt token expiry on refresh", type: "red" },
      { text: "c1b839f  feat: cloudinary image upload flow", type: "cyan" },
      { text: "a52f17e  chore: upgrade next.js to 14.2.0", type: "muted" },
      { text: "9d3c6b2  style: responsive navbar mobile fix", type: "purple" },
      { text: "7e819d4  refactor: mongoose schema validation", type: "warn" },
      { text: "4f2a0c1  docs: update README with setup guide", type: "muted" },
      {
        text: "2b6e7f8  init: inkshelf — online bookshelf app",
        type: "success",
      },
    ],
  },

  {
    cmd: "whoami --verbose",
    outputs: [
      { text: "name      : Kartik", type: "muted" },
      { text: "role      : fullstack developer", type: "muted" },
      { text: "location  : Delhi, India", type: "muted" },
      { text: "status    : building cool things", type: "purple" },
      { text: "✓ self-taught. always learning.", type: "success" },
    ],
  },
];

export default function TerminalCard() {
  const [typedCmd, setTypedCmd] = useState("");
  const [outputs, setOutputs] = useState([]);
  const seqRef = useRef(0);
  const phaseRef = useRef("typing");
  const charRef = useRef(0);
  const outRef = useRef(0);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [outputs]);

  useEffect(() => {
    let timer;

    const tick = () => {
      const seq = sequences[seqRef.current];

      if (phaseRef.current === "typing") {
        if (charRef.current < seq.cmd.length) {
          setTypedCmd(seq.cmd.slice(0, ++charRef.current));
          timer = setTimeout(tick, 55 + Math.random() * 35);
        } else {
          phaseRef.current = "outputting";
          timer = setTimeout(tick, 500);
        }
      } else if (phaseRef.current === "outputting") {
        if (outRef.current < seq.outputs.length) {
          const item = seq.outputs[outRef.current++];
          setOutputs((prev) => [...prev, item]);
          timer = setTimeout(tick, 100);
        } else {
          phaseRef.current = "clearing";
          timer = setTimeout(tick, 2400);
        }
      } else if (phaseRef.current === "clearing") {
        setTypedCmd("");
        setOutputs([]);
        charRef.current = 0;
        outRef.current = 0;
        phaseRef.current = "typing";
        seqRef.current = (seqRef.current + 1) % sequences.length;
        timer = setTimeout(tick, 400);
      }
    };

    tick();
    return () => clearTimeout(timer);
  }, []);

  const textColor = (type) => {
    if (type === "success") return "text-green-400";
    if (type === "purple") return "text-violet-400";
    if (type === "warn") return "text-yellow-500";
    if (type === "dim") return "text-slate-600";
    if (type === "cyan") return "text-cyan-400";
    if (type === "red") return "text-red-400";
    return "text-slate-500";
  };

  return (
    <div className="border border-white/[0.08] hover:border-[#C778DD]/40 rounded-xl overflow-hidden bg-[#070A11]/60 backdrop-blur-md w-full h-full font-mono shadow-[0_0_40px_rgba(199,120,221,0.05)] hover:shadow-[0_0_45px_rgba(199,120,221,0.12)] transition-all duration-300 flex flex-col">
      <div className="bg-[#0b0e14]/80 px-3.5 py-2.5 flex items-center gap-2 border-b border-white/[0.06]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#eab308]/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/60" />
        <span className="text-gray-500 text-xs ml-2 font-fira-code">kartik@dev ~ bash</span>
      </div>

      <div
        ref={bodyRef}
        className="p-3.5 flex-1 min-h-0 overflow-y-auto text-xs leading-relaxed sm:text-sm"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex items-baseline gap-1.5">
          <span className="text-violet-600 select-none">❯</span>
          <span className="text-slate-200">{typedCmd}</span>
          <span className="inline-block w-1.5 h-3.5 bg-violet-600 align-middle animate-[blink_1s_step-end_infinite]" />
        </div>

        <div className="mt-1 space-y-0.5">
          {outputs.map((line, i) => (
            <div key={i} className={`pl-4 ${textColor(line.type)}`}>
              {line.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
