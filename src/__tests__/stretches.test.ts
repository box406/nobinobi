import { describe, it, expect } from "vitest";
import stretches from "@/data/stretches.json";

const VALID_BODY_PARTS = ["首", "肩", "背中", "腰", "股関節", "脚", "全身"];
const VALID_DIFFICULTIES = ["easy", "medium", "hard"];
const VALID_SIDES = ["both", "none"];

describe("stretches.json", () => {
  it("60種目のストレッチがある", () => {
    expect(stretches).toHaveLength(60);
  });

  it("IDが1-60の連番", () => {
    const ids = stretches.map((s) => s.id);
    for (let i = 1; i <= 60; i++) {
      expect(ids).toContain(i);
    }
  });

  it("IDに重複がない", () => {
    const ids = stretches.map((s) => s.id);
    expect(new Set(ids).size).toBe(60);
  });

  it("全ストレッチにnameがある", () => {
    stretches.forEach((s) => {
      expect(s.name).toBeTruthy();
    });
  });

  it("名前に重複がない", () => {
    const names = stretches.map((s) => s.name);
    expect(new Set(names).size).toBe(60);
  });

  it("bodyPartが有効な値", () => {
    stretches.forEach((s) => {
      expect(s.bodyPart.length).toBeGreaterThanOrEqual(1);
      s.bodyPart.forEach((part) => {
        expect(VALID_BODY_PARTS).toContain(part);
      });
    });
  });

  it("difficultyが有効な値", () => {
    stretches.forEach((s) => {
      expect(VALID_DIFFICULTIES).toContain(s.difficulty);
    });
  });

  it("sidesが有効な値", () => {
    stretches.forEach((s) => {
      expect(VALID_SIDES).toContain(s.sides);
    });
  });

  it("durationが20-40秒の範囲", () => {
    stretches.forEach((s) => {
      expect(s.duration).toBeGreaterThanOrEqual(20);
      expect(s.duration).toBeLessThanOrEqual(40);
    });
  });

  it("stepsが3-5個ある", () => {
    stretches.forEach((s) => {
      expect(s.steps.length).toBeGreaterThanOrEqual(3);
      expect(s.steps.length).toBeLessThanOrEqual(5);
    });
  });

  it("全部位に最低8種目ある", () => {
    VALID_BODY_PARTS.forEach((part) => {
      const count = stretches.filter((s) => s.bodyPart.includes(part)).length;
      expect(count).toBeGreaterThanOrEqual(8);
    });
  });
});
