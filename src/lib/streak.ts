import { getStreak, setStreak, type StreakData } from "./storage";

function toDateString(date: Date): string {
  return date.toISOString().split("T")[0];
}

function isYesterday(dateStr: string): boolean {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return toDateString(yesterday) === dateStr;
}

function isToday(dateStr: string): boolean {
  return toDateString(new Date()) === dateStr;
}

export function completeToday(): StreakData {
  const streak = getStreak();
  const today = toDateString(new Date());

  if (streak.completedDates.includes(today)) {
    return streak;
  }

  let newCurrentStreak: number;
  if (streak.lastCompletedDate && isYesterday(streak.lastCompletedDate)) {
    newCurrentStreak = streak.currentStreak + 1;
  } else if (streak.lastCompletedDate && isToday(streak.lastCompletedDate)) {
    newCurrentStreak = streak.currentStreak;
  } else {
    newCurrentStreak = 1;
  }

  const newStreak: StreakData = {
    currentStreak: newCurrentStreak,
    longestStreak: Math.max(streak.longestStreak, newCurrentStreak),
    completedDates: [...streak.completedDates, today].slice(-90),
    lastCompletedDate: today,
  };

  setStreak(newStreak);
  return newStreak;
}

export function checkAndUpdateStreak(): StreakData {
  const streak = getStreak();
  if (!streak.lastCompletedDate) return streak;

  if (!isToday(streak.lastCompletedDate) && !isYesterday(streak.lastCompletedDate)) {
    const reset: StreakData = {
      ...streak,
      currentStreak: 0,
    };
    setStreak(reset);
    return reset;
  }

  return streak;
}

export function isTodayCompleted(): boolean {
  const streak = getStreak();
  const today = toDateString(new Date());
  return streak.completedDates.includes(today);
}
