"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const initialFormData = {
  name: "",
  email: "",
  company: "",
  budget: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openMailFallback = () => {
    const subject = formData.company
      ? `New project inquiry from ${formData.name} (${formData.company})`
      : `New project inquiry from ${formData.name}`;

    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || "Not provided"}
Budget: ${formData.budget || "Not provided"}
Preferred Call Date: ${formData.preferredDate || "Not provided"}
Preferred Call Time: ${formData.preferredTime || "Not provided"}

Message:
${formData.message}`;

    window.location.href = `mailto:agarwalkartik704@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message: "Please fill name, email, and message before sending.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            company: formData.company || "Not provided",
            budget: formData.budget || "Not provided",
            preferred_date: formData.preferredDate || "Not provided",
            preferred_time: formData.preferredTime || "Not provided",
            message: formData.message,
            to_email: "agarwalkartik704@gmail.com",
          },
          { publicKey },
        );

        setStatus({
          type: "success",
          message: "Message sent successfully. I will get back to you soon.",
        });
      } else {
        openMailFallback();
        setStatus({
          type: "success",
          message:
            "Mail app opened with your message details. Send it to complete.",
        });
      }

      setFormData(initialFormData);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Could not send right now. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contacts"
      className="w-full flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-14 md:py-16 lg:py-20 relative"
    >
      <div className="flex items-center justify-between gap-2 w-full max-w-[1324px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
        <div className="flex items-center gap-2 md:gap-3 w-full">
          <img
            className="w-4 h-5 sm:w-5 sm:h-6 md:w-6 md:h-7 flex-shrink-0"
            src="/hashtag2.png"
            alt=""
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-fira-code text-white whitespace-nowrap">
            contacts
          </h1>
          <div className="h-px flex-1 ml-2 sm:ml-4 md:ml-6 lg:ml-10 bg-gradient-to-r from-[#C778DD] via-[#ABB2BF] to-transparent" />
        </div>
      </div>

      <div className="hidden 2xl:block absolute left-[-250px] top-[-100px]">
        <img src="/Frame.png" alt="" className="w-[50px]" />
      </div>

      <div className="w-full max-w-[1324px] grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        <div className="w-full flex flex-col gap-6 sm:gap-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-fira-code text-[#ABB2BF] leading-relaxed lg:leading-loose">
            I am interested in freelance opportunities. Share your idea using
            the form, and I will reply with next steps and timeline.
          </p>

          <div className="border border-[#ABB2BF] p-4 sm:p-5 md:p-6 w-full max-w-[560px]">
            <h2 className="text-base sm:text-lg md:text-xl text-white font-fira-code mb-4">
              Quick connect
            </h2>

            <div className="flex flex-col gap-3 sm:gap-4">
              <a
                href={xLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#ABB2BF] hover:text-white transition-colors"
              >
                <span className="h-9 w-9 rounded-lg border border-[#1F2532] bg-[#070A11] inline-flex items-center justify-center text-[#9CA3AF]">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.9 3H22l-6.8 7.76L23 21h-6.1l-4.78-6.23L6.66 21H3.54l7.28-8.3L3 3h6.25l4.32 5.74L18.9 3Zm-1.07 16.2h1.72L8.3 4.72H6.45L17.83 19.2Z" />
                  </svg>
                </span>
                <span className="font-fira-code text-sm sm:text-base">
                  @0xkar7ik
                </span>
              </a>

              <a
                href="mailto:agarwalkartik704@gmail.com"
                className="flex items-center gap-3 text-[#ABB2BF] hover:text-white transition-colors"
              >
                <span className="h-9 w-9 rounded-lg border border-[#1F2532] bg-[#070A11] inline-flex items-center justify-center text-[#9CA3AF]">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                    <path d="m4.5 7 7.5 6 7.5-6" />
                  </svg>
                </span>
                <span className="font-fira-code text-sm sm:text-base break-all">
                  agarwalkartik704@gmail.com
                </span>
              </a>

              <a
                href={calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 h-11 rounded-xl border border-[#2A2F3A] bg-[#0B0E13] text-[#E5E7EB] hover:border-[#3A4352] hover:text-white transition-colors font-fira-code text-sm sm:text-base"
              >
                <span>Book a Call</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="border border-[#ABB2BF] p-4 sm:p-5 md:p-6 w-full"
          >
            <h2 className="text-base sm:text-lg md:text-xl text-white font-fira-code mb-5">
              Send me a project brief
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm">
                  Name *
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-11 px-3 bg-[#0B0E13] border border-[#2A2F3A] text-white outline-none focus:border-[#C778DD] font-fira-code text-sm"
                  placeholder="Your name"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm">
                  Email *
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-11 px-3 bg-[#0B0E13] border border-[#2A2F3A] text-white outline-none focus:border-[#C778DD] font-fira-code text-sm"
                  placeholder="you@email.com"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm">
                  Company
                </span>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-11 px-3 bg-[#0B0E13] border border-[#2A2F3A] text-white outline-none focus:border-[#C778DD] font-fira-code text-sm"
                  placeholder="Company or brand"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm">
                  Budget
                </span>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="h-11 px-3 bg-[#0B0E13] border border-[#2A2F3A] text-white outline-none focus:border-[#C778DD] font-fira-code text-sm"
                >
                  <option value="">Select range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1500">$500 - $1,500</option>
                  <option value="1500-5000">$1,500 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm">
                  Preferred Call Date
                </span>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="h-11 px-3 bg-[#0B0E13] border border-[#2A2F3A] text-white outline-none focus:border-[#C778DD] font-fira-code text-sm"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm">
                  Preferred Call Time
                </span>
                <input
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="h-11 px-3 bg-[#0B0E13] border border-[#2A2F3A] text-white outline-none focus:border-[#C778DD] font-fira-code text-sm"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 mt-4">
              <span className="text-[#ABB2BF] font-fira-code text-xs sm:text-sm">
                Project details *
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="px-3 py-2 bg-[#0B0E13] border border-[#2A2F3A] text-white outline-none focus:border-[#C778DD] font-fira-code text-sm resize-y"
                placeholder="What are you building, timeline, and goals?"
              />
            </label>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-11 px-5 rounded-xl border border-[#C778DD] text-white font-fira-code text-sm sm:text-base hover:bg-[#C778DD22] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>

              <a
                href={calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-5 rounded-xl border border-[#2A2F3A] text-[#E5E7EB] font-fira-code text-sm sm:text-base hover:border-[#3A4352] hover:text-white transition-colors inline-flex items-center"
              >
                Open calendar
              </a>
            </div>

            {status.message ? (
              <p
                className={`mt-4 text-xs sm:text-sm font-fira-code ${
                  status.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
