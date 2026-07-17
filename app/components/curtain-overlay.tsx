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

const REVEAL_EASE = [0.45, 0, 0.55, 1] as const;
const FADE_EASE = [0.4, 0, 0.2, 1] as const;

export function CurtainOverlay({
  phase,
  heroSize,
  mounted,
  onSkip,
}: CurtainOverlayProps): React.ReactElement | null {
  if (!mounted) return null;

  const fading = phase === "fading";
  const showMark =
    phase === "revealing" || phase === "holding" || phase === "fading";
  const markDuration = (fading ? FADE_MS : REVEAL_MS) / 1000;

  return (
    <motion.div
      key="curtain"
      className="fixed inset-0 z-[100] overflow-hidden flex items-center justify-center"
      style={CURTAIN_STYLE}
      onClick={onSkip}
      initial={{ opacity: 1 }}
      animate={{ opacity: fading ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: FADE_MS / 1000, ease: FADE_EASE }}
      aria-label="OAB introduction"
    >
      <button
        type="button"
        onClick={onSkip}
        className="absolute right-5 top-5 z-10 px-3 py-2 text-muted hover:text-primary border border-edge hover:border-accent transition-colors"
        style={{ fontSize: "var(--text-xs)" }}
      >
        Skip intro
      </button>

      {showMark ? (
        <motion.div
          className="text-accent"
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: fading ? 0 : 1, scale: fading ? 1.01 : 1 }}
          transition={{ duration: markDuration, ease: REVEAL_EASE }}
          aria-hidden="true"
        >
          <Monogram size={heroSize} aria-hidden />
        </motion.div>
      ) : null}
    </motion.div>
  );
}
