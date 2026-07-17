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
  FAIL_SAFE_MS,
  HOLD_MS,
  Phase,
  REVEAL_MS,
  computeHeroSize,
  isDebugBypass,
  shouldSkipCurtain,
} from "./page-load-curtain.config";

const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export default function PageLoadCurtain({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("checking");
  const [heroSize, setHeroSize] = useState(CHECKING_HERO_SIZE);
  const [mounted, setMounted] = useState(false);
  const startedRef = useRef(false);
  const timersRef = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  }, []);

  const finish = useCallback(() => {
    clearTimers();
    setPhase("done");
  }, [clearTimers]);

  const skipToFade = useCallback(() => {
    clearTimers();
    setPhase((current) => (current === "done" ? current : "fading"));
    timersRef.current = [window.setTimeout(finish, FADE_MS)];
  }, [clearTimers, finish]);

  useIsoLayoutEffect(() => {
    if (typeof window === "undefined") return;
    setHeroSize(computeHeroSize());
    setMounted(true);
    const handleResize = () => setHeroSize(computeHeroSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (shouldSkipCurtain(Boolean(reduceMotion), isDebugBypass())) {
      setPhase("done");
      return;
    }
    if (startedRef.current) return;

    startedRef.current = true;
    setPhase("revealing");

    const holdTimer = window.setTimeout(
      () => setPhase((current) => (current === "revealing" ? "holding" : current)),
      REVEAL_MS
    );
    const fadeTimer = window.setTimeout(
      () => setPhase((current) =>
        current === "revealing" || current === "holding" ? "fading" : current
      ),
      REVEAL_MS + HOLD_MS
    );
    const doneTimer = window.setTimeout(finish, REVEAL_MS + HOLD_MS + FADE_MS);
    const failSafeTimer = window.setTimeout(finish, FAIL_SAFE_MS);

    timersRef.current = [holdTimer, fadeTimer, doneTimer, failSafeTimer];

    return () => {
      clearTimers();
      startedRef.current = false;
    };
  }, [clearTimers, finish, mounted, reduceMotion]);

  useEffect(() => {
    if (phase === "done") return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") skipToFade();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [phase, skipToFade]);

  return (
    <>
      {children}
      <AnimatePresence>
        {phase !== "done" ? (
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
