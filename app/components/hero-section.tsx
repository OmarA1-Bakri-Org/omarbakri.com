"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { scrollToSection } from "@/lib/scroll-utils";

const TunnelBackground = dynamic(
  () => import("@/components/ui/tunnel-background"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Tunnel WebGL background — gates on prefers-reduced-motion internally */}
      <TunnelBackground />

      {/* Content overlay */}
      <div className="relative z-10 max-w-container mx-auto w-full text-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="font-display font-extralight tracking-[-0.03em] mb-6"
          style={{ fontSize: "var(--text-hero)" }}
        >
          Omar Al-Bakri
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          className="text-secondary font-light tracking-wide mb-6"
          style={{ fontSize: "var(--text-xl)" }}
        >
          Applied AI Product Builder{" "}
          <span className="text-muted">·</span>{" "}
          <span className="text-accent">Agentic Systems</span>{" "}
          <span className="text-muted">·</span>{" "}
          Commercial Leadership
        </motion.p>

        {/* The story */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
          className="text-muted max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: "var(--text-base)" }}
        >
          Fifteen years selling banks payments rails. At forty-three, I
          started writing code instead. Three production AI platforms
          later &mdash; this is the work.
        </motion.p>

        {/* Location strip */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
          className="text-muted uppercase tracking-[0.15em] mt-10"
          style={{ fontSize: "var(--text-xs)" }}
        >
          London <span className="text-accent">·</span> Southeast Asia
        </motion.p>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          onClick={() => scrollToSection("#about")}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted hover:text-secondary transition-colors duration-200"
          aria-label="Scroll to about section"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="block"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 8l5 5 5-5" />
            </svg>
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}
