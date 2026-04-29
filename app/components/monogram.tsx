"use client";
import React from "react";

interface MonogramProps {
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
}

const PATHS = {
  oOutline:
    "M75 15C107 15 126 52 126 100C126 148 107 185 75 185C43 185 24 148 24 100C24 52 43 15 75 15Z",
  aStroke:
    "M47 104C49 103 51 103 53 103L75 39L97 103C99 103 101 103 103 104",
  abCrossbar: "M55 94C66 92 84 92 96 94",
  bSpine: "M75 94L75 162",
  bBowls: "M75 96C105 96 111 122 77 127C113 130 111 160 75 160",
} as const;

function MonogramPaths({ stroke }: { stroke: string }) {
  return (
    <g
      stroke={stroke}
      strokeWidth={3}
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
  );
}

export default function Monogram({
  size = 120,
  className = "",
  "aria-hidden": ariaHidden,
}: MonogramProps) {
  const idPrefix = React.useId().replace(/:/g, "");
  const gradientId = `${idPrefix}-metal`;
  const width = Math.round(size * 0.75);
  const height = size;
  const a11y = ariaHidden
    ? { "aria-hidden": true }
    : { role: "img" as const, "aria-label": "OAB monogram" };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 150 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...a11y}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="126"
          y1="185"
          x2="24"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#6B542D" />
          <stop offset="22%" stopColor="#B7893F" />
          <stop offset="43%" stopColor="#FFF1BE" />
          <stop offset="55%" stopColor="#F7D47D" />
          <stop offset="70%" stopColor="#8C672F" />
          <stop offset="100%" stopColor="#DCC078" />
        </linearGradient>
      </defs>
      <MonogramPaths stroke={`url(#${gradientId})`} />
    </svg>
  );
}
