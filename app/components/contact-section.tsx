"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const resetTimerRef = useRef<number | null>(null);
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/database/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      if (!isMountedRef.current) return;

      setIsSubmitting(false);
      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
      resetTimerRef.current = window.setTimeout(() => {
        if (isMountedRef.current) {
          setSubmitStatus("idle");
        }
      }, 4000);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 bg-base border border-edge text-primary placeholder-muted focus:border-accent focus:outline-none transition-colors duration-200";

  return (
    <section id="contact" className="py-32 lg:py-40">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left: info */}
            <div className="lg:col-span-5">
              {/* Section label */}
              <p
                className="text-accent font-medium uppercase tracking-[0.05em] mb-6"
                style={{ fontSize: "var(--text-xs)" }}
              >
                <span className="text-muted">06 /</span> Contact
              </p>

              <h2
                className="font-light tracking-[-0.02em] text-primary mb-6"
                style={{ fontSize: "var(--text-3xl)" }}
              >
                Let&apos;s talk
              </h2>

              <p
                className="text-secondary leading-[1.7] mb-10"
                style={{ fontSize: "var(--text-base)" }}
              >
                Building in AI, FinTech, or enterprise SaaS? Looking for
                someone who can take a product from architecture to market?
                Get in touch.
              </p>

              <div className="space-y-6">
                <a
                  href="https://linkedin.com/in/omaralbakri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-secondary hover:text-accent transition-colors duration-200"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  <Icon icon="mdi:linkedin" className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="mailto:oab@omarbakri.com"
                  className="flex items-center gap-3 text-secondary hover:text-accent transition-colors duration-200"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  <Icon icon="ic:baseline-email" className="w-5 h-5" />
                  <span>oab@omarbakri.com</span>
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-muted uppercase tracking-[0.05em] mb-2"
                      style={{ fontSize: "var(--text-xs)" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={inputClasses}
                      style={{ fontSize: "var(--text-sm)" }}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-muted uppercase tracking-[0.05em] mb-2"
                      style={{ fontSize: "var(--text-xs)" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={inputClasses}
                      style={{ fontSize: "var(--text-sm)" }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-muted uppercase tracking-[0.05em] mb-2"
                    style={{ fontSize: "var(--text-xs)" }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={inputClasses}
                    style={{ fontSize: "var(--text-sm)" }}
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-muted uppercase tracking-[0.05em] mb-2"
                    style={{ fontSize: "var(--text-xs)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`${inputClasses} resize-none`}
                    style={{ fontSize: "var(--text-sm)" }}
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-accent text-base font-medium hover:bg-accent-hover transition-colors duration-200 disabled:opacity-50"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <p className="text-success" style={{ fontSize: "var(--text-sm)" }}>
                    Message sent successfully.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-error" style={{ fontSize: "var(--text-sm)" }}>
                    Failed to send. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
