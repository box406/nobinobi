"use client";

import { useState, useCallback, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import BodyPartFilter from "@/components/BodyPartFilter";
import StretchIllustration from "@/components/StretchIllustration";
import BottomNav from "@/components/BottomNav";
import { getRoutines, setRoutines } from "@/lib/storage";
import stretches from "@/data/stretches.json";

function BuilderContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get("edit");

  const [bodyPartFilter, setBodyPartFilter] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [routineName, setRoutineName] = useState("");
  const [routineEmoji, setRoutineEmoji] = useState("💪");
  const [step, setStep] = useState<"select" | "configure">("select");
  const [isEdit, setIsEdit] = useState(false);

  // Load existing routine if editing
  useEffect(() => {
    if (!editId) return;
    const routines = getRoutines();
    const routine = routines.find((r) => r.id === editId);
    if (routine) {
      setSelectedIds(routine.stretchIds);
      setRoutineName(routine.name);
      setRoutineEmoji(routine.emoji);
      setIsEdit(true);
      setStep("configure");
    }
  }, [editId]);

  const filtered = bodyPartFilter
    ? stretches.filter((s) => s.bodyPart.includes(bodyPartFilter))
    : stretches;

  const toggleStretch = useCallback((id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }, []);

  const moveStretch = useCallback((index: number, direction: "up" | "down") => {
    setSelectedIds((prev) => {
      const next = [...prev];
      const swapIndex = direction === "up" ? index - 1 : index + 1;
      if (swapIndex < 0 || swapIndex >= next.length) return prev;
      [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
      return next;
    });
  }, []);

  const handleSave = useCallback(() => {
    if (!routineName.trim() || selectedIds.length === 0) return;

    const routines = getRoutines();

    if (isEdit && editId) {
      // Update existing routine
      const updated = routines.map((r) =>
        r.id === editId
          ? { ...r, name: routineName.trim(), emoji: routineEmoji, stretchIds: selectedIds }
          : r
      );
      setRoutines(updated);
    } else {
      // Create new routine
      const newRoutine = {
        id: Date.now().toString(),
        name: routineName.trim(),
        emoji: routineEmoji,
        stretchIds: selectedIds,
        createdAt: new Date().toISOString(),
      };
      setRoutines([...routines, newRoutine]);
    }
    router.push("/");
  }, [routineName, routineEmoji, selectedIds, isEdit, editId, router]);

  const emojiOptions = ["💪", "🧘", "🔥", "⭐", "🌙", "☀️", "🏃", "🎯", "🌈", "🍀"];

  if (step === "configure") {
    return (
      <div className="relative z-10 min-h-dvh pb-20">
        <div className="max-w-md mx-auto px-4 pt-8 pb-4">
          <button
            onClick={() => setStep("select")}
            className="text-sm font-bold text-emerald-500 mb-4 flex items-center gap-1"
          >
            ← 種目選択に戻る
          </button>

          <h1 className="text-xl font-black text-emerald-800 mb-6">
            {isEdit ? "メニューを編集" : "メニューの設定"}
          </h1>

          <div className="mb-6">
            <label className="text-sm font-bold text-emerald-700 mb-2 block">
              メニュー名
            </label>
            <input
              type="text"
              value={routineName}
              onChange={(e) => setRoutineName(e.target.value)}
              placeholder="例: 朝の肩こり解消"
              className="w-full bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 text-emerald-800 font-bold placeholder:text-emerald-300 outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          <div className="mb-6">
            <label className="text-sm font-bold text-emerald-700 mb-2 block">
              アイコン
            </label>
            <div className="flex gap-2 flex-wrap">
              {emojiOptions.map((emoji) => (
                <button
                  key={emoji}
                  onClick={() => setRoutineEmoji(emoji)}
                  className={`text-2xl p-2 rounded-xl transition-all ${
                    routineEmoji === emoji
                      ? "bg-emerald-100 scale-110"
                      : "bg-white/60 hover:bg-white/80"
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-sm font-bold text-emerald-700 mb-2">
              選択した種目（{selectedIds.length}）
            </p>
            <div className="space-y-2">
              {selectedIds.map((id, index) => {
                const s = stretches.find((x) => x.id === id);
                if (!s) return null;
                return (
                  <div
                    key={id}
                    className="flex items-center gap-2 bg-white/80 rounded-xl px-3 py-2"
                  >
                    <div className="flex flex-col gap-0.5 shrink-0">
                      <button
                        onClick={() => moveStretch(index, "up")}
                        disabled={index === 0}
                        className="text-emerald-400 hover:text-emerald-600 disabled:opacity-20 transition-colors p-0.5"
                        aria-label="上へ"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 3L3 8h8L7 3z" fill="currentColor" />
                        </svg>
                      </button>
                      <button
                        onClick={() => moveStretch(index, "down")}
                        disabled={index === selectedIds.length - 1}
                        className="text-emerald-400 hover:text-emerald-600 disabled:opacity-20 transition-colors p-0.5"
                        aria-label="下へ"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 11L3 6h8L7 11z" fill="currentColor" />
                        </svg>
                      </button>
                    </div>
                    <StretchIllustration stretchId={s.id} className="shrink-0 [&_svg]:w-16 [&_svg]:h-16 [&_svg]:max-w-16 [&_svg]:max-h-16" />
                    <span className="text-sm font-bold text-emerald-800 flex-1">
                      {s.nameShort}
                    </span>
                    <span className="text-xs text-emerald-500">
                      {s.sides === "both"
                        ? `${s.duration}秒×2`
                        : `${s.duration}秒`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleSave}
            disabled={!routineName.trim()}
            className="w-full bg-emerald-500 text-white font-bold py-3 rounded-full hover:bg-emerald-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isEdit ? "更新する" : "保存する"}
          </button>
        </div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="relative z-10 min-h-dvh pb-20">
      <div className="max-w-md mx-auto px-4 pt-8 pb-4">
        <h1 className="text-xl font-black text-emerald-800 mb-1">
          🔧 マイメニュービルダー
        </h1>
        <p className="text-sm font-bold text-emerald-600/70 mb-4">
          好きなストレッチを選んでメニューを作ろう
        </p>

        {/* Filter */}
        <div className="mb-4">
          <BodyPartFilter
            selected={bodyPartFilter}
            onSelect={setBodyPartFilter}
          />
        </div>

        {/* Stretch List */}
        <div className="space-y-2 mb-6">
          {filtered.map((stretch) => {
            const isSelected = selectedIds.includes(stretch.id);
            return (
              <button
                key={stretch.id}
                onClick={() => toggleStretch(stretch.id)}
                className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all ${
                  isSelected
                    ? "bg-emerald-100 ring-2 ring-emerald-400"
                    : "bg-white/80 hover:bg-white"
                }`}
              >
                <StretchIllustration stretchId={stretch.id} className="shrink-0 [&_svg]:w-20 [&_svg]:h-20 [&_svg]:max-w-20 [&_svg]:max-h-20" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-emerald-800 truncate">
                    {stretch.nameShort}
                  </p>
                  <p className="text-xs text-emerald-600/70">
                    {stretch.bodyPart.join("・")} ・{" "}
                    {stretch.sides === "both"
                      ? `${stretch.duration}秒×左右`
                      : `${stretch.duration}秒`}
                  </p>
                </div>
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    isSelected
                      ? "bg-emerald-500 border-emerald-500 text-white"
                      : "border-emerald-300"
                  }`}
                >
                  {isSelected && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6L5 8.5L9.5 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fixed bottom action */}
      {selectedIds.length > 0 && (
        <div className="fixed bottom-16 left-0 right-0 z-40 p-4">
          <div className="max-w-md mx-auto">
            <button
              onClick={() => setStep("configure")}
              className="w-full bg-emerald-500 text-white font-bold py-3 rounded-full shadow-lg hover:bg-emerald-600 transition-colors"
            >
              {selectedIds.length}種目を選択 → 次へ
            </button>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}

export default function BuilderPage() {
  return (
    <Suspense>
      <BuilderContent />
    </Suspense>
  );
}
