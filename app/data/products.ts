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
      "Enterprise-grade platform that uses intelligent agents to evolve from helpers to autonomous compliance partners. GraphRAG-powered knowledge graphs map regulatory relationships across ISO 27001, GDPR, Cyber Essentials, SOC 2, and PCI DSS.",
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
      "IQ Agent with PPALE intelligence loop — Perceive, Plan, Act, Learn, Remember",
      "RAG Self-Critic for hallucination-resistant compliance answers",
      "20+ Neo4j node types mapping regulatory relationships",
      "1,884+ backend tests, 562+ frontend tests",
      "Trust Gradient: Helper → Advisor → Autonomous Partner",
    ],
    status: "Production",
  },
  {
    name: "Helios",
    tagline: "Autonomous B2B sales prospecting engine",
    description:
      "Full-stack sales automation system with a desktop app, API server, and Python orchestrator. The B-MAD agent framework handles prospecting, enrichment, and outreach autonomously — with hard safety limits on spend and volume.",
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
      "B-MAD native agent framework with YOLO autonomous execution mode",
      "26-view desktop app with Clerk auth and Zustand state",
      "Explorium + Apollo + HubSpot integrations for lead discovery",
      "Circuit breaker patterns, 30-second cancel windows, $50/cycle spend caps",
      "Graph-RAG memory via Graphiti for persistent agent context",
    ],
    status: "Production",
  },
  {
    name: "ThreadOS",
    tagline: "Multi-agent workflow orchestration OS",
    description:
      "Local-first runtime for orchestrating engineering workloads across typed thread hierarchies. Six thread types, DAG-validated dependency graphs, policy-enforced execution gates, and model-agnostic LLM routing.",
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
      "6 thread types (Base/P/C/F/B/L) with typed dependency DAGs",
      "SAFE/POWER policy engine controlling agent autonomy",
      "CLI-first with 12+ command handlers and JSON I/O",
      "21 API route groups, 14 component directories",
      "Model-agnostic provider routing — OpenAI, Anthropic, OpenRouter",
    ],
    status: "Production",
  },
];

export default products;
