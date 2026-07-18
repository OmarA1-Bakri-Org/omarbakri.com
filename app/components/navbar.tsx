"use client";

import React, { memo, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Monogram from "./monogram";
import { navLinks } from "@/lib/nav-links";

const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-200 ease-out ${
        scrolled
          ? "bg-base/95 backdrop-blur-sm border-b border-edge"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            data-monogram-target
            href="#home"
            className="flex items-center gap-3 min-h-[44px] min-w-[44px] justify-center"
            aria-label="Omar Al-Bakri — home"
          >
            <Monogram size={36} aria-hidden />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-secondary hover:text-primary transition-colors duration-200 text-sm tracking-wide min-h-[44px] flex items-center"
              >
                {label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="md:hidden p-2 min-h-[44px] min-w-[44px] text-secondary hover:text-primary transition-colors duration-200"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <Icon
              icon={isOpen ? "mdi:close" : "mdi:menu"}
              className="w-6 h-6"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`md:hidden overflow-hidden bg-elevated border-t border-edge transition-[max-height,opacity] duration-200 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
              className="block w-full px-4 py-3 text-secondary hover:text-primary transition-colors duration-200 text-sm tracking-wide"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
