import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Path data shared with app/components/monogram.tsx — Codex-generated OAB
// ligature, geometry-only (no <text>) so @vercel/og can render it.
const PATHS = {
  oOutline:
    "M75 15C107 15 126 52 126 100C126 148 107 185 75 185C43 185 24 148 24 100C24 52 43 15 75 15Z",
  aStroke:
    "M47 104C49 103 51 103 53 103L75 39L97 103C99 103 101 103 103 104",
  abCrossbar: "M55 94C66 92 84 92 96 94",
  bSpine: "M75 94L75 162",
  bBowls: "M75 96C105 96 111 122 77 127C113 130 111 160 75 160",
};

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 36,
        }}
      >
        <svg width="140" height="160" viewBox="0 0 150 200" fill="none">
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
      </div>
    ),
    { ...size }
  );
}
