"use client";
import React, { useState, useEffect, memo } from "react";
import { Icon } from "@iconify/react";
import Monogram from "./monogram";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#newsletter", label: "Newsletter" },
  { href: "#contact", label: "Contact" },
] as const;

const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-200 ease-out ${
        scrolled
          ? "bg-base/95 backdrop-blur-sm border-b border-edge"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 min-h-[44px] min-w-[44px] justify-center"
            aria-label="Scroll to top"
          >
            <Monogram size={36} animate={false} aria-hidden />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => scrollToSection(href)}
                className="text-secondary hover:text-primary transition-colors duration-200 text-sm tracking-wide min-h-[44px] flex items-center"
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden p-2 text-secondary hover:text-primary transition-colors duration-200"
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

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-elevated border-t border-edge"
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => scrollToSection(href)}
                className="block w-full text-left px-4 py-3 text-secondary hover:text-primary transition-colors duration-200 text-sm tracking-wide"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
});

export default Navbar;
