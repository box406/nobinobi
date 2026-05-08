"use client";

import { ReactElement } from "react";
import { C, Torso, Head, ArrowCurve, ArrowLine } from "./shared";

// ID 10: 肩回し
// 両手を肩に置き、肘で大きな円を描く
export function ShoulderRotate({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-circle-r {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes ${uid}-circle-l {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
      `}</style>
      <Torso showArms={false} />
      <Head />
      <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 肩関節ハイライト */}
      <circle cx="42" cy="50" r="3" fill={C.highlight} opacity="0.9" />
      <circle cx="58" cy="50" r="3" fill={C.highlight} opacity="0.9" />
      {/* 軌跡（円） */}
      <circle cx="42" cy="50" r="9" fill="none" stroke={C.arrow} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      <circle cx="58" cy="50" r="9" fill="none" stroke={C.arrow} strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
      {/* 左腕（肩に手を置いて回す） */}
      <g style={{ animation: `${uid}-circle-l 3s linear infinite`, transformOrigin: "42px 50px" }}>
        <line x1="42" y1="50" x2="42" y2="59" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="42" y1="59" x2="44" y2="51" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <circle cx="44" cy="51" r="2" fill={C.body} />
      </g>
      {/* 右腕 */}
      <g style={{ animation: `${uid}-circle-r 3s linear infinite`, transformOrigin: "58px 50px" }}>
        <line x1="58" y1="50" x2="58" y2="59" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="58" y1="59" x2="56" y2="51" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <circle cx="56" cy="51" r="2" fill={C.body} />
      </g>
      <line x1="50" y1="58" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
    </>
  );
}

// ID 11: 肩甲骨寄せ
// 両腕を横に広げて肘を後ろに引く
export function ScapulaSqueeze({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-back {
          0%, 100% { transform: translateX(0); }
          40%, 60% { transform: translateX(2px); }
        }
        @keyframes ${uid}-back-l {
          0%, 100% { transform: translateX(0); }
          40%, 60% { transform: translateX(-2px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <Head />
      <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="50" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="75" x2="42" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="75" x2="58" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 肩甲骨間ハイライト */}
      <g style={{ animation: `${uid}-hl 2.4s ease-in-out infinite` }}>
        <line x1="46" y1="56" x2="54" y2="56" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      {/* 左腕 */}
      <g style={{ animation: `${uid}-back-l 2.4s ease-in-out infinite` }}>
        <line x1="50" y1="50" x2="38" y2="54" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="38" y1="54" x2="30" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* 右腕 */}
      <g style={{ animation: `${uid}-back 2.4s ease-in-out infinite` }}>
        <line x1="50" y1="50" x2="62" y2="54" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="62" y1="54" x2="70" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>
      <ArrowLine uid={`${uid}-r`} x1={36} y1={68} x2={28} y2={68} />
      <ArrowLine uid={`${uid}-l`} x1={64} y1={68} x2={72} y2={68} />
    </>
  );
}

// ID 12: 腕を横に伸ばす（左右）
// 右腕を胸の前で左に引く、左手で右肘を支える
export function ArmCross({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-pull {
          0%, 100% { transform: translateX(0); }
          40%, 60% { transform: translateX(-2px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <Torso showArms={false} />
      <Head />
      <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 右肩後ろハイライト */}
      <g style={{ animation: `${uid}-hl 2.4s ease-in-out infinite` }}>
        <path d="M 56 50 Q 60 53 60 58" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      {/* 右腕（胸の前で左へ） */}
      <g style={{ animation: `${uid}-pull 2.4s ease-in-out infinite` }}>
        <line x1="58" y1="50" x2="38" y2="54" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* 左腕（右肘を支える） */}
      <line x1="42" y1="50" x2="38" y2="56" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="38" y1="56" x2="40" y2="54" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <ArrowCurve uid={`${uid}-a`} fromX={50} fromY={48} toX={36} toY={50} curve={3} />
    </>
  );
}

// ID 13: 肩の上げ下げ
// 両肩をすくめてストンと落とす
export function ShoulderShrug({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-shrug {
          0%, 30%, 100% { transform: translateY(0); }
          50%, 70%      { transform: translateY(-5px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          50%, 70% { opacity: 1; }
        }
      `}</style>
      <Head />
      <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="50" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="75" x2="42" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="75" x2="58" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 僧帽筋上部ハイライト */}
      <g style={{ animation: `${uid}-hl 2.6s ease-in-out infinite` }}>
        <path d="M 38 47 Q 42 42 50 42 Q 58 42 62 47" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      {/* 両肩・腕 */}
      <g style={{ animation: `${uid}-shrug 2.6s ease-in-out infinite` }}>
        <line x1="38" y1="50" x2="62" y2="50" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="38" y1="50" x2="34" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="62" y1="50" x2="66" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>
      <ArrowLine uid={`${uid}-up`} x1={28} y1={60} x2={28} y2={50} />
      <ArrowLine uid={`${uid}-down`} x1={72} y1={50} x2={72} y2={60} />
    </>
  );
}

