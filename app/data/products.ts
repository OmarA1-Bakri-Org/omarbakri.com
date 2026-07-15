export interface Product {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  status: string;
  url?: string;
  repoUrl?: string;
}

const products: Product[] = [
  {
    name: "CallScore",
    tagline: "Crypto creator intelligence platform — market calls scored against real price data",
    description:
      "CallScore is a public AI product for evidence-backed creator intelligence. It connects creator statements with timestamped market evidence and presents transparent scoring and analysis workflows.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "LangGraph",
      "LLM extraction",
      "Binance market data",
      "Whop",
      "Webhooks",
      "Remotion",
    ],
    highlights: [
      "AI-assisted extraction pipeline for public creator market calls, with confidence filtering and evidence traceability",
      "Deterministic scoring against real price windows, including alpha, win rate, consistency, and self-correction signals",
      "Public leaderboard, creator profiles, methodology, alerts, exports, API keys, webhooks, and backtesting workflows",
      "Automated ingestion, scoring, audits, freshness checks, and publishing workflows",
      "Built end to end as a full-stack AI and data product",
    ],
    status: "Public product",
    url: "https://call-score.com",
    repoUrl: "https://github.com/OmarA1-Bakri/CallScore",
  },
  {
    name: "ruleIQ",
    tagline: "Agentic regulatory compliance for UK financial services",
    description:
      "ruleIQ is an AI compliance platform using graph and retrieval patterns to connect frameworks, obligations, controls, and evidence. Agent workflows support research, analysis, and draft generation with explicit review points.",
    stack: [
      "Python",
      "FastAPI",
      "Next.js",
      "LangGraph",
      "Neo4j",
      "GraphRAG",
      "PostgreSQL",
      "Redis",
    ],
    highlights: [
      "GraphRAG knowledge layer mapping frameworks → obligations → controls → evidence",
      "LangGraph agents for research, analysis, and draft generation, with self-critic hallucination controls",
      "Policy-controlled workflows designed around review and evidence",
      "Graph modelling for regulatory relationships",
      "Automated validation across backend and frontend workflows",
    ],
    status: "Shipped",
  },
  {
    name: "Helios",
    tagline: "AI-assisted B2B commercial workflow platform",
    description:
      "Helios is a commercial workflow platform connecting a desktop interface, API services, orchestration, and sales-tool integrations. Its design places explicit controls around automated actions.",
    stack: [
      "Electron",
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "Neo4j",
      "PostgreSQL",
      "Redis",
    ],
    highlights: [
      "Multi-agent workflows with persistent context",
      "Desktop workflows with authenticated access and managed state",
      "Integrations: Explorium, Apollo, HubSpot, Postmark",
      "Safety architecture with circuit breakers, cancel windows, and spend controls",
    ],
    status: "Built",
  },
  {
    name: "thredOS",
    tagline: "Multi-agent workflow runtime for the desktop",
    description:
      "A typed thread runtime for orchestrating complex multi-agent workflows. Threads validate as DAGs before execution, agents operate inside policy-controlled surfaces, and the system defaults to safe mode. Built to coordinate the kind of complexity that emerges when several AI agents share state — model-agnostic across major providers.",
    stack: [
      "TypeScript",
      "Bun",
      "Next.js",
      "React Flow",
      "Zustand",
      "TanStack Query",
      "Zod",
    ],
    highlights: [
      "Six thread types with typed dependency DAGs validated pre-execution",
      "SAFE / POWER policy engine controlling per-agent autonomy",
      "CLI-first architecture — 12+ command handlers, JSON I/O",
      "Model-agnostic provider routing (OpenAI · Anthropic · OpenRouter)",
      "Provenance tracking and policy-snapshot pinning for replayable runs",
    ],
    status: "Pre-launch · final testing",
  },
];

export default products;
