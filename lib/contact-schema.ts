import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Veuillez indiquer votre nom (2 caractères min).")
    .max(80),
  email: z.string().email("Adresse email invalide."),
  phone: z
    .string()
    .min(6, "Numéro de téléphone trop court.")
    .max(30)
    .regex(/^[0-9+()\s-]+$/, "Numéro de téléphone invalide."),
  subject: z
    .string()
    .min(3, "Veuillez préciser un sujet.")
    .max(120),
  message: z
    .string()
    .min(10, "Votre message doit contenir au moins 10 caractères.")
    .max(2000),
  // Honeypot anti-spam : doit rester vide
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
