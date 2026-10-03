import { NextResponse } from "next/server";

export const runtime = "nodejs";

const CLINIC_MOBILE = "+919891368298";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { patientName, patientPhone, date, time, clinicName, tokenNumber, reason } = body ?? {};

    if (!patientName || !patientPhone || !date || !time) {
      return NextResponse.json({ error: "Missing appointment details" }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Booking must never fail just because Telegram is not configured.
    if (!botToken || !chatId) {
      console.warn("Telegram confirmation skipped: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is missing.");
      return NextResponse.json({ sent: false, configured: false });
    }

    const message = [
      "🩺 Easy My Care — New Appointment",
      "",
      `Patient: ${patientName}`,
      `Patient mobile: ${patientPhone}`,
      `Date: ${date}`,
      `Time: ${time}`,
      `Clinic: ${clinicName || "Easy My Care"}`,
      tokenNumber ? `Token: ${String(tokenNumber).padStart(3, "0")}` : null,
      reason ? `Reason: ${reason}` : null,
      "",
      `Clinic contact: ${CLINIC_MOBILE}`,
    ].filter(Boolean).join("\n");

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        disable_web_page_preview: true,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("Telegram confirmation failed:", response.status, details);
      return NextResponse.json({ sent: false }, { status: 502 });
    }

    return NextResponse.json({ sent: true });
  } catch (error) {
    console.error("Telegram confirmation error:", error);
    return NextResponse.json({ sent: false }, { status: 500 });
  }
}
