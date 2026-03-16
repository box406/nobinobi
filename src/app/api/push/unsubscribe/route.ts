import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST() {
  try {
    // List all push keys and delete them for this client
    // In practice, we'd need the subscription endpoint to identify the right key
    // For simplicity in a single-user app, we can clear all
    const keys = await kv.keys("push:*");
    if (keys.length > 0) {
      await kv.del(...keys);
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return NextResponse.json({ error: "Failed to unsubscribe" }, { status: 500 });
  }
}
