"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface TimerProps {
  duration: number;
  sides: string;
  onComplete: () => void;
  isPaused: boolean;
  isStarted: boolean;
}

// Reuse AudioContext to avoid latency from creating new ones
let audioCtx: AudioContext | null = null;
function getAudioCtx(): AudioContext {
  if (!audioCtx) audioCtx = new AudioContext();
  return audioCtx;
}

function playBeep(isLast: boolean) {
  try {
    const ctx = getAudioCtx();
    if (ctx.state === "suspended") ctx.resume();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.frequency.value = isLast ? 880 : 660;
    gain.gain.value = 0.3;
    const dur = isLast ? 0.3 : 0.15;
    oscillator.start(ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + dur);
    oscillator.stop(ctx.currentTime + dur);
  } catch {
    // Audio not supported
  }
}

export default function Timer({
  duration,
  sides,
  onComplete,
  isPaused,
  isStarted,
}: TimerProps) {
  const totalDuration = duration;
  const [timeLeft, setTimeLeft] = useState(totalDuration);
  const [currentSide, setCurrentSide] = useState<"right" | "left" | "done">(
    sides === "both" ? "right" : "done"
  );
  const [waitingForSideStart, setWaitingForSideStart] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const lastTickRef = useRef<number>(0);
  const timeLeftRef = useRef(duration);

  const clearTimer = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isStarted || isPaused || waitingForSideStart) {
      clearTimer();
      return;
    }

    startTimeRef.current = performance.now();
    lastTickRef.current = timeLeftRef.current;

    const tick = (now: number) => {
      const elapsed = (now - startTimeRef.current) / 1000;
      const newTimeLeft = Math.max(0, Math.round(lastTickRef.current - elapsed));

      if (newTimeLeft !== timeLeftRef.current) {
        timeLeftRef.current = newTimeLeft;

        // Play beep when display changes to 5, 4, 3, 2, 1, 0
        if (newTimeLeft <= 5 && newTimeLeft > 0) {
          playBeep(false);
        }

        if (newTimeLeft <= 0) {
          playBeep(true);
          if (sides === "both" && currentSide === "right") {
            setCurrentSide("left");
            setWaitingForSideStart(true);
            timeLeftRef.current = duration;
            setTimeLeft(duration);
            return; // Stop RAF
          }
          setTimeLeft(0);
          clearTimer();
          onComplete();
          return; // Stop RAF
        }

        setTimeLeft(newTimeLeft);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return clearTimer;
  }, [isStarted, isPaused, waitingForSideStart, currentSide, sides, duration, onComplete, clearTimer]);

  // Reset when duration changes (new stretch)
  useEffect(() => {
    timeLeftRef.current = duration;
    setTimeLeft(duration);
    setCurrentSide(sides === "both" ? "right" : "done");
    setWaitingForSideStart(false);
  }, [duration, sides]);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const progress = timeLeft / totalDuration;
  const dashOffset = circumference * (1 - progress);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-44 h-44">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#d1fae5"
            strokeWidth="8"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#10b981"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className="timer-ring"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-black text-emerald-700">{timeLeft}</span>
          <span className="text-sm font-bold text-emerald-600/70">秒</span>
        </div>
      </div>
      {sides === "both" && (
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-bold px-3 py-1 rounded-full ${
                currentSide === "right"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              → 右側
            </span>
            <span
              className={`text-sm font-bold px-3 py-1 rounded-full ${
                currentSide === "left"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              ← 左側
            </span>
          </div>
          {waitingForSideStart && (
            <button
              onClick={() => setWaitingForSideStart(false)}
              className="bg-emerald-500 text-white font-bold px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors animate-pop-in text-sm"
            >
              ← 左側をはじめる
            </button>
          )}
        </div>
      )}
    </div>
  );
}
