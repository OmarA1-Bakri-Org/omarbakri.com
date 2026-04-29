import React from "react";
import Navbar from "@/app/components/navbar";
import HeroSection from "@/app/components/hero-section";
import AboutSection from "@/app/components/about-section";
import ProductsSection from "@/app/components/products-section";
import ExperienceSection from "@/app/components/experience-section";
import ExpertiseSection from "@/app/components/expertise-section";
import NewsletterSection from "@/app/components/newsletter-section";
import ContactSection from "@/app/components/contact-section";
import Footer from "@/app/components/footer";
import PageLoadCurtain from "@/app/components/page-load-curtain";
import PullQuote from "@/app/components/pull-quote";

export default function HomePage() {
  return (
    <PageLoadCurtain>
      <div className="min-h-screen bg-base text-primary overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-primary"
        >
          Skip to content
        </a>

        <Navbar />

        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <PullQuote>
            This isn&rsquo;t a pivot. It&rsquo;s both halves of a job that
            should have been one job all along.
          </PullQuote>
          <ProductsSection />
          <ExperienceSection />
          <ExpertiseSection />
          <NewsletterSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </PageLoadCurtain>
  );
}
