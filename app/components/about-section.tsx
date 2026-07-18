"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function AboutSection() {
  return (
    <section id="introduction" className="py-32 lg:py-40">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p
            className="text-accent font-medium uppercase tracking-[0.05em] mb-6"
            style={{ fontSize: "var(--text-xs)" }}
          >
            <span className="text-muted">01 /</span> Introduction
          </p>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-8">
              <h2
                className="font-display font-light tracking-[-0.02em] text-primary"
                style={{ fontSize: "var(--text-3xl)" }}
              >
                From enterprise payments to production AI.
              </h2>

              <div
                className="space-y-6 text-secondary leading-[1.7]"
                style={{ fontSize: "var(--text-base)" }}
              >
                <p>
                  Before I wrote code, I worked across Tier 1 banks, payments
                  infrastructure and complex enterprise buying groups. That taught
                  me how decisions are made, where projects stall and which problems
                  carry real commercial weight.
                </p>
                <p>
                  I learned Python and TypeScript in my forties by building real
                  products. The work now spans creator intelligence, compliance,
                  sales automation and multi-agent operations.
                </p>
                <p>
                  I carry the same problem from commercial case to architecture,
                  implementation and evaluation. The buyer&apos;s problem stays visible
                  all the way through.
                </p>
              </div>

              <blockquote className="border-l border-accent pl-6 py-2">
                <p
                  className="font-display font-light text-primary"
                  style={{ fontSize: "var(--text-xl)", lineHeight: "1.45" }}
                >
                  The buyer&apos;s problem should survive every technical decision.
                </p>
              </blockquote>

              <a
                href="https://linkedin.com/in/omaralbakri"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors duration-200"
                style={{ fontSize: "var(--text-sm)" }}
              >
                <Icon icon="mdi:linkedin" className="w-4 h-4" aria-hidden="true" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>

            <aside className="lg:col-span-4 space-y-8 lg:pt-16">
              <div className="border-l border-edge pl-6">
                <p className="text-muted uppercase tracking-[0.05em] mb-2" style={{ fontSize: "var(--text-xs)" }}>
                  Engineering
                </p>
                <p className="text-primary font-light" style={{ fontSize: "var(--text-lg)" }}>
                  Full-stack products · Agent systems · Production delivery
                </p>
                <p className="text-secondary" style={{ fontSize: "var(--text-sm)" }}>
                  Python · TypeScript · React · FastAPI · PostgreSQL · LangGraph
                </p>
              </div>

              <div className="border-l border-edge pl-6">
                <p className="text-muted uppercase tracking-[0.05em] mb-2" style={{ fontSize: "var(--text-xs)" }}>
                  Commercial grounding
                </p>
                <p className="text-primary font-light" style={{ fontSize: "var(--text-lg)" }}>
                  Enterprise payments · Tier 1 banks · Complex buying groups
                </p>
                <p className="text-secondary" style={{ fontSize: "var(--text-sm)" }}>
                  BNP Paribas · Bank of America Merrill Lynch · Convera · Banking Circle · RTGS.global
                </p>
              </div>
            </aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
