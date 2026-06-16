"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../section-heading";
import { steps } from "@/lib/site";

export function Process() {
  return (
    <section id="processus" className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark opacity-50"
      />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Notre méthode"
          title="Un processus clair, en quatre étapes"
          description="De la première écoute au suivi, nous avançons avec rigueur et transparence."
          className="mb-16"
        />

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block"
          />

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="relative z-10 mb-5 grid h-24 w-24 place-items-center rounded-2xl border bg-[rgb(var(--card))] font-display text-3xl font-bold gradient-text shadow-lg">
                  {step.number}
                  <span className="absolute -right-2 -top-2 h-3 w-3 rounded-full bg-lime shadow-[0_0_16px_4px_rgba(155,230,0,0.5)]" />
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm text-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
