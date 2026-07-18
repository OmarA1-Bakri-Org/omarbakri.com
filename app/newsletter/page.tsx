import type { Metadata } from "next";
import Link from "next/link";
import publications from "@/app/data/publications";
import NewsletterShell from "./newsletter-shell";
import PublicationCard from "./publication-card";

export const metadata: Metadata = {
  title: "Intelligent Rails",
  description:
    "Analysis of payments, financial infrastructure and applied AI by Omar Al-Bakri.",
  alternates: { canonical: "/newsletter" },
  openGraph: {
    title: "Intelligent Rails",
    description: "Analysis of payments, financial infrastructure and applied AI by Omar Al-Bakri.",
    url: "/newsletter",
    type: "website",
  },
};

export default function NewsletterPage() {
  const featured = publications.find((publication) => publication.featured) ?? publications[0];
  const archive = publications.filter((publication) => publication !== featured);

  return (
    <NewsletterShell>
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32 pb-16 lg:pb-24">
        <p className="text-accent uppercase tracking-[0.05em] mb-6" style={{ fontSize: "var(--text-xs)" }}>
          Newsletter and analysis
        </p>
        <h1 className="font-display font-light tracking-[-0.02em] max-w-4xl mb-8" style={{ fontSize: "var(--text-4xl)", lineHeight: "1.05" }}>
          Intelligent Rails
        </h1>
        <p className="text-secondary max-w-3xl leading-[1.8]" style={{ fontSize: "var(--text-lg)" }}>
          Financial infrastructure is usually explained through products and announcements. Intelligent Rails follows the money, the operating model and the incentives underneath them.
        </p>
      </section>

      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <p className="text-muted uppercase tracking-[0.05em] mb-6" style={{ fontSize: "var(--text-xs)" }}>
          Featured
        </p>
        <PublicationCard publication={featured} featured />
      </section>

      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div>
            <p className="text-muted uppercase tracking-[0.05em] mb-3" style={{ fontSize: "var(--text-xs)" }}>
              Publications
            </p>
            <h2 className="font-display font-light" style={{ fontSize: "var(--text-3xl)" }}>
              Recent analysis
            </h2>
          </div>
          <a
            href="/rss.xml"
            className="text-accent hover:text-accent-hover transition-colors"
            style={{ fontSize: "var(--text-sm)" }}
          >
            RSS feed <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-edge">
          {archive.map((publication) => (
            <PublicationCard key={publication.href} publication={publication} />
          ))}
        </div>
      </section>

      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="border-t border-edge pt-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
          <p className="text-secondary max-w-2xl leading-relaxed">
            New Intelligent Rails articles will be published here. Shorter analysis remains available through the linked publications above.
          </p>
          <Link href="/#newsletter" className="text-accent hover:text-accent-hover transition-colors whitespace-nowrap">
            Join the mailing list <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </NewsletterShell>
  );
}
