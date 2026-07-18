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
                I learned to build the systems I had spent years buying, selling
                and explaining.
              </h2>

              <div
                className="space-y-6 text-secondary leading-[1.7]"
                style={{ fontSize: "var(--text-base)" }}
              >
                <p>
                  For fifteen years, I worked across banking, payments and
                  enterprise technology. The recurring problem was rarely the
                  pitch. It was translating a valuable idea into a product people
                  could trust.
                </p>
                <p>
                  In my forties, I traded seniority for beginner status and began
                  learning Python and TypeScript through the practical cycle of
                  building, testing, breaking and rebuilding. The work now spans
                  compliance, commercial workflows, creator intelligence and
                  multi-agent orchestration.
                </p>
                <p>
                  Today the two careers work together. The commercial experience
                  helps me choose the right problem and navigate complex
                  organisations. The engineering lets me carry that problem
                  through to working software.
                </p>
              </div>

              <blockquote className="border-l border-accent pl-6 py-2">
                <p
                  className="font-display font-light text-primary"
                  style={{ fontSize: "var(--text-xl)", lineHeight: "1.45" }}
                >
                  Commercial judgement tells me what deserves to exist.
                  Engineering lets me make it real.
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
                  Full-stack · Agent systems · Product delivery
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
                  Enterprise payments · Complex buying groups
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
