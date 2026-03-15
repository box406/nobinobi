"use client";

import StretchIllustration from "./StretchIllustration";

interface Stretch {
  id: number;
  name: string;
  nameShort: string;
  bodyPart: string[];
  bodyPartEmoji: string;
  duration: number;
  difficulty: string;
  sides: string;
  description: string;
  steps: string[];
  tags: string[];
}

interface StretchCardProps {
  stretch: Stretch;
  showSteps?: boolean;
}

const difficultyLabel: Record<string, { text: string; color: string }> = {
  easy: { text: "かんたん", color: "bg-green-100 text-green-700" },
  medium: { text: "ふつう", color: "bg-yellow-100 text-yellow-700" },
  hard: { text: "しっかり", color: "bg-red-100 text-red-700" },
};

export default function StretchCard({ stretch, showSteps = false }: StretchCardProps) {
  const diff = difficultyLabel[stretch.difficulty] || difficultyLabel.easy;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 stretch-card">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{stretch.bodyPartEmoji}</span>
          <h3 className="text-lg font-bold text-emerald-800">{stretch.name}</h3>
        </div>
        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${diff.color}`}>
          {diff.text}
        </span>
      </div>

      {/* Illustration */}
      <StretchIllustration stretchId={stretch.id} className="my-3" />

      <p className="text-sm text-emerald-700/80 mb-3">{stretch.description}</p>
      <div className="flex items-center gap-3 text-xs text-emerald-600/70 font-medium">
        <span>⏱ {stretch.sides === "both" ? `${stretch.duration}秒×左右` : `${stretch.duration}秒`}</span>
        <span>📍 {stretch.bodyPart.join("・")}</span>
      </div>
      {showSteps && (
        <ol className="mt-3 space-y-1.5 pl-5 list-decimal">
          {stretch.steps.map((step, i) => (
            <li key={i} className="text-sm text-emerald-700/80">
              {step}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
