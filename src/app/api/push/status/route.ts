import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function GET() {
  try {
    // Test redis connection
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
      envVars: {
        KV_REST_API_URL: process.env.KV_REST_API_URL ? "set" : "missing",
        UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL ? "set" : "missing",
        nobinobi_redis_KV_REST_API_URL: process.env.nobinobi_redis_KV_REST_API_URL ? "set" : "missing",
        nobinobi_redis_REDIS_URL: process.env.nobinobi_redis_REDIS_URL ? "set" : "missing",
      },
    }, { status: 500 });
  }
}
