import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export async function POST() {
  try {
    const keys = await redis.keys("push:*");
    if (keys.length > 0) {
      await redis.del(...keys);
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return NextResponse.json({ error: "Failed to unsubscribe" }, { status: 500 });
  }
}
