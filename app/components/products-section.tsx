"use client";
import React from "react";
import { motion } from "framer-motion";
import products from "@/app/data/products";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProductsSection() {
  return (
    <section id="products" className="py-32 lg:py-40 bg-subtle">
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
            The Proof
          </p>

          <h2
            className="font-light tracking-[-0.02em] text-primary mb-6"
            style={{ fontSize: "var(--text-3xl)" }}
          >
            What I built to get here
          </h2>

          <p
            className="text-secondary max-w-2xl mb-20 leading-relaxed"
            style={{ fontSize: "var(--text-base)" }}
          >
            I didn&apos;t take a course. I built three production systems from
            scratch to prove I could. The engineering speaks for itself.
          </p>
        </motion.div>

        <motion.div
          className="space-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((product, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className="grid lg:grid-cols-12 gap-8 py-12 border-t border-edge"
            >
              {/* Left: name + tagline + status */}
              <div className="lg:col-span-4">
                <h3
                  className="text-accent font-normal mb-2"
                  style={{ fontSize: "var(--text-xl)" }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-primary font-light mb-3"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {product.tagline}
                </p>
                <span
                  className="inline-block px-2 py-0.5 text-success border border-success/30 uppercase tracking-[0.05em]"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  {product.status}
                </span>
              </div>

              {/* Right: description + stack + highlights */}
              <div className="lg:col-span-8">
                <p
                  className="text-secondary leading-[1.7] mb-6"
                  style={{ fontSize: "var(--text-base)" }}
                >
                  {product.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-base border border-edge text-muted"
                      style={{ fontSize: "var(--text-xs)" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {product.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-secondary flex items-start gap-3"
                      style={{ fontSize: "var(--text-sm)" }}
                    >
                      <span className="mt-1.5 flex-shrink-0 block w-1 h-1 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
