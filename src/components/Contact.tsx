"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formState;
    const subject = encodeURIComponent(
      `Portfolio contact from ${name || "someone"}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Open default mail client with pre-filled subject and body
    window.location.href = `mailto:ravirajnarayan9525@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-5"
        >
          <span className="gradient-text">Contact</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <p className="text-slate-400">
              I&apos;m open to new opportunities and collaborations. Reach out via email or the form.
            </p>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-3">
                <span className="text-teal-400">Email:</span>
                <a href="mailto:ravirajnarayan9525@gmail.com" className="link-hover">
                  ravirajnarayan9525@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-teal-400">Phone:</span>
                <a href="tel:9910928488" className="link-hover">
                  9910928488
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-teal-400">Location:</span>
                Noida, India
              </li>
              <li className="flex items-center gap-3">
                <span className="text-teal-400">LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/in/raviraj-narayan-746004217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover"
                >
                  raviraj-narayan
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-5 space-y-3"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-0.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formState.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-0.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-0.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-bg border border-dark-border text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 disabled:opacity-50 text-white font-medium transition-all duration-300 shadow-lg shadow-teal-500/20"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "Message sent!"
                  : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
