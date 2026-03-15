import { getOmakaseRotation, setOmakaseRotation } from "./storage";

interface Stretch {
  id: number;
  name: string;
  bodyPart: string[];
  duration: number;
  sides: string;
  [key: string]: unknown;
}

const BODY_PARTS = ["首", "肩", "背中", "腰", "股関節", "脚", "全身"];
const BODY_PART_EMOJIS: Record<string, string> = {
  "首": "🦒",
  "肩": "💪",
  "背中": "🔙",
  "腰": "🫸",
  "股関節": "🦵",
  "脚": "🦶",
  "全身": "🧘",
};

const TARGET_DURATION = 180; // 3 minutes

export function getNextBodyPart(): { bodyPart: string; emoji: string } {
  const rotation = getOmakaseRotation();
  const nextIndex = (rotation.lastBodyPartIndex + 1) % BODY_PARTS.length;
  const bodyPart = BODY_PARTS[nextIndex];
  return { bodyPart, emoji: BODY_PART_EMOJIS[bodyPart] };
}

export function selectOmakaseStretches(allStretches: Stretch[]): Stretch[] {
  const rotation = getOmakaseRotation();
  const nextIndex = (rotation.lastBodyPartIndex + 1) % BODY_PARTS.length;
  const bodyPart = BODY_PARTS[nextIndex];

  const candidates = allStretches.filter(
    (s) => s.bodyPart.includes(bodyPart) && !rotation.usedIds.includes(s.id)
  );

  // If all used, reset usedIds for this body part
  const pool =
    candidates.length >= 4
      ? candidates
      : allStretches.filter((s) => s.bodyPart.includes(bodyPart));

  // Shuffle and pick 4-6 within ~3 minutes
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const selected: Stretch[] = [];
  let totalDuration = 0;

  for (const stretch of shuffled) {
    const effectiveDuration =
      stretch.sides === "both" ? stretch.duration * 2 : stretch.duration;
    if (totalDuration + effectiveDuration > TARGET_DURATION && selected.length >= 4) {
      break;
    }
    selected.push(stretch);
    totalDuration += effectiveDuration;
    if (selected.length >= 6) break;
  }

  // Ensure at least 4
  if (selected.length < 4 && shuffled.length >= 4) {
    for (const stretch of shuffled) {
      if (!selected.find((s) => s.id === stretch.id)) {
        selected.push(stretch);
        if (selected.length >= 4) break;
      }
    }
  }

  // Update rotation
  const newUsedIds =
    candidates.length < 4
      ? selected.map((s) => s.id)
      : [...rotation.usedIds, ...selected.map((s) => s.id)];

  setOmakaseRotation({
    lastBodyPartIndex: nextIndex,
    usedIds: newUsedIds,
  });

  return selected;
}

export function estimateDuration(stretches: Stretch[]): number {
  return stretches.reduce((sum, s) => {
    return sum + (s.sides === "both" ? s.duration * 2 : s.duration);
  }, 0);
}

export { BODY_PARTS, BODY_PART_EMOJIS };
