"use client";

import Image from "next/image";
import { navItems, site, services } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <div className="container-px py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={site.name}
                width={48}
                height={48}
                className="h-11 w-11 object-contain"
              />
              <span className="font-display text-lg font-bold">
                In-Tel <span className="gradient-text">Services</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted">
              {site.baseline}. Informatique, réseaux et sécurité électronique à
              Lomé, Togo.
            </p>
            <p className="mt-4 font-mono text-sm text-accent">« {site.slogan} »</p>
          </div>

          {/* Nav */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm text-muted sm:flex-row">
          <p>
            © {year} {site.name} — Tous droits réservés.
          </p>
          <p className="font-mono text-xs">
            Conçu avec soin pour le Togo · Lomé
          </p>
        </div>
      </div>
    </footer>
  );
}
