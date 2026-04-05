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
      "I kept watching compliance software fail the same way \u2014 rigid rules engines that couldn\u2019t adapt when regulations changed. So I built one that could. GraphRAG-powered knowledge graphs map regulatory relationships. LangGraph agents evolve from helpers to autonomous partners. The system thinks in connections, not checklists.",
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
      "IQ Agent with PPALE intelligence loop \u2014 Perceive, Plan, Act, Learn, Remember",
      "RAG Self-Critic for hallucination-resistant compliance answers",
      "20+ Neo4j node types mapping regulatory relationships",
      "1,884+ backend tests, 562+ frontend tests",
      "Trust Gradient: agents earn autonomy over time, they don\u2019t start with it",
    ],
    status: "Built",
  },
  {
    name: "Helios",
    tagline: "Autonomous B2B sales prospecting engine",
    description:
      "After fifteen years of doing sales manually, I knew exactly what needed automating and where you couldn\u2019t cut corners. Helios runs autonomous prospecting with hard safety limits \u2014 because I\u2019ve seen what happens when sales automation runs without guardrails. Desktop app, API server, Python orchestrator. The whole stack.",
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
    status: "Built",
  },
  {
    name: "ThreadOS",
    tagline: "Multi-agent workflow orchestration runtime",
    description:
      "By the time I was building the third platform, I needed something to orchestrate the complexity of the first two. ThreadOS came out of that necessity \u2014 a typed thread runtime where agents work within policy constraints, dependencies are validated as DAGs, and execution is safe by default.",
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
      "Model-agnostic provider routing \u2014 OpenAI, Anthropic, OpenRouter",
    ],
    status: "Built",
  },
];

export default products;
