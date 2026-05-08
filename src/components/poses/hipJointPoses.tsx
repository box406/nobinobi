"use client";

import { ReactElement } from "react";
import { C, Head, ArrowCurve, ArrowLine } from "./shared";

// ID 36: 開脚
// 座って足を大きく開いて前屈
export function Straddle({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-fold {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(-20deg); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="10" y1="92" x2="90" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 上から見た開脚 */}
      <ellipse cx="50" cy="64" rx="6" ry="5" fill={C.body} opacity="0.85" />
      {/* 両足 */}
      <line x1="50" y1="68" x2="20" y2="86" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="68" x2="80" y2="86" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 内ももハイライト */}
      <g style={{ animation: `${uid}-hl 3.2s ease-in-out infinite` }}>
        <line x1="40" y1="74" x2="32" y2="80" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        <line x1="60" y1="74" x2="68" y2="80" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      {/* 上半身：前屈 */}
      <g style={{ animation: `${uid}-fold 3.2s ease-in-out infinite`, transformOrigin: "50px 64px" }}>
        <line x1="50" y1="64" x2="50" y2="40" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cy={32} />
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="48" x2="50" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" opacity="0.85" />
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={50} fromY={28} toX={50} toY={56} curve={10} />
    </>
  );
}

// ID 37: バタフライ
// 足の裏を合わせ、膝を床に近づける
export function ButterflyPose({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-flap {
          0%, 100% { transform: scaleX(1); }
          50%      { transform: scaleX(0.85); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>
      <line x1="10" y1="92" x2="90" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="50" cy="60" rx="6" ry="5" fill={C.body} opacity="0.85" />
      {/* 両足（蝶羽） */}
      <g style={{ animation: `${uid}-flap 2.4s ease-in-out infinite`, transformOrigin: "50px 80px" }}>
        <line x1="50" y1="64" x2="32" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="32" y1="78" x2="50" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="64" x2="68" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="68" y1="78" x2="50" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 内もも・股関節ハイライト */}
        <g style={{ animation: `${uid}-hl 2.4s ease-in-out infinite` }}>
          <line x1="40" y1="72" x2="36" y2="78" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
          <line x1="60" y1="72" x2="64" y2="78" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      {/* 上半身 */}
      <line x1="50" y1="60" x2="50" y2="38" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <Head cy={30} />
      <line x1="50" y1="38" x2="50" y2="40" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 両手で足を持つ */}
      <line x1="50" y1="46" x2="50" y2="64" stroke={C.body} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <ArrowLine uid={`${uid}-l`} x1={28} y1={86} x2={32} y2={82} />
      <ArrowLine uid={`${uid}-r`} x1={72} y1={86} x2={68} y2={82} />
    </>
  );
}

// ID 38: 前後開脚
// ランジから前後に大きく足を開く
export function FrontSplit({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-split {
          0%, 100% { transform: scaleX(1); }
          50%      { transform: scaleX(1.08); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      <g style={{ animation: `${uid}-split 3s ease-in-out infinite`, transformOrigin: "50px 70px" }}>
        {/* 前脚（右、伸ばし気味） */}
        <line x1="50" y1="70" x2="20" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 後ろ脚（左、伸ばし） */}
        <line x1="50" y1="70" x2="80" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 両手で支える */}
        <line x1="44" y1="80" x2="44" y2="88" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="56" y1="80" x2="56" y2="88" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 前もも・股関節ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <line x1="64" y1="80" x2="74" y2="86" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
          <line x1="36" y1="80" x2="26" y2="86" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      {/* 上半身 */}
      <line x1="50" y1="70" x2="50" y2="46" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <Head cy={38} />
      <line x1="50" y1="46" x2="50" y2="48" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <ArrowLine uid={`${uid}-l`} x1={20} y1={84} x2={12} y2={88} />
      <ArrowLine uid={`${uid}-r`} x1={80} y1={84} x2={88} y2={88} />
    </>
  );
}

// ID 39: 股関節回し
// 立位で右膝を高く上げて円を描く
export function HipCircle({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-circle {
          0%   { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 壁＋手 */}
      <line x1="86" y1="20" x2="86" y2="92" stroke={C.body} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" opacity="0.6" />
      <line x1="60" y1="56" x2="84" y2="56" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 軸脚（左） */}
      <line x1="40" y1="70" x2="40" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 上半身 */}
      <line x1="40" y1="70" x2="50" y2="46" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <Head cy={38} cx={50} />
      <line x1="50" y1="46" x2="50" y2="48" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="48" y1="56" x2="60" y2="56" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 軌跡 */}
      <ellipse cx="32" cy="68" rx="14" ry="8" fill="none" stroke={C.arrow} strokeWidth="1.2" strokeDasharray="2 2" opacity="0.5" />
      {/* 右膝（円軌道） */}
      <g style={{ animation: `${uid}-circle 3s linear infinite`, transformOrigin: "32px 68px" }}>
        <line x1="40" y1="70" x2="18" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="18" y1="68" x2="22" y2="84" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* 股関節ハイライト */}
      <circle cx="40" cy="70" r="3" fill={C.highlight} opacity="0.9" />
      <ArrowCurve uid={`${uid}-a`} fromX={20} fromY={56} toX={26} toY={62} curve={2} />
    </>
  );
}

