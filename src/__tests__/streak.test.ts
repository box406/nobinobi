import { describe, it, expect, beforeEach, vi } from "vitest";
import { completeToday, checkAndUpdateStreak, isTodayCompleted } from "@/lib/streak";

beforeEach(() => {
  localStorage.clear();
});

describe("streak", () => {
  it("初日の完了で連続1日になる", () => {
    const result = completeToday();
    expect(result.currentStreak).toBe(1);
    expect(result.longestStreak).toBe(1);
    expect(result.completedDates).toHaveLength(1);
  });

  it("同じ日に2回完了しても連続は増えない", () => {
    completeToday();
    const result = completeToday();
    expect(result.currentStreak).toBe(1);
    expect(result.completedDates).toHaveLength(1);
  });

  it("isTodayCompletedが正しく動く", () => {
    expect(isTodayCompleted()).toBe(false);
    completeToday();
    expect(isTodayCompleted()).toBe(true);
  });

  it("連続日数が途切れたらリセットされる", () => {
    // Simulate a streak from 3 days ago
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    const dateStr = threeDaysAgo.toISOString().split("T")[0];

    localStorage.setItem(
      "nobinobi-streak",
      JSON.stringify({
        currentStreak: 5,
        longestStreak: 5,
        completedDates: [dateStr],
        lastCompletedDate: dateStr,
      })
    );

    const result = checkAndUpdateStreak();
    expect(result.currentStreak).toBe(0);
    expect(result.longestStreak).toBe(5);
  });

  it("昨日の記録があれば連続が維持される", () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const dateStr = yesterday.toISOString().split("T")[0];

    localStorage.setItem(
      "nobinobi-streak",
      JSON.stringify({
        currentStreak: 3,
        longestStreak: 3,
        completedDates: [dateStr],
        lastCompletedDate: dateStr,
      })
    );

    const result = checkAndUpdateStreak();
    expect(result.currentStreak).toBe(3);
  });
});
