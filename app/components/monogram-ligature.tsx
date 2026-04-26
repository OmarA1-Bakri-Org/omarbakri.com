"use client";
import React from "react";

interface MonogramLigatureProps {
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
}

export default function MonogramLigature({
  size = 120,
  className = "",
  "aria-hidden": ariaHidden,
}: MonogramLigatureProps) {
  const width = Math.round(size * 0.75);
  const height = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 150 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...(ariaHidden
        ? { "aria-hidden": true }
        : { role: "img", "aria-label": "OAB monogram" })}
    >
      <g
        id="oab-monogram"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          id="o-outline"
          d="M75 15C107 15 126 52 126 100C126 148 107 185 75 185C43 185 24 148 24 100C24 52 43 15 75 15Z"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <path
          id="a-stroke"
          d="M47 104C49 103 51 103 53 103L75 39L97 103C99 103 101 103 103 104"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <path
          id="ab-crossbar"
          d="M55 94C66 92 84 92 96 94"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <path
          id="b-spine"
          d="M75 94L75 162"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <path
          id="b-bowls"
          d="M75 96C105 96 111 122 77 127C113 130 111 160 75 160"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
      </g>
    </svg>
  );
}
