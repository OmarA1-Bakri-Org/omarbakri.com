"use client";

import React from "react";
import { MotionConfig } from "framer-motion";
import {
  getMotionPreference,
  type MotionPreference,
} from "@/lib/motion-preference";

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [preference, setPreference] = React.useState<MotionPreference>("full");

  React.useEffect(() => {
    const syncPreference = () => setPreference(getMotionPreference());
    syncPreference();
    window.addEventListener("popstate", syncPreference);
    return () => window.removeEventListener("popstate", syncPreference);
  }, []);

  const reducedMotion =
    preference === "reduce"
      ? "always"
      : preference === "system"
        ? "user"
        : "never";

  return <MotionConfig reducedMotion={reducedMotion}>{children}</MotionConfig>;
}
