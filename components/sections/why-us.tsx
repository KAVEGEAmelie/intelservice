"use client";

import {
  MapPin,
  Wand2,
  Zap,
  BadgeCheck,
  HeartHandshake,
  Receipt,
} from "lucide-react";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { reasons } from "@/lib/site";

const icons = [MapPin, Wand2, Zap, BadgeCheck, HeartHandshake, Receipt];

export function WhyUs() {
  return (
    <section id="pourquoi" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: heading + rotating visual */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              align="left"
              eyebrow="Pourquoi nous choisir"
              title="Des raisons concrètes de nous faire confiance"
              description="Un partenaire local, fiable et engagé à chaque étape de votre projet."
            />

            <Reveal delay={2}>
              <div className="relative mx-auto hidden h-64 w-64 lg:block">
                <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-accent/30" />
                <div className="absolute inset-8 animate-spin-slower rounded-full border border-dashed border-lime/30" />
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-accent/20 to-lime/20 blur-xl" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-2xl font-bold gradient-text">
                    In-Tel
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: reasons grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal as="div" delay={i} key={reason.title}>
                  <div className="surface group flex h-full gap-4 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-lime/15 text-accent transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
