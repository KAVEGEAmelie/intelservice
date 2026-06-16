"use client";

import { Reveal } from "../reveal";
import { Counter } from "../counter";
import { SectionHeading } from "../section-heading";
import { stats, values, site } from "@/lib/site";

export function About() {
  return (
    <section id="a-propos" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="À propos"
              title="L'expertise tech au service du Togo"
            />
            <Reveal delay={1}>
              <p className="text-muted">
                {site.name} est une entreprise togolaise spécialisée dans
                l&apos;informatique, les réseaux et la sécurité électronique,
                basée à Lomé. Nous accompagnons particuliers, PME,
                administrations et écoles dans tous leurs projets technologiques.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-muted">
                De la vente de matériel à l&apos;installation de
                vidéosurveillance, en passant par le déploiement réseau et le
                développement web, nous mettons un savoir-faire complet et une
                réactivité sans faille au service de votre performance.
              </p>
            </Reveal>

            {/* Values */}
            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              {values.map((value, i) => (
                <Reveal as="div" delay={i} key={value.title}>
                  <div className="surface group h-full rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent">
                    <div className="mb-2 h-1.5 w-8 rounded-full bg-gradient-to-r from-accent to-lime transition-all duration-300 group-hover:w-12" />
                    <h3 className="font-display text-base font-semibold">
                      {value.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Stats */}
          <Reveal delay={1}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/10 via-transparent to-lime/10 blur-2xl"
              />
              <div className="surface relative grid grid-cols-2 gap-px overflow-hidden rounded-3xl border">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group relative bg-[rgb(var(--card))] p-8 text-center transition-colors hover:bg-[rgb(var(--bg-elevated))] sm:p-10"
                  >
                    <div className="font-display text-4xl font-bold gradient-text sm:text-5xl">
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-2 text-sm text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
