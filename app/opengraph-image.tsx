import { ImageResponse } from "next/og";
import Monogram from "@/app/components/monogram";

export const runtime = "edge";
export const alt = "Omar Al-Bakri — Applied AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <Monogram size={120} />

        <div
          style={{
            color: "#FAFAFA",
            fontSize: 48,
            fontWeight: 300,
            marginTop: 32,
            letterSpacing: "-0.02em",
          }}
        >
          Omar Al-Bakri
        </div>

        <div
          style={{
            color: "#C4A265",
            fontSize: 24,
            fontWeight: 400,
            marginTop: 16,
            letterSpacing: "0.05em",
          }}
        >
          Applied AI Engineer · S.E. Asia · Global
        </div>
      </div>
    ),
    { ...size }
  );
}
