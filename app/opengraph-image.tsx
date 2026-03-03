import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Omar Al-Bakri — FinTech & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
        {/* Monogram */}
        <svg
          width="90"
          height="120"
          viewBox="0 0 150 200"
          fill="none"
        >
          <ellipse
            cx="75"
            cy="100"
            rx="64"
            ry="90"
            stroke="#C4A265"
            strokeWidth="3"
            fill="none"
          />
          <text
            x="75"
            y="88"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="78"
            fontWeight="400"
            fill="#C4A265"
          >
            A
          </text>
          <line
            x1="38"
            y1="102"
            x2="112"
            y2="102"
            stroke="#C4A265"
            strokeWidth="2"
          />
          <text
            x="75"
            y="170"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="78"
            fontWeight="400"
            fill="#C4A265"
          >
            B
          </text>
        </svg>

        {/* Name */}
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

        {/* Tagline */}
        <div
          style={{
            color: "#C4A265",
            fontSize: 24,
            fontWeight: 400,
            marginTop: 16,
            letterSpacing: "0.05em",
          }}
        >
          FinTech · AI Strategy · Business Development
        </div>
      </div>
    ),
    { ...size }
  );
}
