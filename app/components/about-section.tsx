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
                Three years ago, at forty-three, I started learning Python.
              </h2>

              <div
                className="space-y-6 text-secondary leading-[1.7]"
                style={{ fontSize: "var(--text-base)" }}
              >
                <p>
                  By then I&rsquo;d spent fifteen years on the commercial
                  side of enterprise FinTech &mdash; BNP Paribas, Bank of
                  America Merrill Lynch, Convera, Banking Circle,
                  RTGS.global. Tier 1 banks, seven-figure deals, a career
                  built deliberately. The kind of seat that does not get
                  vacated lightly.
                </p>
                <p>
                  I left because the work that interested me had moved.
                  I&rsquo;d spent fifteen years selling the gap between
                  what enterprise software promises and what it actually
                  does, and I had grown sceptical of fixing that from the
                  buyer side of the table. Late 2023 I sat down to find
                  out whether I could write the code instead.
                </p>
                <p>
                  Three platforms followed.{" "}
                  <span className="text-primary">ruleIQ</span> &mdash;
                  agentic regulatory compliance on a GraphRAG knowledge
                  layer.{" "}
                  <span className="text-primary">Helios</span> &mdash;
                  autonomous B2B sales, deployed in production at
                  RTGS.global with a 25% lift in lead conversion.{" "}
                  <span className="text-primary">thredOS</span> &mdash;
                  a multi-agent workflow runtime, in final testing ahead
                  of commercial launch. Built solo, end to end, with
                  around 3,000 automated tests behind them.
                </p>
                <p>
                  The fifteen years weren&rsquo;t wasted. They taught me
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
                  Tier 1 banks &middot; Seven-figure deals
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
