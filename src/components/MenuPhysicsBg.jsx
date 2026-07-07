"use client";
import { useEffect, useRef } from "react";
const ORBS = [
  { x: 0.25, y: 0.3,  r: 90,  color: "#C778DD", speed: 0.00018 },
  { x: 0.75, y: 0.65, r: 110, color: "#61AFEF", speed: 0.00014 },
  { x: 0.5,  y: 0.8,  r: 70,  color: "#56B6C2", speed: 0.00022 },
  { x: 0.15, y: 0.75, r: 55,  color: "#C778DD", speed: 0.00020 },
  { x: 0.85, y: 0.2,  r: 65,  color: "#61AFEF", speed: 0.00016 },
];
export default function MenuPhysicsBg({ isOpen = false }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let w, h;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);
    const offsets = ORBS.map(() => Math.random() * Math.PI * 2);
    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      ORBS.forEach((orb, i) => {
        const ox = offsets[i];
        const x = orb.x * w + Math.sin(t * orb.speed * 1.0 + ox) * w * 0.09;
        const y = orb.y * h + Math.cos(t * orb.speed * 0.7 + ox) * h * 0.07;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, orb.r);
        grad.addColorStop(0,   hexAlpha(orb.color, 0.18));
        grad.addColorStop(0.5, hexAlpha(orb.color, 0.07));
        grad.addColorStop(1,   hexAlpha(orb.color, 0.0));
        ctx.beginPath();
        ctx.arc(x, y, orb.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
function hexAlpha(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
