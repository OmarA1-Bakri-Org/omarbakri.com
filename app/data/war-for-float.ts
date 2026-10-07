export type ArticleBlock =
  | { type: "divider" }
  | { type: "heading" | "paragraph" | "quote"; text: string; className?: string }
  | { type: "list"; items: string[]; className?: string };

// Shared verbatim publication body. Edit here for both the page and machine-readable content.
export const warForFloatBlocks: ArticleBlock[] = [
  {
    "type": "divider"
  },
  {
    "type": "paragraph",
    "text": "**The headline version:** Stablecoins are not mainly about faster payments. They are about capturing the idle balances — current accounts, payroll buffers, merchant floats and treasury operating cash — that banks have relied on for decades as cheap, sticky funding. Once a deposit becomes a token backed by T-bills and repo, the interest economics leave the banking system. That is why this fight has turned political so fast."
  },
  {
    "type": "divider"
  },
  {
    "type": "heading",
    "className": "font-display font-light text-primary mb-6",
    "text": "The numbers that matter"
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "Stablecoins are approximately $315 billion against approximately $19 trillion in U.S. bank deposits. Small today. The migration forecasts are not small:"
  },
  {
    "type": "list",
    "className": "space-y-3 list-disc pl-6",
    "items": [
      "**Standard Chartered (January 2026):** approximately $500 billion could leave U.S. bank deposits by the end of 2028. Regional banks are the most exposed.",
      "**Citi (September 2025, revised):** $1.9 trillion base case and $4 trillion bull case by 2030.",
      "**Government stress scenario:** $6.6 trillion in deposit displacement under high-adoption assumptions — enough to trigger a Senate fight over whether stablecoins can pay yield at all."
    ]
  },
  {
    "type": "paragraph",
    "className": "mt-5 text-primary",
    "text": "Those are funding-base numbers, not payments numbers."
  },
  {
    "type": "divider"
  },
  {
    "type": "heading",
    "className": "font-display font-light text-primary mb-6",
    "text": "How the capture works"
  },
  {
    "type": "paragraph",
    "className": "mb-5 text-primary",
    "text": "User converts bank money → stablecoin issued against reserve assets → user holds the token in a wallet that looks like a bank interface → the balance sheet has changed."
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "What was a bank liability is now a token liability. Interest income follows."
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "Even non-interest-bearing stablecoins are economically powerful because the reserve portfolio throws off yield. The market recreates savings-like economics through distributor rewards, fee rebates, treasury sweeps and reserve-sharing arrangements."
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "**The knife fight in Washington:** Can stablecoins behave like deposits without being regulated like banks?"
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "**The card play:** Stablecoins do not need to replace Visa or Mastercard. They sit behind them. Hold value in stablecoins and spend wherever cards are accepted. The acceptance layer stays. The money underneath migrates."
  },
  {
    "type": "paragraph",
    "className": "text-primary",
    "text": "Retail makes headlines. Corporate treasury moves real float."
  },
  {
    "type": "divider"
  },
  {
    "type": "heading",
    "className": "font-display font-light text-primary mb-6",
    "text": "What the regulators are saying"
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "**ECB (March 2026 working paper):** Stablecoin adoption measurably correlated with declining retail deposits and reduced lending to firms. Banks lose cheap funding → rely on more expensive wholesale funding → shrink credit supply."
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "**Bank of England:** Proposals for holding limits and reserve structures that deliberately restrain stablecoin scaling."
  },
  {
    "type": "paragraph",
    "className": "mb-7",
    "text": "**U.S. GENIUS Act:** Who can issue? What backs them? What happens in a run? Who gets the yield? These are monetary architecture questions, not startup questions."
  },
  {
    "type": "quote",
    "className": "border-l-2 border-accent pl-6 py-2 font-display text-primary",
    "text": "Banks are worried that a new class of cash-like instrument will siphon off low-cost liabilities while leaving them with higher funding costs and the same capital burden. That is algebra."
  },
  {
    "type": "divider"
  },
  {
    "type": "heading",
    "className": "font-display font-light text-primary mb-6",
    "text": "The incumbents' moves"
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "**Mastercard:** $1.8 billion acquisition of BVNK in March 2026, connecting stablecoins to fiat rails across 130 countries. Preserve the interface. Change the liability."
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "**Fiserv:** FIUSD built on Paxos and Circle, integrated into 10,000 financial-institution clients and six million merchant locations."
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "**Circle and Tether:** Reserve transparency, government money-market structures and blue-chip custodians make the reserve model legible to mainstream finance."
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "**Banks:** Tokenised deposits keep money as a bank liability while adding on-chain programmability."
  },
  {
    "type": "paragraph",
    "className": "text-primary",
    "text": "Everyone suddenly has a view on monetary design. The revenue pool explains the timing."
  },
  {
    "type": "divider"
  },
  {
    "type": "heading",
    "className": "font-display font-light text-primary mb-6",
    "text": "The risks created by success"
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "**BIS research:** Stablecoin flows move short-dated Treasury yields by 2.5–3.5 basis points normally and 5–8 basis points when bills are scarce. That is a macro variable."
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "**FX angle:** The majority of net stablecoin inflows come from non-USD currencies. This is also an offshore-dollar story with geopolitical edges."
  },
  {
    "type": "paragraph",
    "text": "**Concentration:** A handful of issuers and distribution points control the market. The structure is new. The concentration is familiar."
  },
  {
    "type": "divider"
  },
  {
    "type": "heading",
    "className": "font-display font-light text-primary mb-6",
    "text": "The fork"
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "**Path A — Constrained:** Tightly regulated, low-yield payment instruments. Growth continues, but it is slower, more institutional and more contained."
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "**Path B — Open:** Reward structures stay open, card acceptance expands and treasury adoption accelerates. Stablecoins collapse into familiar interfaces. The contest moves to ownership of the idle dollar."
  },
  {
    "type": "paragraph",
    "className": "mb-5",
    "text": "The old line was that stablecoins threatened SWIFT. That was too shallow."
  },
  {
    "type": "paragraph",
    "className": "font-display text-primary",
    "text": "**The real threat is simpler and more serious: stablecoins threaten deposits. And deposits are where power lives.**"
  }
];
