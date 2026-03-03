"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const resetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const response = await fetch("/api/database/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Failed to subscribe");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    } finally {
      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
      resetTimerRef.current = window.setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="newsletter" className="py-32 lg:py-40 bg-subtle">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left: content */}
            <div className="lg:col-span-7">
              {/* Section label */}
              <p
                className="text-accent font-medium uppercase tracking-[0.05em] mb-6"
                style={{ fontSize: "var(--text-xs)" }}
              >
                Newsletter
              </p>

              <h2
                className="font-light tracking-[-0.02em] text-primary mb-6"
                style={{ fontSize: "var(--text-3xl)" }}
              >
                Intelligent Rails
              </h2>

              <p
                className="text-secondary leading-[1.7] mb-8 max-w-lg"
                style={{ fontSize: "var(--text-base)" }}
              >
                My newsletter exploring the intersection of AI, FinTech, and
                business strategy. Practical insights for leaders navigating
                technology-driven change.
              </p>

              {/* Subscribe form */}
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 bg-base border border-edge text-primary placeholder-muted focus:border-accent focus:outline-none transition-colors duration-200"
                  style={{ fontSize: "var(--text-sm)" }}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-6 py-3 bg-accent text-base font-medium hover:bg-accent-hover transition-colors duration-200 disabled:opacity-50 whitespace-nowrap"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              {status === "success" && (
                <p className="text-success mt-3" style={{ fontSize: "var(--text-sm)" }}>
                  Subscribed successfully.
                </p>
              )}
              {status === "error" && (
                <p className="text-error mt-3" style={{ fontSize: "var(--text-sm)" }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </div>

            {/* Right: articles / links */}
            <div className="lg:col-span-5 lg:pt-16">
              <p
                className="text-muted uppercase tracking-[0.05em] mb-6"
                style={{ fontSize: "var(--text-xs)" }}
              >
                Recent Writing
              </p>

              <div className="space-y-6">
                <a
                  href="https://linkedin.com/in/omaralbakri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-l border-edge pl-6 hover:border-accent transition-colors duration-200"
                >
                  <p
                    className="text-primary group-hover:text-accent transition-colors duration-200 mb-1"
                    style={{ fontSize: "var(--text-sm)" }}
                  >
                    Articles on LinkedIn
                  </p>
                  <p className="text-muted" style={{ fontSize: "var(--text-xs)" }}>
                    Thoughts on AI, FinTech, and the future of payments
                  </p>
                </a>

                <div className="border-l border-edge pl-6">
                  <div className="flex items-center gap-2 text-secondary">
                    <Icon icon="mdi:linkedin" className="w-4 h-4 text-accent" />
                    <a
                      href="https://linkedin.com/in/omaralbakri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors duration-200"
                      style={{ fontSize: "var(--text-sm)" }}
                    >
                      Follow on LinkedIn for updates
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
