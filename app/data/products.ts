export interface Product {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  status: string;
}

const products: Product[] = [
  {
    name: "ruleIQ",
    tagline: "Agentic compliance automation for UK SMBs",
    description:
      "Compliance platforms typically rely on static rules engines that break when regulations change. ruleIQ uses GraphRAG-powered knowledge graphs to map regulatory relationships dynamically, with LangGraph agents that evolve from guided helpers to autonomous compliance partners through a trust gradient architecture.",
    stack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Neo4j GraphRAG",
      "PostgreSQL",
      "Redis",
      "Next.js 15",
    ],
    highlights: [
      "PPALE intelligence loop — Perceive, Plan, Act, Learn, Remember",
      "RAG Self-Critic for hallucination-resistant compliance answers",
      "20+ Neo4j node types mapping regulatory relationships",
      "1,884 backend tests, 562 frontend tests",
      "Trust Gradient architecture — agents earn autonomy through demonstrated accuracy",
    ],
    status: "Shipped",
  },
  {
    name: "Helios",
    tagline: "Autonomous B2B sales prospecting with safety guardrails",
    description:
      "End-to-end autonomous prospecting system with hard safety limits baked into the architecture. Desktop app, API server, and Python orchestrator working together — with circuit breakers, spend caps, and mandatory cancel windows to prevent runaway automation.",
    stack: [
      "Electron 39",
      "React 18",
      "Node.js",
      "Express",
      "FastAPI",
      "Neo4j",
      "PostgreSQL",
      "Redis",
    ],
    highlights: [
      "B-MAD native agent framework with autonomous execution mode",
      "26-view desktop app with Clerk auth and Zustand state management",
      "Explorium, Apollo, and HubSpot integrations for lead discovery and enrichment",
      "Circuit breakers, 30-second cancel windows, $50/cycle spend caps",
      "Graph-RAG memory via Graphiti for persistent agent context",
    ],
    status: "Shipped",
  },
  {
    name: "thredOS",
    tagline: "Multi-agent workflow orchestration runtime",
    description:
      "A typed thread runtime for orchestrating multi-agent workflows. Agents operate within policy constraints, dependencies are validated as DAGs before execution, and the system defaults to safe mode. Built to coordinate the kind of complexity that emerges when multiple AI agents share state.",
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
      "6 thread types with typed dependency DAGs",
      "SAFE/POWER policy engine controlling agent autonomy levels",
      "CLI-first architecture with 12+ command handlers and JSON I/O",
      "21 API route groups, 14 component directories",
      "Model-agnostic provider routing — OpenAI, Anthropic, OpenRouter",
    ],
    status: "Shipped",
  },
];

export default products;
