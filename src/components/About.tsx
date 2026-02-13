"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-1 pt-0.5"
        >
          <span className="gradient-text">About Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-500 text-sm mb-4"
        >
          Passion · Craft · Delivery
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-5 md:p-6 max-w-3xl"
        >
          <p className="text-slate-300 leading-relaxed text-lg">
            I am a passionate <strong className="text-teal-400">React Native developer</strong> with
            experience in building scalable, high-performance mobile applications. I have worked on
            government, healthcare, sales, fundraising, and travel apps — from internal operations
            tools to consumer-facing products.
          </p>
          <p className="text-slate-400 mt-3 leading-relaxed">
            I focus on clean architecture, smooth UX, and timely delivery. When I&apos;m not coding,
            I enjoy staying updated with the latest in mobile development and exploring new tools.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
