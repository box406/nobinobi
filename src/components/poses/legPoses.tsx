"use client";

import { ReactElement } from "react";
import { C, Head, ArrowCurve, ArrowLine } from "./shared";

// ID 45: ハムストリング
// 椅子に右足のかかとを乗せて、背筋を伸ばしたまま前屈
export function Hamstring({ uid }: { uid: string }): ReactElement {
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
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 椅子 */}
      <rect x="64" y="62" width="22" height="3" fill={C.ground} />
      {/* 軸足 */}
      <line x1="40" y1="68" x2="40" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 椅子に乗せた右足 */}
      <line x1="40" y1="68" x2="84" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* もも裏ハイライト */}
      <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
        <line x1="60" y1="68" x2="76" y2="64" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
      </g>
      {/* 上半身：前屈 */}
      <g style={{ animation: `${uid}-fold 3s ease-in-out infinite`, transformOrigin: "40px 68px" }}>
        <line x1="40" y1="68" x2="40" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cx={40} cy={36} />
        <line x1="40" y1="44" x2="40" y2="46" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="40" y1="50" x2="56" y2="56" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={42} fromY={32} toX={62} toY={56} curve={10} />
    </>
  );
}

// ID 46: 大腿四頭筋
// 立位で右足を後ろに曲げて、右手で足首をつかみ、かかとをお尻に
export function QuadStretch({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-pull {
          0%, 100% { transform: translateY(0); }
          40%, 60% { transform: translateY(-2px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.3; }
          40%, 60% { opacity: 1; }
        }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 壁 */}
      <line x1="14" y1="20" x2="14" y2="92" stroke={C.body} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" opacity="0.5" />
      {/* 左手→壁 */}
      <line x1="38" y1="50" x2="14" y2="50" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 軸脚 */}
      <line x1="50" y1="68" x2="50" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 上半身 */}
      <line x1="50" y1="68" x2="44" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <Head cx={42} cy={36} />
      <line x1="44" y1="44" x2="44" y2="46" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 後ろ脚（曲げる） */}
      <g style={{ animation: `${uid}-pull 2.6s ease-in-out infinite` }}>
        <line x1="50" y1="68" x2="68" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="68" y1="80" x2="62" y2="64" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 右手で足首 */}
        <line x1="56" y1="50" x2="62" y2="64" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <circle cx="62" cy="64" r="2.5" fill={C.body} />
        {/* 前ももハイライト */}
        <g style={{ animation: `${uid}-hl 2.6s ease-in-out infinite` }}>
          <line x1="58" y1="74" x2="64" y2="68" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowLine uid={`${uid}-up`} x1={68} y1={62} x2={62} y2={56} />
    </>
  );
}

// ID 47: ふくらはぎ
// 壁に手をついて足を前後、後ろのかかとを床に
export function CalfStretch({ uid }: { uid: string }): ReactElement {
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
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 壁 */}
      <line x1="14" y1="20" x2="14" y2="92" stroke={C.body} strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" opacity="0.5" />
      {/* 両手→壁 */}
      <line x1="34" y1="46" x2="14" y2="46" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="34" y1="50" x2="14" y2="50" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 上半身：前傾 */}
      <line x1="44" y1="68" x2="34" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <Head cx={32} cy={36} />
      <line x1="34" y1="44" x2="34" y2="46" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 前脚（曲げる） */}
      <line x1="44" y1="68" x2="40" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 後ろ脚（伸ばす、かかと床） */}
      <g style={{ animation: `${uid}-press 2.6s ease-in-out infinite` }}>
        <line x1="44" y1="68" x2="78" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* ふくらはぎハイライト */}
        <g style={{ animation: `${uid}-hl 2.6s ease-in-out infinite` }}>
          <line x1="60" y1="78" x2="70" y2="86" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowLine uid={`${uid}-down`} x1={82} y1={84} x2={82} y2={92} />
    </>
  );
}

// ID 48: 内もも（サイドランジ）
// 横にワイドで右膝曲げ、左足伸ばす
export function InnerThigh({ uid }: { uid: string }): ReactElement {
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
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      <g style={{ animation: `${uid}-shift 3s ease-in-out infinite` }}>
        {/* 右脚（曲げる、体重あり） */}
        <line x1="50" y1="64" x2="32" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="32" y1="78" x2="28" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 左脚（伸ばす） */}
        <line x1="50" y1="64" x2="84" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 左の内ももハイライト */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <line x1="62" y1="74" x2="74" y2="84" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
        {/* 上半身 */}
        <line x1="50" y1="64" x2="44" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head cx={42} cy={36} />
        <line x1="44" y1="44" x2="44" y2="46" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="44" y1="50" x2="32" y2="64" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="44" y1="50" x2="56" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      </g>
      <ArrowLine uid={`${uid}-a`} x1={62} y1={56} x2={50} y2={56} />
    </>
  );
}

