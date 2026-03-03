"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import HeroSection from "@/app/components/hero-section";
import AboutSection from "@/app/components/about-section";
import ExperienceSection from "@/app/components/experience-section";
import ExpertiseSection from "@/app/components/expertise-section";
import NewsletterSection from "@/app/components/newsletter-section";
import ContactSection from "@/app/components/contact-section";
import Footer from "@/app/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-base text-primary overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-base"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ExpertiseSection />
        <NewsletterSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
