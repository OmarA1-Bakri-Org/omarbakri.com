"use client";

import React from "react";
import { MotionConfig } from "framer-motion";

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [forceFullMotion, setForceFullMotion] = React.useState(false);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setForceFullMotion(params.get("motion") === "full");
  }, []);

  return (
    <MotionConfig reducedMotion={forceFullMotion ? "never" : "user"}>
      {children}
    </MotionConfig>
  );
}
