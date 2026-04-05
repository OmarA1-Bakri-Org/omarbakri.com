"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 lg:py-40">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Section label */}
          <p
            className="text-accent font-medium uppercase tracking-[0.05em] mb-6"
            style={{ fontSize: "var(--text-xs)" }}
          >
            The Story
          </p>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Main content */}
            <div className="lg:col-span-7 space-y-8">
              <h2
                className="font-light tracking-[-0.02em] text-primary"
                style={{ fontSize: "var(--text-3xl)" }}
              >
                I got tired of selling things I knew I could build better.
              </h2>

              <div
                className="space-y-6 text-secondary leading-[1.7]"
                style={{ fontSize: "var(--text-base)" }}
              >
                <p>
                  For fifteen years I sat across the table from CTOs and board
                  members at the world&apos;s largest banks — BNP Paribas, Bank of
                  America Merrill Lynch, Convera, Banking Circle, RTGS.global.
                  I closed seven-figure deals. I understood what the technology
                  was supposed to do. And increasingly, I understood where it
                  was failing.
                </p>
                <p>
                  At 40 I made a decision that looked reckless to everyone
                  around me. I started learning to code. Not a bootcamp.
                  Not a weekend course. I taught myself Python, TypeScript,
                  React, FastAPI, Neo4j, LangGraph — the hard way, by building
                  things that broke and rebuilding them until they didn&apos;t.
                </p>
                <p>
                  Three years later I&apos;d shipped three production platforms
                  solo. A compliance automation engine with 1,884 tests. An
                  autonomous sales system with a multi-agent framework. A
                  thread orchestration runtime with typed dependency graphs.
                  Not prototypes. Not tutorials. Real systems with real
                  architecture.
                </p>
                <p>
                  The fifteen years weren&apos;t wasted. They&apos;re the reason I
                  build things that solve real problems instead of interesting
                  ones. I know what enterprise buyers actually need because
                  I&apos;ve spent my career listening to them say it.
                </p>
              </div>

              {/* LinkedIn link */}
              <a
                href="https://linkedin.com/in/omaralbakri"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-200"
                style={{ fontSize: "var(--text-sm)" }}
              >
                <Icon icon="mdi:linkedin" className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-8 lg:pt-16">
              <div className="border-l border-edge pl-6">
                <p
                  className="text-muted uppercase tracking-[0.05em] mb-2"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  The Sales Career
                </p>
                <p className="text-primary font-light" style={{ fontSize: "var(--text-lg)" }}>
                  15 years in enterprise FinTech
                </p>
                <p className="text-secondary" style={{ fontSize: "var(--text-sm)" }}>
                  BNP Paribas &middot; Bank of America ML &middot; Convera &middot; Banking Circle &middot; RTGS.global
                </p>
              </div>

              <div className="border-l border-edge pl-6">
                <p
                  className="text-muted uppercase tracking-[0.05em] mb-2"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  The Pivot
                </p>
                <p className="text-primary font-light" style={{ fontSize: "var(--text-lg)" }}>
                  3 years learning to build
                </p>
                <p className="text-secondary" style={{ fontSize: "var(--text-sm)" }}>
                  Python &middot; TypeScript &middot; React &middot; FastAPI &middot; Neo4j &middot; LangGraph
                </p>
              </div>

              <div className="border-l border-edge pl-6">
                <p
                  className="text-muted uppercase tracking-[0.05em] mb-2"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  The Proof
                </p>
                <p className="text-primary font-light" style={{ fontSize: "var(--text-lg)" }}>
                  3 production platforms, shipped solo
                </p>
                <p className="text-accent" style={{ fontSize: "var(--text-sm)" }}>
                  ruleIQ &middot; Helios &middot; ThreadOS
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
