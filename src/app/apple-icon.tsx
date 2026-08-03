import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 140,
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f5b544",
          fontStyle: "italic",
          fontFamily: "serif",
          lineHeight: 1,
          paddingBottom: 18,
        }}
      >
        b
      </div>
    ),
    { ...size }
  );
}
