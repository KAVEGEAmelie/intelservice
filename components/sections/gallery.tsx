"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../section-heading";
import { projects } from "@/lib/site";

const gradients = [
  "from-accent/30 to-brand-700/40",
  "from-lime/25 to-accent/30",
  "from-brand-600/40 to-accent/25",
  "from-accent/25 to-lime/25",
  "from-brand-700/40 to-lime/20",
  "from-lime/20 to-brand-600/40",
];

export function Gallery() {
  return (
    <section id="realisations" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Réalisations"
          title="Quelques projets menés à Lomé et environs"
          description="Un aperçu de nos installations et déploiements. Vos photos réelles prendront place ici."
          className="mb-14"
        />

        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border ${
                i === 0 ? "row-span-2" : ""
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  gradients[i % gradients.length]
                } transition-transform duration-500 group-hover:scale-110`}
              />
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="mb-1 w-fit rounded-full bg-[rgb(var(--bg)/0.6)] px-3 py-1 font-mono text-xs uppercase tracking-wider text-accent backdrop-blur">
                  {project.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-white">
                  {project.title}
                </h3>
              </div>

              <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-[rgb(var(--bg)/0.6)] text-accent opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
