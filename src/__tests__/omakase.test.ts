import { describe, it, expect, beforeEach } from "vitest";
import {
  getNextBodyPart,
  selectOmakaseStretches,
  estimateDuration,
} from "@/lib/omakase";
import stretches from "@/data/stretches.json";

beforeEach(() => {
  localStorage.clear();
});

describe("omakase", () => {
  it("初回は首が選ばれる", () => {
    const result = getNextBodyPart();
    expect(result.bodyPart).toBe("首");
    expect(result.emoji).toBe("🦒");
  });

  it("4-6種目が選ばれる", () => {
    const selected = selectOmakaseStretches(stretches);
    expect(selected.length).toBeGreaterThanOrEqual(4);
    expect(selected.length).toBeLessThanOrEqual(6);
  });

  it("選ばれたストレッチが同じ部位", () => {
    const next = getNextBodyPart();
    const selected = selectOmakaseStretches(stretches);
    selected.forEach((s) => {
      expect(s.bodyPart).toContain(next.bodyPart);
    });
  });

  it("次回は肩が選ばれる", () => {
    selectOmakaseStretches(stretches); // 首を消費
    const result = getNextBodyPart();
    expect(result.bodyPart).toBe("肩");
  });

  it("estimateDurationが正しく計算される", () => {
    const testStretches = [
      { id: 1, duration: 30, sides: "both" },
      { id: 2, duration: 20, sides: "none" },
    ] as typeof stretches;
    expect(estimateDuration(testStretches)).toBe(80); // 30*2 + 20
  });
});
