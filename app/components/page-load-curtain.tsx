"use client";
import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Monogram from "./monogram";

const STORAGE_KEY = "mono-curtain-played";

// Phase timings — total ~4 seconds on first visit
const DRAW_MS = 2600;   // ligature draws (O outline → A → crossbar → B spine → B bowls)
const SETTLE_MS = 600;  // dwell at full size before transitioning
const EXIT_MS = 900;    // morph to navbar position + backdrop fade

// Final landing height for the morph: matches navbar Monogram size={36}.
const NAVBAR_SIZE = 36;
// Maximum monogram height at centre-stage; capped to avoid overflow on
// short viewports. Computed at mount time from viewport dimensions.
const MAX_HERO_SIZE = 480;

type Phase = "idle" | "showing" | "settled" | "exiting" | "done";

function computeHeroSize() {
  if (typeof window === "undefined") return MAX_HERO_SIZE;
  // Monogram width = size * 0.75; size === height. Cap on both dimensions.
  const byHeight = window.innerHeight * 0.6;
  const byWidth = (window.innerWidth * 0.6) / 0.75;
  return Math.max(160, Math.min(byHeight, byWidth, MAX_HERO_SIZE));
}

/**
 * First-visit-only entry sequence. The OAB ligature draws large at
 * centre, settles for ~600ms at full opacity, then morphs (scale +
 * position) to navbar position while the backdrop fades — feels like
 * the mark "landing" in its permanent spot.
 *
 * Skip on Esc or click anywhere on the curtain. sessionStorage gate
 * suppresses the curtain on subsequent visits in the same session.
 * Skipped entirely under prefers-reduced-motion.
 *
 * No useEffect cleanup on the timer chain — in React 18 StrictMode
 * dev mode the cleanup would cancel timers between the synthetic
 * unmount/remount, leaving the curtain stuck. The setPhase calls and
 * sessionStorage write are idempotent.
 */
export default function PageLoadCurtain({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [heroSize, setHeroSize] = useState<number>(MAX_HERO_SIZE);

  const skipToExit = useCallback(() => {
    setPhase((prev) =>
      prev === "showing" || prev === "settled" ? "exiting" : prev
    );
  }, []);

  // Compute hero monogram size based on viewport. Refresh on resize so
  // mid-curtain rotation/zoom doesn't leave the mark off-screen.
  useEffect(() => {
    if (typeof window === "undefined") return;
    setHeroSize(computeHeroSize());
    const onResize = () => setHeroSize(computeHeroSize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (reduce) {
      setPhase("done");
      return;
    }
    if (window.sessionStorage.getItem(STORAGE_KEY) === "1") {
      setPhase("done");
      return;
    }

    setPhase("showing");

    window.setTimeout(
      () => setPhase((p) => (p === "showing" ? "settled" : p)),
      DRAW_MS
    );
    window.setTimeout(
      () => setPhase((p) => (p === "settled" || p === "showing" ? "exiting" : p)),
      DRAW_MS + SETTLE_MS
    );
    window.setTimeout(() => {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      setPhase("done");
    }, DRAW_MS + SETTLE_MS + EXIT_MS);
  }, [reduce]);

  // Skip on Escape — only meaningful while curtain is interactive
  useEffect(() => {
    if (phase !== "showing" && phase !== "settled") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") skipToExit();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, skipToExit]);

  const visible =
    phase === "showing" || phase === "settled" || phase === "exiting";

  // Final landing scale: navbar mark / hero mark
  const exitScale = NAVBAR_SIZE / heroSize;

  // Centred state: place the monogram's centre at viewport centre.
  // Half-dimensions in px (monogram width = heroSize * 0.75).
  const heroHalfW = (heroSize * 0.75) / 2;
  const heroHalfH = heroSize / 2;

  // Exit state: navbar-mark position. The navbar's container has
  // px-4 (16px) on mobile, sm:px-6 (24px), lg:px-8 (32px). Use 32px
  // as the most common breakpoint; on smaller viewports the visual
  // mismatch is a few pixels — invisible during the morph.
  const navbarLeft = 32;
  const navbarTop = 14;

  return (
    <>
      {children}
      <AnimatePresence>
        {visible ? (
          <motion.div
            key="curtain"
            className="fixed inset-0 z-[100] bg-base cursor-pointer"
            aria-hidden="true"
            role="presentation"
            onClick={skipToExit}
            initial={{ opacity: 1 }}
            animate={{ opacity: phase === "exiting" ? 0 : 1 }}
            transition={{
              duration: EXIT_MS / 1000,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.div
              className="fixed text-accent"
              style={{ transformOrigin: "top left" }}
              initial={{
                top: "50%",
                left: "50%",
                x: -heroHalfW,
                y: -heroHalfH,
                scale: 1,
              }}
              animate={
                phase === "exiting"
                  ? {
                      top: navbarTop,
                      left: navbarLeft,
                      x: 0,
                      y: 0,
                      scale: exitScale,
                    }
                  : {
                      top: "50%",
                      left: "50%",
                      x: -heroHalfW,
                      y: -heroHalfH,
                      scale: 1,
                    }
              }
              transition={{
                duration: EXIT_MS / 1000,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Monogram size={heroSize} animate={phase === "showing"} />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
