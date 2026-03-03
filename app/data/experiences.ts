export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  outcomes: string[];
}

const experiences: Experience[] = [
  {
    title: "Director, Partnerships & Customer Solutions",
    company: "RTGS.global",
    period: "Oct 2024 — Present",
    description:
      "Enabling atomic, borderless, instant, and secure money movement across RTGS.global infrastructure — bypassing the constraints of traditional correspondent banking.",
    outcomes: [
      "Real-time 24/7 atomic cross-border settlement via ISO20022 API",
      "Driving partnerships across payments infrastructure and open banking",
      "Building revenue through liquidity provision, transaction fees, and FX income",
    ],
  },
  {
    title: "Founder",
    company: "FiduciaNex|Ai",
    period: "Jan 2024 — Oct 2024",
    description:
      "Founded an AI-focused venture building intelligent sales tools and multi-agent systems for the financial services industry.",
    outcomes: [
      "Built AI sales tools leveraging LLMs and multi-agent systems",
      "Full-stack development with prompt engineering and automation",
      "Developed new product rollout strategy from concept to market",
    ],
  },
  {
    title: "Senior Account Relationship Manager",
    company: "Banking Circle",
    period: "Mar 2023 — Sep 2023",
    description:
      "Direct sales, business development, and account management for a leading payments bank serving EU-focused financial institutions.",
    outcomes: [
      "Exceeded yearly sales targets by 20% in 6 months, doubling MoM revenue to €500k",
      "Reduced client onboarding time by 50%, grew payment volumes by 30%",
      "Boosted customer satisfaction by 25% across 20-client EU portfolio",
    ],
  },
  {
    title: "Head of Bank Sales for EMEA, FI Payments",
    company: "Convera",
    period: "Feb 2021 — Mar 2023",
    description:
      "Led EMEA bank sales for financial institution payments, driving strategic growth across the correspondent banking landscape.",
    outcomes: [
      "Achieved 5x growth in major bank opportunities via strategic domestic payments roadmap",
      "Secured £1M deal with major bank through data-driven negotiation",
      "Held 30+ stakeholder and client meetings monthly to optimise cross-selling and pipeline",
    ],
  },
  {
    title: "Principal, Financial Services",
    company: "Marlin Hawk",
    period: "Oct 2018 — Oct 2020",
    description:
      "Executive search and advisory for global financial services, building C-suite relationships across banking and FinTech.",
    outcomes: [
      "Secured 10 new global clients including Gruppo Santander and Vanguard",
      "Generated £1.53M in new fees through strategic business development",
      "Grew flagship industry event attendance by 40% annually",
    ],
  },
  {
    title: "RM, Financial Institutions Coverage",
    company: "Bank of America Merrill Lynch",
    period: "Apr 2011 — Dec 2013",
    description:
      "Relationship management for financial institutions coverage, managing complex multi-product banking relationships.",
    outcomes: [
      "Managed portfolio of institutional clients across global markets",
      "C-suite engagement and consultative selling across banking products",
      "Cross-selling and revenue optimisation across transaction banking",
    ],
  },
  {
    title: "Analyst — Associate, Corporate Coverage",
    company: "BNP Paribas",
    period: "May 2006 — Mar 2011",
    description:
      "Nearly five years in corporate coverage at one of Europe’s largest banks, building foundational expertise in financial services.",
    outcomes: [
      "Corporate client relationship management and credit analysis",
      "Transaction structuring and deal origination",
      "Deep foundation in retail and commercial banking operations",
    ],
  },
];

export default experiences;