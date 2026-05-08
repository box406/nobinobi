"use client";

// 共通の色定数
export const C = {
  body: "#065f46",       // 体の線
  skin: "#10b981",       // 頭・肌
  bg: "#d1fae5",         // 背景
  ground: "#a7f3d0",     // 床
  highlight: "#ef4444",  // ストレッチされとる部位
  highlightSoft: "#fca5a5", // 補助ハイライト
  arrow: "#f59e0b",      // 動きの矢印
  prop: "#fbbf24",       // タオル等の道具
  resist: "#dc2626",     // 抵抗・押し合い
} as const;

// 棒人間の体（首から下、頭なし）。直立。
export function Torso({
  cx = 50,
  shoulderY = 50,
  hipY = 75,
  feetY = 95,
  shoulderW = 14,
  hipW = 12,
  showArms = true,
}: {
  cx?: number;
  shoulderY?: number;
  hipY?: number;
  feetY?: number;
  shoulderW?: number;
  hipW?: number;
  showArms?: boolean;
}) {
  return (
    <>
      {/* 胴 */}
      <line x1={cx} y1={shoulderY - 8} x2={cx} y2={hipY} stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 脚 */}
      <line x1={cx} y1={hipY} x2={cx - hipW} y2={feetY} stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1={cx} y1={hipY} x2={cx + hipW} y2={feetY} stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 腕 */}
      {showArms && (
        <>
          <line x1={cx} y1={shoulderY} x2={cx - shoulderW} y2={shoulderY + 12} stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1={cx} y1={shoulderY} x2={cx + shoulderW} y2={shoulderY + 12} stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        </>
      )}
    </>
  );
}

// 頭（円）
export function Head({
  cx = 50,
  cy = 30,
  r = 10,
  color = C.skin,
}: {
  cx?: number;
  cy?: number;
  r?: number;
  color?: string;
}) {
  return <circle cx={cx} cy={cy} r={r} fill={color} />;
}

// ストレッチ部位ハイライト（弧）
// 「首の左側」みたいな部分を赤く強調する用
export function HighlightArc({
  d,
  pulse = true,
  color = C.highlight,
  width = 4,
  uid,
}: {
  d: string;
  pulse?: boolean;
  color?: string;
  width?: number;
  uid: string;
}) {
  return (
    <>
      {pulse && (
        <style>{`
          @keyframes ${uid}-pulse {
            0%, 100% { opacity: 0.4; stroke-width: ${width}; }
            50%      { opacity: 1;   stroke-width: ${width + 1}; }
          }
        `}</style>
      )}
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        style={pulse ? { animation: `${uid}-pulse 1.6s ease-in-out infinite` } : undefined}
      />
    </>
  );
}

// 動きの方向矢印（カーブ）
// fromX/Y → toX/Y の弧を描き、先端に矢じり
export function ArrowCurve({
  fromX,
  fromY,
  toX,
  toY,
  curve = 8,
  color = C.arrow,
  uid,
}: {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  curve?: number;
  color?: string;
  uid: string;
}) {
  const mx = (fromX + toX) / 2;
  const my = (fromY + toY) / 2 - curve;
  // 矢じりの角度
  const dx = toX - mx;
  const dy = toY - my;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  // 直交ベクトル
  const px = -uy;
  const py = ux;
  const headSize = 3.5;
  const h1x = toX - ux * headSize + px * headSize * 0.7;
  const h1y = toY - uy * headSize + py * headSize * 0.7;
  const h2x = toX - ux * headSize - px * headSize * 0.7;
  const h2y = toY - uy * headSize - py * headSize * 0.7;

  return (
    <>
      <style>{`
        @keyframes ${uid}-arrow {
          0%, 100% { opacity: 0.3; }
          50%      { opacity: 1;   }
        }
      `}</style>
      <g style={{ animation: `${uid}-arrow 1.6s ease-in-out infinite` }}>
        <path
          d={`M ${fromX} ${fromY} Q ${mx} ${my} ${toX} ${toY}`}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <polygon
          points={`${toX},${toY} ${h1x},${h1y} ${h2x},${h2y}`}
          fill={color}
        />
      </g>
    </>
  );
}

// 直線矢印（短い、押し合いや方向指示用）
export function ArrowLine({
  x1,
  y1,
  x2,
  y2,
  color = C.arrow,
  pulse = true,
  uid,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  pulse?: boolean;
  uid: string;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const px = -uy;
  const py = ux;
  const head = 2.5;
  const h1x = x2 - ux * head + px * head * 0.6;
  const h1y = y2 - uy * head + py * head * 0.6;
  const h2x = x2 - ux * head - px * head * 0.6;
  const h2y = y2 - uy * head - py * head * 0.6;
  const animStyle = pulse
    ? { animation: `${uid}-arrowline 1.4s ease-in-out infinite` }
    : undefined;
  return (
    <>
      {pulse && (
        <style>{`
          @keyframes ${uid}-arrowline {
            0%, 100% { opacity: 0.4; }
            50%      { opacity: 1; }
          }
        `}</style>
      )}
      <g style={animStyle}>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <polygon points={`${x2},${y2} ${h1x},${h1y} ${h2x},${h2y}`} fill={color} />
      </g>
    </>
  );
}
