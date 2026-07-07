"use client";
import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter, usePathname } from "next/navigation";
import { Search, Home, User, Mail, FileText, MessageSquare, Code2, Users, MonitorPlay, Briefcase } from "lucide-react";
import { useUISound } from "@/hooks/useUISound";
import { toast } from "react-hot-toast";
import { PROJECTS } from "@/constants";
export default function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { playClick } = useUISound();
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    const handleToggle = () => setOpen((o) => !o);
    document.addEventListener("keydown", down);
    window.addEventListener("toggle-command-menu", handleToggle);
    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("toggle-command-menu", handleToggle);
    };
  }, []);
  const runCommand = (command) => {
    playClick();
    setOpen(false);
    command();
  };
  const copyEmail = () => {
    navigator.clipboard.writeText("agarwalkartik704@gmail.com");
    toast.success("Email copied to clipboard!");
  };
  const scrollToSection = (id) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 100, behavior: "smooth" });
      }
    }
  };
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[99999] flex items-start justify-center pt-[15vh]">
      <div 
        className="fixed inset-0 bg-[#05070c]/70 backdrop-blur-sm transition-opacity"
        onClick={() => setOpen(false)}
      />
      <div className="relative w-[95vw] max-w-[640px] shadow-2xl rounded-xl border border-white/[0.08] bg-[#070A11]/95 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <Command 
          className="flex h-full w-full flex-col bg-transparent"
          shouldFilter={true}
        >
          <div className="flex items-center border-b border-white/[0.08] px-4 py-3">
            <Search className="mr-3 h-5 w-5 text-[#ABB2BF]" />
            <Command.Input 
              autoFocus
              placeholder="Type a command or search..." 
              className="flex-1 bg-transparent text-white outline-none placeholder:text-[#ABB2BF] font-fira-code text-sm border-none ring-0"
            />
            <div className="flex gap-1.5 items-center">
              <span className="flex items-center justify-center rounded border border-white/[0.1] bg-white/[0.05] px-1.5 py-0.5 text-[10px] text-white font-fira-code">ESC</span>
            </div>
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2 hide-scrollbar">
            <Command.Empty className="py-6 text-center text-sm text-[#ABB2BF] font-fira-code">
              No results found.
            </Command.Empty>
            <Command.Group heading="Navigation" className="px-2 py-1.5 text-[10px] uppercase tracking-wider text-[#ABB2BF] font-fira-code">
              <Command.Item onSelect={() => runCommand(() => scrollToSection("home"))} className="cmdk-item">
                <Home className="mr-3 h-4 w-4 text-[#C778DD]" /> <span className="flex-1 text-white">Home</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => scrollToSection("about-me"))} className="cmdk-item">
                <User className="mr-3 h-4 w-4 text-[#C778DD]" /> <span className="flex-1 text-white">About Me</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => scrollToSection("works"))} className="cmdk-item">
                <Briefcase className="mr-3 h-4 w-4 text-[#C778DD]" /> <span className="flex-1 text-white">Projects</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => window.open("/resume.pdf", "_blank"))} className="cmdk-item">
                <FileText className="mr-3 h-4 w-4 text-[#C778DD]" /> <span className="flex-1 text-white">View Resume</span>
              </Command.Item>
            </Command.Group>
            <Command.Group heading="Case Studies" className="px-2 py-1.5 text-[10px] uppercase tracking-wider text-[#ABB2BF] font-fira-code mt-2">
              {PROJECTS.map((project) => (
                <Command.Item key={project.slug} onSelect={() => runCommand(() => router.push(`/projects/${project.slug}`))} className="cmdk-item">
                  <MonitorPlay className="mr-3 h-4 w-4 text-[#C778DD]" /> <span className="flex-1 text-white">{project.title}</span>
                </Command.Item>
              ))}
            </Command.Group>
            <Command.Group heading="Contact" className="px-2 py-1.5 text-[10px] uppercase tracking-wider text-[#ABB2BF] font-fira-code mt-2">
              <Command.Item onSelect={() => runCommand(copyEmail)} className="cmdk-item">
                <Mail className="mr-3 h-4 w-4 text-[#C778DD]" /> <span className="flex-1 text-white">Copy Email Address</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => window.open("https://github.com/scripter-kartik", "_blank"))} className="cmdk-item">
                <Code2 className="mr-3 h-4 w-4 text-[#C778DD]" /> <span className="flex-1 text-white">GitHub</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => window.open("https://www.linkedin.com/in/kartik-agarwal-747289376/", "_blank"))} className="cmdk-item">
                <Users className="mr-3 h-4 w-4 text-[#C778DD]" /> <span className="flex-1 text-white">LinkedIn</span>
              </Command.Item>
              <Command.Item onSelect={() => runCommand(() => window.open("https://x.com/0xkar7ik", "_blank"))} className="cmdk-item">
                <MessageSquare className="mr-3 h-4 w-4 text-[#C778DD]" /> <span className="flex-1 text-white">Twitter (X)</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