// ID 49: すね（前脛骨筋）
// 椅子で右足のつま先を後ろに、足の甲を床に押しつけ
export function ShinStretch({ uid }: { uid: string }): ReactElement {
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
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* 椅子 */}
      <rect x="36" y="60" width="28" height="3" fill={C.ground} />
      {/* 上半身 */}
      <line x1="50" y1="60" x2="50" y2="38" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <Head cy={30} />
      <line x1="50" y1="38" x2="50" y2="40" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="46" x2="40" y2="56" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="46" x2="60" y2="56" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 左足 */}
      <line x1="42" y1="60" x2="42" y2="86" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="86" x2="48" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 右足：後ろに、甲を床 */}
      <g style={{ animation: `${uid}-press 2.6s ease-in-out infinite` }}>
        <line x1="58" y1="60" x2="68" y2="84" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="68" y1="84" x2="78" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* すね前ハイライト */}
        <g style={{ animation: `${uid}-hl 2.6s ease-in-out infinite` }}>
          <line x1="62" y1="72" x2="68" y2="84" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowLine uid={`${uid}-down`} x1={80} y1={84} x2={80} y2={92} />
    </>
  );
}

// ID 50: ITバンド
// 立位で右足を左の後ろに交差、体を左に倒す
export function ITBand({ uid }: { uid: string }): ReactElement {
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
      {/* 脚（交差） */}
      <line x1="50" y1="76" x2="42" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="76" x2="56" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 交差線（後ろから） */}
      <line x1="58" y1="80" x2="40" y2="92" stroke={C.body} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <g style={{ animation: `${uid}-side 3s ease-in-out infinite`, transformOrigin: "50px 76px" }}>
        <line x1="50" y1="50" x2="50" y2="76" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <Head />
        <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="50" x2="42" y2="22" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        <line x1="50" y1="50" x2="58" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
        {/* 太もも外側ハイライト（右） */}
        <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
          <line x1="56" y1="78" x2="60" y2="92" stroke={C.highlight} strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </g>
      <ArrowCurve uid={`${uid}-a`} fromX={42} fromY={20} toX={66} toY={36} curve={6} />
    </>
  );
}

// ID 51: 足首回し
// 椅子で右足を左膝に、足首回す
export function AnkleCircle({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-circle {
          0%   { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      <rect x="36" y="66" width="28" height="3" fill={C.ground} />
      {/* 上半身 */}
      <line x1="50" y1="50" x2="50" y2="66" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <Head />
      <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="55" x2="40" y2="64" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="50" y1="55" x2="60" y2="64" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 左足 */}
      <line x1="42" y1="68" x2="42" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 右足を左膝に */}
      <line x1="58" y1="68" x2="42" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="78" x2="34" y2="86" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* 足首ハイライト */}
      <circle cx="42" cy="78" r="3" fill={C.highlight} opacity="0.9" />
      {/* 軌跡 */}
      <ellipse cx="34" cy="86" rx="6" ry="4" fill="none" stroke={C.arrow} strokeWidth="1.2" strokeDasharray="2 2" opacity="0.6" />
      {/* 足先（円軌道） */}
      <g style={{ animation: `${uid}-circle 2.4s linear infinite`, transformOrigin: "34px 86px" }}>
        <circle cx="40" cy="86" r="2" fill={C.body} />
      </g>
    </>
  );
}

// ID 52: ダウンドッグ
// 逆V字、お尻を高く、かかとを床に
export function DownwardDog({ uid }: { uid: string }): ReactElement {
  return (
    <>
      <style>{`
        @keyframes ${uid}-press {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        @keyframes ${uid}-hl {
          0%, 100% { opacity: 0.4; }
          50%      { opacity: 1; }
        }
      `}</style>
      <line x1="6" y1="92" x2="94" y2="92" stroke={C.ground} strokeWidth="3" strokeLinecap="round" />
      {/* お尻（頂点） */}
      <g style={{ animation: `${uid}-press 3s ease-in-out infinite` }}>
        <ellipse cx="50" cy="34" rx="8" ry="5" fill={C.body} opacity="0.85" />
      </g>
      {/* 上半身（手まで） */}
      <line x1="44" y1="38" x2="20" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      <Head cx={20} cy={88} r={6} />
      {/* 脚（かかと床） */}
      <line x1="56" y1="38" x2="80" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
      {/* もも裏・ふくらはぎハイライト */}
      <g style={{ animation: `${uid}-hl 3s ease-in-out infinite` }}>
        <line x1="62" y1="50" x2="78" y2="86" stroke={C.highlight} strokeWidth="3" strokeLinecap="round" />
      </g>
      <ArrowLine uid={`${uid}-up`} x1={50} y1={50} x2={50} y2={42} />
      <ArrowLine uid={`${uid}-down`} x1={84} y1={84} x2={84} y2={92} />
    </>
  );
}

export function getLegPose(id: number, uid: string): ReactElement | null {
  switch (id) {
    case 45: return <Hamstring uid={uid} />;
    case 46: return <QuadStretch uid={uid} />;
    case 47: return <CalfStretch uid={uid} />;
    case 48: return <InnerThigh uid={uid} />;
    case 49: return <ShinStretch uid={uid} />;
    case 50: return <ITBand uid={uid} />;
    case 51: return <AnkleCircle uid={uid} />;
    case 52: return <DownwardDog uid={uid} />;
    default: return null;
  }
}
