import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET() {
  try {
    await redis.ping();
    const keys = await redis.keys("push:*");

    return NextResponse.json({
      redis: "connected",
      subscriptions: keys.length,
      vapidPublicKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ? "set" : "missing",
      vapidPrivateKey: process.env.VAPID_PRIVATE_KEY ? "set" : "missing",
      cronSecret: process.env.CRON_SECRET ? "set" : "missing",
    });
  } catch (error) {
    return NextResponse.json({
      redis: "error",
      error: String(error),
    }, { status: 500 });
  }
}
