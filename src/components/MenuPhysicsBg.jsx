"use client";

import { useEffect, useRef } from "react";

export default function MenuPhysicsBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const bubbles = [];
    const particles = [];
    const maxBubbles = 12;

    class Bubble {
      constructor(x, y, radius) {
        this.x = x || Math.random() * width;
        this.y = y || Math.random() * height;
        this.radius = radius || 15 + Math.random() * 25;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.alpha = 0.12 + Math.random() * 0.12;
        this.life = 1;
      }

      draw() {
        // 1. Transparent gradient fill
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          this.x - this.radius * 0.3,
          this.y - this.radius * 0.3,
          this.radius * 0.1,
          this.x,
          this.y,
          this.radius
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, 0.2)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.01)");
        gradient.addColorStop(0.9, "rgba(180, 230, 255, 0.06)"); // cyan hint
        gradient.addColorStop(1, "rgba(255, 180, 220, 0.08)");  // pink hint

        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // 2. Cyan outer shimmer stroke
        ctx.beginPath();
        ctx.strokeStyle = `rgba(180, 230, 255, ${this.alpha * 1.4})`;
        ctx.lineWidth = 1;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();

        // 3. Pink inner refraction stroke
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 180, 220, ${this.alpha * 1.1})`;
        ctx.lineWidth = 0.8;
        ctx.arc(this.x + 0.5, this.y + 0.5, this.radius - 1, 0, Math.PI * 2);
        ctx.stroke();

        // 4. Specular highlight (main reflection)
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.arc(
          this.x - this.radius * 0.35,
          this.y - this.radius * 0.35,
          this.radius * 0.15,
          0,
          Math.PI * 2
        );
        ctx.fill();

        // 5. Specular highlight (tiny secondary pin-point)
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 255, 255, 0.65)";
        ctx.arc(
          this.x - this.radius * 0.22,
          this.y - this.radius * 0.45,
          this.radius * 0.05,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x - this.radius < 0) {
          this.x = this.radius;
          this.vx = -this.vx;
        } else if (this.x + this.radius > width) {
          this.x = width - this.radius;
          this.vx = -this.vx;
        }

        if (this.y - this.radius < 0) {
          this.y = this.radius;
          this.vy = -this.vy;
        } else if (this.y + this.radius > height) {
          this.y = height - this.radius;
          this.vy = -this.vy;
        }
      }
    }

    class PopParticle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 4;
        this.vy = (Math.random() - 0.5) * 4;
        this.radius = 1 + Math.random() * 2;
        this.alpha = 1;
        this.decay = 0.02 + Math.random() * 0.02;
        this.color = color || (Math.random() < 0.5 ? "rgba(180, 230, 255, 0.8)" : "rgba(255, 180, 220, 0.8)");
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color.replace("0.8", this.alpha.toString());
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
      }
    }

    for (let i = 0; i < maxBubbles; i++) {
      bubbles.push(new Bubble());
    }

    const spawnBurst = (x, y) => {
      for (let i = 0; i < 8; i++) {
        particles.push(new PopParticle(x, y));
      }
    };

    const resolveCollisions = () => {
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const b1 = bubbles[i];
          const b2 = bubbles[j];

          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = b1.radius + b2.radius;

          if (dist < minDist) {
            const overlap = minDist - dist;
            const nx = dx / dist;
            const ny = dy / dist;

            b1.x -= nx * overlap * 0.5;
            b1.y -= ny * overlap * 0.5;
            b2.x += nx * overlap * 0.5;
            b2.y += ny * overlap * 0.5;

            const kx = b1.vx - b2.vx;
            const ky = b1.vy - b2.vy;
            const p = 2 * (nx * kx + ny * ky) / 2;

            const speedDiff = Math.sqrt(kx * kx + ky * ky);

            b1.vx -= p * nx;
            b1.vy -= p * ny;
            b2.vx += p * nx;
            b2.vy += p * ny;

            if (speedDiff > 1.2 && Math.random() < 0.25) {
              const cx = b1.x + nx * b1.radius;
              const cy = b1.y + ny * b1.radius;
              spawnBurst(cx, cy);
              
              if (Math.random() < 0.3) {
                bubbles.splice(j, 1);
                bubbles.push(new Bubble(undefined, height + 50, 10 + Math.random() * 15));
              }
            }
          }
        }
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      bubbles.forEach((bubble) => {
        bubble.update();
        bubble.draw();
      });

      resolveCollisions();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();
        if (p.alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
    />
  );
}