// ID 40: 鳩のポーズ
// 右膝を前、左足後ろに伸ばす、上体起こす
export function PigeonPose({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-breathe {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.04); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 後ろ脚 */}
      <line x1="50" y1="76" x2="86" y2="86" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 前脚（曲げる） */}
      <line x1="50" y1="76" x2="20" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="20" y1="80" x2="38" y2="86" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* お尻〜上体 */}
      <g style={{ animation: `${uid}-breathe 3s ease-in-out infinite`, transformOrigin: "50px 76px" }}>
        <ellipse cx="50" cy="74" rx="6" ry="4" fill={C.body} opacity="0.85" />
        <line x1="50" y1="70" x2="50" y2="46" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cy={38} />
        <line x1="50" y1="46" x2="50" y2="48" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 両腕：床に */}
        <line x1="50" y1="56" x2="42" y2="74" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="56" x2="58" y2="74" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* お尻深部・股関節ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 32 76 Q 36 80 44 76" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 56 80 Q 64 84 70 86" fill="none" stroke={C.highlight} strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>
    </>
  );
}

// ID 41: 座位お尻伸ばし
// 椅子で右足首を左膝に乗せて前屈
export function SeatedFigureFour({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-fold {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(-22deg); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <rect x="36" y="68" width="28" height="3" fill={C.ground} />
      {/* 上半身 */}
      <g style={{ animation: `${uid}-fold 3.2s ease-in-out infinite`, transformOrigin: "50px 68px" }}>
        <line x1="50" y1="50" x2="50" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head />
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="50" x2="42" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="50" x2="58" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* 4の字脚 */}
      <line x1="42" y1="68" x2="42" y2="88" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="68" x2="68" y2="74" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="68" y1="74" x2="42" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* お尻ハイライト */}
      <g style={{ animation: `${uid}-hl 3.2s ease-in-out infinite` }}>
        <circle cx="60" cy="72" r="3" fill={C.highlight} opacity="0.9" />
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={50} fromY={36} toX={62} toY={56} curve={6} />
    </>
  );
}

// ID 42: ランジ
// 前後足、左膝床、上体直立
export function LungePose({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-sink {
          0%, 100% { transform: translateY(0); }
          40%, 60% { transform: translateY(3px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      <g style={{ animation: `${uid}-sink 3s ease-in-out infinite` }}>
        {/* 前脚（右、90度） */}
        <line x1="50" y1="68" x2="36" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="36" y1="80" x2="28" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 後ろ脚（左、膝床） */}
        <line x1="50" y1="68" x2="62" y2="84" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="62" y1="84" x2="78" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 上半身 */}
        <line x1="50" y1="68" x2="50" y2="46" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cy={38} />
        <line x1="50" y1="46" x2="50" y2="48" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="54" x2="44" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="54" x2="56" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 後ろ脚側股関節前面ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 56 70 Q 62 74 64 80" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
    </>
  );
}

// ID 43: ワイドスクワット
// 足を肩幅1.5倍、つま先外、深くしゃがむ、肘で膝を外に
export function WideSquat({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-bounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(2px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      <g style={{ animation: `${uid}-bounce 2.4s ease-in-out infinite` }}>
        {/* 両脚（ワイド） */}
        <line x1="50" y1="64" x2="22" y2="76" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="22" y1="76" x2="20" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="64" x2="78" y2="76" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="78" y1="76" x2="80" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 上半身 */}
        <line x1="50" y1="64" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cy={34} />
        <line x1="50" y1="42" x2="50" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 腕：肘で膝を外に押す */}
        <line x1="50" y1="50" x2="32" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="50" x2="68" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 内ももハイライト */}
        <g style={{ animation: `${uid}-hl 2.4s ease-in-out infinite` }}>
          <line x1="34" y1="74" x2="42" y2="68" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
          <line x1="66" y1="74" x2="58" y2="68" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowLine uid={`${uid}-l`} x1={28} y1={62} x2={20} y2={66} />
      <ArrowLine uid={`${uid}-r`} x1={72} y1={62} x2={80} y2={66} />
    </>
  );
}

// ID 44: 仰向け股関節
// 仰向けで右膝を胸に引き寄せ
export function SupineKneeToChest({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-pull {
          0%, 100% { transform: translateY(0); }
          40%, 60% { transform: translateY(-3px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="10" y1="92" x2="90" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      <Head cx={20} cy={68} r={6} />
      <line x1="26" y1="68" x2="46" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 左足：床 */}
      <line x1="46" y1="70" x2="84" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 右膝：胸へ */}
      <g style={{ animation: `${uid}-pull 3s ease-in-out infinite` }}>
        <line x1="46" y1="70" x2="56" y2="56" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="56" y1="56" x2="46" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 両手で抱える */}
        <line x1="32" y1="68" x2="52" y2="56" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* お尻ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 42 74 Q 48 70 52 74" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={64} fromY={62} toX={56} toY={50} curve={3} />
    </>
  );
}

export function getHipJointPose(id: number, uid: string): ReactElement | null {
  switch (id) {
    case 36: return <Straddle uid={uid} />;
    case 37: return <ButterflyPose uid={uid} />;
    case 38: return <FrontSplit uid={uid} />;
    case 39: return <HipCircle uid={uid} />;
    case 40: return <PigeonPose uid={uid} />;
    case 41: return <SeatedFigureFour uid={uid} />;
    case 42: return <LungePose uid={uid} />;
    case 43: return <WideSquat uid={uid} />;
    case 44: return <SupineKneeToChest uid={uid} />;
    default: return null;
  }
}
