"use client";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Monogram from "./monogram";

const STORAGE_KEY = "mono-curtain-played";

// Phase timings — total ~4.1s on first visit.
const REVEAL_MS_BASE = 1100; // mark fades in (opacity + scale)
const HOLD_MS_BASE = 2000;   // mark sits at full presence
const FADE_MS_BASE = 1000;   // backdrop + mark fade together (slow exhale)

const MAX_HERO_SIZE = 540;
const CHECKING_HERO_SIZE = 360;

// Dev-only `?slow=N` slowdown factor for visual QA. Constant-folded out
// in production builds.
function getSlowdown() {
  if (process.env.NODE_ENV === "production") return 1;
  if (typeof window === "undefined") return 1;
  const v = parseFloat(new URLSearchParams(window.location.search).get("slow") || "1");
  return Number.isFinite(v) && v > 0 ? v : 1;
}

const SLOW = getSlowdown();
const REVEAL_MS = REVEAL_MS_BASE * SLOW;
const HOLD_MS = HOLD_MS_BASE * SLOW;
const FADE_MS = FADE_MS_BASE * SLOW;

const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

const CURTAIN_STYLE: React.CSSProperties = {
  willChange: "opacity",
  background:
    "radial-gradient(ellipse at 50% 48%, rgba(247, 217, 149, 0.08), rgba(5, 5, 5, 0) 32rem), var(--color-bg)",
};

type Phase = "checking" | "revealing" | "holding" | "fading" | "done";

function computeHeroSize(): number {
  if (typeof window === "undefined") return MAX_HERO_SIZE;
  const byHeight = window.innerHeight * 0.55;
  const byWidth = (window.innerWidth * 0.45) / 0.75;
  return Math.max(180, Math.min(byHeight, byWidth, MAX_HERO_SIZE));
}

/**
 * First-visit-only entry sequence. The OAB ligature reveals quietly at
 * centre — scaling up from a slight 0.94 with opacity fade — holds for
 * a beat, then fades out together with the dark backdrop. No drawing,
 * no morph. Restraint over decoration.
 *
 * Skip on Esc or click. sessionStorage gate suppresses on subsequent
 * visits in the same session. Skipped entirely under prefers-reduced-motion.
 */
export default function PageLoadCurtain({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("checking");
  const [heroSize, setHeroSize] = useState<number>(CHECKING_HERO_SIZE);
  const [mounted, setMounted] = useState(false);
  const [sizeReady, setSizeReady] = useState(false);
  const startedRef = useRef(false);
  const timersRef = useRef<number[]>([]);

  const skipToFade = useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    setPhase((prev) =>
      prev === "revealing" || prev === "holding" ? "fading" : prev
    );
    const doneTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      setPhase("done");
    }, FADE_MS);
    timersRef.current = [doneTimer];
  }, []);

  useIsoLayoutEffect(() => {
    if (typeof window === "undefined") return;
    setHeroSize(computeHeroSize());
    setMounted(true);
    setSizeReady(true);
    const onResize = () => setHeroSize(computeHeroSize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!sizeReady) return;
    const debugBypass =
      process.env.NODE_ENV !== "production" &&
      new URLSearchParams(window.location.search).has("forceCurtain");
    if (reduce && !debugBypass) {
      setPhase("done");
      return;
    }
    if (
      !debugBypass &&
      window.sessionStorage.getItem(STORAGE_KEY) === "1"
    ) {
      setPhase("done");
      return;
    }
    if (startedRef.current) return;

    startedRef.current = true;
    setPhase("revealing");

    const holdTimer = window.setTimeout(
      () => setPhase((p) => (p === "revealing" ? "holding" : p)),
      REVEAL_MS
    );
    const fadeTimer = window.setTimeout(
      () => setPhase((p) => (p === "holding" || p === "revealing" ? "fading" : p)),
      REVEAL_MS + HOLD_MS
    );
    const doneTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      setPhase("done");
    }, REVEAL_MS + HOLD_MS + FADE_MS);

    timersRef.current = [holdTimer, fadeTimer, doneTimer];

    return () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
      timersRef.current = [];
      startedRef.current = false;
    };
  }, [reduce, sizeReady]);

  // Skip on Escape — only meaningful while curtain is interactive
  useEffect(() => {
    if (phase !== "revealing" && phase !== "holding") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") skipToFade();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, skipToFade]);

  // DEV-ONLY: expose phase on window for visual diagnostics. Stripped
  // from production bundle by NODE_ENV constant fold.
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;
    if (typeof window === "undefined") return;
    (window as unknown as Record<string, unknown>).__curtain = {
      phase,
      heroSize,
      t: Math.round(performance.now()),
    };
  }, [phase, heroSize]);

  const visible = phase !== "done";
  const fading = phase === "fading";
  const showMark = phase === "revealing" || phase === "holding" || phase === "fading";

  if (visible && !mounted) {
    return (
      <>
        {children}
        <div
          className="fixed inset-0 z-[100] overflow-hidden"
          style={CURTAIN_STYLE}
          aria-hidden="true"
          role="presentation"
        />
      </>
    );
  }

  return (
    <>
      {children}
      <AnimatePresence>
        {visible ? (
          <motion.div
            key="curtain"
            className="fixed inset-0 z-[100] overflow-hidden flex items-center justify-center"
            style={CURTAIN_STYLE}
            aria-hidden="true"
            role="presentation"
            onClick={skipToFade}
            initial={{ opacity: 1 }}
            animate={{ opacity: fading ? 0 : 1 }}
            transition={{
              duration: FADE_MS / 1000,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {showMark && (
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
                    duration: fading ? FADE_MS / 1000 : REVEAL_MS / 1000,
                    ease: fading
                      ? [0.4, 0, 0.6, 1]
                      : [0.22, 1, 0.36, 1],
                  },
                  scale: {
                    duration: fading ? FADE_MS / 1000 : REVEAL_MS / 1000,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
              >
                <Monogram size={heroSize} aria-hidden />
              </motion.div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
