import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Données invalides.", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // Honeypot : un bot a rempli le champ caché « company »
  if (parsed.data.company && parsed.data.company.length > 0) {
    // On répond "ok" pour ne pas informer le bot.
    return NextResponse.json({ ok: true });
  }

  const { name, email, phone, subject, message } = parsed.data;

  // Intégration email :
  // Définissez RESEND_API_KEY et CONTACT_TO_EMAIL dans les variables
  // d'environnement Vercel, puis activez le bloc ci-dessous.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (apiKey && to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "In-Tel Services <onboarding@resend.dev>",
          to: [to],
          reply_to: email,
          subject: `[Site] ${subject}`,
          text: `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\n\n${message}`,
        }),
      });

      if (!res.ok) {
        return NextResponse.json(
          { ok: false, error: "Échec de l'envoi. Réessayez plus tard." },
          { status: 502 }
        );
      }
    } catch {
      return NextResponse.json(
        { ok: false, error: "Échec de l'envoi. Réessayez plus tard." },
        { status: 502 }
      );
    }
  } else {
    // Pas de clé configurée (dev / preview) : on journalise simplement.
    console.info("[contact] Nouveau message reçu :", {
      name,
      email,
      phone,
      subject,
    });
  }

  return NextResponse.json({ ok: true });
}
