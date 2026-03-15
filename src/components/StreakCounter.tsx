"use client";

interface StreakCounterProps {
  currentStreak: number;
  longestStreak: number;
  todayCompleted: boolean;
}

export default function StreakCounter({
  currentStreak,
  longestStreak,
  todayCompleted,
}: StreakCounterProps) {
  return (
    <div className="flex items-center justify-center gap-6">
      <div className="text-center">
        <div className="flex items-center gap-1.5 justify-center">
          <span className="text-2xl">{todayCompleted ? "🔥" : "💤"}</span>
          <span className="text-4xl font-black text-emerald-700 animate-count-up">
            {currentStreak}
          </span>
        </div>
        <p className="text-xs font-bold text-emerald-600/70 mt-0.5">
          {todayCompleted ? "日連続！" : "日連続"}
        </p>
      </div>
      <div className="w-px h-10 bg-emerald-200" />
      <div className="text-center">
        <div className="flex items-center gap-1 justify-center">
          <span className="text-lg">🏆</span>
          <span className="text-2xl font-bold text-emerald-600">
            {longestStreak}
          </span>
        </div>
        <p className="text-xs font-bold text-emerald-600/70 mt-0.5">最長記録</p>
      </div>
    </div>
  );
}
