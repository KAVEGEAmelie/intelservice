"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "../section-heading";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    []
  );
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[index];

  return (
    <section className="relative scroll-mt-24 py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark opacity-50"
      />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Témoignages"
          title="Ils nous font confiance"
          className="mb-14"
        />

        <div
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="surface relative overflow-hidden rounded-3xl border p-8 sm:p-12">
            <Quote className="mb-6 h-10 w-10 text-accent/40" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg leading-relaxed sm:text-xl">
                  « {t.quote} »
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-accent to-lime font-display font-bold text-brand-950">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-semibold">{t.name}</div>
                    <div className="text-sm text-muted">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Témoignage précédent"
              className="grid h-10 w-10 place-items-center rounded-full border transition-colors hover:border-accent hover:text-accent"
              style={{ borderColor: "rgb(var(--border))" }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Aller au témoignage ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-7 bg-accent" : "w-2 bg-[rgb(var(--border))]"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Témoignage suivant"
              className="grid h-10 w-10 place-items-center rounded-full border transition-colors hover:border-accent hover:text-accent"
              style={{ borderColor: "rgb(var(--border))" }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
