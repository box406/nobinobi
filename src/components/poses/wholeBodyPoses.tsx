"use client";

import { ReactElement } from "react";
import { C, Head, ArrowCurve, ArrowLine } from "./shared";

// ID 53: 太陽礼拝
// 5つのポーズを順次切替えで表現（合掌→前屈→プランク→アップドッグ→ダウンドッグ）
export function SunSalutation({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-cycle1 { 0%, 18%, 100% { opacity: 1; } 20%, 98% { opacity: 0; } }
        @keyframes ${uid}-cycle2 { 0%, 19%  { opacity: 0; } 22%, 38% { opacity: 1; } 40%, 100% { opacity: 0; } }
        @keyframes ${uid}-cycle3 { 0%, 39%  { opacity: 0; } 42%, 58% { opacity: 1; } 60%, 100% { opacity: 0; } }
        @keyframes ${uid}-cycle4 { 0%, 59%  { opacity: 0; } 62%, 78% { opacity: 1; } 80%, 100% { opacity: 0; } }
        @keyframes ${uid}-cycle5 { 0%, 79%  { opacity: 0; } 82%, 98% { opacity: 1; } 100% { opacity: 0; } }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />

      {/* (1) 合掌 */}
      <g style={{ animation: `${uid}-cycle1 7s linear infinite` }}>
        <Head cy={32} />
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="42" x2="50" y2="74" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="74" x2="42" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="74" x2="58" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="48" x2="50" y2="22" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="20" r="2.5" fill={C.body} />
      </g>

      {/* (2) 前屈 */}
      <g style={{ animation: `${uid}-cycle2 7s linear infinite` }}>
        <line x1="50" y1="74" x2="42" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="74" x2="58" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="74" x2="50" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="44" x2="44" y2="36" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cx={42} cy={32} r={7} />
      </g>

      {/* (3) プランク */}
      <g style={{ animation: `${uid}-cycle3 7s linear infinite` }}>
        <line x1="14" y1="60" x2="86" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="14" y1="60" x2="14" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="86" y1="60" x2="86" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cx={10} cy={56} r={7} />
      </g>

      {/* (4) アップドッグ */}
      <g style={{ animation: `${uid}-cycle4 7s linear infinite` }}>
        <line x1="60" y1="78" x2="86" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <path d="M 60 78 Q 36 70 22 56" fill="none" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cx={20} cy={50} r={7} />
        <line x1="40" y1="68" x2="40" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* (5) ダウンドッグ */}
      <g style={{ animation: `${uid}-cycle5 7s linear infinite` }}>
        <ellipse cx="50" cy="34" rx="8" ry="5" fill={C.body} opacity="0.85" />
        <line x1="44" y1="38" x2="20" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="56" y1="38" x2="80" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cx={20} cy={88} r={6} />
      </g>
    </>
  );
}

// ID 54: 全身伸び
// 仰向けで手足を遠くに伸ばす
export function FullBodyStretch({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-extend {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.06); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      <g style={{ animation: `${uid}-extend 2.6s ease-in-out infinite`, transformOrigin: "50px 70px" }}>
        {/* 体 */}
        <line x1="22" y1="68" x2="78" y2="72" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 頭（頭上方向） */}
        <Head cx={16} cy={66} r={6} />
        {/* 両腕：頭上に伸ばす */}
        <line x1="22" y1="68" x2="6" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="22" y1="68" x2="6" y2="74" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 両足：つま先伸ばし */}
        <line x1="78" y1="72" x2="94" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="78" y1="72" x2="94" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 全身ハイライト */}
        <g style={{ animation: `${uid}-hl 2.6s ease-in-out infinite` }}>
          <line x1="30" y1="68" x2="74" y2="72" stroke={C.highlight} strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        </g>
      </g>
      <ArrowLine uid={`${uid}-l`} x1={14} y1={56} x2={4} y2={52} />
      <ArrowLine uid={`${uid}-r`} x1={86} y1={62} x2={96} y2={58} />
    </>
  );
}

// ID 55: ラジオ体操風
// 両腕を大きく回す
export function RadioGymnastics({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-arm-r {
          0%   { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
        @keyframes ${uid}-arm-l {
          0%   { transform: rotate(0); }
          100% { transform: rotate(-360deg); }
        }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      <Head />
      <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="50" x2="50" y2="74" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="74" x2="42" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="74" x2="58" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 軌跡円 */}
      <circle cx="42" cy="50" r="20" fill="none" stroke={C.arrow} strokeWidth="1.2" strokeDasharray="2 2" opacity="0.4" />
      <circle cx="58" cy="50" r="20" fill="none" stroke={C.arrow} strokeWidth="1.2" strokeDasharray="2 2" opacity="0.4" />
      {/* 左腕 */}
      <g style={{ animation: `${uid}-arm-l 2.4s linear infinite`, transformOrigin: "42px 50px" }}>
        <line x1="42" y1="50" x2="42" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <circle cx="42" cy="70" r="2" fill={C.body} />
      </g>
      {/* 右腕 */}
      <g style={{ animation: `${uid}-arm-r 2.4s linear infinite`, transformOrigin: "58px 50px" }}>
        <line x1="58" y1="50" x2="58" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <circle cx="58" cy="70" r="2" fill={C.body} />
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={28} fromY={42} toX={32} toY={36} curve={2} />
      <ArrowCurve uid={`${uid}-b`} fromX={72} fromY={42} toX={68} toY={36} curve={2} />
    </>
  );
}

// ID 56: 立位側屈
// 立位、右手頭上、体を左に倒す
export function StandingSideBend({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-side {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(-22deg); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="78" x2="42" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="78" x2="58" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <g style={{ animation: `${uid}-side 3s ease-in-out infinite`, transformOrigin: "50px 78px" }}>
        <line x1="50" y1="50" x2="50" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head />
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 左腕：腰 */}
        <line x1="50" y1="50" x2="42" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 右腕：頭上 */}
        <line x1="50" y1="50" x2="56" y2="22" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 反対側の体側全体ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 56 50 Q 60 64 56 78" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={56} fromY={20} toX={32} toY={32} curve={6} />
    </>
  );
}

