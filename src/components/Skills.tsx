"use client";

import { motion } from "framer-motion";

const skills = [
  "React Native",
  "JavaScript",
  "TypeScript",
  "Redux / Redux Toolkit",
  "Firebase",
  "REST APIs",
  "Google Maps API",
  "Push Notifications",
  "Git & GitHub",
  "Android Studio",
  "Xcode",
];

export default function Skills() {
  return (
    <section id="skills" className="px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          <span className="gradient-text">Skills</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="px-4 py-2.5 rounded-xl glass-card text-slate-300 text-sm font-medium hover:border-teal-500/50 hover:scale-105 hover:shadow-md hover:shadow-teal-500/10 transition-transform duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
