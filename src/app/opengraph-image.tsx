import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "のびのび - 毎日のストレッチを習慣に";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(16, 185, 129, 0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: -40,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(16, 185, 129, 0.06)",
            display: "flex",
          }}
        />

        {/* Emoji row */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 24,
            fontSize: 48,
          }}
        >
          <span>🦒</span>
          <span>💪</span>
          <span>🔙</span>
          <span>🦵</span>
          <span>🦶</span>
          <span>🧘</span>
          <span>🔥</span>
        </div>

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 16,
          }}
        >
          <span style={{ fontSize: 72 }}>🧘</span>
          <span
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#064e3b",
              letterSpacing: "-0.02em",
            }}
          >
            のびのび
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: 32,
            color: "#059669",
            fontWeight: 700,
            margin: 0,
            marginBottom: 32,
          }}
        >
          毎日のストレッチを習慣に
        </p>

        {/* Features */}
        <div
          style={{
            display: "flex",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "white",
              borderRadius: 100,
              padding: "12px 24px",
              fontSize: 22,
              fontWeight: 700,
              color: "#065f46",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            🎯 おまかせ提案
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "white",
              borderRadius: 100,
              padding: "12px 24px",
              fontSize: 22,
              fontWeight: 700,
              color: "#065f46",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            🔥 連続記録
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "white",
              borderRadius: 100,
              padding: "12px 24px",
              fontSize: 22,
              fontWeight: 700,
              color: "#065f46",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            📋 マイメニュー
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
