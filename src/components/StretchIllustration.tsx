"use client";

interface Props {
  stretchId: number;
  className?: string;
}

// Map stretch IDs to animated pose types
function getPoseType(id: number): string {
  const map: Record<number, string> = {
    // 首
    1: "neck-tilt", 2: "neck-forward", 3: "neck-rotate", 4: "neck-tilt",
    5: "neck-tilt", 6: "neck-forward", 7: "neck-forward", 8: "neck-tilt",
    9: "neck-forward",
    // 肩
    10: "shoulder-rotate", 11: "shoulder-squeeze", 12: "arm-cross",
    13: "shoulder-shrug", 14: "hands-behind", 15: "arms-up",
    16: "wall-shoulder", 17: "arm-cross", 18: "shoulder-squeeze",
    // 背中
    19: "cat-pose", 20: "cat-pose", 21: "child-pose", 22: "seated-twist",
    23: "arms-up", 24: "seated-twist", 25: "cobra", 26: "cobra",
    27: "wall-shoulder",
    // 腰
    28: "lying-twist", 29: "knee-hug", 30: "forward-bend",
    31: "seated-twist", 32: "lunge", 33: "side-bend",
    34: "bridge", 35: "lying-twist",
    // 股関節
    36: "straddle", 37: "butterfly", 38: "lunge",
    39: "standing-circle", 40: "pigeon", 41: "seated-twist",
    42: "lunge", 43: "wide-squat", 44: "knee-hug",
    // 脚
    45: "forward-bend", 46: "quad-stretch", 47: "calf-stretch",
    48: "straddle", 49: "calf-stretch", 50: "side-bend",
    51: "standing-circle", 52: "downdog",
    // 全身
    53: "arms-up", 54: "arms-up", 55: "side-bend",
    56: "side-bend", 57: "warrior", 58: "triangle",
    59: "seated-twist", 60: "child-pose",
  };
  return map[id] || "arms-up";
}

const C = {
  body: "#065f46",
  accent: "#10b981",
  bg: "#d1fae5",
  ground: "#a7f3d0",
};

