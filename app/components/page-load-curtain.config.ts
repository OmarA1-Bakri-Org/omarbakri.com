import type React from "react";

const REVEAL_MS_BASE = 550;
const HOLD_MS_BASE = 450;
const FADE_MS_BASE = 500;

export const MAX_HERO_SIZE = 540;
export const CHECKING_HERO_SIZE = 360;

function getSlowdown(): number {
  if (process.env.NODE_ENV === "production") return 1;
  if (typeof window === "undefined") return 1;
  const value = parseFloat(
    new URLSearchParams(window.location.search).get("slow") || "1"
  );
  return Number.isFinite(value) && value > 0 ? value : 1;
}

const SLOW = getSlowdown();
export const REVEAL_MS = REVEAL_MS_BASE * SLOW;
export const HOLD_MS = HOLD_MS_BASE * SLOW;
export const FADE_MS = FADE_MS_BASE * SLOW;
export const FAIL_SAFE_MS = REVEAL_MS + HOLD_MS + FADE_MS + 300;

export const CURTAIN_STYLE: React.CSSProperties = {
  willChange: "opacity",
  background:
    "radial-gradient(ellipse at 50% 48%, rgba(247, 217, 149, 0.08), rgba(5, 5, 5, 0) 32rem), var(--color-bg)",
};

export type Phase = "checking" | "revealing" | "holding" | "fading" | "done";

export function computeHeroSize(): number {
  if (typeof window === "undefined") return MAX_HERO_SIZE;
  const byHeight = window.innerHeight * 0.55;
  const byWidth = (window.innerWidth * 0.45) / 0.75;
  return Math.max(180, Math.min(byHeight, byWidth, MAX_HERO_SIZE));
}

export function isFullMotionOverride(): boolean {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).get("motion") === "full";
}

export function isDebugBypass(): boolean {
  if (process.env.NODE_ENV === "production") return false;
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).has("forceCurtain");
}

export function shouldSkipCurtain(
  reduceMotion: boolean,
  debugBypass: boolean,
  fullMotionOverride = false
): boolean {
  if (debugBypass || fullMotionOverride) return false;
  return reduceMotion;
}
