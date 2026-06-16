"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  async function onSubmit(data: ContactInput) {
    setStatus("loading");
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => null);
        throw new Error(json?.error ?? "Une erreur est survenue.");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Une erreur est survenue."
      );
    }
  }

  const fieldClass =
    "w-full rounded-xl border bg-[rgb(var(--bg))] px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      {/* Honeypot (caché) */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        {...register("company")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Nom complet
          </label>
          <input
            id="name"
            className={cn(fieldClass, errors.name && "border-red-500")}
            placeholder="Votre nom"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={cn(fieldClass, errors.email && "border-red-500")}
            placeholder="vous@exemple.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
            Téléphone
          </label>
          <input
            id="phone"
            type="tel"
            className={cn(fieldClass, errors.phone && "border-red-500")}
            placeholder="(+228) ..."
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
            Sujet
          </label>
          <input
            id="subject"
            className={cn(fieldClass, errors.subject && "border-red-500")}
            placeholder="Objet de votre demande"
            {...register("subject")}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(fieldClass, "resize-none", errors.message && "border-red-500")}
          placeholder="Décrivez votre besoin..."
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary mt-2 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours...
          </>
        ) : (
          <>
            Envoyer le message <Send className="h-4 w-4" />
          </>
        )}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 rounded-xl border border-lime/40 bg-lime/10 px-4 py-3 text-sm text-lime-600">
          <CheckCircle2 className="h-5 w-5" />
          Merci ! Votre message a bien été envoyé. Nous vous répondrons rapidement.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-500">
          <AlertCircle className="h-5 w-5" />
          {serverError ?? "Une erreur est survenue. Réessayez."}
        </p>
      )}
    </form>
  );
}
