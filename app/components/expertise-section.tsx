"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const areas = [
  {
    title: "Agentic AI Systems",
    description:
      "LangGraph-style orchestration, RAG pipelines, evaluation loops, policy controls, and evidence-led agent workflows.",
    icon: "mdi:robot-outline",
  },
  {
    title: "Full-Stack Engineering",
    description:
      "Python (FastAPI), TypeScript (Next.js, Bun), React, Electron. PostgreSQL, Neo4j, Redis. Complete ownership from database schema to deployment pipeline.",
    icon: "mdi:code-braces",
  },
  {
    title: "Knowledge Graphs & GraphRAG",
    description:
      "Graph modelling for regulatory and business relationships, persistent agent context, and retrieval that resolves connections rather than keywords alone.",
    icon: "mdi:graph-outline",
  },
  {
    title: "Enterprise Sales Leadership",
    description:
      "Enterprise commercial experience across banking, payments, and FinTech, with a practical understanding of complex buying groups and delivery constraints.",
    icon: "mdi:handshake-outline",
  },
  {
    title: "FinTech & Payments",
    description:
      "Real-time settlement, ISO 20022, correspondent banking, and cross-border payments experience applied to product engineering.",
    icon: "mdi:earth",
  },
  {
    title: "Product Strategy",
    description:
      "The ability to identify which problems are worth solving, scope them into buildable products, and execute end-to-end. Technical depth paired with commercial judgement.",
    icon: "mdi:trending-up",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ExpertiseSection() {
  return (
    <section id="capabilities" className="py-32 lg:py-40">
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
            <span className="text-muted">04 /</span> Capabilities
          </p>

          <h2
            className="font-light tracking-[-0.02em] text-primary mb-6"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            Engineering depth. Commercial instinct.
          </h2>

          <p
            className="text-secondary max-w-2xl mb-20 leading-relaxed"
            style={{ fontSize: "var(--text-base)" }}
          >
            A rare combination of hands-on AI engineering and enterprise
            sales leadership, applied across FinTech, compliance, and
            autonomous systems.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-edge"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-base p-8 lg:p-10 group"
            >
              <Icon
                icon={area.icon}
                className="w-6 h-6 text-accent mb-6"
                aria-hidden="true"
              />

              <h3
                className="text-primary font-normal mb-3"
                style={{ fontSize: "var(--text-lg)" }}
              >
                {area.title}
              </h3>

              <p
                className="text-muted leading-relaxed"
                style={{ fontSize: "var(--text-sm)" }}
              >
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
