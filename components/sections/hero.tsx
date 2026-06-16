"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { ParticlesBackground } from "../particles-background";
import { site } from "@/lib/site";

const titleWords = ["Votre", "partenaire", "technologique", "à", "Lomé"];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Animated backgrounds */}
      <div className="absolute inset-0 bg-mesh-dark dark:bg-mesh-dark" aria-hidden />
      <div className="absolute inset-0 bg-grid opacity-40 mask-fade-y" aria-hidden />
      <ParticlesBackground />

      {/* Rotating decorative rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 hidden h-[520px] w-[520px] rounded-full border border-accent/10 lg:block"
      >
        <div className="absolute inset-8 animate-spin-slow rounded-full border border-dashed border-accent/20" />
        <div className="absolute inset-20 animate-spin-slower rounded-full border border-dashed border-lime/20" />
        <div className="absolute inset-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime shadow-[0_0_30px_8px_rgba(155,230,0,0.5)]" />
      </div>

      <div className="container-px relative z-10 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border bg-[rgb(var(--card)/0.5)] px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-lime" />
            Informatique · Réseaux · Sécurité — Togo
          </motion.div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                className="mr-[0.25em] inline-block"
              >
                {word === "technologique" ? (
                  <span className="gradient-text">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            {site.name} déploie matériel, réseaux, vidéosurveillance et solutions
            web sur mesure. Une expertise locale, des standards internationaux.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href="#services" className="btn-primary group">
              Découvrir nos services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-ghost">
              Nous contacter
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 font-mono text-sm text-muted"
          >
            « {site.slogan} »
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#a-propos"
        aria-label="Défiler vers le bas"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 animate-pulse-down text-accent" />
      </a>
    </section>
  );
}
