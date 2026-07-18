"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

const routes = [
  {
    eyebrow: "Join the team",
    title: "Remote roles",
    summary:
      "Senior or lead roles with end-to-end ownership of an applied AI product or workstream.",
    ownership: [
      "Own an applied AI product from the first problem statement to production",
      "Build agent, retrieval and evaluation systems that can be tested and operated",
      "Turn commercial, operational and regulatory constraints into technical decisions",
    ],
    cta: "Discuss a role",
    href: "mailto:oab@omarbakri.com?subject=Discuss%20a%20remote%20AI%20role",
  },
  {
    eyebrow: "Deliver an outcome",
    title: "Consulting and contracting",
    summary:
      "Defined AI products, agent workflows and production integrations with a clear delivery surface.",
    ownership: [
      "Design and build an AI product, agent workflow or production integration",
      "Find and fix weak retrieval, evaluation, observability and failure handling",
      "Take hands-on technical ownership of a defined product or transformation problem",
    ],
    cta: "Discuss an engagement",
    href: "mailto:oab@omarbakri.com?subject=Discuss%20an%20AI%20consulting%20or%20contracting%20engagement",
  },
] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WorkTogetherSection() {
  return (
    <section id="work-together" className="py-32 lg:py-40 bg-subtle">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p
            className="text-accent font-medium uppercase tracking-[0.05em] mb-6"
            style={{ fontSize: "var(--text-xs)" }}
          >
            <span className="text-muted">05 /</span> Work together
          </p>

          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <h2
              className="lg:col-span-8 font-light tracking-[-0.02em] text-primary"
              style={{ fontSize: "var(--text-3xl)" }}
            >
              Where I fit.
            </h2>
            <div className="lg:col-span-4 space-y-4 text-secondary leading-relaxed">
              <p>
                I work best where product judgement, architecture, code,
                evaluation and stakeholder delivery sit close together.
              </p>
              <p className="text-primary">
                Bangkok-based · open to remote roles, consulting and contracting globally
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-px bg-edge"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
        >
          {routes.map((route) => (
            <motion.article
              key={route.title}
              variants={card}
              className="bg-base p-8 lg:p-12 flex flex-col"
            >
              <p
                className="text-accent uppercase tracking-[0.05em] mb-4"
                style={{ fontSize: "var(--text-xs)" }}
              >
                {route.eyebrow}
              </p>
              <h3
                className="text-primary font-normal mb-5"
                style={{ fontSize: "var(--text-xl)" }}
              >
                {route.title}
              </h3>
              <p
                className="text-secondary leading-[1.7] mb-8"
                style={{ fontSize: "var(--text-base)" }}
              >
                {route.summary}
              </p>

              <p
                className="text-muted uppercase tracking-[0.05em] mb-4"
                style={{ fontSize: "var(--text-xs)" }}
              >
                What I can own
              </p>
              <ul className="space-y-3 mb-10 flex-1">
                {route.ownership.map((item) => (
                  <li
                    key={item}
                    className="text-secondary flex items-start gap-3 leading-relaxed"
                    style={{ fontSize: "var(--text-sm)" }}
                  >
                    <span className="mt-2 block w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={route.href}
                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
                style={{ fontSize: "var(--text-sm)" }}
              >
                {route.cta} <span aria-hidden="true">→</span>
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
          className="mt-px bg-base border-t border-edge p-8 lg:p-10 grid lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-8">
            <h3
              className="text-primary font-normal mb-3"
              style={{ fontSize: "var(--text-lg)" }}
            >
              A useful first message
            </h3>
            <p className="text-secondary leading-relaxed">
              Send the role or problem, the current state, the main constraint
              and the desired outcome. I will tell you whether I fit and what I
              would do next.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a
              href="#contact"
              className="inline-flex px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-base transition-colors"
            >
              Send the brief
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
