"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { Service } from "@/lib/site";
import { SectionHeading } from "../section-heading";
import { services } from "@/lib/site";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group surface relative h-full overflow-hidden rounded-2xl border p-6 transition-colors duration-300 hover:border-accent"
      >
        {/* Glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at center, rgba(6,182,212,0.12), transparent 70%)",
          }}
        />

        <div style={{ transform: "translateZ(40px)" }} className="relative">
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-lime/15 text-accent transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-7 w-7" />
          </div>
          <h3 className="font-display text-lg font-semibold">{service.title}</h3>
          <p className="mt-2 text-sm text-muted">{service.description}</p>
        </div>

        <span className="absolute right-5 top-5 font-mono text-xs text-muted/50">
          {String(index + 1).padStart(2, "0")}
        </span>
      </motion.div>
    </motion.article>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-mesh-light dark:bg-mesh-dark opacity-60"
      />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Nos services"
          title="Une expertise complète, du matériel au logiciel"
          description="Dix domaines d'intervention pour couvrir l'ensemble de vos besoins technologiques."
          className="mb-14"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
