"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const areas = [
  {
    title: "Agentic AI Systems",
    description:
      "LangGraph multi-agent orchestration, RAG pipelines with self-critique, PPALE intelligence loops, trust gradient architectures. Not prototypes — production systems with thousands of tests.",
    icon: "mdi:robot-outline",
  },
  {
    title: "Full-Stack Engineering",
    description:
      "Python (FastAPI), TypeScript (Next.js, Bun), React, Electron. PostgreSQL, Neo4j, Redis. From API design to desktop apps to graph databases — I build the entire stack.",
    icon: "mdi:code-braces",
  },
  {
    title: "Knowledge Graphs & GraphRAG",
    description:
      "Neo4j with 20+ node types mapping regulatory relationships. Graphiti for persistent agent memory. Graph-powered retrieval that understands connections, not just keywords.",
    icon: "mdi:graph-outline",
  },
  {
    title: "Enterprise Sales Leadership",
    description:
      "15 years closing seven-figure deals at BNP Paribas, Bank of America ML, Convera, and Banking Circle. MEDDIC-qualified, board-level engagement, data-driven pipeline management.",
    icon: "mdi:handshake-outline",
  },
  {
    title: "FinTech Infrastructure",
    description:
      "Real-time settlement, ISO20022, correspondent banking, cross-border payments. Deep domain knowledge across the payments value chain from rails to revenue.",
    icon: "mdi:earth",
  },
  {
    title: "Product & Commercial Strategy",
    description:
      "I build products that solve problems I understand from the sales side. That feedback loop — builder who sells, seller who builds — is how you ship things people actually buy.",
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
    <section id="expertise" className="py-32 lg:py-40">
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
            Expertise
          </p>

          <h2
            className="font-light tracking-[-0.02em] text-primary mb-6"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            What I bring
          </h2>

          <p
            className="text-secondary max-w-2xl mb-20 leading-relaxed"
            style={{ fontSize: "var(--text-base)" }}
          >
            The technical depth to build production AI systems. The commercial
            instinct to know what&apos;s worth building.
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
