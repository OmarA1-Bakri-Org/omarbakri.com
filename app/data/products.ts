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
    tagline: "Agentic regulatory compliance for UK financial services",
    description:
      "Compliance platforms typically run on static rule engines that fracture every time regulation moves. ruleIQ uses a GraphRAG knowledge layer to map frameworks, obligations, and controls into a queryable graph, with LangGraph agents handling research, analysis, and draft generation under explicit hallucination controls. Frameworks supported include ISO 27001, GDPR, Cyber Essentials, SOC 2, and PCI DSS.",
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
      "Trust Gradient architecture — agents earn autonomy through demonstrated accuracy",
      "20+ Neo4j node types modelling regulatory relationships",
      "1,884 backend tests, 562 frontend tests",
    ],
    status: "Shipped",
  },
  {
    name: "Helios",
    tagline: "Autonomous B2B sales engine, live in production at RTGS.global",
    description:
      "End-to-end autonomous prospecting and outreach automation, with safety hard-baked into the architecture: circuit breakers, spend caps, and mandatory cancel windows to prevent runaway automation. A desktop app, an API server, and a Python orchestrator working in concert, integrated with Explorium, Apollo, HubSpot, and Postmark. Replaced a manual prospecting workflow in a live commercial environment.",
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
      "Live in production at RTGS.global, running the company's outbound sales motion end-to-end",
      "Multi-agent framework with autonomous execution mode and persistent context (Graphiti)",
      "26-view desktop app: Clerk auth, Zustand state management",
      "Integrations: Explorium, Apollo, HubSpot, Postmark",
      "Safety architecture: circuit breakers, 30-second cancel windows, $50/cycle spend caps",
    ],
    status: "Shipped · In production",
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
