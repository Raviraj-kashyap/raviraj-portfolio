"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "MCA",
    institution: "GL Bajaj Institute of Technology & Management",
  },
  {
    degree: "BCA",
    institution: "Z.A Islamia PG College, Siwan",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -2 }}
              className="glass-card p-5 flex items-start gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center shrink-0">
                <span className="text-teal-400 font-bold">{item.degree.charAt(0)}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-teal-400">{item.degree}</h3>
                <p className="text-slate-400 mt-1">{item.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