// ID 57: 戦士のポーズ
// 前後に大きく開脚、前膝90度、両腕を左右に広げる
export function WarriorPose({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-sink {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(2px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      <g style={{ animation: `${uid}-sink 3s ease-in-out infinite` }}>
        {/* 前脚（右、90度） */}
        <line x1="50" y1="64" x2="32" y2="76" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="32" y1="76" x2="28" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 後ろ脚（左、伸ばす） */}
        <line x1="50" y1="64" x2="82" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 上半身 */}
        <line x1="50" y1="64" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cy={34} />
        <line x1="50" y1="42" x2="50" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 両腕：左右に広げる */}
        <line x1="50" y1="48" x2="22" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="48" x2="78" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 全身ハイライト（脚＋腕） */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <line x1="38" y1="68" x2="32" y2="76" stroke={C.highlight} strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="72" x2="76" y2="86" stroke={C.highlight} strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>
      <ArrowLine uid={`${uid}-l`} x1={26} y1={50} x2={18} y2={48} />
      <ArrowLine uid={`${uid}-r`} x1={74} y1={50} x2={82} y2={48} />
    </>
  );
}

// ID 58: 三角のポーズ
// 開脚、右手を右足に下ろし、左手を天井に
export function TrianglePose({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-tilt {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(20deg); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 両足 */}
      <line x1="50" y1="68" x2="22" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="68" x2="78" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <g style={{ animation: `${uid}-tilt 3s ease-in-out infinite`, transformOrigin: "50px 68px" }}>
        <line x1="50" y1="68" x2="50" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cy={38} />
        <line x1="50" y1="44" x2="50" y2="46" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 右手→足、左手→天井 */}
        <line x1="50" y1="50" x2="22" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="50" x2="78" y2="20" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 体側ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 56 50 Q 64 60 60 72" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
    </>
  );
}

// ID 59: 全身ねじり
// 立位、両腕広げる、上体を右にねじりながら左足踏み出し
export function FullBodyTwist({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-twist {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(28deg); }
        }
        @keyframes ${uid}-step {
          0%, 100% { transform: translateX(0); }
          40%, 60% { transform: translateX(2px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 脚（踏み出し） */}
      <g style={{ animation: `${uid}-step 3s ease-in-out infinite` }}>
        <line x1="50" y1="72" x2="38" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="72" x2="64" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>
      <g style={{ animation: `${uid}-twist 3s ease-in-out infinite`, transformOrigin: "50px 72px" }}>
        <line x1="50" y1="48" x2="50" y2="72" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cy={36} />
        <line x1="50" y1="44" x2="50" y2="46" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 両腕広げ */}
        <line x1="50" y1="48" x2="24" y2="50" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="48" x2="76" y2="50" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 体側ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <line x1="56" y1="56" x2="62" y2="68" stroke={C.highlight} strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={26} fromY={56} toX={56} toY={56} curve={-8} />
    </>
  );
}

// ID 60: おやすみリラックス
// 仰向けで脱力、深い呼吸
export function SavasanaPose({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-breathe {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50%      { transform: scale(1.06); opacity: 1; }
        }
        @keyframes ${uid}-zzz {
          0%   { opacity: 0; transform: translateY(0); }
          50%  { opacity: 1; transform: translateY(-3px); }
          100% { opacity: 0; transform: translateY(-6px); }
        }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 呼吸する胴 */}
      <g style={{ animation: `${uid}-breathe 4s ease-in-out infinite`, transformOrigin: "50px 70px" }}>
        <ellipse cx="50" cy="70" rx="20" ry="6" fill={C.body} opacity="0.85" />
      </g>
      {/* 頭 */}
      <Head cx={22} cy={70} r={7} />
      {/* 自然に開いた手足 */}
      <line x1="34" y1="70" x2="22" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="66" y1="70" x2="84" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="66" y1="70" x2="84" y2="76" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 目（閉じてる） */}
      <line x1="20" y1="69" x2="24" y2="69" stroke={C.body} strokeWidth="1.5" strokeLinecap="round" />
      {/* Z（睡眠表現） */}
      <g style={{ animation: `${uid}-zzz 3s ease-in-out infinite` }}>
        <text x="14" y="56" fill={C.body} fontSize="8" fontWeight="bold">z</text>
      </g>
      <g style={{ animation: `${uid}-zzz 3s ease-in-out infinite 0.5s` }}>
        <text x="22" y="48" fill={C.body} fontSize="6" fontWeight="bold">z</text>
      </g>
    </>
  );
}

export function getWholeBodyPose(id: number, uid: string): ReactElement | null {
  switch (id) {
    case 53: return <SunSalutation uid={uid} />;
    case 54: return <FullBodyStretch uid={uid} />;
    case 55: return <RadioGymnastics uid={uid} />;
    case 56: return <StandingSideBend uid={uid} />;
    case 57: return <WarriorPose uid={uid} />;
    case 58: return <TrianglePose uid={uid} />;
    case 59: return <FullBodyTwist uid={uid} />;
    case 60: return <SavasanaPose uid={uid} />;
    default: return null;
  }
}
