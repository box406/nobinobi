import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(request: Request) {
  try {
    const { subscription, reminderTime } = await request.json();
    if (!subscription?.endpoint) {
      return NextResponse.json({ error: "Invalid subscription" }, { status: 400 });
    }

    // Use endpoint hash as key to avoid duplicates
    const key = `push:${Buffer.from(subscription.endpoint).toString("base64url").slice(0, 64)}`;
    await kv.set(key, { subscription, reminderTime }, { ex: 60 * 60 * 24 * 90 }); // 90 days TTL

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
