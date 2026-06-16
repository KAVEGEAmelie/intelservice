"use client";

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Reveal } from "../reveal";
import { SectionHeading } from "../section-heading";
import { ContactForm } from "../contact-form";
import { site } from "@/lib/site";

export function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.mapsQuery
  )}&output=embed`;

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Contact"
          title="Parlons de votre projet"
          description="Une question, un devis, une intervention ? Écrivez-nous, nous répondons vite."
          className="mb-14"
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: info + map */}
          <Reveal>
            <div className="flex h-full flex-col gap-6">
              <div className="surface rounded-3xl border p-6 sm:p-8">
                <ul className="flex flex-col gap-5">
                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/15 to-lime/15 text-accent">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-display font-semibold">Adresse</div>
                      <p className="text-sm text-muted">{site.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/15 to-lime/15 text-accent">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-display font-semibold">Téléphone</div>
                      <div className="flex flex-col text-sm text-muted">
                        {site.phones.map((p) => (
                          <a
                            key={p}
                            href={`tel:${p.replace(/[^0-9+]/g, "")}`}
                            className="transition-colors hover:text-accent"
                          >
                            {p}
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/15 to-lime/15 text-accent">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-display font-semibold">Email</div>
                      <a
                        href={`mailto:${site.email}`}
                        className="text-sm text-muted transition-colors hover:text-accent"
                      >
                        {site.email}
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <a
                    href={`tel:${site.phones[0].replace(/[^0-9+]/g, "")}`}
                    className="btn-ghost"
                  >
                    <Phone className="h-4 w-4" /> Appeler
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="surface relative overflow-hidden rounded-3xl border">
                <iframe
                  title="Localisation In-Tel Services"
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full grayscale-[0.3] dark:opacity-90 dark:invert-[0.92] dark:hue-rotate-180"
                />
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={1}>
            <div className="surface rounded-3xl border p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
