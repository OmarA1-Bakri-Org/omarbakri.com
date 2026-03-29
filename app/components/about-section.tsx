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
                I write Python, TypeScript, and React. I also present to boards and close enterprise deals.
              </h2>

              <div
                className="space-y-6 text-secondary leading-[1.7]"
                style={{ fontSize: "var(--text-base)" }}
              >
                <p>
                  I shipped three production AI platforms in under a year.
                  ruleIQ automates UK compliance with GraphRAG and LangGraph
                  agents. Helios runs autonomous B2B sales prospecting with
                  a multi-agent framework. ThreadOS orchestrates engineering
                  workloads across typed thread hierarchies. All built solo —
                  FastAPI, Neo4j, Next.js, Electron, PostgreSQL, the full stack.
                </p>
                <p>
                  Before that, fifteen years in enterprise financial services —
                  BNP Paribas, Bank of America ML, Convera, Banking Circle,
                  RTGS.global. I know how to sell complex infrastructure to
                  boards and close seven-figure deals. The combination of
                  building production AI systems and running enterprise sales
                  pipelines is rare. I understand both sides of the table.
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

            {/* Sidebar stats */}
            <div className="lg:col-span-5 space-y-8 lg:pt-16">
              <div className="border-l border-edge pl-6">
                <p
                  className="text-muted uppercase tracking-[0.05em] mb-2"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  Current Role
                </p>
                <p className="text-primary font-light" style={{ fontSize: "var(--text-lg)" }}>
                  Independent — AI Product Builder
                </p>
                <p className="text-accent" style={{ fontSize: "var(--text-sm)" }}>
                  Building ruleIQ, Helios, ThreadOS
                </p>
              </div>

              <div className="border-l border-edge pl-6">
                <p
                  className="text-muted uppercase tracking-[0.05em] mb-2"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  Focus Areas
                </p>
                <p
                  className="text-secondary leading-relaxed"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  Agentic AI &middot; Full-Stack Engineering &middot; Enterprise Sales &middot; FinTech Infrastructure
                </p>
              </div>

              <div className="border-l border-edge pl-6">
                <p
                  className="text-muted uppercase tracking-[0.05em] mb-2"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  Background
                </p>
                <p
                  className="text-secondary leading-relaxed"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  BNP Paribas &middot; Bank of America Merrill Lynch &middot;
                  Convera &middot; Banking Circle &middot; FiduciaNex|Ai
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
