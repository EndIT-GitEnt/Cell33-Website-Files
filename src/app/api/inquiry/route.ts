import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Basic server-side validation
    const name = (data?.name ?? "").toString().trim();
    const email = (data?.email ?? "").toString().trim();
    const message = (data?.message ?? "").toString().trim();
    const honeypot = (data?.company ?? "").toString().trim();

    if (honeypot) {
      // Silently accept bots
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    // In production, send to an email service or CRM here.
    console.log("Inquiry received:", {
      name,
      email,
      phone: data?.phone ?? "",
      organization: data?.organization ?? "",
      programType: data?.programType ?? "",
      message,
      ts: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}

