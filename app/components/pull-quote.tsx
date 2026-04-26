"use client";
import React from "react";
import { motion } from "framer-motion";

interface PullQuoteProps {
  children: React.ReactNode;
}

/**
 * Editorial pull-quote — full-bleed row, Fraunces display face, hairline
 * rules above and below, single fade-up reveal on scroll. Lifts a sentence
 * from body copy and gives it the typographic weight it earns.
 */
export default function PullQuote({ children }: PullQuoteProps) {
  return (
    <section
      aria-hidden="false"
      className="border-y border-edge"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="font-display font-extralight tracking-[-0.02em] text-primary leading-[1.15] max-w-4xl"
          style={{ fontSize: "var(--text-4xl)" }}
        >
          {children}
        </motion.blockquote>
      </div>
    </section>
  );
}
