"use client";

import { ReactElement } from "react";
import { C, Torso, Head, HighlightArc, ArrowCurve, ArrowLine } from "./shared";

// 首9種専用ポーズ。各々 viewBox 100x100 を想定。
// uid はアニメーション名衝突回避用。

// ID 1: 首の横倒し（左右）
// 頭が右→左→右と揺れる。倒した側と反対の首側面を強調。
export function NeckTilt({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-tilt {
          0%, 100% { transform: rotate(0deg); }
          25%      { transform: rotate(22deg); }
          50%      { transform: rotate(0deg); }
          75%      { transform: rotate(-22deg); }
        }
        @keyframes ${uid}-hl-right {
          0%, 100% { opacity: 0; }
          15%, 35% { opacity: 1; }
        }
        @keyframes ${uid}-hl-left {
          0%, 100% { opacity: 0; }
          65%, 85% { opacity: 1; }
        }
      `}</style>
      <Torso />
      {/* 首側面ハイライト（右に倒したとき左側が伸びる） */}
      <g style={{ animation: `${uid}-hl-right 4s ease-in-out infinite`, transformOrigin: "50px 40px" }}>
        <path d="M 46 40 Q 44 46 45 50" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      <g style={{ animation: `${uid}-hl-left 4s ease-in-out infinite`, transformOrigin: "50px 40px" }}>
        <path d="M 54 40 Q 56 46 55 50" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      {/* 頭 */}
      <g style={{ animation: `${uid}-tilt 4s ease-in-out infinite`, transformOrigin: "50px 42px" }}>
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head />
      </g>
      {/* 方向矢印 */}
      <ArrowCurve uid={`${uid}-a`} fromX={36} fromY={26} toX={28} toY={32} curve={4} />
      <ArrowCurve uid={`${uid}-b`} fromX={64} fromY={26} toX={72} toY={32} curve={4} />
    </>
  );
}

// ID 2: 首の前後
// あごを引いて前に倒す → 上向き、を交互。首前後をハイライト。
export function NeckForwardBack({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-pitch {
          0%, 100% { transform: translateY(0) rotate(0); }
          25%      { transform: translateY(4px) rotate(20deg); }
          50%      { transform: translateY(0) rotate(0); }
          75%      { transform: translateY(-2px) rotate(-18deg); }
        }
        @keyframes ${uid}-hl-back {
          0%, 100% { opacity: 0; }
          15%, 35% { opacity: 1; }
        }
        @keyframes ${uid}-hl-front {
          0%, 100% { opacity: 0; }
          65%, 85% { opacity: 1; }
        }
      `}</style>
      <Torso />
      {/* 横向きシルエットで前後の動きを見せる。首後ろハイライト */}
      <g style={{ animation: `${uid}-hl-back 4s ease-in-out infinite` }}>
        <path d="M 53 40 Q 56 44 55 48" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      {/* 首前ハイライト */}
      <g style={{ animation: `${uid}-hl-front 4s ease-in-out infinite` }}>
        <path d="M 47 40 Q 44 44 45 48" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      <g style={{ animation: `${uid}-pitch 4s ease-in-out infinite`, transformOrigin: "50px 42px" }}>
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head />
      </g>
      {/* 矢印（上下） */}
      <ArrowLine uid={`${uid}-d`} x1={70} y1={26} x2={70} y2={36} />
      <ArrowLine uid={`${uid}-u`} x1={30} y1={36} x2={30} y2={26} />
    </>
  );
}

