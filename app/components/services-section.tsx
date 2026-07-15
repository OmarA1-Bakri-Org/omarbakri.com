"use client";

import React from "react";
import { motion } from "framer-motion";

const offers = [
  {
    name: "AI Opportunity Audit",
    duration: "1 week",
    price: "from £1,500",
    description:
      "A ranked AI opportunity map, delivery risks, target architecture, and a practical 90-day action plan.",
  },
  {
    name: "Agent Prototype Sprint",
    duration: "2 weeks",
    price: "from £4,500",
    description:
      "A working agent workflow around one high-value use case, with evaluation criteria and a production path.",
  },
  {
    name: "RAG & Evaluation Hardening",
    duration: "1–2 weeks",
    price: "from £3,000",
    description:
      "Retrieval, grounding, failure analysis, and evaluation improvements for an existing AI product.",
  },
  {
    name: "FinTech GTM Automation",
    duration: "2 weeks",
    price: "from £3,500",
    description:
      "A targeted commercial workflow for payments or FinTech teams, designed around safe human review points.",
  },
  {
    name: "Fractional Applied AI Lead",
    duration: "monthly",
    price: "from £5,000/month",
    description:
      "Hands-on technical leadership for teams moving from AI ideas to an evidence-led delivery programme.",
  },
  {
    name: "Payments AI Advisory",
    duration: "advisory",
    price: "from £1,250/day",
    description:
      "Applied AI and product advice grounded in enterprise payments, banking, and commercial delivery.",
  },
] as const;

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 lg:py-40">
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
            <span className="text-muted">03 /</span> Work with me
          </p>
          <div className="grid lg:grid-cols-12 gap-10 mb-16">
            <h2
              className="lg:col-span-7 font-light tracking-[-0.02em] text-primary"
              style={{ fontSize: "var(--text-3xl)" }}
            >
              Hire for the role. Or start with a focused outcome.
            </h2>
            <div className="lg:col-span-5 space-y-4 text-secondary leading-relaxed">
              <p>
                Open to senior applied AI, agent engineering, forward-deployed,
                architecture, and FinTech AI roles—plus fixed-scope and
                fractional engagements.
              </p>
              <p className="text-primary">
                Available immediately · remote-first · UK work authorised
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-edge">
            {offers.map((offer) => (
              <article key={offer.name} className="bg-base p-8 lg:p-10 flex flex-col">
                <div className="flex justify-between gap-4 text-muted uppercase tracking-[0.05em] mb-6" style={{ fontSize: "var(--text-xs)" }}>
                  <span>{offer.duration}</span>
                  <span className="text-accent">{offer.price}</span>
                </div>
                <h3 className="text-primary font-normal mb-4" style={{ fontSize: "var(--text-lg)" }}>
                  {offer.name}
                </h3>
                <p className="text-muted leading-relaxed mb-8 flex-1" style={{ fontSize: "var(--text-sm)" }}>
                  {offer.description}
                </p>
                <a
                  href={`mailto:oab@omarbakri.com?subject=${encodeURIComponent(`Discuss ${offer.name}`)}`}
                  className="text-accent hover:text-accent-hover transition-colors"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  Discuss this offer <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
