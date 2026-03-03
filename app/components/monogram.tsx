"use client";
import { motion, useReducedMotion } from "framer-motion";

interface MonogramProps {
  size?: number;
  className?: string;
  animate?: boolean;
  "aria-hidden"?: boolean;
}

export default function Monogram({
  size = 120,
  className = "",
  animate = true,
  "aria-hidden": ariaHidden,
}: MonogramProps) {
  const prefersReducedMotion = useReducedMotion();
  const color = "#C4A265";
  const height = size;
  const width = Math.round(size * 0.75);

  if (animate && !prefersReducedMotion) {
    return (
      <motion.svg
        width={width}
        height={height}
        viewBox="0 0 150 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...(ariaHidden ? { "aria-hidden": true } : { role: "img", "aria-label": "AB monogram" })}
      >
        {/* Oval border — draws in */}
        <motion.ellipse
          cx="75"
          cy="100"
          rx="64"
          ry="90"
          stroke={color}
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 1.8, ease: "easeInOut" },
            opacity: { duration: 0.01 },
          }}
        />

        {/* Letter A — fades in */}
        <motion.text
          x="75"
          y="88"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="78"
          fontWeight="400"
          fill={color}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          A
        </motion.text>

        {/* Horizontal divider — draws across */}
        <motion.line
          x1="38"
          y1="102"
          x2="112"
          y2="102"
          stroke={color}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />

        {/* Letter B — fades in */}
        <motion.text
          x="75"
          y="170"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="78"
          fontWeight="400"
          fill={color}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          B
        </motion.text>
      </motion.svg>
    );
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 150 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...(ariaHidden ? { "aria-hidden": true } : { role: "img", "aria-label": "AB monogram" })}
    >
      <ellipse
        cx="75"
        cy="100"
        rx="64"
        ry="90"
        stroke={color}
        strokeWidth="3"
        fill="none"
      />
      <text
        x="75"
        y="88"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="78"
        fontWeight="400"
        fill={color}
      >
        A
      </text>
      <line
        x1="38"
        y1="102"
        x2="112"
        y2="102"
        stroke={color}
        strokeWidth="2"
      />
      <text
        x="75"
        y="170"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="78"
        fontWeight="400"
        fill={color}
      >
        B
      </text>
    </svg>
  );
}
