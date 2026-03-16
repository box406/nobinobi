"use client";

import { useState, useEffect, useCallback } from "react";
import BottomNav from "@/components/BottomNav";
import { getSettings, setSettings, getStreak, type Settings } from "@/lib/storage";
import {
  subscribePush,
  unsubscribePush,
  saveSubscription,
  removeSubscription,
  getSubscriptionStatus,
} from "@/lib/notification";

export default function SettingsPage() {
  const [mounted, setMounted] = useState(false);
  const [settings, setSettingsState] = useState<Settings>({
    defaultDuration: 30,
    reminderEnabled: false,
    reminderTime: "08:00",
  });
  const [streakInfo, setStreakInfo] = useState({
    currentStreak: 0,
    longestStreak: 0,
    totalDays: 0,
  });
  const [pushStatus, setPushStatus] = useState<
    "idle" | "subscribing" | "subscribed" | "error" | "denied"
  >("idle");

  useEffect(() => {
    setMounted(true);
    const s = getSettings();
    setSettingsState(s);
    const streak = getStreak();
    setStreakInfo({
      currentStreak: streak.currentStreak,
      longestStreak: streak.longestStreak,
      totalDays: streak.completedDates.length,
    });

    // Check current push status
    if (s.reminderEnabled) {
      getSubscriptionStatus().then((active) => {
        setPushStatus(active ? "subscribed" : "idle");
      });
    }
  }, []);

  const updateSetting = <K extends keyof Settings>(
    key: K,
    value: Settings[K]
  ) => {
    const updated = { ...settings, [key]: value };
    setSettingsState(updated);
    setSettings(updated);
  };

  const handleToggleReminder = useCallback(async () => {
    if (settings.reminderEnabled) {
      // Disable
      updateSetting("reminderEnabled", false);
      setPushStatus("idle");
      await unsubscribePush();
      await removeSubscription();
      return;
    }

    // Enable
    setPushStatus("subscribing");
    const subscription = await subscribePush();

    if (!subscription) {
      setPushStatus("denied");
      return;
    }

    const saved = await saveSubscription(subscription, settings.reminderTime);
    if (saved) {
      updateSetting("reminderEnabled", true);
      setPushStatus("subscribed");
    } else {
      setPushStatus("error");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.reminderEnabled, settings.reminderTime]);

  const handleTimeChange = useCallback(
    async (time: string) => {
      updateSetting("reminderTime", time);
      // Update server with new time
      if (pushStatus === "subscribed") {
        const subscription = await subscribePush();
        if (subscription) {
          await saveSubscription(subscription, time);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pushStatus]
  );

  if (!mounted) return null;

  return (
    <div className="relative z-10 min-h-dvh pb-20">
      <div className="max-w-md mx-auto px-4 pt-8 pb-4">
        <h1 className="text-xl font-black text-emerald-800 mb-6">⚙️ 設定</h1>

        {/* Duration Setting */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-4">
          <label className="text-sm font-bold text-emerald-700 mb-3 block">
            デフォルトの秒数
          </label>
          <div className="flex items-center gap-3">
            {[20, 30, 40].map((sec) => (
              <button
                key={sec}
                onClick={() => updateSetting("defaultDuration", sec)}
                className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${
                  settings.defaultDuration === sec
                    ? "bg-emerald-500 text-white"
                    : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                }`}
              >
                {sec}秒
              </button>
            ))}
          </div>
        </div>

        {/* Reminder Setting */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-4">
          <div className="flex items-center justify-between mb-3">
            <label className="text-sm font-bold text-emerald-700">
              リマインダー通知
            </label>
            <button
              onClick={handleToggleReminder}
              disabled={pushStatus === "subscribing"}
              className={`w-12 h-7 rounded-full transition-all relative ${
                settings.reminderEnabled ? "bg-emerald-500" : "bg-gray-300"
              } ${pushStatus === "subscribing" ? "opacity-50" : ""}`}
            >
              <div
                className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform ${
                  settings.reminderEnabled
                    ? "translate-x-5.5"
                    : "translate-x-0.5"
                }`}
              />
            </button>
          </div>

          {pushStatus === "subscribing" && (
            <p className="text-xs text-emerald-500 font-bold mb-2">
              通知を設定中...
            </p>
          )}
          {pushStatus === "denied" && (
            <p className="text-xs text-red-500 font-bold mb-2">
              通知が許可されていません。ブラウザの設定から許可してください。
            </p>
          )}
          {pushStatus === "error" && (
            <p className="text-xs text-red-500 font-bold mb-2">
              設定に失敗しました。もう一度お試しください。
            </p>
          )}
          {pushStatus === "subscribed" && (
            <p className="text-xs text-emerald-500 font-bold mb-2">
              ✓ 通知が有効です
            </p>
          )}

          {settings.reminderEnabled && (
            <div>
              <label className="text-xs font-bold text-emerald-600/70 mb-1 block">
                通知時刻
              </label>
              <input
                type="time"
                value={settings.reminderTime}
                onChange={(e) => handleTimeChange(e.target.value)}
                className="bg-emerald-50 rounded-xl px-4 py-2 text-emerald-800 font-bold outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          )}
        </div>

        {/* Streak Info */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-4">
          <h2 className="text-sm font-bold text-emerald-700 mb-3">
            ストリーク情報
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <p className="text-2xl font-black text-emerald-700">
                {streakInfo.currentStreak}
              </p>
              <p className="text-xs font-bold text-emerald-500">現在の連続</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-emerald-700">
                {streakInfo.longestStreak}
              </p>
              <p className="text-xs font-bold text-emerald-500">最長記録</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-black text-emerald-700">
                {streakInfo.totalDays}
              </p>
              <p className="text-xs font-bold text-emerald-500">合計日数</p>
            </div>
          </div>
        </div>

        {/* App Info */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4">
          <h2 className="text-sm font-bold text-emerald-700 mb-2">
            アプリ情報
          </h2>
          <p className="text-xs text-emerald-600/70">のびのび v1.0.0</p>
          <p className="text-xs text-emerald-600/70 mt-1">
            毎日のストレッチを習慣にするPWAアプリ
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
