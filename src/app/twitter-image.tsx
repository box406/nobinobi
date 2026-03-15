import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "のびのび - 毎日のストレッチを習慣に";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
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
            display: "flex",
            gap: 16,
            marginBottom: 24,
            fontSize: 48,
          }}
        >
          <span>🦒</span>
          <span>💪</span>
          <span>🦵</span>
          <span>🧘</span>
          <span>🔥</span>
        </div>

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
            }}
          >
            のびのび
          </span>
        </div>

        <p
          style={{
            fontSize: 32,
            color: "#059669",
            fontWeight: 700,
            margin: 0,
          }}
        >
          毎日のストレッチを習慣に
        </p>
      </div>
    ),
    { ...size }
  );
}
