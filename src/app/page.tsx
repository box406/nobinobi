"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import StreakCounter from "@/components/StreakCounter";
import RoutineList from "@/components/RoutineList";
import BottomNav from "@/components/BottomNav";
import { checkAndUpdateStreak, isTodayCompleted } from "@/lib/streak";
import { getRoutines, setRoutines, type Routine, type StreakData } from "@/lib/storage";
import { getNextBodyPart, selectOmakaseStretches, estimateDuration } from "@/lib/omakase";
import stretches from "@/data/stretches.json";

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [streak, setStreak] = useState<StreakData>({
    currentStreak: 0,
    longestStreak: 0,
    completedDates: [],
    lastCompletedDate: null,
  });
  const [todayDone, setTodayDone] = useState(false);
  const [routines, setRoutinesState] = useState<Routine[]>([]);
  const [nextBodyPart, setNextBodyPart] = useState({ bodyPart: "首", emoji: "🦒" });

  useEffect(() => {
    setMounted(true);
    const s = checkAndUpdateStreak();
    setStreak(s);
    setTodayDone(isTodayCompleted());
    setRoutinesState(getRoutines());
    setNextBodyPart(getNextBodyPart());

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);

  const handleOmakase = useCallback(() => {
    const selected = selectOmakaseStretches(stretches);
    const ids = selected.map((s) => s.id).join(",");
    router.push(`/stretch?ids=${ids}&mode=omakase`);
  }, [router]);

  const handleRoutineSelect = useCallback(
    (routine: Routine) => {
      const ids = routine.stretchIds.join(",");
      router.push(`/stretch?ids=${ids}&mode=routine`);
    },
    [router]
  );

  const handleRoutineEdit = useCallback(
    (routine: Routine) => {
      router.push(`/builder?edit=${routine.id}`);
    },
    [router]
  );

  const handleRoutineDelete = useCallback((id: string) => {
    const updated = getRoutines().filter((r) => r.id !== id);
    setRoutines(updated);
    setRoutinesState(updated);
  }, []);

  if (!mounted) return null;

  const omakasePreview = stretches.filter((s) =>
    s.bodyPart.includes(nextBodyPart.bodyPart)
  );
  const avgDuration = Math.round(
    estimateDuration(omakasePreview.slice(0, 5)) / 60
  );

  return (
    <div className="relative z-10 min-h-dvh pb-20">
      <div className="max-w-md mx-auto px-4 pt-10 pb-4">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-up">
          <h1 className="text-3xl font-black text-emerald-800 mb-1">
            🧘 のびのび
          </h1>
          <p className="text-sm font-bold text-emerald-600/70">
            毎日のストレッチを習慣に
          </p>
        </div>

        {/* Streak */}
        <div
          className="mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <StreakCounter
            currentStreak={streak.currentStreak}
            longestStreak={streak.longestStreak}
            todayCompleted={todayDone}
          />
        </div>

        {/* Omakase Button */}
        <button
          onClick={handleOmakase}
          className="omakase-btn w-full rounded-2xl p-5 mb-6 text-left animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-emerald-500 mb-1">
                おまかせストレッチ
              </p>
              <p className="text-lg font-black text-emerald-800">
                今日は{nextBodyPart.emoji} {nextBodyPart.bodyPart}の日
              </p>
              <p className="text-sm font-bold text-emerald-600/70 mt-0.5">
                約{avgDuration}分 ・ タップで開始
              </p>
            </div>
            <span className="text-4xl">{nextBodyPart.emoji}</span>
          </div>
        </button>

        {/* My Routines */}
        <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-black text-emerald-800">
              📋 マイメニュー
            </h2>
            <button
              onClick={() => router.push("/builder")}
              className="text-xs font-bold text-emerald-500 px-3 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 transition-colors"
            >
              + 新規作成
            </button>
          </div>
          <RoutineList
            routines={routines}
            onSelect={handleRoutineSelect}
            onEdit={handleRoutineEdit}
            onDelete={handleRoutineDelete}
          />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
