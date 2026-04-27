import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  sector: z.string().min(1),
  city: z.string().min(2),
  website: z.string().optional(),
  goal: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().max(500).optional(),
  rgpd: z.literal(true),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.AUDIT_TO_EMAIL || "contact@hi-ve.fr";
    const from = process.env.AUDIT_FROM_EMAIL || "Hi-Ve <audit@hi-ve.fr>";

    if (apiKey) {
      const subject = `Nouvelle demande d'audit — ${data.company} (${data.city})`;
      const html = `
        <h2 style="font-family:Georgia,serif;color:#1A1814;">Nouvelle demande d'audit</h2>
        <p><strong>${data.name}</strong> — ${data.company}</p>
        <p>${data.sector} · ${data.city}</p>
        <p>Email : ${data.email}${data.phone ? ` — Tel : ${data.phone}` : ""}</p>
        ${data.website ? `<p>Site actuel : ${data.website}</p>` : ""}
        <p>Objectif : <strong>${data.goal}</strong></p>
        ${data.message ? `<blockquote>${data.message}</blockquote>` : ""}
      `;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: data.email,
          subject,
          html,
        }),
      });
    } else {
      console.info("[audit] RESEND_API_KEY not configured, skipping email", {
        company: data.company,
        email: data.email,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, errors: err.flatten() },
        { status: 400 },
      );
    }
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
