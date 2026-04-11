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
            About
          </p>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Main content */}
            <div className="lg:col-span-7 space-y-8">
              <h2
                className="font-light tracking-[-0.02em] text-primary"
                style={{ fontSize: "var(--text-3xl)" }}
              >
                Enterprise domain knowledge meets hands-on engineering.
              </h2>

              <div
                className="space-y-6 text-secondary leading-[1.7]"
                style={{ fontSize: "var(--text-base)" }}
              >
                <p>
                  I spent 15 years in enterprise FinTech — BNP Paribas,
                  Bank of America Merrill Lynch, Convera, Banking Circle,
                  RTGS.global. I led sales into Tier 1 banks, closed
                  seven-figure contracts, and developed a deep understanding
                  of what enterprise technology needs to do versus what it
                  actually does.
                </p>
                <p>
                  That gap between promise and delivery is what pushed me
                  into engineering. I taught myself Python, TypeScript, React,
                  FastAPI, Neo4j, and LangGraph by building production
                  systems — not coursework, not prototypes.
                </p>
                <p>
                  The result is three full-stack platforms shipped solo:
                  a compliance automation engine backed by 1,884 tests,
                  an autonomous sales system with a multi-agent framework,
                  and a thread orchestration runtime with typed dependency
                  graphs.
                </p>
                <p>
                  I bring both sides of the table. The engineering to build
                  production AI systems. The commercial instinct to know
                  which problems are worth solving.
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
                  Enterprise Sales
                </p>
                <p className="text-primary font-light" style={{ fontSize: "var(--text-lg)" }}>
                  15 years &middot; Tier 1 banks &middot; 7-figure contracts
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
                  Engineering
                </p>
                <p className="text-primary font-light" style={{ fontSize: "var(--text-lg)" }}>
                  Full-stack &middot; AI/ML &middot; Multi-agent systems
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
                  Shipped
                </p>
                <p className="text-primary font-light" style={{ fontSize: "var(--text-lg)" }}>
                  3 production platforms &middot; Solo builds
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