// ID 14: 背中で手を組む
// 背中の後ろで両手を組み、組んだ手を上に持ち上げる
export function HandsBehindBack({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-lift {
          0%, 100% { transform: translateY(0); }
          40%, 60% { transform: translateY(-4px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <Head />
      <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="50" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="75" x2="42" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="75" x2="58" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 胸前面ハイライト */}
      <g style={{ animation: `${uid}-hl 2.6s ease-in-out infinite` }}>
        <path d="M 44 56 Q 50 60 56 56" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      {/* 背中で組んだ両腕 */}
      <g style={{ animation: `${uid}-lift 2.6s ease-in-out infinite` }}>
        <line x1="40" y1="52" x2="44" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="60" y1="52" x2="56" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="44" y1="68" x2="56" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="68" r="2.5" fill={C.body} />
      </g>
      <ArrowLine uid={`${uid}-up`} x1={50} y1={78} x2={50} y2={70} />
    </>
  );
}

// ID 15: 腕を上に伸ばす（左右）
// 右腕を頭上に伸ばし、左手で右肘を左へ引く
export function ArmsUpPull({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-pull {
          0%, 100% { transform: translateX(0); }
          40%, 60% { transform: translateX(-3px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <Torso showArms={false} />
      <Head cx={52} />
      <line x1="52" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 右脇〜肩ハイライト */}
      <g style={{ animation: `${uid}-hl 2.6s ease-in-out infinite` }}>
        <path d="M 56 50 Q 60 56 58 65" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      {/* 右腕：頭上 */}
      <g style={{ animation: `${uid}-pull 2.6s ease-in-out infinite` }}>
        <line x1="56" y1="50" x2="56" y2="30" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="56" y1="30" x2="44" y2="22" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* 左手：右肘をつかむ */}
      <line x1="44" y1="50" x2="48" y2="32" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <circle cx="48" cy="32" r="2" fill={C.body} />
      <ArrowLine uid={`${uid}-a`} x1={62} y1={20} x2={52} y2={18} />
    </>
  );
}

// ID 16: 壁を使った肩（左右）
// 壁に右手をついて体を左にひねる
export function WallShoulder({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-twist {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(-22deg); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      {/* 壁 */}
      <line x1="80" y1="20" x2="80" y2="92" stroke={C.body} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" opacity="0.7" />
      {/* 右手→壁 */}
      <line x1="62" y1="50" x2="78" y2="50" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <circle cx="78" cy="50" r="2" fill={C.body} />
      {/* 体（捻じる） */}
      <g style={{ animation: `${uid}-twist 3s ease-in-out infinite`, transformOrigin: "50px 60px" }}>
        <Head />
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="50" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="75" x2="42" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="75" x2="58" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="50" x2="40" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 右胸〜肩前面ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 56 52 Q 60 58 56 64" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={48} fromY={68} toX={36} toY={64} curve={4} />
    </>
  );
}

// ID 17: 肩の内旋
// 右手を背中に回して、左手で右肘を内側に押す
export function ShoulderInternalRotation({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-press {
          0%, 100% { transform: translateX(0); }
          40%, 60% { transform: translateX(-2px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <Torso showArms={false} />
      <Head />
      <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 右肩前面ハイライト */}
      <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
        <path d="M 56 50 Q 60 53 60 58" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      {/* 右腕：背中の後ろへ */}
      <g style={{ animation: `${uid}-press 3s ease-in-out infinite` }}>
        <line x1="58" y1="50" x2="64" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="64" y1="62" x2="52" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <circle cx="52" cy="68" r="2" fill={C.body} />
      </g>
      {/* 左腕：右肘を押す */}
      <line x1="42" y1="50" x2="58" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <ArrowLine uid={`${uid}-push`} x1={70} y1={66} x2={62} y2={62} />
    </>
  );
}

// ID 18: 肩甲骨はがし
// 四つん這いで背中を丸める↔反らす
export function ScapulaRelease({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-arch {
          0%, 100% { transform: translateY(0); }
          25%      { transform: translateY(-3px); }
          50%      { transform: translateY(0); }
          75%      { transform: translateY(3px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>
      {/* 床 */}
      <line x1="14" y1="80" x2="86" y2="80" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 四つん這い体 */}
      <line x1="28" y1="62" x2="28" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="68" y1="62" x2="68" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 頭 */}
      <Head cx={22} cy={56} r={7} />
      {/* 背中（丸まる/反るアニメ） */}
      <g style={{ animation: `${uid}-arch 3s ease-in-out infinite` }}>
        <path d="M 28 62 Q 48 50 68 62" fill="none" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 肩甲骨ハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <path d="M 38 56 Q 48 50 58 56" fill="none" stroke={C.highlight} strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>
      <ArrowLine uid={`${uid}-up`} x1={48} y1={42} x2={48} y2={36} />
      <ArrowLine uid={`${uid}-down`} x1={48} y1={68} x2={48} y2={74} />
    </>
  );
}

// ID→Pose
export function getShoulderPose(id: number, uid: string): ReactElement | null {
  switch (id) {
    case 10: return <ShoulderRotate uid={uid} />;
    case 11: return <ScapulaSqueeze uid={uid} />;
    case 12: return <ArmCross uid={uid} />;
    case 13: return <ShoulderShrug uid={uid} />;
    case 14: return <HandsBehindBack uid={uid} />;
    case 15: return <ArmsUpPull uid={uid} />;
    case 16: return <WallShoulder uid={uid} />;
    case 17: return <ShoulderInternalRotation uid={uid} />;
    case 18: return <ScapulaRelease uid={uid} />;
    default: return null;
  }
}
