import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Omar Al-Bakri — Applied AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PATHS = {
  oOutline:
    "M75 15C107 15 126 52 126 100C126 148 107 185 75 185C43 185 24 148 24 100C24 52 43 15 75 15Z",
  aStroke:
    "M47 104C49 103 51 103 53 103L75 39L97 103C99 103 101 103 103 104",
  abCrossbar: "M55 94C66 92 84 92 96 94",
  bSpine: "M75 94L75 162",
  bBowls: "M75 96C105 96 111 122 77 127C113 130 111 160 75 160",
};

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
        <svg width="90" height="120" viewBox="0 0 150 200" fill="none">
          <g
            stroke="#C4A265"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          >
            <path d={PATHS.oOutline} />
            <path d={PATHS.aStroke} />
            <path d={PATHS.abCrossbar} />
            <path d={PATHS.bSpine} />
            <path d={PATHS.bBowls} />
          </g>
        </svg>

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
          Applied AI Engineer · Bangkok · Global
        </div>
      </div>
    ),
    { ...size }
  );
}
