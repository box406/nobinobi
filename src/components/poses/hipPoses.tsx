"use client";

import { ReactElement } from "react";
import { C, Head, ArrowCurve, ArrowLine } from "./shared";

// ID 28: 仰向けねじり
// 仰向けで両膝を揃えて右に倒す、顔は左
export function SupineTwist({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-knees {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(40deg); }
        }
        @keyframes ${uid}-face {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(-30deg); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="10" y1="82" x2="90" y2="82" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 仰向け体（横から見た図） */}
      {/* 腕：横に広げる */}
      <line x1="32" y1="60" x2="20" y2="56" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="60" x2="74" y2="56" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="32" y1="60" x2="60" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 頭（顔は左に向ける） */}
      <g style={{ animation: `${uid}-face 3s ease-in-out infinite`, transformOrigin: "26px 60px" }}>
        <Head cx={26} cy={60} r={6} />
      </g>
      {/* 腰側面ハイライト */}
      <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
        <path d="M 56 64 Q 60 68 56 72" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      {/* 膝：右に倒す */}
      <g style={{ animation: `${uid}-knees 3s ease-in-out infinite`, transformOrigin: "60px 60px" }}>
        <line x1="60" y1="60" x2="76" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="76" y1="68" x2="80" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={68} fromY={56} toX={80} toY={66} curve={3} />
    </>
  );
}

// ID 29: 膝抱え
// 仰向けで両膝を抱える
export function KneeHug({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-rock {
          0%, 100% { transform: translateX(0); }
          25%      { transform: translateX(-3px); }
          75%      { transform: translateX(3px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>
      <line x1="10" y1="82" x2="90" y2="82" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      <Head cx={22} cy={60} r={6} />
      <g style={{ animation: `${uid}-rock 2.6s ease-in-out infinite` }}>
        {/* 体 */}
        <line x1="29" y1="60" x2="44" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 膝（胸に） */}
        <line x1="44" y1="62" x2="56" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="56" y1="44" x2="48" y2="56" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="56" y1="44" x2="68" y2="50" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="68" y1="50" x2="58" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 両手で抱える */}
        <line x1="32" y1="60" x2="50" y2="50" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="50" r="2.5" fill={C.body} />
        {/* 腰ハイライト */}
        <g style={{ animation: `${uid}-hl 2.6s ease-in-out infinite` }}>
          <path d="M 36 66 Q 42 72 50 66" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowCurve uid={`${uid}-l`} fromX={20} fromY={70} toX={30} toY={70} curve={3} />
      <ArrowCurve uid={`${uid}-r`} fromX={70} fromY={70} toX={60} toY={70} curve={3} />
    </>
  );
}

// ID 30: 腰の前屈
// 立位から前屈、手を床に近づける
export function StandingForwardBend({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-bend {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(80deg); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="10" y1="92" x2="90" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 脚（軽く曲げる） */}
      <line x1="50" y1="76" x2="42" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="76" x2="58" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 上半身：前屈 */}
      <g style={{ animation: `${uid}-bend 3.4s ease-in-out infinite`, transformOrigin: "50px 76px" }}>
        <line x1="50" y1="46" x2="50" y2="76" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cy={36} />
        <line x1="50" y1="36" x2="50" y2="38" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 腕：下に伸ばす */}
        <line x1="50" y1="48" x2="50" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" opacity="0.85" />
        {/* 腰・もも裏ハイライト */}
        <g style={{ animation: `${uid}-hl 3.4s ease-in-out infinite` }}>
          <path d="M 44 70 Q 48 76 52 70" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={52} fromY={32} toX={70} toY={70} curve={20} />
    </>
  );
}

