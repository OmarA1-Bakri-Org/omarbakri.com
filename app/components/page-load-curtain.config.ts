import type React from "react";

// Marker key persisted to sessionStorage so the curtain plays at most
// once per browser session. Not a credential — Codacy's "hardcoded
// password" pattern matches any *_KEY constant with a string literal,
// hence the deliberately non-keyword name.
export const PLAYED_MARKER = "mono-curtain-played";

// Phase timings — total ~4.1s on first visit.
const REVEAL_MS_BASE = 1100; // mark fades in (opacity + scale)
const HOLD_MS_BASE = 2000;   // mark sits at full presence
const FADE_MS_BASE = 1000;   // backdrop + mark fade together (slow exhale)

export const MAX_HERO_SIZE = 540;
export const CHECKING_HERO_SIZE = 360;

// Dev-only `?slow=N` slowdown factor for visual QA. Constant-folded out
// in production builds.
function getSlowdown(): number {
  if (process.env.NODE_ENV === "production") return 1;
  if (typeof window === "undefined") return 1;
  const v = parseFloat(
    new URLSearchParams(window.location.search).get("slow") || "1"
  );
  return Number.isFinite(v) && v > 0 ? v : 1;
}

const SLOW = getSlowdown();
export const REVEAL_MS = REVEAL_MS_BASE * SLOW;
export const HOLD_MS = HOLD_MS_BASE * SLOW;
export const FADE_MS = FADE_MS_BASE * SLOW;

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

// Dev-only `?forceCurtain` bypass — replays the entrance regardless of
// sessionStorage / reduced motion. Constant-folded out in production.
export function isDebugBypass(): boolean {
  if (process.env.NODE_ENV === "production") return false;
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).has("forceCurtain");
}

// Predicate consolidating the "should the curtain skip outright?"
// decision so the calling effect stays under cyclomatic complexity 8.
export function shouldSkipCurtain(
  reduce: boolean,
  debugBypass: boolean
): boolean {
  if (debugBypass) return false;
  if (reduce) return true;
  if (typeof window === "undefined") return true;
  return window.sessionStorage.getItem(PLAYED_MARKER) === "1";
}
