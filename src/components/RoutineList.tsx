"use client";

import type { Routine } from "@/lib/storage";

interface RoutineListProps {
  routines: Routine[];
  onSelect: (routine: Routine) => void;
  onDelete: (id: string) => void;
}

export default function RoutineList({ routines, onSelect, onDelete }: RoutineListProps) {
  if (routines.length === 0) {
    return (
      <div className="text-center py-8 text-emerald-600/60">
        <p className="text-3xl mb-2">📋</p>
        <p className="text-sm font-bold">マイメニューはまだないよ</p>
        <p className="text-xs mt-1">ビルダーで自分だけのメニューを作ろう！</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {routines.map((routine) => (
        <div
          key={routine.id}
          className="flex items-center bg-white/80 backdrop-blur-sm rounded-xl p-3 stretch-card"
        >
          <button
            onClick={() => onSelect(routine)}
            className="flex-1 flex items-center gap-3 text-left"
          >
            <span className="text-2xl">{routine.emoji}</span>
            <div>
              <p className="font-bold text-emerald-800">{routine.name}</p>
              <p className="text-xs text-emerald-600/70">
                {routine.stretchIds.length}種目
              </p>
            </div>
          </button>
          <button
            onClick={() => onDelete(routine.id)}
            className="p-2 text-emerald-400 hover:text-red-400 transition-colors"
            aria-label="削除"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 4l8 8M12 4l-8 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}
