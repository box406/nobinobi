"use client";

import { BODY_PARTS, BODY_PART_EMOJIS } from "@/lib/omakase";

interface BodyPartFilterProps {
  selected: string | null;
  onSelect: (part: string | null) => void;
}

export default function BodyPartFilter({ selected, onSelect }: BodyPartFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scroll-hide">
      <button
        onClick={() => onSelect(null)}
        className={`filter-chip shrink-0 px-3 py-1.5 rounded-full text-sm font-bold ${
          selected === null
            ? "bg-emerald-500 text-white"
            : "bg-white/80 text-emerald-700"
        }`}
      >
        すべて
      </button>
      {BODY_PARTS.map((part) => (
        <button
          key={part}
          onClick={() => onSelect(selected === part ? null : part)}
          className={`filter-chip shrink-0 px-3 py-1.5 rounded-full text-sm font-bold ${
            selected === part
              ? "bg-emerald-500 text-white"
              : "bg-white/80 text-emerald-700"
          }`}
        >
          {BODY_PART_EMOJIS[part]} {part}
        </button>
      ))}
    </div>
  );
}
