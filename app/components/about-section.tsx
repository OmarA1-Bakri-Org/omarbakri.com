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
          viewport={{ once: true, margin: "-50px" }}
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
                AI builder, with the commercial mileage to know which problems are worth shipping.
              </h2>

              <div
                className="space-y-6 text-secondary leading-[1.7]"
                style={{ fontSize: "var(--text-base)" }}
              >
                <p>
                  I spent fifteen years selling enterprise technology into
                  Tier 1 banks — BNP Paribas, Bank of America Merrill Lynch,
                  Convera, Banking Circle, RTGS.global. I watched the gap
                  between what enterprise software promises and what it
                  actually does, in close-up, repeatedly. That gap is what
                  pulled me into engineering.
                </p>
                <p>
                  Since 2023 I&rsquo;ve shipped three production AI
                  platforms solo.{" "}
                  <span className="text-primary">ruleIQ</span> &mdash;
                  a regulatory compliance platform on a GraphRAG knowledge
                  layer.{" "}
                  <span className="text-primary">Helios</span> &mdash;
                  an autonomous B2B sales engine, deployed at RTGS.global
                  with a 25% lift in lead conversion.{" "}
                  <span className="text-primary">thredOS</span> &mdash;
                  a multi-agent workflow runtime, currently in final
                  testing ahead of commercial launch.
                </p>
                <p>
                  Python, TypeScript, FastAPI, Next.js, Electron, with
                  PostgreSQL, Neo4j, and Redis behind them, and ~3,000
                  automated tests across the stack. No coursework, no
                  prototypes &mdash; production builds.
                </p>
                <p>
                  I bring both sides of the table. The engineering to ship
                  production AI, and the commercial instinct to know which
                  problems are worth solving in the first place.
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
                  Engineering
                </p>
                <p className="text-primary font-light" style={{ fontSize: "var(--text-lg)" }}>
                  Full-stack &middot; Agentic systems &middot; Solo builds
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
                  Enterprise Sales
                </p>
                <p className="text-primary font-light" style={{ fontSize: "var(--text-lg)" }}>
                  15 years &middot; Tier 1 banks &middot; Seven-figure deals
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
                  Shipped
                </p>
                <p className="text-primary font-light" style={{ fontSize: "var(--text-lg)" }}>
                  3 production platforms
                </p>
                <p className="text-accent" style={{ fontSize: "var(--text-sm)" }}>
                  ruleIQ &middot; Helios &middot; thredOS
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
