"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const TunnelBackground = dynamic(
  () => import("@/components/ui/tunnel-background"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <TunnelBackground />

      <div className="relative z-10 max-w-container mx-auto min-h-screen px-4 sm:px-6 lg:px-8 py-24 grid grid-rows-[1fr_auto] text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="font-display font-extralight tracking-[-0.03em] self-start"
          style={{ fontSize: "var(--text-hero)", lineHeight: "0.95" }}
        >
          <span className="block">Omar</span>
          <span className="block">Al-Bakri</span>
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-end pb-10 md:pb-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            className="text-muted tracking-[0.04em]"
            style={{ fontSize: "var(--text-sm)" }}
          >
            Bangkok-based <span className="text-accent">·</span> open to remote roles,
            consulting and contracting globally
          </motion.p>

          <div className="md:col-start-2 md:col-span-2 md:text-right space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
              className="text-primary font-light md:ml-auto md:max-w-2xl"
              style={{ fontSize: "var(--text-xl)", lineHeight: "1.35" }}
            >
              Applied AI engineer building production AI products for complex,
              regulated markets.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="text-muted leading-relaxed md:ml-auto md:max-w-2xl"
              style={{ fontSize: "var(--text-base)" }}
            >
              I combine hands-on Python and TypeScript engineering with fifteen
              years in enterprise payments, so I can understand the buyer, shape
              the product and ship the system.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
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
      </div>
    </section>
  );
}
