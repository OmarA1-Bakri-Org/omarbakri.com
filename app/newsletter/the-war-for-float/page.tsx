import type { Metadata } from "next";
import Link from "next/link";
import NewsletterShell from "../newsletter-shell";

export const metadata: Metadata = {
  title: "The War for Float",
  description:
    "Stablecoins are sold as a payments upgrade. In reality, they are a bid for the banking system's cheapest funding.",
  alternates: { canonical: "/newsletter/the-war-for-float" },
  openGraph: {
    title: "The War for Float",
    description:
      "Stablecoins are sold as a payments upgrade. In reality, they are a bid for the banking system's cheapest funding.",
    url: "/newsletter/the-war-for-float",
    type: "article",
    publishedTime: "2026-04-24T00:00:00.000Z",
    authors: ["Omar Al-Bakri"],
  },
};

const Divider = () => <hr className="border-0 border-t border-edge my-12" />;

export default function WarForFloatPage() {
  return (
    <NewsletterShell>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-12">
        <Link href="/newsletter" className="text-accent hover:text-accent-hover transition-colors" style={{ fontSize: "var(--text-sm)" }}>
          ← Intelligent Rails
        </Link>

        <header className="pt-12 pb-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-muted uppercase tracking-[0.05em] mb-6" style={{ fontSize: "var(--text-xs)" }}>
            <span>Intelligent Rails</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-04-24">24 April 2026</time>
            <span aria-hidden="true">·</span>
            <span>Omar Al-Bakri</span>
          </div>
          <h1 className="font-display font-light tracking-[-0.025em] mb-8" style={{ fontSize: "var(--text-4xl)", lineHeight: "1.05" }}>
            The War for Float
          </h1>
          <p className="font-display font-light text-secondary" style={{ fontSize: "var(--text-xl)", lineHeight: "1.55" }}>
            Stablecoins are sold as a payments upgrade. In reality, they are a bid for the banking system&apos;s cheapest funding.
          </p>
        </header>

        <div className="space-y-7 text-secondary leading-[1.8]" style={{ fontSize: "var(--text-base)" }}>
          <Divider />

          <p>
            <strong className="text-primary">The headline version:</strong>{" "}
            Stablecoins are not mainly about faster payments. They are about capturing the idle balances — current accounts, payroll buffers, merchant floats and treasury operating cash — that banks have relied on for decades as cheap, sticky funding. Once a deposit becomes a token backed by T-bills and repo, the interest economics leave the banking system. That is why this fight has turned political so fast.
          </p>

          <Divider />

          <section>
            <h2 className="font-display font-light text-primary mb-6" style={{ fontSize: "var(--text-2xl)" }}>The numbers that matter</h2>
            <p className="mb-5">Stablecoins are approximately $315 billion against approximately $19 trillion in U.S. bank deposits. Small today. The migration forecasts are not small:</p>
            <ul className="space-y-3 list-disc pl-6">
              <li><strong className="text-primary">Standard Chartered (January 2026):</strong> approximately $500 billion could leave U.S. bank deposits by the end of 2028. Regional banks are the most exposed.</li>
              <li><strong className="text-primary">Citi (September 2025, revised):</strong> $1.9 trillion base case and $4 trillion bull case by 2030.</li>
              <li><strong className="text-primary">Government stress scenario:</strong> $6.6 trillion in deposit displacement under high-adoption assumptions — enough to trigger a Senate fight over whether stablecoins can pay yield at all.</li>
            </ul>
            <p className="mt-5 text-primary">Those are funding-base numbers, not payments numbers.</p>
          </section>

          <Divider />

          <section>
            <h2 className="font-display font-light text-primary mb-6" style={{ fontSize: "var(--text-2xl)" }}>How the capture works</h2>
            <p className="mb-5 text-primary">User converts bank money → stablecoin issued against reserve assets → user holds the token in a wallet that looks like a bank interface → the balance sheet has changed.</p>
            <p className="mb-5">What was a bank liability is now a token liability. Interest income follows.</p>
            <p className="mb-5">Even non-interest-bearing stablecoins are economically powerful because the reserve portfolio throws off yield. The market recreates savings-like economics through distributor rewards, fee rebates, treasury sweeps and reserve-sharing arrangements.</p>
            <p className="mb-5"><strong className="text-primary">The knife fight in Washington:</strong> Can stablecoins behave like deposits without being regulated like banks?</p>
            <p className="mb-5"><strong className="text-primary">The card play:</strong> Stablecoins do not need to replace Visa or Mastercard. They sit behind them. Hold value in stablecoins and spend wherever cards are accepted. The acceptance layer stays. The money underneath migrates.</p>
            <p className="text-primary">Retail makes headlines. Corporate treasury moves real float.</p>
          </section>

          <Divider />

          <section>
            <h2 className="font-display font-light text-primary mb-6" style={{ fontSize: "var(--text-2xl)" }}>What the regulators are saying</h2>
            <p className="mb-5"><strong className="text-primary">ECB (March 2026 working paper):</strong> Stablecoin adoption measurably correlated with declining retail deposits and reduced lending to firms. Banks lose cheap funding → rely on more expensive wholesale funding → shrink credit supply.</p>
            <p className="mb-5"><strong className="text-primary">Bank of England:</strong> Proposals for holding limits and reserve structures that deliberately restrain stablecoin scaling.</p>
            <p className="mb-7"><strong className="text-primary">U.S. GENIUS Act:</strong> Who can issue? What backs them? What happens in a run? Who gets the yield? These are monetary architecture questions, not startup questions.</p>
            <blockquote className="border-l-2 border-accent pl-6 py-2 font-display text-primary" style={{ fontSize: "var(--text-xl)", lineHeight: "1.55" }}>
              Banks are worried that a new class of cash-like instrument will siphon off low-cost liabilities while leaving them with higher funding costs and the same capital burden. That is algebra.
            </blockquote>
          </section>

          <Divider />

          <section>
            <h2 className="font-display font-light text-primary mb-6" style={{ fontSize: "var(--text-2xl)" }}>The incumbents&apos; moves</h2>
            <p className="mb-5"><strong className="text-primary">Mastercard:</strong> $1.8 billion acquisition of BVNK in March 2026, connecting stablecoins to fiat rails across 130 countries. Preserve the interface. Change the liability.</p>
            <p className="mb-5"><strong className="text-primary">Fiserv:</strong> FIUSD built on Paxos and Circle, integrated into 10,000 financial-institution clients and six million merchant locations.</p>
            <p className="mb-5"><strong className="text-primary">Circle and Tether:</strong> Reserve transparency, government money-market structures and blue-chip custodians make the reserve model legible to mainstream finance.</p>
            <p className="mb-5"><strong className="text-primary">Banks:</strong> Tokenised deposits keep money as a bank liability while adding on-chain programmability.</p>
            <p className="text-primary">Everyone suddenly has a view on monetary design. The revenue pool explains the timing.</p>
          </section>

          <Divider />

          <section>
            <h2 className="font-display font-light text-primary mb-6" style={{ fontSize: "var(--text-2xl)" }}>The risks created by success</h2>
            <p className="mb-5"><strong className="text-primary">BIS research:</strong> Stablecoin flows move short-dated Treasury yields by 2.5–3.5 basis points normally and 5–8 basis points when bills are scarce. That is a macro variable.</p>
            <p className="mb-5"><strong className="text-primary">FX angle:</strong> The majority of net stablecoin inflows come from non-USD currencies. This is also an offshore-dollar story with geopolitical edges.</p>
            <p><strong className="text-primary">Concentration:</strong> A handful of issuers and distribution points control the market. The structure is new. The concentration is familiar.</p>
          </section>

          <Divider />

          <section>
            <h2 className="font-display font-light text-primary mb-6" style={{ fontSize: "var(--text-2xl)" }}>The fork</h2>
            <p className="mb-5"><strong className="text-primary">Path A — Constrained:</strong> Tightly regulated, low-yield payment instruments. Growth continues, but it is slower, more institutional and more contained.</p>
            <p className="mb-5"><strong className="text-primary">Path B — Open:</strong> Reward structures stay open, card acceptance expands and treasury adoption accelerates. Stablecoins collapse into familiar interfaces. The contest moves to ownership of the idle dollar.</p>
            <p className="mb-5">The old line was that stablecoins threatened SWIFT. That was too shallow.</p>
            <p className="font-display text-primary" style={{ fontSize: "var(--text-xl)", lineHeight: "1.55" }}><strong>The real threat is simpler and more serious: stablecoins threaten deposits. And deposits are where power lives.</strong></p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-edge flex flex-wrap gap-2">
          {["Stablecoins", "Banking", "Payments", "Financial infrastructure", "Regulation"].map((topic) => (
            <span key={topic} className="px-2.5 py-1 border border-edge text-muted" style={{ fontSize: "var(--text-xs)" }}>{topic}</span>
          ))}
        </div>
      </article>
    </NewsletterShell>
  );
}