// ID 3: 首回し
// 頭が円軌道。軌跡の円を薄く描く。
export function NeckRotate({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-circle {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(6px, -4px); }
          50%  { transform: translate(0, -6px); }
          75%  { transform: translate(-6px, -4px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
      <Torso />
      {/* 軌跡 */}
      <ellipse cx="50" cy="28" rx="8" ry="5" fill="none" stroke={C.arrow} strokeWidth="1.2" strokeDasharray="2 2" opacity="0.5" />
      {/* 方向矢印（円周上） */}
      <ArrowCurve uid={`${uid}-tr`} fromX={56} fromY={24} toX={58} toY={29} curve={2} />
      <g style={{ animation: `${uid}-circle 3.5s linear infinite` }}>
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head />
      </g>
      {/* 首ぐるり全体ハイライト */}
      <HighlightArc uid={`${uid}-h`} d="M 44 41 Q 50 38 56 41" />
    </>
  );
}

// ID 4: 首の斜め前倒し
// 右手を頭の後ろに添えて、右斜め前に倒す。左の首から肩を強調。
export function NeckDiagonal({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-diag {
          0%, 100% { transform: rotate(0) translate(0, 0); }
          40%, 60% { transform: rotate(28deg) translate(2px, 3px); }
        }
        @keyframes ${uid}-hand {
          0%, 100% { opacity: 0.5; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      {/* 体（直立） */}
      <line x1="50" y1="42" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="75" x2="38" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="75" x2="62" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="50" x2="36" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 反対側の首肩ハイライト（左） */}
      <path d="M 42 42 Q 38 50 36 56" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />
      {/* 右腕（頭に添える） */}
      <g style={{ animation: `${uid}-hand 3.5s ease-in-out infinite` }}>
        <line x1="50" y1="50" x2="62" y2="40" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="62" y1="40" x2="55" y2="32" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* 頭：右斜め前に倒れる */}
      <g style={{ animation: `${uid}-diag 3.5s ease-in-out infinite`, transformOrigin: "50px 42px" }}>
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head />
      </g>
      {/* 矢印 */}
      <ArrowCurve uid={`${uid}-a`} fromX={64} fromY={22} toX={72} toY={32} curve={3} />
    </>
  );
}

// ID 5: 胸鎖乳突筋
// 顔を右に回旋しながら少し上を見上げる。左の首前側面を強調。
export function NeckSCM({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-rotate {
          0%, 100% { transform: rotate(0) translateY(0); }
          40%, 60% { transform: rotate(-18deg) translateY(-3px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <Torso />
      {/* 左前面ハイライト */}
      <g style={{ animation: `${uid}-hl 3.5s ease-in-out infinite` }}>
        <path d="M 45 40 Q 42 46 43 50" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      <g style={{ animation: `${uid}-rotate 3.5s ease-in-out infinite`, transformOrigin: "50px 42px" }}>
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 顔の向きを示す顎ライン */}
        <Head />
        <circle cx="55" cy="30" r="1.5" fill={C.body} />
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={62} fromY={32} toX={70} toY={26} curve={3} />
    </>
  );
}

// ID 6: あご引き
// あごを水平に後ろに引く。横向きシルエット。首後ろをハイライト。
export function NeckChinTuck({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-tuck {
          0%, 100% { transform: translateX(0); }
          40%, 60% { transform: translateX(-5px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      {/* 横向き体（右向き）：頭を右、体は中央 */}
      <line x1="50" y1="44" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="75" x2="42" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="75" x2="58" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="50" x2="40" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="50" x2="60" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 首後ろハイライト */}
      <g style={{ animation: `${uid}-hl 3.5s ease-in-out infinite` }}>
        <path d="M 50 42 Q 53 47 51 50" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      {/* 頭：右向き顔 + 引く動き */}
      <g style={{ animation: `${uid}-tuck 3.5s ease-in-out infinite` }}>
        <line x1="50" y1="40" x2="50" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cx={52} cy={32} />
        {/* 顎ライン */}
        <line x1="58" y1="36" x2="62" y2="36" stroke={C.body} strokeWidth="2" strokeLinecap="round" />
      </g>
      {/* 後ろ向き矢印 */}
      <ArrowLine uid={`${uid}-back`} x1={75} y1={32} x2={66} y2={32} />
    </>
  );
}

// ID 7: 首のタオル
// タオル（黄色いライン）を首後ろに通して両手で前に持つ。斜め上に引く。
export function NeckTowel({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-pull {
          0%, 100% { transform: translateY(0); }
          40%, 60% { transform: translateY(-3px); }
        }
        @keyframes ${uid}-tuck {
          0%, 100% { transform: translate(0, 0); }
          40%, 60% { transform: translate(-2px, 1px); }
        }
      `}</style>
      <line x1="50" y1="44" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="75" x2="38" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="75" x2="62" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 首後ろハイライト */}
      <path d="M 47 41 Q 44 47 45 50" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />
      <path d="M 53 41 Q 56 47 55 50" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />
      {/* タオル（黄色） - 首後ろから両手前へ */}
      <g style={{ animation: `${uid}-pull 3.5s ease-in-out infinite` }}>
        <path
          d="M 42 38 Q 50 30 58 38 L 62 22 M 42 38 L 38 22"
          fill="none"
          stroke={C.prop}
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* 両手 */}
        <circle cx="38" cy="22" r="2" fill={C.body} />
        <circle cx="62" cy="22" r="2" fill={C.body} />
      </g>
      {/* 頭 */}
      <g style={{ animation: `${uid}-tuck 3.5s ease-in-out infinite` }}>
        <line x1="50" y1="40" x2="50" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head />
      </g>
      {/* 斜め上引き矢印 */}
      <ArrowLine uid={`${uid}-pull-arrow`} x1={50} y1={20} x2={50} y2={12} />
    </>
  );
}

// ID 8: 首と肩のリリース（僧帽筋上部）
// 右肩を下げ、頭を左に倒す。右の首〜肩ラインを強調。
export function NeckShoulderRelease({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-tilt {
          0%, 100% { transform: rotate(0); }
          40%, 60% { transform: rotate(-22deg); }
        }
        @keyframes ${uid}-shoulder {
          0%, 100% { transform: translateY(0); }
          40%, 60% { transform: translateY(4px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      {/* 体 */}
      <line x1="50" y1="42" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="75" x2="38" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="75" x2="62" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="50" x2="36" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 右肩・腕（下げる） */}
      <g style={{ animation: `${uid}-shoulder 3.5s ease-in-out infinite` }}>
        <line x1="50" y1="50" x2="64" y2="64" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* 右の首〜肩ラインハイライト */}
      <g style={{ animation: `${uid}-hl 3.5s ease-in-out infinite` }}>
        <path d="M 53 41 Q 58 48 64 54" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      {/* 頭：左に倒す */}
      <g style={{ animation: `${uid}-tilt 3.5s ease-in-out infinite`, transformOrigin: "50px 42px" }}>
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head />
      </g>
      {/* 肩を下げる矢印 */}
      <ArrowLine uid={`${uid}-down`} x1={70} y1={56} x2={70} y2={64} />
    </>
  );
}

// ID 9: 首のアイソメトリック
// 手で頭の右側を押し、頭は右に倒そうと抵抗する。押し合いの線。
export function NeckIsometric({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-press {
          0%, 100% { transform: translateX(0); }
          50%      { transform: translateX(0.6px); }
        }
        @keyframes ${uid}-press-back {
          0%, 100% { transform: translateX(0); }
          50%      { transform: translateX(-0.6px); }
        }
        @keyframes ${uid}-spark {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50%      { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
      <Torso showArms={false} />
      {/* 左腕：自然に下ろす */}
      <line x1="50" y1="50" x2="36" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 右腕：頭に押し当てる */}
      <g style={{ animation: `${uid}-press 1.2s ease-in-out infinite` }}>
        <line x1="50" y1="50" x2="64" y2="38" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="64" y1="38" x2="62" y2="30" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>
      {/* 頭：押し返す */}
      <g style={{ animation: `${uid}-press-back 1.2s ease-in-out infinite` }}>
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head />
      </g>
      {/* 首側面ハイライト */}
      <path d="M 46 40 Q 44 46 45 50" fill="none" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      {/* 押し合いマーク（><） */}
      <g style={{ animation: `${uid}-spark 1.2s ease-in-out infinite`, transformOrigin: "60px 30px" }}>
        <line x1="58" y1="27" x2="61" y2="30" stroke={C.resist} strokeWidth="2" strokeLinecap="round" />
        <line x1="58" y1="33" x2="61" y2="30" stroke={C.resist} strokeWidth="2" strokeLinecap="round" />
        <line x1="64" y1="27" x2="61" y2="30" stroke={C.resist} strokeWidth="2" strokeLinecap="round" />
        <line x1="64" y1="33" x2="61" y2="30" stroke={C.resist} strokeWidth="2" strokeLinecap="round" />
      </g>
    </>
  );
}

// IDからポーズを選ぶ
export function getNeckPose(id: number, uid: string): ReactElement | null {
  switch (id) {
    case 1: return <NeckTilt uid={uid} />;
    case 2: return <NeckForwardBack uid={uid} />;
    case 3: return <NeckRotate uid={uid} />;
    case 4: return <NeckDiagonal uid={uid} />;
    case 5: return <NeckSCM uid={uid} />;
    case 6: return <NeckChinTuck uid={uid} />;
    case 7: return <NeckTowel uid={uid} />;
    case 8: return <NeckShoulderRelease uid={uid} />;
    case 9: return <NeckIsometric uid={uid} />;
    default: return null;
  }
}
