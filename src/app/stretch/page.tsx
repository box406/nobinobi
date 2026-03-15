"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Timer from "@/components/Timer";
import ProgressBar from "@/components/ProgressBar";
import StretchCard from "@/components/StretchCard";
import { completeToday } from "@/lib/streak";
import stretches from "@/data/stretches.json";

function StretchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  const ids = (searchParams.get("ids") || "")
    .split(",")
    .map(Number)
    .filter(Boolean);
  const selectedStretches = ids
    .map((id) => stretches.find((s) => s.id === id))
    .filter(Boolean) as typeof stretches;

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleTimerComplete = useCallback(() => {
    if (currentIndex < selectedStretches.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsStarted(false);
    } else {
      setIsComplete(true);
      completeToday();
    }
  }, [currentIndex, selectedStretches.length]);

  const handleSkip = useCallback(() => {
    handleTimerComplete();
  }, [handleTimerComplete]);

  if (!mounted || selectedStretches.length === 0) return null;

  if (isComplete) {
    return (
      <div className="relative z-10 min-h-dvh flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center animate-fade-up">
          <span className="text-6xl block mb-4">🎉</span>
          <h1 className="text-2xl font-black text-emerald-800 mb-2">
            おつかれさま！
          </h1>
          <p className="text-sm font-bold text-emerald-600/70 mb-6">
            {selectedStretches.length}種目のストレッチが完了しました
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-emerald-500 text-white font-bold px-8 py-3 rounded-full hover:bg-emerald-600 transition-colors"
          >
            ホームに戻る
          </button>
        </div>
      </div>
    );
  }

  const current = selectedStretches[currentIndex];
  const next =
    currentIndex < selectedStretches.length - 1
      ? selectedStretches[currentIndex + 1]
      : null;

  return (
    <div className="relative z-10 min-h-dvh">
      <div className="max-w-md mx-auto px-4 pt-6 pb-8">
        {/* Progress */}
        <div className="mb-6 animate-fade-in">
          <ProgressBar
            current={currentIndex + 1}
            total={selectedStretches.length}
          />
        </div>

        {/* Current Stretch */}
        <div className="text-center mb-4 animate-fade-up" key={current.id}>
          <StretchCard stretch={current} showSteps />
        </div>

        {/* Timer */}
        <div className="flex justify-center mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <Timer
            key={current.id}
            duration={current.duration}
            sides={current.sides}
            onComplete={handleTimerComplete}
            isPaused={isPaused}
            isStarted={isStarted}
          />
        </div>

        {/* Controls */}
        <div
          className="flex items-center justify-center gap-4 mb-8 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {!isStarted ? (
            <button
              onClick={() => setIsStarted(true)}
              className="bg-emerald-500 text-white font-bold px-8 py-3 rounded-full hover:bg-emerald-600 transition-colors animate-pop-in"
            >
              ▶ はじめる
            </button>
          ) : (
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="bg-white/80 backdrop-blur-sm text-emerald-700 font-bold px-6 py-3 rounded-full stretch-card"
            >
              {isPaused ? "▶ 再開" : "⏸ 一時停止"}
            </button>
          )}
          <button
            onClick={handleSkip}
            className="bg-white/80 backdrop-blur-sm text-emerald-500 font-bold px-6 py-3 rounded-full stretch-card"
          >
            ⏭ スキップ
          </button>
        </div>

        {/* Next Preview */}
        {next && (
          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <p className="text-xs font-bold text-emerald-500 mb-2">
              次のストレッチ
            </p>
            <div className="opacity-60">
              <StretchCard stretch={next} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function StretchPage() {
  return (
    <Suspense>
      <StretchContent />
    </Suspense>
  );
}