// ID 31: 座位腰回旋
// 椅子で胸前で腕を交差し、上体を右にねじる
export function SeatedHipTwist({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-twist {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(22deg); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <rect x="36" y="68" width="28" height="3" fill={C.ground} />
      <g style={{ animation: `${uid}-twist 3s ease-in-out infinite`, transformOrigin: "50px 68px" }}>
        <line x1="50" y1="50" x2="50" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head />
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 腕：胸の前で交差 */}
        <line x1="50" y1="52" x2="42" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="52" x2="58" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="42" y1="60" x2="58" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        {/* 腰側面ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 44 60 Q 40 64 44 68" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <line x1="42" y1="68" x2="42" y2="88" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="68" x2="58" y2="88" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <ArrowCurve uid={`${uid}-a`} fromX={42} fromY={44} toX={62} toY={44} curve={-6} />
    </>
  );
}

// ID 32: 腸腰筋
// 片膝立ちで右膝前、左膝床、上体直立、重心前へ
export function HipFlexor({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-shift {
          0%, 100% { transform: translateX(0); }
          40%, 60% { transform: translateX(-3px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="10" y1="92" x2="90" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 後ろ脚（左）：膝床 */}
      <line x1="68" y1="92" x2="56" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="56" y1="80" x2="50" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 前脚（右）：膝90度 */}
      <line x1="50" y1="68" x2="42" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="80" x2="32" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 上半身（前にシフト） */}
      <g style={{ animation: `${uid}-shift 3s ease-in-out infinite` }}>
        <line x1="50" y1="68" x2="50" y2="40" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cy={32} />
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 両腕：腰に */}
        <line x1="50" y1="48" x2="44" y2="56" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="48" x2="56" y2="56" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 後ろ脚側の股関節前面ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 54 70 Q 60 74 60 78" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowLine uid={`${uid}-fwd`} x1={62} y1={48} x2={48} y2={48} />
    </>
  );
}

// ID 33: 腰方形筋
// 立位、左手頭上、体を右に倒す
export function QLStretch({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-side {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(24deg); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="50" y1="78" x2="42" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="78" x2="58" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <g style={{ animation: `${uid}-side 3s ease-in-out infinite`, transformOrigin: "50px 78px" }}>
        <line x1="50" y1="50" x2="50" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head />
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 右腕：腰 */}
        <line x1="50" y1="50" x2="58" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 左腕：頭上 */}
        <line x1="50" y1="50" x2="44" y2="22" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 反対側の腰側面ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 44 60 Q 40 70 44 78" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={44} fromY={20} toX={66} toY={36} curve={6} />
    </>
  );
}

// ID 34: ブリッジ
// 仰向けでお尻を持ち上げ、肩から膝が一直線
export function BridgePose({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-lift {
          0%, 100% { transform: translateY(0); }
          40%, 60% { transform: translateY(-6px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="10" y1="92" x2="90" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 頭・肩 */}
      <Head cx={22} cy={70} r={6} />
      <line x1="28" y1="70" x2="34" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* お尻〜膝（持ち上げ） */}
      <g style={{ animation: `${uid}-lift 3s ease-in-out infinite` }}>
        <line x1="34" y1="70" x2="62" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 腰・お尻ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 44 70 Q 56 60 64 64" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      {/* 膝 */}
      <line x1="62" y1="60" x2="68" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="68" y1="80" x2="76" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <ArrowLine uid={`${uid}-up`} x1={50} y1={76} x2={50} y2={66} />
    </>
  );
}

// ID 35: 仰向け腰ひねり
// 仰向けで右足を上げて左側に倒す、左手で右膝を押す
export function SupineDeepTwist({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-twist {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(-50deg); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="10" y1="92" x2="90" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      <Head cx={20} cy={66} r={6} />
      {/* 体 */}
      <line x1="26" y1="66" x2="56" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 右腕：横へ */}
      <line x1="40" y1="68" x2="40" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 左足：伸ばす */}
      <line x1="56" y1="68" x2="84" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 右足：左へ倒す */}
      <g style={{ animation: `${uid}-twist 3.5s ease-in-out infinite`, transformOrigin: "56px 68px" }}>
        <line x1="56" y1="68" x2="76" y2="56" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* 左手：右膝を軽く押す */}
      <line x1="56" y1="68" x2="68" y2="50" stroke={C.body} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      {/* 腰深部ハイライト */}
      <g style={{ animation: `${uid}-hl 3.5s ease-in-out infinite` }}>
        <path d="M 50 64 Q 56 60 62 64" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={70} fromY={70} toX={66} toY={50} curve={6} />
    </>
  );
}

export function getHipPose(id: number, uid: string): ReactElement | null {
  switch (id) {
    case 28: return <SupineTwist uid={uid} />;
    case 29: return <KneeHug uid={uid} />;
    case 30: return <StandingForwardBend uid={uid} />;
    case 31: return <SeatedHipTwist uid={uid} />;
    case 32: return <HipFlexor uid={uid} />;
    case 33: return <QLStretch uid={uid} />;
    case 34: return <BridgePose uid={uid} />;
    case 35: return <SupineDeepTwist uid={uid} />;
    default: return null;
  }
}
