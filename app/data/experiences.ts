export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  outcomes: string[];
}

const experiences: Experience[] = [
  {
    title: "Independent — AI Product Builder",
    company: "ruleIQ · Helios · thredOS",
    period: "2024 — Present",
    description:
      "Building three production AI platforms solo. Full-stack engineering across Python, TypeScript, and React — from LangGraph agent orchestration to Electron desktop apps to Neo4j knowledge graphs.",
    outcomes: [
      "ruleIQ: Agentic compliance platform with GraphRAG, PPALE intelligence loop, 1,884+ tests",
      "Helios: Autonomous B2B sales engine with B-MAD agent framework, 26-view Electron app",
      "thredOS: Multi-agent workflow OS with typed thread hierarchies, DAG validation, policy engine",
    ],
  },
  {
    title: "Director, Partnerships & Customer Solutions",
    company: "RTGS.global",
    period: "Oct 2024 — Mar 2026",
    description:
      "Drove atomic, borderless, instant cross-border settlement via ISO20022 API — bypassing traditional correspondent banking constraints.",
    outcomes: [
      "Real-time 24/7 atomic cross-border settlement partnerships",
      "Revenue through liquidity provision, transaction fees, and FX income",
      "Partnerships across payments infrastructure and open banking",
    ],
  },
  {
    title: "Founder",
    company: "FiduciaNex|Ai",
    period: "Jan 2024 — Oct 2024",
    description:
      "Founded an AI venture building intelligent sales tools and multi-agent systems for financial services. This is where the technical building started.",
    outcomes: [
      "Built AI sales tools with LLMs and multi-agent orchestration",
      "Full-stack development with prompt engineering and automation",
      "Product rollout from concept to market",
    ],
  },
  {
    title: "Senior Account Relationship Manager",
    company: "Banking Circle",
    period: "Mar 2023 — Sep 2023",
    description:
      "Direct sales and account management for a leading payments bank serving EU financial institutions.",
    outcomes: [
      "Exceeded yearly targets by 20% in 6 months, doubled MoM revenue to €500k",
      "Reduced client onboarding time by 50%, grew payment volumes 30%",
      "Boosted satisfaction 25% across 20-client EU portfolio",
    ],
  },
  {
    title: "Head of Bank Sales, EMEA FI Payments",
    company: "Convera",
    period: "Feb 2021 — Mar 2023",
    description:
      "Led EMEA bank sales for financial institution payments across the correspondent banking landscape.",
    outcomes: [
      "5x growth in major bank opportunities via strategic domestic payments roadmap",
      "Secured £1M deal with major bank through data-driven negotiation",
      "30+ stakeholder meetings monthly to optimise cross-selling and pipeline",
    ],
  },
  {
    title: "Principal, Financial Services",
    company: "Marlin Hawk",
    period: "Oct 2018 — Oct 2020",
    description:
      "Executive search and advisory for global financial services — building C-suite relationships across banking and FinTech.",
    outcomes: [
      "10 new global clients including Gruppo Santander and Vanguard",
      "£1.53M in new fees through strategic business development",
      "Grew flagship industry event attendance 40% annually",
    ],
  },
  {
    title: "Earlier Career",
    company: "Bank of America ML · BNP Paribas",
    period: "2006 — 2013",
    description:
      "Foundation years in institutional banking — relationship management, credit analysis, and transaction structuring at two of Europe's largest banks.",
    outcomes: [
      "Financial Institutions Coverage at Bank of America Merrill Lynch",
      "Corporate Coverage at BNP Paribas — nearly five years",
      "Deep foundation in retail, commercial, and institutional banking operations",
    ],
  },
];

export default experiences;
