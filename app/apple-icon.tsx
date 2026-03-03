import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

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
      </div>
    ),
    { ...size }
  );
}
