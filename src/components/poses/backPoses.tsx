"use client";

import { ReactElement } from "react";
import { C, Head, ArrowCurve, ArrowLine } from "./shared";

// ID 19: 猫のポーズ
// 四つん這いで背中を丸める↔反らせる（脊柱全体）
export function CatPose({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-cat {
          0%, 100% { d: path("M 28 62 Q 48 50 68 62"); }
          50%      { d: path("M 28 62 Q 48 76 68 62"); }
        }
        @keyframes ${uid}-cat-fb {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(8px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>
      <line x1="14" y1="80" x2="86" y2="80" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      <line x1="28" y1="62" x2="28" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="68" y1="62" x2="68" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <Head cx={22} cy={56} r={7} />
      {/* 背骨アニメ（path animation 不可なブラウザ向けにフォールバックも） */}
      <path
        d="M 28 62 Q 48 50 68 62"
        fill="none"
        stroke={C.body}
        strokeWidth="3"
        strokeLinecap="round"
        style={{ animation: `${uid}-cat 2.8s ease-in-out infinite` }}
      />
      {/* 背中ハイライト */}
      <g style={{ animation: `${uid}-cat-fb 2.8s ease-in-out infinite` }}>
        <path
          d="M 36 60 Q 48 54 60 60"
          fill="none"
          stroke={C.highlight}
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
      </g>
      <ArrowLine uid={`${uid}-up`} x1={48} y1={42} x2={48} y2={36} />
      <ArrowLine uid={`${uid}-down`} x1={48} y1={68} x2={48} y2={74} />
    </>
  );
}

// ID 20: 背中の丸め（座位）
// 椅子に座って背中を丸める
export function SeatedRound({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-round {
          0%, 100% { transform: translateY(0) rotate(0); }
          40%, 60% { transform: translateY(3px) rotate(20deg); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      {/* 椅子 */}
      <rect x="36" y="68" width="28" height="3" fill={C.ground} />
      <line x1="38" y1="71" x2="38" y2="92" stroke={C.body} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="62" y1="71" x2="62" y2="92" stroke={C.body} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {/* 上半身（丸める） */}
      <g style={{ animation: `${uid}-round 3s ease-in-out infinite`, transformOrigin: "50px 68px" }}>
        <line x1="50" y1="50" x2="50" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head />
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 腕（膝に置く） */}
        <line x1="50" y1="55" x2="42" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="55" x2="58" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 背中ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 53 54 Q 56 60 53 66" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      {/* 脚 */}
      <line x1="42" y1="68" x2="42" y2="88" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="68" x2="58" y2="88" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <ArrowCurve uid={`${uid}-a`} fromX={64} fromY={50} toX={68} toY={62} curve={3} />
    </>
  );
}

// ID 21: チャイルドポーズ
// 正座から前に倒れて両手を伸ばす、おでこを床
export function ChildPose({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-breathe {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.04); }
        }
      `}</style>
      <line x1="10" y1="82" x2="90" y2="82" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 正座のお尻 */}
      <ellipse cx="68" cy="76" rx="12" ry="6" fill={C.body} opacity="0.85" />
      {/* 背中〜頭 */}
      <g style={{ animation: `${uid}-breathe 3s ease-in-out infinite`, transformOrigin: "68px 76px" }}>
        <path d="M 60 72 Q 40 80 22 78" fill="none" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 腕：前へ */}
        <line x1="40" y1="78" x2="14" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="40" y1="78" x2="14" y2="74" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 頭：床に */}
        <Head cx={20} cy={74} r={7} />
        {/* 背中・腰ハイライト */}
        <path d="M 40 72 Q 50 70 60 72" fill="none" stroke={C.highlight} strokeWidth="3" strokeLinecap="round" opacity="0.85" />
      </g>
    </>
  );
}

// ID 22: 座位ねじり
// 椅子に座って、右手を左膝に置き、上体を左にねじる
export function SeatedTwist({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-twist {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(-20deg); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <rect x="36" y="68" width="28" height="3" fill={C.ground} />
      {/* 上半身（ねじり） */}
      <g style={{ animation: `${uid}-twist 3s ease-in-out infinite`, transformOrigin: "50px 68px" }}>
        <line x1="50" y1="50" x2="50" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head />
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 左腕：椅子の背に */}
        <line x1="50" y1="50" x2="62" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 右腕：左膝に */}
        <line x1="50" y1="50" x2="40" y2="64" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 背中側面ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 56 56 Q 60 62 58 68" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <line x1="42" y1="68" x2="42" y2="88" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="68" x2="58" y2="88" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <ArrowCurve uid={`${uid}-a`} fromX={62} fromY={42} toX={42} toY={48} curve={6} />
    </>
  );
}

// ID 23: 広背筋
// 立位、両手頭上で組み、体を右に倒す
export function LatStretch({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-side {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(20deg); }
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
        {/* 両腕頭上 */}
        <line x1="50" y1="50" x2="46" y2="22" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="50" x2="54" y2="22" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="20" r="2.5" fill={C.body} />
        {/* 反対側の体側ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 44 50 Q 40 62 44 76" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={50} fromY={20} toX={68} toY={36} curve={6} />
    </>
  );
}

// ID 24: 胸椎回旋
// 横向きに寝て、上の腕を反対側に大きく開く
export function ThoracicRotation({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-open {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(140deg); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="10" y1="82" x2="90" y2="82" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 横向きに寝た体 */}
      <Head cx={22} cy={66} r={7} />
      <line x1="29" y1="66" x2="68" y2="66" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 膝90度 */}
      <line x1="68" y1="66" x2="80" y2="72" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="80" y1="72" x2="68" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 下の腕 */}
      <line x1="40" y1="66" x2="36" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 上の腕（開く） */}
      <g style={{ animation: `${uid}-open 3.4s ease-in-out infinite`, transformOrigin: "40px 66px" }}>
        <line x1="40" y1="66" x2="36" y2="54" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="36" y1="54" x2="38" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <circle cx="38" cy="44" r="2" fill={C.body} />
      </g>
      {/* 胸〜背中ハイライト */}
      <g style={{ animation: `${uid}-hl 3.4s ease-in-out infinite` }}>
        <path d="M 38 60 Q 50 56 60 60" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={32} fromY={48} toX={56} toY={48} curve={-10} />
    </>
  );
}

// ID 25: 背中の伸展（コブラ）
// うつ伏せから上体を起こす
export function CobraPose({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-rise {
          0%, 100% { transform: translateY(0); }
          40%, 60% { transform: translateY(-6px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="10" y1="82" x2="90" y2="82" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 下半身 */}
      <line x1="44" y1="78" x2="86" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 上半身（起き上がる） */}
      <g style={{ animation: `${uid}-rise 3s ease-in-out infinite` }}>
        <path d="M 44 78 Q 32 72 22 60" fill="none" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cx={20} cy={54} r={7} />
        {/* 腕で支える */}
        <line x1="32" y1="68" x2="32" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 背中（腰寄り）ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 38 76 Q 42 70 46 76" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={28} fromY={68} toX={20} toY={48} curve={6} />
    </>
  );
}

// ID 26: 脊柱起立筋
// 長座から前屈してつま先方向に手を伸ばす
export function SeatedForwardBend({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-fold {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(-26deg); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="10" y1="82" x2="90" y2="82" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* お尻 */}
      <ellipse cx="22" cy="78" rx="6" ry="5" fill={C.body} opacity="0.85" />
      {/* 脚（伸ばす） */}
      <line x1="22" y1="78" x2="86" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 上半身（前屈） */}
      <g style={{ animation: `${uid}-fold 3.2s ease-in-out infinite`, transformOrigin: "22px 76px" }}>
        <line x1="22" y1="78" x2="22" y2="50" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cx={22} cy={42} r={7} />
        {/* 腕 */}
        <line x1="22" y1="56" x2="50" y2="64" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 背中全体ハイライト */}
        <g style={{ animation: `${uid}-hl 3.2s ease-in-out infinite` }}>
          <path d="M 26 76 Q 28 64 26 52" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={26} fromY={32} toX={62} toY={68} curve={20} />
    </>
  );
}

// ID 27: 壁を使った背中
// 壁に両手を肩の高さでつき、L字に折る
export function WallBack({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-press {
          0%, 100% { transform: translateY(0); }
          40%, 60% { transform: translateY(2px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="10" y1="92" x2="90" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 壁 */}
      <line x1="14" y1="20" x2="14" y2="92" stroke={C.body} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" opacity="0.6" />
      {/* 両手→壁 */}
      <line x1="14" y1="44" x2="36" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <circle cx="14" cy="44" r="2" fill={C.body} />
      {/* L字の体 */}
      <g style={{ animation: `${uid}-press 3s ease-in-out infinite` }}>
        <line x1="36" y1="44" x2="62" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 頭は腕の間 */}
        <Head cx={48} cy={44} r={6} />
        {/* 腰から脚 */}
        <line x1="62" y1="44" x2="62" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 背中〜肩ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 38 50 Q 50 54 60 50" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowLine uid={`${uid}-down`} x1={48} y1={32} x2={48} y2={42} />
    </>
  );
}

export function getBackPose(id: number, uid: string): ReactElement | null {
  switch (id) {
    case 19: return <CatPose uid={uid} />;
    case 20: return <SeatedRound uid={uid} />;
    case 21: return <ChildPose uid={uid} />;
    case 22: return <SeatedTwist uid={uid} />;
    case 23: return <LatStretch uid={uid} />;
    case 24: return <ThoracicRotation uid={uid} />;
    case 25: return <CobraPose uid={uid} />;
    case 26: return <SeatedForwardBend uid={uid} />;
    case 27: return <WallBack uid={uid} />;
    default: return null;
  }
}
