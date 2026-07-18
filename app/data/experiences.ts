export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  outcomes: string[];
}

const experiences: Experience[] = [
  {
    title: "Independent Applied AI Engineer",
    company: "CallScore · ruleIQ · Helios · thredOS",
    period: "2023 — Present",
    description:
      "Built four AI products across TypeScript, Python, Next.js, FastAPI, PostgreSQL, retrieval and agent orchestration.",
    outcomes: [
      "CallScore — live creator-intelligence product scoring public market calls against timestamped price outcomes",
      "ruleIQ — compliance platform connecting obligations, controls, evidence and review",
      "Helios — governed B2B prospecting and outreach system",
      "thredOS — local-first control plane for long-horizon agent work",
    ],
  },
  {
    title: "Director, Partnerships & Client Services · Asia Territory Lead · AI Lead",
    company: "RTGS.global",
    period: "Oct 2024 — Mar 2026",
    description:
      "Led partnerships, client services and Asia commercial development for cross-border payments infrastructure. Also led internal AI work.",
    outcomes: [
      "Built the Helios commercial automation platform",
      "Turned commercial workflow problems into working software",
      "Worked across Product, Engineering, Compliance and Commercial to convert market feedback into product changes",
    ],
  },
  {
    title: "Senior Account Manager",
    company: "Banking Circle",
    period: "Mar 2023 — Sep 2023",
    description:
      "Managed direct sales and strategic accounts for a payments bank serving European financial institutions.",
    outcomes: [
      "Introduced AI-assisted prospecting and workflow playbooks",
      "Worked across teams on customer onboarding improvements",
    ],
  },
  {
    title: "Head of Bank Relationship Sales, EMEA · Senior Business Development Manager",
    company: "Convera",
    period: "2019 — 2023",
    description:
      "Led EMEA bank sales for financial-institution payments across the correspondent banking market.",
    outcomes: [
      "Led complex commercial negotiations with financial institutions",
      "Expanded banking partnerships across EMEA",
    ],
  },
  {
    title: "Principal Consultant, Wholesale Banking",
    company: "Eames Consulting",
    period: "2016 — 2019",
    description:
      "Delivered executive search and advisory work for global financial-services clients.",
    outcomes: [
      "Built C-suite relationships across banking and FinTech",
      "Led executive-search and advisory engagements for global clients",
    ],
  },
  {
    title: "Earlier career",
    company: "Bank of America Merrill Lynch · BNP Paribas CIB",
    period: "2008 — 2016",
    description:
      "Institutional banking roles spanning financial-institution and corporate coverage.",
    outcomes: [
      "Financial Institutions Coverage at Bank of America Merrill Lynch",
      "Corporate Coverage at BNP Paribas CIB",
      "Foundation in retail, commercial and institutional banking operations",
    ],
  },
];

export default experiences;
