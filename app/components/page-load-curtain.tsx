"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Monogram from "./monogram";

const STORAGE_KEY = "mono-curtain-played";
const HOLD_MS = 2400; // monogram drawing (~2s) + brief hold
const FADE_MS = 600;

type Phase = "idle" | "showing" | "done";

/**
 * First-visit-only page-load curtain. Renders the OAB monogram
 * full-screen drawing in over ~2 seconds, then fades out. Subsequent
 * navigations skip via sessionStorage. Respects prefers-reduced-motion.
 *
 * Children are always rendered (SSR-safe); the curtain simply covers
 * them with z-100 for the first ~3 seconds.
 */
export default function PageLoadCurtain({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  // Always start "idle" on the server. The curtain decision is taken
  // on the client inside the effect below — avoids hydration mismatch.
  const [phase, setPhase] = useState<Phase>("idle");

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
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    const timer = window.setTimeout(() => setPhase("done"), HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [reduce]);

  return (
    <>
      {children}
      <AnimatePresence>
        {phase === "showing" ? (
          <motion.div
            key="curtain"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: FADE_MS / 1000, ease: "easeOut" },
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-base"
            aria-hidden="true"
          >
            <Monogram size={280} animate />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
