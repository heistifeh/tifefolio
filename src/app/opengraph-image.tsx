import { ImageResponse } from "next/og";

export const alt = "Boluwatife Osineye — Mobile & Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(245,181,68,0.18), transparent 55%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          color: "#f5f5f4",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#a3a3a3",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              border: "1px solid #262626",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#f5b544",
              fontStyle: "italic",
              fontSize: 34,
              lineHeight: 1,
              paddingBottom: 4,
            }}
          >
            b
          </div>
          <span>boluwatife.osineye</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Building mobile products</span>
            <span style={{ color: "#f5b544", fontStyle: "italic" }}>
              that feel inevitable.
            </span>
          </div>
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 28,
              color: "#a3a3a3",
              maxWidth: 900,
            }}
          >
            Mobile & Product Engineer · Lagos, NG — building with React Native,
            Expo, and TypeScript.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "monospace",
            fontSize: 22,
            color: "#737373",
          }}
        >
          <span>Boluwatife Osineye</span>
          <span>Open to freelance & full-time — 2026</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
