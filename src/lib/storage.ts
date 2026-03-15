export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  completedDates: string[];
  lastCompletedDate: string | null;
}

export interface Routine {
  id: string;
  name: string;
  emoji: string;
  stretchIds: number[];
  createdAt: string;
}

export interface Settings {
  defaultDuration: number;
  reminderEnabled: boolean;
  reminderTime: string;
}

export interface OmakaseRotation {
  lastBodyPartIndex: number;
  usedIds: number[];
}

const KEYS = {
  streak: "nobinobi-streak",
  routines: "nobinobi-routines",
  settings: "nobinobi-settings",
  omakase: "nobinobi-omakase-rotation",
} as const;

function getItem<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function setItem<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

const defaultStreak: StreakData = {
  currentStreak: 0,
  longestStreak: 0,
  completedDates: [],
  lastCompletedDate: null,
};

const defaultSettings: Settings = {
  defaultDuration: 30,
  reminderEnabled: false,
  reminderTime: "08:00",
};

const defaultOmakase: OmakaseRotation = {
  lastBodyPartIndex: -1,
  usedIds: [],
};

export function getStreak(): StreakData {
  return getItem(KEYS.streak, defaultStreak);
}

export function setStreak(data: StreakData): void {
  setItem(KEYS.streak, data);
}

export function getRoutines(): Routine[] {
  return getItem(KEYS.routines, []);
}

export function setRoutines(routines: Routine[]): void {
  setItem(KEYS.routines, routines);
}

export function getSettings(): Settings {
  return getItem(KEYS.settings, defaultSettings);
}

export function setSettings(settings: Settings): void {
  setItem(KEYS.settings, settings);
}

export function getOmakaseRotation(): OmakaseRotation {
  return getItem(KEYS.omakase, defaultOmakase);
}

export function setOmakaseRotation(rotation: OmakaseRotation): void {
  setItem(KEYS.omakase, rotation);
}
