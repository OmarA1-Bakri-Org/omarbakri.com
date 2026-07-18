"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import dynamic from "next/dynamic";
import { useIntroComplete } from "./page-load-curtain";

const TunnelBackground = dynamic(
  () => import("@/components/ui/tunnel-background"),
  { ssr: false }
);

const ease = [0.22, 1, 0.36, 1] as const;

const heroGroup: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.06,
      staggerChildren: 0.12,
    },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease },
  },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.62, ease },
  },
};

export default function HeroSection() {
  const introComplete = useIntroComplete();

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <TunnelBackground />

      <motion.div
        variants={heroGroup}
        initial="hidden"
        animate={introComplete ? "visible" : "hidden"}
        className="relative z-10 max-w-container mx-auto min-h-screen px-4 sm:px-6 lg:px-8 py-24 grid grid-rows-[1fr_auto] text-center md:text-left"
      >
        <motion.h1
          variants={rise}
          className="font-display font-extralight tracking-[-0.03em] self-start"
          style={{ fontSize: "var(--text-hero)", lineHeight: "0.95" }}
        >
          <span className="block">Omar</span>
          <span className="block">Al-Bakri</span>
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-end pb-10 md:pb-0">
          <motion.p
            variants={fade}
            className="text-muted tracking-[0.04em]"
            style={{ fontSize: "var(--text-sm)" }}
          >
            Bangkok-based <span className="text-accent">·</span> open to remote roles,
            consulting and contracting globally
          </motion.p>

          <div className="md:col-start-2 md:col-span-2 md:text-right space-y-5">
            <motion.p
              variants={rise}
              className="text-primary font-light md:ml-auto md:max-w-2xl"
              style={{ fontSize: "var(--text-xl)", lineHeight: "1.35" }}
            >
              I spent fifteen years explaining technology. Then I learned to
              build it.
            </motion.p>

            <motion.p
              variants={rise}
              className="text-muted leading-relaxed md:ml-auto md:max-w-2xl"
              style={{ fontSize: "var(--text-base)" }}
            >
              Applied AI engineer building agent systems and full-stack products
              for financial services. Python and TypeScript, grounded in enterprise
              payments.
            </motion.p>

            <motion.div
              variants={rise}
              className="flex flex-col sm:flex-row gap-3 md:justify-end pt-2"
            >
              <a
                href="#contact"
                className="px-6 py-3 bg-accent text-base font-medium hover:bg-accent-hover transition-colors text-center"
              >
                Discuss a role
              </a>
              <a
                href="#work-together"
                className="px-6 py-3 border border-edge text-primary hover:border-accent transition-colors text-center"
              >
                Discuss a project
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
