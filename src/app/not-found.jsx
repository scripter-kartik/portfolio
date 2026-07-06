import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-center px-4 relative overflow-hidden selection:bg-[#C778DD]/30">
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        background: "radial-gradient(circle 350px at 50% 50%, rgba(199,120,221,0.08) 0%, transparent 60%)",
      }} />

      <div className="relative z-10 flex flex-col items-center max-w-[450px]">
        <h1 className="text-8xl font-extrabold text-white tracking-tighter mb-4 select-none relative font-[var(--font-outfit)]">
          404
          <span className="absolute inset-0 text-[#C778DD] blur-xl opacity-30 select-none">404</span>
        </h1>
        
        <h2 className="text-xl font-bold text-white mb-3 font-fira-code">Page not found</h2>
        
        <p className="text-sm text-[#ABB2BF] leading-relaxed mb-8 font-fira-code">
          The page you are looking for doesn't exist or has been moved to another path.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-[#C778DD] text-white text-sm font-semibold font-fira-code tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(199,120,221,0.45)]"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
