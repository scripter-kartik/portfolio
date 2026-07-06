import { PROJECTS } from "@/constants";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Kartik`,
    description: project.longDescription,
  };
}

export default function ProjectPage({ params }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  const prev = PROJECTS[currentIndex - 1] ?? null;
  const next = PROJECTS[currentIndex + 1] ?? null;

  return (
    <PageTransition>
      <div className="min-h-screen bg-black selection:bg-[#C778DD]/30 overflow-x-hidden">
      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        background: [
          "radial-gradient(ellipse 60% 50% at 10% 20%, rgba(199,120,221,0.08) 0%, transparent 65%)",
          "radial-gradient(ellipse 50% 50% at 90% 80%, rgba(123,45,146,0.09) 0%, transparent 65%)",
        ].join(","),
      }} />
      {/* Dot grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #c778dd 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <main className="relative z-10 mx-auto max-w-[900px] px-5 sm:px-8 pb-24">

        {/* ── Back nav ── */}
        <div className="pt-8 pb-2">
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 font-fira-code text-xs text-[#6b7280] hover:text-[#C778DD] transition-colors duration-200 group"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to projects
          </Link>
        </div>

        {/* ── Hero ── */}
        <section className="pt-10 pb-10 border-b border-white/[0.06]">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-fira-code text-[11px] text-[#C778DD] border border-[#C778DD]/25 bg-[#C778DD]/[0.07] px-3 py-1 rounded-full uppercase tracking-widest">
              {project.year}
            </span>
            {project.tags.map((t) => (
              <span key={t} className="font-fira-code text-[10px] text-[#ABB2BF]/70 border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2.4rem,6vw,4rem)] font-extrabold leading-tight tracking-tight text-white mb-4">
            {project.title}
            <span className="block text-[clamp(1rem,2.5vw,1.4rem)] font-medium text-[#C778DD]/70 mt-2 tracking-normal">
              {project.description}
            </span>
          </h1>

          <p className="text-[15px] leading-[1.85] text-[#8a8490] max-w-[65ch] font-fira-code">
            {project.longDescription}
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-[#C778DD] text-white text-sm font-semibold font-fira-code tracking-wide transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(199,120,221,0.45)]"
            >
              Live Demo
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-xl border border-white/[0.1] bg-white/[0.03] text-[#ABB2BF] text-sm font-semibold font-fira-code tracking-wide transition-all duration-200 hover:border-[#C778DD]/35 hover:text-white hover:bg-[#C778DD]/[0.07]"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.12-1.47-1.12-1.47-.91-.63.07-.62.07-.62 1 .07 1.54 1.04 1.54 1.04.9 1.53 2.34 1.1 2.9.84.1-.64.35-1.1.64-1.35-2.22-.25-4.56-1.12-4.56-4.97 0-1.1.39-2 1.03-2.71-.1-.25-.45-1.28.1-2.66 0 0 .85-.27 2.78 1.03A9.62 9.62 0 0 1 12 6.85c.85 0 1.7.11 2.5.33 1.93-1.3 2.78-1.03 2.78-1.03.56 1.38.2 2.41.1 2.66.64.7 1.03 1.61 1.03 2.71 0 3.86-2.35 4.72-4.59 4.97.36.3.69.88.69 1.79v2.65c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
              </svg>
              GitHub
            </a>
          </div>
        </section>

        {/* ── Screenshot ── */}
        <section className="py-10 border-b border-white/[0.06]">
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] shadow-[0_0_60px_rgba(199,120,221,0.07)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0014] border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]/70" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]/70" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="mx-auto max-w-[300px] rounded-md bg-white/[0.04] border border-white/[0.06] px-3 py-1 text-[11px] text-[#555] font-fira-code text-center truncate">
                  {project.link.replace("https://", "")}
                </div>
              </div>
            </div>
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full object-cover"
              style={{ maxHeight: 480, objectPosition: "top" }}
            />
          </div>
        </section>

        {/* ── Features + Challenge grid ── */}
        <section className="py-10 border-b border-white/[0.06] grid gap-8 md:grid-cols-2">

          {/* Features */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#C778DD] font-fira-code text-sm">#</span>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#4a4060] font-fira-code">Key Features</h2>
            </div>
            <ul className="space-y-3">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="mt-[3px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-[#C778DD]/25 bg-[#C778DD]/[0.07] text-[#C778DD] text-[10px] font-bold font-fira-code">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-[#8a8490] leading-relaxed font-fira-code group-hover:text-[#ABB2BF] transition-colors">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenge */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#C778DD] font-fira-code text-sm">#</span>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#4a4060] font-fira-code">Key Challenge</h2>
            </div>
            <div className="rounded-2xl border border-[#C778DD]/12 bg-[#C778DD]/[0.03] p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C778DD]/40 to-transparent" />
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#C778DD]/30 mb-4" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm1 14.93V17a1 1 0 0 1-2 0v-.07A8 8 0 0 1 4.07 11H4a1 1 0 0 1 0-2h.07A8 8 0 0 1 11 4.07V4a1 1 0 0 1 2 0v.07A8 8 0 0 1 19.93 11H20a1 1 0 0 1 0 2h-.07A8 8 0 0 1 13 16.93zM12 8a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1z"/>
              </svg>
              <p className="text-sm text-[#8a8490] leading-[1.85] font-fira-code">
                {project.challenges}
              </p>
            </div>

            {/* Tech stack used */}
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-widest text-[#3a3050] font-fira-code mb-3">Built with</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="font-fira-code text-[11px] px-3 py-1.5 rounded-lg border border-[#C778DD]/20 bg-[#C778DD]/[0.06] text-[#C778DD]/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Prev / Next ── */}
        <section className="pt-10">
          <div className="grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="group flex flex-col gap-1 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 hover:border-[#C778DD]/30 hover:bg-[#C778DD]/[0.04] transition-all duration-200"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#4a4060] font-fira-code flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Previous
                </span>
                <span className="text-base font-semibold text-white group-hover:text-[#C778DD] transition-colors">{prev.title}</span>
                <span className="text-xs text-[#6b7280] font-fira-code">{prev.description}</span>
              </Link>
            ) : <div />}

            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex flex-col gap-1 rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 hover:border-[#C778DD]/30 hover:bg-[#C778DD]/[0.04] transition-all duration-200 sm:text-right sm:items-end"
              >
                <span className="text-[10px] uppercase tracking-widest text-[#4a4060] font-fira-code flex items-center gap-1.5">
                  Next
                  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="text-base font-semibold text-white group-hover:text-[#C778DD] transition-colors">{next.title}</span>
                <span className="text-xs text-[#6b7280] font-fira-code">{next.description}</span>
              </Link>
            ) : <div />}
          </div>
        </section>

      </main>
      </div>
    </PageTransition>
  );
}
