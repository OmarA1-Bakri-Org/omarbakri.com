"use client";

import React from "react";
import { motion } from "framer-motion";

const paths = [
  {
    title: "Remote roles",
    description:
      "Hands-on roles in applied AI, agent platforms, forward-deployed engineering and FinTech AI, particularly where product judgement, client fluency and code ownership need to sit with one person.",
    cta: "Discuss a role",
    href: "mailto:oab@omarbakri.com?subject=Discuss%20a%20remote%20role",
  },
  {
    title: "Consulting and contracting",
    description:
      "Fixed-scope delivery for teams with a defined AI problem: prototype-to-production builds, retrieval and evaluation hardening, agent-system architecture, or fractional technical leadership.",
    cta: "Discuss a project",
    href: "mailto:oab@omarbakri.com?subject=Discuss%20an%20AI%20project",
  },
] as const;

export default function WorkTogetherSection() {
  return (
    <section id="work-together" className="py-32 lg:py-40 bg-subtle">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p
            className="text-accent font-medium uppercase tracking-[0.05em] mb-6"
            style={{ fontSize: "var(--text-xs)" }}
          >
            <span className="text-muted">05 /</span> Work together
          </p>

          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <h2
              className="lg:col-span-7 font-light tracking-[-0.02em] text-primary"
              style={{ fontSize: "var(--text-3xl)" }}
            >
              Join a team, or solve a defined problem together.
            </h2>
            <p className="lg:col-span-5 text-secondary leading-relaxed">
              Bangkok-based · open to remote roles, consulting and contracting globally
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-edge">
            {paths.map((path) => (
              <article key={path.title} className="bg-base p-8 lg:p-12 flex flex-col">
                <h3
                  className="text-primary font-normal mb-5"
                  style={{ fontSize: "var(--text-xl)" }}
                >
                  {path.title}
                </h3>
                <p
                  className="text-secondary leading-[1.7] mb-10 flex-1"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  {path.description}
                </p>
                <a
                  href={path.href}
                  className="text-accent hover:text-accent-hover transition-colors"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {path.cta} <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
