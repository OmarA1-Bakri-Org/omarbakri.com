import React from "react";
import { ImageResponse } from "next/og";
import Monogram from "@/app/components/monogram";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    React.createElement(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        },
      },
      React.createElement(Monogram, { size: 272 }),
    ),
    {
      width: 206,
      height: 340,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  );
}
