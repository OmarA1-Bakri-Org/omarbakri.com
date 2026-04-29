"use client";
import React from "react";
import { motion } from "framer-motion";
import Monogram from "./monogram";
import {
  CURTAIN_STYLE,
  FADE_MS,
  Phase,
  REVEAL_MS,
} from "./page-load-curtain.config";

interface CurtainOverlayProps {
  phase: Phase;
  heroSize: number;
  mounted: boolean;
  onSkip: () => void;
}

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;
const FADE_EASE_MARK = [0.4, 0, 0.6, 1] as const;
const FADE_EASE_BACKDROP = [0.25, 0.46, 0.45, 0.94] as const;

/**
 * Pure visual layer for the page-load curtain. The parent owns phase
 * transitions; this component just renders what each phase looks like.
 *
 * Pre-mount: render an opaque dark plate so first paint doesn't flash
 * the page underneath. Post-mount: framer-motion handles the reveal
 * and fade with phase-aware transition props.
 */
export function CurtainOverlay({
  phase,
  heroSize,
  mounted,
  onSkip,
}: CurtainOverlayProps): React.ReactElement {
  const fading = phase === "fading";
  const showMark =
    phase === "revealing" || phase === "holding" || phase === "fading";

  if (!mounted) {
    return (
      <div
        className="fixed inset-0 z-[100] overflow-hidden"
        style={CURTAIN_STYLE}
        aria-hidden="true"
        role="presentation"
      />
    );
  }

  const markDurationS = (fading ? FADE_MS : REVEAL_MS) / 1000;

  return (
    <motion.div
      key="curtain"
      className="fixed inset-0 z-[100] overflow-hidden flex items-center justify-center"
      style={CURTAIN_STYLE}
      aria-hidden="true"
      role="presentation"
      onClick={onSkip}
      initial={{ opacity: 1 }}
      animate={{ opacity: fading ? 0 : 1 }}
      transition={{
        duration: FADE_MS / 1000,
        ease: FADE_EASE_BACKDROP,
      }}
    >
      {showMark ? (
        <motion.div
          key="mark"
          className="text-accent"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{
            opacity: fading ? 0 : 1,
            scale: fading ? 1.02 : 1,
          }}
          transition={{
            opacity: {
              duration: markDurationS,
              ease: fading ? FADE_EASE_MARK : REVEAL_EASE,
            },
            scale: {
              duration: markDurationS,
              ease: REVEAL_EASE,
            },
          }}
        >
          <Monogram size={heroSize} aria-hidden />
        </motion.div>
      ) : null}
    </motion.div>
  );
}
