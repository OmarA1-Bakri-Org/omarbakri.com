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
    company: "ruleIQ · Helios · thredOS",
    period: "2023 — Present",
    description:
      "Three production AI platforms, built solo. Full-stack across Python, TypeScript, React, FastAPI, Next.js, and Electron, with PostgreSQL, Neo4j, Redis, and FalkorDB beneath. ~3,000 automated tests across backend, integration, prompt evaluation, and end-to-end workflows.",
    outcomes: [
      "ruleIQ — agentic compliance platform on a GraphRAG knowledge layer; supports ISO 27001, GDPR, Cyber Essentials, SOC 2, PCI DSS",
      "Helios — autonomous B2B sales engine; deployed at RTGS.global with a 25% lift in lead conversion",
      "thredOS — multi-agent workflow runtime; in final testing ahead of commercial launch",
    ],
  },
  {
    title: "Director, Partnerships & Client Services · Asia Territory Lead · AI Lead",
    company: "RTGS.global",
    period: "Oct 2024 — Mar 2026",
    description:
      "Led commercial partnerships and AI strategy for a cross-border payments infrastructure business operating across Asia and EMEA.",
    outcomes: [
      "Built and deployed Helios as the company's primary AI-driven commercial platform; +25% lead conversion, replacing manual prospecting",
      "Led AI strategy for commercial execution — translated automation opportunities into shipped production systems",
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
      "Introduced AI-assisted prospecting and workflow playbooks; +20% response rates",
      "Led a cross-functional onboarding redesign: -50% onboarding time, supporting 30%+ volume growth",
    ],
  },
  {
    title: "Head of Bank Relationship Sales, EMEA · Senior Business Development Manager",
    company: "Convera",
    period: "Feb 2021 — Feb 2023",
    description:
      "Led EMEA bank sales for financial institution payments across the correspondent banking landscape.",
    outcomes: [
      "Closed a £1M financial institution partnership through complex commercial negotiations",
      "Expanded banking partnerships contributing to 30% payment-volume growth",
    ],
  },
  {
    title: "Principal Consultant, Wholesale Banking",
    company: "Marlin Hawk",
    period: "2018 — 2020",
    description:
      "Executive search and advisory for global financial services — building C-suite relationships across banking and FinTech.",
    outcomes: [
      "Won 10 global clients including Santander and Vanguard — £1.53M in fees",
      "Grew flagship industry event attendance 40% YoY",
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