// Each pose returns SVG elements with inline <style> for CSS animation
function AnimatedPose({ pose, uid }: { pose: string; uid: string }) {
  switch (pose) {
    // ─── 首の横倒し ───
    case "neck-tilt":
      return (
        <>
          <style>{`
            @keyframes ${uid}-tilt {
              0%, 100% { transform: rotate(0deg); transform-origin: 50px 40px; }
              30%, 50% { transform: rotate(15deg); transform-origin: 50px 40px; }
              70%, 90% { transform: rotate(-15deg); transform-origin: 50px 40px; }
            }
          `}</style>
          {/* body */}
          <line x1="50" y1="42" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="38" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="62" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="50" x2="35" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="50" x2="65" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          {/* animated head */}
          <g style={{ animation: `${uid}-tilt 3s ease-in-out infinite` }}>
            <circle cx="50" cy="30" r="10" fill={C.accent} />
            <line x1="50" y1="40" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── 首の前後 ───
    case "neck-forward":
      return (
        <>
          <style>{`
            @keyframes ${uid}-nod {
              0%, 100% { transform: translateY(0); }
              40%, 60% { transform: translateY(6px); }
            }
          `}</style>
          <line x1="50" y1="42" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="38" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="62" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="50" x2="35" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="50" x2="65" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <g style={{ animation: `${uid}-nod 2.5s ease-in-out infinite` }}>
            <circle cx="50" cy="28" r="10" fill={C.accent} />
            <line x1="50" y1="38" x2="50" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── 首回し ───
    case "neck-rotate":
      return (
        <>
          <style>{`
            @keyframes ${uid}-circle {
              0% { transform: translate(0,0); }
              25% { transform: translate(4px, -3px); }
              50% { transform: translate(0, -5px); }
              75% { transform: translate(-4px, -3px); }
              100% { transform: translate(0,0); }
            }
          `}</style>
          <line x1="50" y1="42" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="38" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="62" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="50" x2="35" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="50" x2="65" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <g style={{ animation: `${uid}-circle 3s ease-in-out infinite` }}>
            <circle cx="50" cy="30" r="10" fill={C.accent} />
          </g>
        </>
      );

    // ─── 肩回し ───
    case "shoulder-rotate":
      return (
        <>
          <style>{`
            @keyframes ${uid}-armL {
              0% { transform: rotate(0deg); transform-origin: 50px 48px; }
              50% { transform: rotate(-40deg); transform-origin: 50px 48px; }
              100% { transform: rotate(0deg); transform-origin: 50px 48px; }
            }
            @keyframes ${uid}-armR {
              0% { transform: rotate(0deg); transform-origin: 50px 48px; }
              50% { transform: rotate(40deg); transform-origin: 50px 48px; }
              100% { transform: rotate(0deg); transform-origin: 50px 48px; }
            }
          `}</style>
          <line x1="50" y1="38" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="38" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="62" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="27" r="10" fill={C.accent} />
          <g style={{ animation: `${uid}-armL 2s ease-in-out infinite` }}>
            <line x1="50" y1="48" x2="32" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="32" y1="58" x2="30" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
          <g style={{ animation: `${uid}-armR 2s ease-in-out infinite` }}>
            <line x1="50" y1="48" x2="68" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="68" y1="58" x2="70" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── 肩甲骨寄せ ───
    case "shoulder-squeeze":
      return (
        <>
          <style>{`
            @keyframes ${uid}-sq {
              0%, 100% { transform: translateX(0); }
              40%, 60% { transform: translateX(5px); }
            }
            @keyframes ${uid}-sqR {
              0%, 100% { transform: translateX(0); }
              40%, 60% { transform: translateX(-5px); }
            }
          `}</style>
          <line x1="50" y1="38" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="38" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="62" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="27" r="10" fill={C.accent} />
          <g style={{ animation: `${uid}-sq 2.5s ease-in-out infinite` }}>
            <line x1="50" y1="48" x2="30" y2="55" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="30" y1="55" x2="34" y2="65" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
          <g style={{ animation: `${uid}-sqR 2.5s ease-in-out infinite` }}>
            <line x1="50" y1="48" x2="70" y2="55" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="70" y1="55" x2="66" y2="65" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── 腕クロス ───
    case "arm-cross":
      return (
        <>
          <style>{`
            @keyframes ${uid}-cross {
              0%, 100% { transform: translateX(0); }
              40%, 60% { transform: translateX(-8px); }
            }
          `}</style>
          <line x1="50" y1="38" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="38" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="62" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="27" r="10" fill={C.accent} />
          {/* pulling arm */}
          <line x1="50" y1="48" x2="38" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="38" y1="42" x2="35" y2="50" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          {/* arm being stretched */}
          <g style={{ animation: `${uid}-cross 3s ease-in-out infinite` }}>
            <line x1="50" y1="48" x2="30" y2="50" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── 肩の上げ下げ ───
    case "shoulder-shrug":
      return (
        <>
          <style>{`
            @keyframes ${uid}-shrug {
              0%, 100% { transform: translateY(0); }
              35%, 55% { transform: translateY(-8px); }
            }
          `}</style>
          <line x1="50" y1="38" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="38" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="62" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="27" r="10" fill={C.accent} />
          <g style={{ animation: `${uid}-shrug 2s ease-in-out infinite` }}>
            <line x1="50" y1="46" x2="32" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="32" y1="44" x2="32" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="46" x2="68" y2="44" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="68" y1="44" x2="68" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── 背中で手組み ───
    case "hands-behind":
      return (
        <>
          <style>{`
            @keyframes ${uid}-lift {
              0%, 100% { transform: translateY(0); }
              40%, 60% { transform: translateY(-6px); }
            }
          `}</style>
          <line x1="50" y1="38" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="38" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="62" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="27" r="10" fill={C.accent} />
          <g style={{ animation: `${uid}-lift 2.5s ease-in-out infinite` }}>
            <line x1="50" y1="48" x2="40" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="40" y1="58" x2="42" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="48" x2="60" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="60" y1="58" x2="58" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="72" r="3" fill={C.body} />
          </g>
        </>
      );

    // ─── 腕上げ / 全身伸び ───
    case "arms-up":
      return (
        <>
          <style>{`
            @keyframes ${uid}-reach {
              0%, 100% { transform: scaleY(1); transform-origin: 50px 75px; }
              40%, 60% { transform: scaleY(1.06); transform-origin: 50px 75px; }
            }
          `}</style>
          <line x1="50" y1="75" x2="38" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="62" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <g style={{ animation: `${uid}-reach 2.5s ease-in-out infinite` }}>
            <line x1="50" y1="38" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="27" r="10" fill={C.accent} />
            <line x1="50" y1="48" x2="36" y2="26" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="36" y1="26" x2="38" y2="16" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="48" x2="64" y2="26" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="64" y1="26" x2="62" y2="16" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── 壁肩ストレッチ ───
    case "wall-shoulder":
      return (
        <>
          <style>{`
            @keyframes ${uid}-lean {
              0%, 100% { transform: translateX(0); }
              40%, 60% { transform: translateX(-4px); }
            }
          `}</style>
          <rect x="74" y="15" width="5" height="82" rx="2" fill={C.bg} stroke={C.ground} strokeWidth="1" />
          <line x1="50" y1="75" x2="38" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="62" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <g style={{ animation: `${uid}-lean 3s ease-in-out infinite` }}>
            <line x1="50" y1="38" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="27" r="10" fill={C.accent} />
            <line x1="50" y1="48" x2="35" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="48" x2="74" y2="38" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── 猫のポーズ ───
    case "cat-pose":
      return (
        <>
          <style>{`
            @keyframes ${uid}-arch {
              0%, 100% { d: path('M60 44 Q50 32 35 44'); }
              50% { d: path('M60 44 Q50 54 35 44'); }
            }
          `}</style>
          <circle cx="68" cy="38" r="9" fill={C.accent} />
          <line x1="60" y1="46" x2="65" y2="64" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="35" y1="46" x2="30" y2="64" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="46" x2="68" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="68" y1="58" x2="72" y2="64" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="22" y1="66" x2="78" y2="66" stroke={C.ground} strokeWidth="2" strokeLinecap="round" />
          {/* animated spine */}
          <path d="M60 44 Q50 32 35 44" stroke={C.body} strokeWidth="3" fill="none" strokeLinecap="round"
            style={{ animation: `${uid}-arch 3s ease-in-out infinite` }} />
        </>
      );

    // ─── チャイルドポーズ ───
    case "child-pose":
      return (
        <>
          <style>{`
            @keyframes ${uid}-breathe {
              0%, 100% { transform: scaleX(1) scaleY(1); transform-origin: 50px 60px; }
              50% { transform: scaleX(1.03) scaleY(0.97); transform-origin: 50px 60px; }
            }
          `}</style>
          <g style={{ animation: `${uid}-breathe 3.5s ease-in-out infinite` }}>
            <circle cx="30" cy="50" r="9" fill={C.accent} />
            <path d="M38 52 Q50 45 58 55" stroke={C.body} strokeWidth="3" fill="none" strokeLinecap="round" />
            <line x1="30" y1="58" x2="20" y2="66" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="30" y1="56" x2="18" y2="64" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="58" y1="55" x2="65" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="65" y1="58" x2="68" y2="66" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
          <line x1="15" y1="68" x2="78" y2="68" stroke={C.ground} strokeWidth="2" strokeLinecap="round" />
        </>
      );

    // ─── 座位ねじり ───
    case "seated-twist":
      return (
        <>
          <style>{`
            @keyframes ${uid}-twist {
              0%, 100% { transform: rotate(0deg); transform-origin: 50px 55px; }
              30%, 50% { transform: rotate(12deg); transform-origin: 50px 55px; }
              70%, 90% { transform: rotate(-12deg); transform-origin: 50px 55px; }
            }
          `}</style>
          {/* legs seated */}
          <line x1="50" y1="65" x2="30" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="30" y1="78" x2="25" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="65" x2="55" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="22" y1="82" x2="68" y2="82" stroke={C.ground} strokeWidth="2" strokeLinecap="round" />
          {/* animated upper body */}
          <g style={{ animation: `${uid}-twist 3s ease-in-out infinite` }}>
            <circle cx="50" cy="32" r="10" fill={C.accent} />
            <line x1="50" y1="42" x2="50" y2="65" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="50" x2="66" y2="46" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="50" x2="38" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── コブラ ───
    case "cobra":
      return (
        <>
          <style>{`
            @keyframes ${uid}-rise {
              0%, 100% { transform: rotate(0deg); transform-origin: 55px 62px; }
              40%, 60% { transform: rotate(-12deg); transform-origin: 55px 62px; }
            }
          `}</style>
          <line x1="70" y1="60" x2="82" y2="65" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="70" y1="62" x2="80" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="22" y1="70" x2="85" y2="70" stroke={C.ground} strokeWidth="2" strokeLinecap="round" />
          <g style={{ animation: `${uid}-rise 3s ease-in-out infinite` }}>
            <circle cx="35" cy="42" r="9" fill={C.accent} />
            <path d="M42 46 Q52 52 70 60" stroke={C.body} strokeWidth="3" fill="none" strokeLinecap="round" />
            <line x1="38" y1="48" x2="40" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="44" y1="47" x2="48" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── 仰向けねじり ───
    case "lying-twist":
      return (
        <>
          <style>{`
            @keyframes ${uid}-knees {
              0%, 100% { transform: rotate(0deg); transform-origin: 60px 58px; }
              30%, 50% { transform: rotate(-20deg); transform-origin: 60px 58px; }
              70%, 90% { transform: rotate(20deg); transform-origin: 60px 58px; }
            }
          `}</style>
          <circle cx="25" cy="56" r="9" fill={C.accent} />
          <line x1="33" y1="58" x2="60" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="35" y1="58" x2="25" y2="46" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="35" y1="58" x2="25" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="18" y1="68" x2="82" y2="68" stroke={C.ground} strokeWidth="2" strokeLinecap="round" />
          <g style={{ animation: `${uid}-knees 3.5s ease-in-out infinite` }}>
            <line x1="60" y1="58" x2="66" y2="48" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="66" y1="48" x2="75" y2="46" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="60" y1="58" x2="68" y2="50" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="68" y1="50" x2="78" y2="49" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── 膝抱え ───
    case "knee-hug":
      return (
        <>
          <style>{`
            @keyframes ${uid}-hug {
              0%, 100% { transform: translate(0, 0); }
              40%, 60% { transform: translate(-3px, -3px); }
            }
          `}</style>
          <circle cx="28" cy="52" r="9" fill={C.accent} />
          <line x1="36" y1="55" x2="50" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="18" y1="68" x2="72" y2="68" stroke={C.ground} strokeWidth="2" strokeLinecap="round" />
          <g style={{ animation: `${uid}-hug 2.5s ease-in-out infinite` }}>
            <line x1="50" y1="58" x2="55" y2="45" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="55" y1="45" x2="48" y2="40" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="58" x2="58" y2="48" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="58" y1="48" x2="52" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="38" y1="56" x2="42" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="42" y1="42" x2="50" y2="40" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── 前屈 ───
    case "forward-bend":
      return (
        <>
          <style>{`
            @keyframes ${uid}-bend {
              0%, 100% { transform: rotate(0deg); transform-origin: 55px 72px; }
              40%, 60% { transform: rotate(-15deg); transform-origin: 55px 72px; }
            }
          `}</style>
          <line x1="55" y1="72" x2="55" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="55" y1="72" x2="62" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <g style={{ animation: `${uid}-bend 3s ease-in-out infinite` }}>
            <path d="M55 72 Q48 55 38 48" stroke={C.body} strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="32" cy="44" r="9" fill={C.accent} />
            <line x1="42" y1="55" x2="38" y2="72" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="42" y1="55" x2="35" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── ランジ ───
    case "lunge":
      return (
        <>
          <style>{`
            @keyframes ${uid}-dip {
              0%, 100% { transform: translateY(0); }
              40%, 60% { transform: translateY(4px); }
            }
          `}</style>
          <line x1="22" y1="86" x2="80" y2="86" stroke={C.ground} strokeWidth="2" strokeLinecap="round" />
          <line x1="45" y1="60" x2="32" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="80" x2="28" y2="84" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="45" y1="60" x2="68" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="68" y1="78" x2="75" y2="84" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <g style={{ animation: `${uid}-dip 2.5s ease-in-out infinite` }}>
            <circle cx="45" cy="30" r="10" fill={C.accent} />
            <line x1="45" y1="40" x2="45" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="45" y1="48" x2="35" y2="52" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="45" y1="48" x2="55" y2="52" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── ブリッジ ───
    case "bridge":
      return (
        <>
          <style>{`
            @keyframes ${uid}-lift {
              0%, 100% { d: path('M32 62 Q50 42 68 62'); }
              50% { d: path('M32 62 Q50 32 68 62'); }
            }
          `}</style>
          <circle cx="25" cy="60" r="8" fill={C.accent} />
          <line x1="32" y1="62" x2="28" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="68" y1="62" x2="72" y2="55" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="72" y1="55" x2="75" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="68" y1="62" x2="65" y2="55" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="65" y1="55" x2="62" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="18" y1="72" x2="82" y2="72" stroke={C.ground} strokeWidth="2" strokeLinecap="round" />
          <path d="M32 62 Q50 42 68 62" stroke={C.body} strokeWidth="3" fill="none" strokeLinecap="round"
            style={{ animation: `${uid}-lift 3s ease-in-out infinite` }} />
        </>
      );

    // ─── 開脚 ───
    case "straddle":
      return (
        <>
          <style>{`
            @keyframes ${uid}-lean {
              0%, 100% { transform: translateY(0) rotate(0deg); transform-origin: 50px 55px; }
              40%, 60% { transform: translateY(5px) rotate(3deg); transform-origin: 50px 55px; }
            }
          `}</style>
          <line x1="50" y1="65" x2="25" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="25" y1="80" x2="20" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="65" x2="75" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="75" y1="80" x2="80" y2="78" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="18" y1="84" x2="82" y2="84" stroke={C.ground} strokeWidth="2" strokeLinecap="round" />
          <g style={{ animation: `${uid}-lean 3s ease-in-out infinite` }}>
            <circle cx="50" cy="38" r="10" fill={C.accent} />
            <line x1="50" y1="48" x2="50" y2="65" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="55" x2="40" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="55" x2="60" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── バタフライ ───
    case "butterfly":
      return (
        <>
          <style>{`
            @keyframes ${uid}-flap {
              0%, 100% { transform: rotate(0deg); transform-origin: 50px 62px; }
              50% { transform: rotate(-10deg); transform-origin: 50px 62px; }
            }
            @keyframes ${uid}-flapR {
              0%, 100% { transform: rotate(0deg); transform-origin: 50px 62px; }
              50% { transform: rotate(10deg); transform-origin: 50px 62px; }
            }
          `}</style>
          <circle cx="50" cy="35" r="10" fill={C.accent} />
          <line x1="50" y1="45" x2="50" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="55" x2="42" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="55" x2="58" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="25" y1="86" x2="75" y2="86" stroke={C.ground} strokeWidth="2" strokeLinecap="round" />
          <g style={{ animation: `${uid}-flap 1.8s ease-in-out infinite` }}>
            <line x1="50" y1="62" x2="32" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="32" y1="68" x2="50" y2="82" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
          <g style={{ animation: `${uid}-flapR 1.8s ease-in-out infinite` }}>
            <line x1="50" y1="62" x2="68" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="68" y1="68" x2="50" y2="82" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── 鳩のポーズ ───
    case "pigeon":
      return (
        <>
          <style>{`
            @keyframes ${uid}-sink {
              0%, 100% { transform: translateY(0); }
              40%, 60% { transform: translateY(3px); }
            }
          `}</style>
          <line x1="38" y1="62" x2="28" y2="74" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="28" y1="74" x2="45" y2="74" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="38" y1="62" x2="70" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="70" y1="70" x2="78" y2="74" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="76" x2="82" y2="76" stroke={C.ground} strokeWidth="2" strokeLinecap="round" />
          <g style={{ animation: `${uid}-sink 3s ease-in-out infinite` }}>
            <circle cx="35" cy="38" r="9" fill={C.accent} />
            <line x1="35" y1="47" x2="38" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="35" y1="52" x2="28" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="35" y1="52" x2="42" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── 股関節回し / 足首回し ───
    case "standing-circle":
      return (
        <>
          <style>{`
            @keyframes ${uid}-spin {
              0% { transform: rotate(0deg); transform-origin: 65px 68px; }
              100% { transform: rotate(360deg); transform-origin: 65px 68px; }
            }
          `}</style>
          <circle cx="50" cy="27" r="10" fill={C.accent} />
          <line x1="50" y1="37" x2="50" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="70" x2="40" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="48" x2="38" y2="55" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="48" x2="62" y2="55" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="70" x2="65" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <g style={{ animation: `${uid}-spin 2.5s linear infinite` }}>
            <circle cx="73" cy="68" r="3" fill={C.accent} />
          </g>
          <circle cx="65" cy="68" r="10" stroke={C.accent} strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
        </>
      );

    // ─── ワイドスクワット ───
    case "wide-squat":
      return (
        <>
          <style>{`
            @keyframes ${uid}-squat {
              0%, 100% { transform: translateY(0); }
              40%, 60% { transform: translateY(5px); }
            }
          `}</style>
          <line x1="30" y1="74" x2="28" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="70" y1="74" x2="72" y2="92" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <g style={{ animation: `${uid}-squat 2.5s ease-in-out infinite` }}>
            <circle cx="50" cy="30" r="10" fill={C.accent} />
            <line x1="50" y1="40" x2="50" y2="62" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="62" x2="30" y2="74" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="62" x2="70" y2="74" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="50" x2="42" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="50" x2="58" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="60" r="2.5" fill={C.body} />
          </g>
        </>
      );

    // ─── 大腿四頭筋ストレッチ ───
    case "quad-stretch":
      return (
        <>
          <style>{`
            @keyframes ${uid}-pull {
              0%, 100% { transform: rotate(0deg); transform-origin: 45px 65px; }
              40%, 60% { transform: rotate(8deg); transform-origin: 45px 65px; }
            }
          `}</style>
          <circle cx="45" cy="25" r="10" fill={C.accent} />
          <line x1="45" y1="35" x2="45" y2="65" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="45" y1="65" x2="42" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="45" y1="48" x2="32" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <g style={{ animation: `${uid}-pull 2.5s ease-in-out infinite` }}>
            <line x1="45" y1="65" x2="55" y2="72" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="55" y1="72" x2="52" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="45" y1="48" x2="55" y2="55" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="55" y1="55" x2="52" y2="58" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── ふくらはぎストレッチ ───
    case "calf-stretch":
      return (
        <>
          <style>{`
            @keyframes ${uid}-press {
              0%, 100% { transform: translateX(0); }
              40%, 60% { transform: translateX(-3px); }
            }
          `}</style>
          <rect x="22" y="15" width="5" height="78" rx="2" fill={C.bg} stroke={C.ground} strokeWidth="1" />
          <line x1="38" y1="84" x2="35" y2="88" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="45" y1="68" x2="65" y2="84" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="65" y1="84" x2="68" y2="88" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <g style={{ animation: `${uid}-press 3s ease-in-out infinite` }}>
            <circle cx="42" cy="32" r="10" fill={C.accent} />
            <line x1="42" y1="42" x2="45" y2="68" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="42" y1="50" x2="27" y2="42" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="42" y1="50" x2="27" y2="50" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="45" y1="68" x2="38" y2="84" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── 側屈 ───
    case "side-bend":
      return (
        <>
          <style>{`
            @keyframes ${uid}-sway {
              0%, 100% { transform: rotate(0deg); transform-origin: 50px 75px; }
              30%, 50% { transform: rotate(10deg); transform-origin: 50px 75px; }
              70%, 90% { transform: rotate(-10deg); transform-origin: 50px 75px; }
            }
          `}</style>
          <line x1="50" y1="75" x2="40" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="75" x2="60" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <g style={{ animation: `${uid}-sway 3s ease-in-out infinite` }}>
            <circle cx="50" cy="25" r="10" fill={C.accent} />
            <line x1="50" y1="35" x2="50" y2="75" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="45" x2="68" y2="30" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="48" x2="60" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── ダウンドッグ ───
    case "downdog":
      return (
        <>
          <style>{`
            @keyframes ${uid}-push {
              0%, 100% { transform: translateY(0); }
              40%, 60% { transform: translateY(-3px); }
            }
          `}</style>
          <line x1="20" y1="72" x2="80" y2="72" stroke={C.ground} strokeWidth="2" strokeLinecap="round" />
          <line x1="68" y1="60" x2="72" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="68" y1="60" x2="65" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="35" y1="54" x2="28" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <g style={{ animation: `${uid}-push 3s ease-in-out infinite` }}>
            <circle cx="30" cy="48" r="8" fill={C.accent} />
            <line x1="35" y1="54" x2="50" y2="30" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="30" x2="68" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── 戦士のポーズ ───
    case "warrior":
      return (
        <>
          <style>{`
            @keyframes ${uid}-hold {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-3px); }
            }
            @keyframes ${uid}-arms {
              0%, 100% { transform: scaleX(1); transform-origin: 45px 45px; }
              50% { transform: scaleX(1.05); transform-origin: 45px 45px; }
            }
          `}</style>
          <line x1="45" y1="60" x2="30" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="30" y1="80" x2="25" y2="84" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="45" y1="60" x2="70" y2="74" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="70" y1="74" x2="78" y2="80" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="18" y1="86" x2="82" y2="86" stroke={C.ground} strokeWidth="2" strokeLinecap="round" />
          <g style={{ animation: `${uid}-hold 3s ease-in-out infinite` }}>
            <circle cx="45" cy="22" r="10" fill={C.accent} />
            <line x1="45" y1="32" x2="45" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <g style={{ animation: `${uid}-arms 3s ease-in-out infinite` }}>
              <line x1="45" y1="45" x2="22" y2="45" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
              <line x1="45" y1="45" x2="72" y2="45" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            </g>
          </g>
        </>
      );

    // ─── 三角のポーズ ───
    case "triangle":
      return (
        <>
          <style>{`
            @keyframes ${uid}-reach {
              0%, 100% { transform: rotate(0deg); transform-origin: 55px 60px; }
              40%, 60% { transform: rotate(-5deg); transform-origin: 55px 60px; }
            }
          `}</style>
          <line x1="55" y1="60" x2="35" y2="88" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="55" y1="60" x2="75" y2="88" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="18" y1="90" x2="82" y2="90" stroke={C.ground} strokeWidth="2" strokeLinecap="round" />
          <g style={{ animation: `${uid}-reach 3s ease-in-out infinite` }}>
            <circle cx="32" cy="38" r="9" fill={C.accent} />
            <line x1="38" y1="42" x2="55" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="42" y1="48" x2="35" y2="72" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="42" y1="48" x2="38" y2="28" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );

    // ─── デフォルト ───
    default:
      return (
        <>
          <style>{`
            @keyframes ${uid}-idle {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-3px); }
            }
          `}</style>
          <line x1="50" y1="70" x2="38" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <line x1="50" y1="70" x2="62" y2="95" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          <g style={{ animation: `${uid}-idle 2.5s ease-in-out infinite` }}>
            <circle cx="50" cy="30" r="10" fill={C.accent} />
            <line x1="50" y1="40" x2="50" y2="70" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="50" x2="35" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="50" x2="65" y2="60" stroke={C.body} strokeWidth="3" strokeLinecap="round" />
          </g>
        </>
      );
  }
}

export default function StretchIllustration({ stretchId, className = "" }: Props) {
  const pose = getPoseType(stretchId);
  // Unique ID to prevent animation name collisions when multiple instances render
  const uid = `p${stretchId}`;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full max-w-[200px] max-h-[200px] drop-shadow-sm"
      >
        <rect width="100" height="100" rx="16" fill={C.bg} fillOpacity="0.5" />
        <AnimatedPose pose={pose} uid={uid} />
      </svg>
    </div>
  );
}
