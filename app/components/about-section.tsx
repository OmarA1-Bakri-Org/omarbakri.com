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
            <span className="text-muted">01 /</span> About
          </p>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Main content */}
            <div className="lg:col-span-7 space-y-8">
              <h2
                className="font-display font-light tracking-[-0.02em] text-primary"
                style={{ fontSize: "var(--text-3xl)" }}
              >
                I moved from buying and selling enterprise technology to building it.
              </h2>

              <div
                className="space-y-6 text-secondary leading-[1.7]"
                style={{ fontSize: "var(--text-base)" }}
              >
                <p>
                  My work now sits where applied AI engineering, product
                  judgement, and complex commercial delivery meet.
                </p>
                <p>
                  Experience across BNP Paribas, Bank of America Merrill
                  Lynch, Convera, Banking Circle, and RTGS.global gave me a
                  practical view of payments, enterprise buying, and the gap
                  between a product promise and a product that earns trust.
                </p>
                <p>
                  I chose to close that gap directly. Today I build applied
                  AI systems across Python and TypeScript, from orchestration
                  and retrieval to APIs, data, evaluation, and user-facing
                  product delivery.
                </p>
                <p>
                  Four platforms followed.{" "}
                  <a
                    href="https://call-score.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-accent transition-colors duration-200"
                  >
                    CallScore
                  </a>{" "}
                  &mdash; a crypto creator-intelligence platform that scores
                  market calls against real price data.{" "}
                  <span className="text-primary">ruleIQ</span> &mdash;
                  agentic regulatory compliance on a GraphRAG knowledge layer.{" "}
                  <span className="text-primary">Helios</span> &mdash;
                  an AI-assisted commercial workflow platform.{" "}
                  <span className="text-primary">thredOS</span> &mdash;
                  a multi-agent workflow runtime for long-horizon AI work.
                  Built end to end, with automated tests, data pipelines, and
                  commercial workflows behind them.
                </p>
                <p>
                  The commercial years taught me
                  which problems matter, which buyers will pay for what,
                  and what enterprise software has to do before anyone
                  trusts it with their data. This isn&rsquo;t a pivot.
                  It&rsquo;s both halves of a job that should have been
                  one job all along.
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
                  The fifteen years
                </p>
                <p className="text-primary font-light" style={{ fontSize: "var(--text-lg)" }}>
                  Enterprise payments &middot; Complex buying groups
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
                  Four applied AI systems
                </p>
                <p className="text-accent" style={{ fontSize: "var(--text-sm)" }}>
                  CallScore &middot; ruleIQ &middot; Helios &middot; thredOS
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
