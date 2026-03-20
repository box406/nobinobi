import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function POST(request: Request) {
  try {
    const { subscription, reminderTime } = await request.json();
    if (!subscription?.endpoint) {
      return NextResponse.json({ error: "Invalid subscription" }, { status: 400 });
    }

    const key = `push:${Buffer.from(subscription.endpoint).toString("base64url").slice(0, 64)}`;
    await redis.set(key, JSON.stringify({ subscription, reminderTime }), { ex: 60 * 60 * 24 * 90 });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
