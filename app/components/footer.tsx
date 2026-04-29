"use client";
import React, { memo } from "react";
import { Icon } from "@iconify/react";
import Monogram from "./monogram";
import { scrollToSection } from "@/lib/scroll-utils";
import { navLinks } from "@/lib/nav-links";

const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-edge" role="contentinfo">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left: monogram + tagline */}
          <div>
            <Monogram size={56} className="mb-4" />
            <p
              className="text-muted max-w-xs"
              style={{ fontSize: "var(--text-sm)" }}
            >
              Applied AI &middot; Agentic Systems &middot; FinTech
            </p>
          </div>

          {/* Center: nav links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map(({ href, label }) => (
                <button
                  key={href}
                  onClick={() => scrollToSection(href)}
                  className="text-muted hover:text-secondary transition-colors duration-200"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  {label}
                </button>
            ))}
          </div>

          {/* Right: social */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/omaralbakri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Icon icon="mdi:linkedin" className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="mailto:oab@omarbakri.com"
              className="text-muted hover:text-accent transition-colors duration-200"
              aria-label="Email"
            >
              <Icon icon="ic:baseline-email" className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-edge">
          <p className="text-muted" style={{ fontSize: "var(--text-xs)" }}>
            &copy; {currentYear} Omar Al-Bakri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
