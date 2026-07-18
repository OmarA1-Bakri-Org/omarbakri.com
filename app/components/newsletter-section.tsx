"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import publications, { formatPublicationDate } from "@/app/data/publications";

const recentPublications = publications.slice(0, 3);

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

  const handleSubscribe = async (event: React.FormEvent) => {
    event.preventDefault();
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
            <div className="lg:col-span-5">
              <p
                className="text-accent font-medium uppercase tracking-[0.05em] mb-6"
                style={{ fontSize: "var(--text-xs)" }}
              >
                <span className="text-muted">06 /</span> Newsletter
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
                Analysis of payments, financial infrastructure and applied AI through the balance sheet, operating model and incentives underneath them.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  href="/newsletter"
                  className="inline-flex px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-base transition-colors"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  Read Intelligent Rails
                </Link>
                <a
                  href="/rss.xml"
                  className="inline-flex px-6 py-3 border border-edge text-secondary hover:border-accent hover:text-primary transition-colors"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  RSS feed
                </a>
              </div>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                  {status === "loading" ? "Joining..." : "Join the list"}
                </button>
              </form>

              {status === "success" && (
                <p className="text-success mt-3" style={{ fontSize: "var(--text-sm)" }}>
                  You are on the list.
                </p>
              )}
              {status === "error" && (
                <p className="text-error mt-3" style={{ fontSize: "var(--text-sm)" }}>
                  Subscription failed. Try again.
                </p>
              )}
            </div>

            <div className="lg:col-span-7">
              <div className="flex items-center justify-between gap-5 mb-6">
                <p className="text-muted uppercase tracking-[0.05em]" style={{ fontSize: "var(--text-xs)" }}>
                  Publications
                </p>
                <Link href="/newsletter" className="text-accent hover:text-accent-hover transition-colors" style={{ fontSize: "var(--text-sm)" }}>
                  View all <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="border-t border-edge">
                {recentPublications.map((publication) => {
                  const content = (
                    <>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-muted uppercase tracking-[0.05em] mb-3" style={{ fontSize: "var(--text-xs)" }}>
                        <span>{publication.source}</span>
                        <span aria-hidden="true">·</span>
                        <time dateTime={publication.publishedAt}>{formatPublicationDate(publication.publishedAt)}</time>
                      </div>
                      <h3 className="text-primary group-hover:text-accent transition-colors mb-2" style={{ fontSize: "var(--text-lg)" }}>
                        {publication.title}
                      </h3>
                      <p className="text-muted leading-relaxed" style={{ fontSize: "var(--text-sm)" }}>
                        {publication.excerpt}
                      </p>
                    </>
                  );

                  const className = "group block py-6 border-b border-edge";

                  return publication.external ? (
                    <a key={publication.href} href={publication.href} target="_blank" rel="noopener noreferrer" className={className}>
                      {content}
                    </a>
                  ) : (
                    <Link key={publication.href} href={publication.href} className={className}>
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
