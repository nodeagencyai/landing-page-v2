import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, name, source, variant, url, timestamp } = body;

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const WEBHOOK_URL = process.env.WAITLIST_WEBHOOK_URL;
  if (WEBHOOK_URL) {
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, source, variant, url, timestamp, product: "leadgenos" }),
      });
    } catch (err) {
      console.error("Webhook error:", err);
    }
  }

  console.log(`[waitlist] ${email} — ${name} — ${source}/${variant}`);
  return NextResponse.json({ ok: true });
}
