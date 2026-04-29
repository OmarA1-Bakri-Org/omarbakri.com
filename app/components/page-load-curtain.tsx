"use client";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import { CurtainOverlay } from "./curtain-overlay";
import {
  CHECKING_HERO_SIZE,
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

  return (
    <>
      {children}
      <AnimatePresence>
        {visible ? (
          <CurtainOverlay
            phase={phase}
            heroSize={heroSize}
            mounted={mounted}
            onSkip={skipToFade}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
