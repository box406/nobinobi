import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import webpush from "web-push";

const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || "";
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || "";

webpush.setVapidDetails(
  "mailto:nobinobi@example.com",
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

const MESSAGES = [
  { title: "🧘 のびのび", body: "今日のストレッチ、始めよう！" },
  { title: "🔥 ストリーク継続！", body: "今日もストレッチして記録を伸ばそう" },
  { title: "💪 体が喜ぶ時間", body: "3分だけ、のびのびしよう" },
  { title: "🌿 リフレッシュタイム", body: "ストレッチでスッキリしよう" },
  { title: "✨ 今日もやろう", body: "毎日の積み重ねが大事！" },
];

export async function POST(request: Request) {
  // Verify cron secret or allow in development
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const keys = await kv.keys("push:*");
    if (keys.length === 0) {
      return NextResponse.json({ sent: 0, message: "No subscriptions" });
    }

    const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    let sent = 0;
    let failed = 0;

    for (const key of keys) {
      const data = await kv.get<{
        subscription: webpush.PushSubscription;
        reminderTime: string;
      }>(key);
      if (!data) continue;

      try {
        await webpush.sendNotification(
          data.subscription,
          JSON.stringify({ ...message, url: "/" })
        );
        sent++;
      } catch (err: unknown) {
        const statusCode = (err as { statusCode?: number }).statusCode;
        if (statusCode === 410 || statusCode === 404) {
          await kv.del(key);
        }
        failed++;
      }
    }

    return NextResponse.json({ sent, failed });
  } catch (error) {
    console.error("Push send error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
