export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  outcomes: string[];
}

const experiences: Experience[] = [
  {
    title: "Independent — Applied AI Product Builder",
    company: "CallScore · ruleIQ · Helios · thredOS",
    period: "2023 — Present",
    description:
      "Applied AI systems built end to end across TypeScript, Python, Next.js, FastAPI, data stores, retrieval, and agent workflow orchestration.",
    outcomes: [
      "CallScore — crypto creator-intelligence platform scoring public market calls against real price outcomes",
      "ruleIQ — agentic compliance platform on a GraphRAG knowledge layer",
      "Helios — autonomous B2B sales engine for AI-driven commercial execution",
      "thredOS — multi-agent workflow runtime for policy-controlled long-horizon work",
    ],
  },
  {
    title: "Director, Partnerships & Client Services · Asia Territory Lead · AI Lead",
    company: "RTGS.global",
    period: "Oct 2024 — Mar 2026",
    description:
      "Led commercial partnerships and AI strategy for a cross-border payments infrastructure business operating across Asia and EMEA.",
    outcomes: [
      "Built the Helios AI-assisted commercial workflow platform",
      "Translated commercial automation opportunities into working systems",
      "Worked across Product, Engineering, Compliance, and Commercial to convert market feedback into structured product improvements",
    ],
  },
  {
    title: "Senior Account Manager",
    company: "Banking Circle",
    period: "Mar 2023 — Sep 2023",
    description:
      "Direct sales and account management for a leading payments bank serving EU financial institutions.",
    outcomes: [
      "Introduced AI-assisted prospecting and workflow playbooks",
      "Worked cross-functionally on customer onboarding improvements",
    ],
  },
  {
    title: "Head of Bank Relationship Sales, EMEA · Senior Business Development Manager",
    company: "Convera",
    period: "Feb 2021 — Feb 2023",
    description:
      "Led EMEA bank sales for financial institution payments across the correspondent banking landscape.",
    outcomes: [
      "Led complex commercial negotiations with financial institutions",
      "Expanded banking partnerships across the EMEA market",
    ],
  },
  {
    title: "Principal Consultant, Wholesale Banking",
    company: "Marlin Hawk",
    period: "2018 — 2020",
    description:
      "Executive search and advisory for global financial services — building C-suite relationships across banking and FinTech.",
    outcomes: [
      "Built C-suite relationships across banking and financial services",
      "Led executive-search and advisory engagements for global clients",
    ],
  },
  {
    title: "Earlier Career",
    company: "Bank of America Merrill Lynch · BNP Paribas CIB",
    period: "2006 — 2013",
    description:
      "Foundation years in institutional banking — Financial Institutions coverage at BAML, Corporate Coverage at BNP Paribas (~5 years).",
    outcomes: [
      "Financial Institutions Coverage at Bank of America Merrill Lynch",
      "Corporate Coverage at BNP Paribas CIB — nearly five years",
      "Deep foundation in retail, commercial, and institutional banking operations",
    ],
  },
];

export default experiences;
