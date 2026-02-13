"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "My DFC App",
    description:
      "Multi-module internal operations app — AMS, VMS, TMS, Attendance, Vehicle & Hotel Management.",
    tags: ["React Native", "Multi-module", "Operations"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.dfccil_connect&pcampaignid=web_share",
  },
  {
    title: "Global Purohit",
    description: "Multi-language religious services app for a global audience.",
    tags: ["React Native", "i18n", "Services"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.purohitsangh&pcampaignid=web_share",
  },
  {
    title: "Apollo Sales",
    description: "Sales funnel management app for tracking and closing deals.",
    tags: ["React Native", "Sales", "CRM"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.itdose.apollosales&pcampaignid=web_share",
  },
  {
    title: "Kongunad",
    description: "Healthcare IPD/OPD app with push notifications and patient management.",
    tags: ["React Native", "Healthcare", "Push Notifications"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.aes.kongunaduhospital&pcampaignid=web_share",
  },
  {
    title: "Chip-In",
    description: "International fundraising app with integrated payment gateway.",
    tags: ["React Native", "Payments", "Fundraising"],
    playStoreLink: undefined,
  },
  {
    title: "LVH",
    description: "Luxury vacation home booking app with search and booking flows.",
    tags: ["React Native", "Travel", "Booking"],
    playStoreLink: undefined,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          <span className="gradient-text">Projects</span>
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              whileHover={{ y: -4 }}
              className="glass-card p-5 flex flex-col group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center mb-3 group-hover:from-teal-500/30 group-hover:to-emerald-500/30 transition-colors">
                <span className="text-teal-400 font-bold text-lg">{project.title.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
              <p className="text-slate-400 text-sm flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.playStoreLink && (
                <a
                  href={project.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-sm text-teal-400 hover:text-teal-300 font-medium transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636 8.635L5.864 2.658z" />
                  </svg>
                  View on Play Store
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
