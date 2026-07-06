"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader";

const initialFormData = {
  name: "",
  email: "",
  company: "",
  budget: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

const inputClass =
  "w-full h-11 px-3.5 bg-[#0b0e19] border border-white/[0.07] rounded-xl text-white outline-none focus:border-[#C778DD]/70 focus:ring-2 focus:ring-[#C778DD]/15 transition-all duration-200 font-fira-code text-sm placeholder:text-gray-600";

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const calendarLink =
    "https://calendar.google.com/calendar/u/0/r/eventedit?text=Project%20Call%20with%20Kartik%20Labs&details=Let%20us%20discuss%20your%20project%20requirements.";
  const xLink = "https://x.com/0xkar7ik";

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openMailFallback = () => {
    const subject = formData.company
      ? `New project inquiry from ${formData.name} (${formData.company})`
      : `New project inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "Not provided"}\nBudget: ${formData.budget || "Not provided"}\nPreferred Call Date: ${formData.preferredDate || "Not provided"}\nPreferred Call Time: ${formData.preferredTime || "Not provided"}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:agarwalkartik704@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: "error", message: "Please fill name, email, and message before sending." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });
    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "Not provided",
          budget: formData.budget || "Not provided",
          preferred_date: formData.preferredDate || "Not provided",
          preferred_time: formData.preferredTime || "Not provided",
          message: formData.message,
          to_email: "agarwalkartik704@gmail.com",
        }, { publicKey });
        setStatus({ type: "success", message: "Message sent successfully. I will get back to you soon." });
      } else {
        openMailFallback();
        setStatus({ type: "success", message: "Mail app opened with your message details. Send it to complete." });
      }
      setFormData(initialFormData);
    } catch {
      setStatus({ type: "error", message: "Could not send right now. Please try again in a moment." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contacts"
      className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-16 sm:py-20 relative"
    >
      <SectionHeader title="contacts" />

      <div className="w-full max-w-[1324px] grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10 lg:gap-14">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <p className="font-fira-code text-[#ABB2BF] text-sm sm:text-base md:text-lg leading-relaxed max-w-[52ch]">
            I'm interested in freelance opportunities. Share your idea using
            the form, and I'll reply with next steps and a timeline.
          </p>

          {/* Quick connect card */}
          <div className="glass-card rounded-xl p-5 w-full max-w-[520px]">
            <h3 className="text-sm font-semibold text-white font-fira-code mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#C778DD] rounded-full" />
              Quick connect
            </h3>

            <div className="flex flex-col gap-2.5">
              <a
                href={xLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.05] bg-white/[0.01] hover:bg-[#C778DD]/5 hover:border-[#C778DD]/30 text-[#ABB2BF] hover:text-white transition-all duration-200"
              >
                <span className="h-9 w-9 rounded-lg border border-white/[0.08] bg-[#070A11] inline-flex items-center justify-center text-[#C778DD] flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M18.9 3H22l-6.8 7.76L23 21h-6.1l-4.78-6.23L6.66 21H3.54l7.28-8.3L3 3h6.25l4.32 5.74L18.9 3Zm-1.07 16.2h1.72L8.3 4.72H6.45L17.83 19.2Z" />
                  </svg>
                </span>
                <span className="font-fira-code text-sm">@0xkar7ik</span>
              </a>

              <button
                onClick={() => {
                  navigator.clipboard.writeText("agarwalkartik704@gmail.com");
                  import("react-hot-toast").then((module) => {
                    module.toast.success("Email copied to clipboard!");
                  });
                }}
                className="flex w-full items-center gap-3 p-3 rounded-xl border border-white/[0.05] bg-white/[0.01] hover:bg-[#C778DD]/5 hover:border-[#C778DD]/30 text-[#ABB2BF] hover:text-white transition-all duration-200 cursor-copy"
              >
                <span className="h-9 w-9 rounded-lg border border-white/[0.08] bg-[#070A11] inline-flex items-center justify-center text-[#C778DD] flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                    <path d="m4.5 7 7.5 6 7.5-6" />
                  </svg>
                </span>
                <span className="font-fira-code text-sm break-all">agarwalkartik704@gmail.com</span>
              </button>

              <a
                href={calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 h-11 rounded-xl border border-[#C778DD]/60 bg-[#C778DD]/5 text-white hover:bg-[#C778DD]/12 hover:border-[#C778DD] transition-all duration-200 font-fira-code text-sm mt-1"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
                  <path d="M8 3.5v4M16 3.5v4M3.5 9.5h17" />
                </svg>
                Book a Call
              </a>
            </div>
          </div>
        </div>

        {/* Right column — form */}
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-5 sm:p-6 md:p-7 w-full"
          >
            <h3 className="text-sm font-semibold text-white font-fira-code mb-5 flex items-center gap-2">
              <span className="w-1 h-4 bg-[#C778DD] rounded-full" />
              Send me a project brief
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-[#ABB2BF] font-fira-code text-xs">Name *</span>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[#ABB2BF] font-fira-code text-xs">Email *</span>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@email.com" />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[#ABB2BF] font-fira-code text-xs">Company</span>
                <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Company or brand" />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[#ABB2BF] font-fira-code text-xs">Budget</span>
                <select name="budget" value={formData.budget} onChange={handleChange} className={inputClass}>
                  <option value="" className="bg-[#070A11]">Select range</option>
                  <option value="under-500" className="bg-[#070A11]">Under $500</option>
                  <option value="500-1500" className="bg-[#070A11]">$500 – $1,500</option>
                  <option value="1500-5000" className="bg-[#070A11]">$1,500 – $5,000</option>
                  <option value="5000+" className="bg-[#070A11]">$5,000+</option>
                </select>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[#ABB2BF] font-fira-code text-xs">Preferred Date</span>
                <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className={inputClass} />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-[#ABB2BF] font-fira-code text-xs">Preferred Time</span>
                <input type="time" name="preferredTime" value={formData.preferredTime} onChange={handleChange} className={inputClass} />
              </label>
            </div>

            <label className="flex flex-col gap-1.5 mt-4">
              <span className="text-[#ABB2BF] font-fira-code text-xs">Project details *</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="px-3.5 py-3 bg-[#0b0e19] border border-white/[0.07] rounded-xl text-white outline-none focus:border-[#C778DD]/70 focus:ring-2 focus:ring-[#C778DD]/15 transition-all duration-200 font-fira-code text-sm resize-y placeholder:text-gray-600"
                placeholder="What are you building, timeline, and goals?"
              />
            </label>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-11 px-6 rounded-xl bg-gradient-to-r from-white to-[#C778DD] text-[#050505] font-bold font-fira-code text-sm hover:shadow-[0_0_24px_rgba(199,120,221,0.45)] hover:opacity-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </button>

              <a
                href={calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-5 rounded-xl border border-white/[0.08] bg-white/[0.02] text-[#ABB2BF] font-fira-code text-sm hover:border-white/[0.18] hover:text-white transition-all duration-200 inline-flex items-center"
              >
                Open calendar
              </a>
            </div>

            {status.message && (
              <p className={`mt-4 text-xs font-fira-code flex items-center gap-2 ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${status.type === "success" ? "bg-green-400" : "bg-red-400"}`} />
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
