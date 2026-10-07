import React from "react";
import { MONOGRAM_GOLD, MONOGRAM_PATHS, type MonogramVariant } from "@/lib/monogram";

interface MonogramProps {
  size?: number;
  variant?: MonogramVariant;
  color?: string;
  className?: string;
  "aria-hidden"?: boolean;
}

export default function Monogram({
  size = 120,
  variant = "refined",
  color = MONOGRAM_GOLD,
  className = "",
  "aria-hidden": ariaHidden,
}: MonogramProps) {
  return (
    <svg
      width={Math.round(size * 0.75)}
      height={size}
      viewBox="0 0 150 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...(ariaHidden
        ? { "aria-hidden": true }
        : { role: "img" as const, "aria-label": "OAB monogram" })}
    >
      <g stroke={color} strokeLinecap="butt" strokeLinejoin="miter" fill="none">
        {MONOGRAM_PATHS[variant].map((path, index) => (
          <path key={index} d={path.d} strokeWidth={path.width} />
        ))}
      </g>
    </svg>
  );
}
