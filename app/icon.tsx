import { ImageResponse } from "next/og";
import Monogram from "@/app/components/monogram";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 6,
        }}
      >
        <Monogram size={28} variant="compact" />
      </div>
    ),
    { ...size }
  );
}
