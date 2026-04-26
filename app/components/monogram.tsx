"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MonogramProps {
  size?: number;
  className?: string;
  animate?: boolean;
  "aria-hidden"?: boolean;
}

// Path data is shared between the animated and static variants. Mirrors the
// dedicated MonogramLigature component but lives here so the animation can
// hook directly into framer-motion's pathLength interpolation.
const PATHS = {
  oOutline:
    "M75 15C107 15 126 52 126 100C126 148 107 185 75 185C43 185 24 148 24 100C24 52 43 15 75 15Z",
  aStroke:
    "M47 104C49 103 51 103 53 103L75 39L97 103C99 103 101 103 103 104",
  abCrossbar: "M55 94C66 92 84 92 96 94",
  bSpine: "M75 94L75 162",
  bBowls: "M75 96C105 96 111 122 77 127C113 130 111 160 75 160",
};

// Sequential draw timings — each path completes before the next visually
// dominates, keeping the trace legible. Total ~2.6s.
const ANIM = {
  oOutline:   { duration: 1.5, delay: 0.0 },
  aStroke:    { duration: 1.2, delay: 0.8 },
  abCrossbar: { duration: 0.6, delay: 1.2 },
  bSpine:     { duration: 0.8, delay: 1.4 },
  bBowls:     { duration: 1.0, delay: 1.6 },
} as const;

const STROKE_PROPS = {
  stroke: "currentColor" as const,
  strokeWidth: 3,
  fill: "none" as const,
};

export default function Monogram({
  size = 120,
  className = "",
  animate = true,
  "aria-hidden": ariaHidden,
}: MonogramProps) {
  const prefersReducedMotion = useReducedMotion();
  const width = Math.round(size * 0.75);
  const height = size;

  const a11y = ariaHidden
    ? { "aria-hidden": true }
    : { role: "img" as const, "aria-label": "OAB monogram" };

  // Static render — no draw animation. Used in reduced-motion mode and
  // when the consumer passes animate={false} (e.g. navbar/footer marks).
  if (!animate || prefersReducedMotion) {
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
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d={PATHS.oOutline} {...STROKE_PROPS} />
          <path d={PATHS.aStroke} {...STROKE_PROPS} />
          <path d={PATHS.abCrossbar} {...STROKE_PROPS} />
          <path d={PATHS.bSpine} {...STROKE_PROPS} />
          <path d={PATHS.bBowls} {...STROKE_PROPS} />
        </g>
      </svg>
    );
  }

  // Animated render — each path draws via pathLength: 0 → 1, staggered.
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 150 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...a11y}
    >
      <g strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          d={PATHS.oOutline}
          {...STROKE_PROPS}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...ANIM.oOutline, ease: "easeInOut" }}
        />
        <motion.path
          d={PATHS.aStroke}
          {...STROKE_PROPS}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...ANIM.aStroke, ease: "easeInOut" }}
        />
        <motion.path
          d={PATHS.abCrossbar}
          {...STROKE_PROPS}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...ANIM.abCrossbar, ease: "easeInOut" }}
        />
        <motion.path
          d={PATHS.bSpine}
          {...STROKE_PROPS}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...ANIM.bSpine, ease: "easeInOut" }}
        />
        <motion.path
          d={PATHS.bBowls}
          {...STROKE_PROPS}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...ANIM.bBowls, ease: "easeInOut" }}
        />
      </g>
    </motion.svg>
  );
}
