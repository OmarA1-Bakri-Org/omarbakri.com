"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Monogram from "./monogram";

const STORAGE_KEY = "mono-curtain-played";
const HOLD_MS = 3200; // ligature draws ~2.6s + brief hold
const FADE_MS = 600;

type Phase = "idle" | "showing" | "done";

/**
 * First-visit-only page-load curtain. Renders the OAB monogram
 * full-screen drawing in over ~2 seconds, then fades out. Subsequent
 * navigations skip via sessionStorage. Respects prefers-reduced-motion.
 *
 * Children render always (SSR-safe); the curtain covers them with
 * z-100 only on the very first visit per session.
 */
export default function PageLoadCurtain({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
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

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
      setPhase("done");
    }, HOLD_MS);

    // Note: no cleanup. In React 18 StrictMode dev, the cleanup would
    // fire between the synthetic unmount/remount and cancel the only
    // scheduled timer, leaving the curtain mounted forever. The
    // sessionStorage gate above handles legitimate remounts (route
    // changes); StrictMode's double-invoke is harmless because the
    // setTimeout body is idempotent.
  }, [reduce]);

  return (
    <>
      {children}
      <AnimatePresence>
        {phase === "showing" ? (
          <motion.div
            key="curtain"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
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
