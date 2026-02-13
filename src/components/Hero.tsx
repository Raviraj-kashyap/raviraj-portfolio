"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-start justify-center pt-24 pb-8 px-4 overflow-hidden hero-mesh grid-bg"
    >
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative max-w-4xl mx-auto text-center z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/5 text-teal-400 font-mono text-sm mb-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
          </span>
          Available for opportunities
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-teal-400 font-mono text-sm md:text-base mb-0.5"
        >
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-0.5 tracking-tight"
        >
          <span className="gradient-text">Raviraj Narayan</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 mb-0.5"
        >
          React Native Developer / Mobile App Engineer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-500 text-sm md:text-base mb-4"
        >
          3+ years · Noida, India
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2"
        >
          <Link
            href="#contact"
            className="group px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-medium transition-all duration-300 btn-glow"
          >
            Get in Touch
          </Link>
          <a
            href="/resume.pdf"
            download="Raviraj-Narayan-Resume.pdf"
            className="group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-teal-500/50 bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 hover:border-teal-400 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
