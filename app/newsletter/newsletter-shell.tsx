import Link from "next/link";
import type { ReactNode } from "react";

export default function NewsletterShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-base text-primary">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-base"
      >
        Skip to content
      </a>

      <header className="border-b border-edge">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
          <Link href="/" className="font-display text-primary" style={{ fontSize: "var(--text-lg)" }}>
            Omar Al-Bakri
          </Link>
          <nav className="flex items-center gap-6" aria-label="Newsletter navigation">
            <Link href="/newsletter" className="text-secondary hover:text-accent transition-colors" style={{ fontSize: "var(--text-sm)" }}>
              Intelligent Rails
            </Link>
            <Link href="/#contact" className="text-secondary hover:text-accent transition-colors" style={{ fontSize: "var(--text-sm)" }}>
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="border-t border-edge mt-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row gap-4 justify-between text-muted" style={{ fontSize: "var(--text-xs)" }}>
          <p>Intelligent Rails · Omar Al-Bakri</p>
          <Link href="/" className="hover:text-accent transition-colors">
            Back to portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
