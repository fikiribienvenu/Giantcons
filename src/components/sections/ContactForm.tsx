"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send message");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or call us directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <CheckCircle size={48} className="text-[#C99A3C]" />
        <h3 className="text-xl font-bold text-[#0B1F3A]">Message Sent!</h3>
        <p className="text-gray-600 max-w-sm">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-outline mt-2 text-sm py-2 px-5"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded border border-gray-200 text-sm text-[#0B1F3A] bg-white focus:outline-none focus:border-[#C99A3C] focus:ring-1 focus:ring-[#C99A3C] transition placeholder:text-gray-400";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wide mb-1.5">
            Full Name <span className="text-[#C99A3C]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wide mb-1.5">
            Email <span className="text-[#C99A3C]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wide mb-1.5">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+250 ..."
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wide mb-1.5">
            Subject <span className="text-[#C99A3C]">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a subject</option>
            <option value="General Enquiry">General Enquiry</option>
            <option value="Get a Quote">Get a Quote</option>
            <option value="Design & Engineering">Design & Engineering</option>
            <option value="Construction Services">Construction Services</option>
            <option value="MEP Systems">MEP Systems</option>
            <option value="Project Management">Project Management</option>
            <option value="Partnership">Partnership</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wide mb-1.5">
          Message <span className="text-[#C99A3C]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-4 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          "Sending…"
        ) : (
          <>
            Send Message
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
