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
import {
  CHECKING_HERO_SIZE,
  CURTAIN_STYLE,
  FADE_MS,
  HOLD_MS,
  Phase,
  PLAYED_MARKER,
  REVEAL_MS,
  computeHeroSize,
  isDebugBypass,
  shouldSkipCurtain,
} from "./page-load-curtain.config";

const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * First-visit-only entry sequence. The OAB ligature reveals quietly at
 * centre — fading in with a slight scale-up — holds for a beat, then
 * fades out together with the dark backdrop. No drawing, no morph.
 * Restraint over decoration.
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
      window.sessionStorage.setItem(PLAYED_MARKER, "1");
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
    if (!sizeReady) return;
    if (shouldSkipCurtain(Boolean(reduce), isDebugBypass())) {
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
      () =>
        setPhase((p) =>
          p === "holding" || p === "revealing" ? "fading" : p
        ),
      REVEAL_MS + HOLD_MS
    );
    const doneTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(PLAYED_MARKER, "1");
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
  const showMark =
    phase === "revealing" || phase === "holding" || phase === "fading";

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
                    ease: fading ? [0.4, 0, 0.6, 1] : [0.22, 1, 0.36, 1],
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
