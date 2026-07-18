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
    tagline: "Creator-call intelligence platform for crypto markets",
    description:
      "CallScore ingests public creator, video and transcript data, extracts market calls, matches them to outcome windows and ranks creators by evidence-backed prediction quality. It is a live product with public leaderboards, creator profiles, methodology surfaces, API/export paths, Whop gating and operations governed through Hermes/Workplane receipts.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "LangGraph",
      "LLM extraction",
      "Market-data matching",
      "Netlify",
      "Whop",
      "Hermes/Workplane",
    ],
    highlights: [
      "Ingests creator, video and transcript data, then extracts market claims with confidence filtering and evidence traceability",
      "Matches calls to symbols, time windows and market outcomes before scoring alpha, win rate, consistency and correction behaviour",
      "Exposes product surfaces including public leaderboards, creator profiles, methodology pages, API keys, exports and webhooks",
      "Uses pipeline audits, freshness checks, handover records and fail-closed restricted-action gates to keep operations controlled",
    ],
    status: "Live product",
    url: "https://call-score.com",
    repoUrl: "https://github.com/OmarA1-Bakri/CallScore",
  },
  {
    name: "ruleIQ",
    tagline: "Compliance automation platform for regulated financial-services workflows",
    description:
      "ruleIQ maps assessments, obligations, policies, controls and evidence into an AI-assisted compliance workspace. The repository shows a production-oriented FastAPI and Next.js platform with RAG/agent workflows, PostgreSQL, Redis, vector-search dependencies, environment hardening and a large automated-test surface.",
    stack: [
      "Python",
      "FastAPI",
      "Next.js 15",
      "LangChain",
      "OpenAI",
      "PostgreSQL",
      "Redis",
      "ChromaDB",
      "Pinecone",
      "Stripe",
      "Sentry",
    ],
    highlights: [
      "Supports compliance assessments, policy workflows and evidence-led review rather than generic chatbot-style compliance advice",
      "Uses RAG and agent patterns around regulated workflows, with explicit environment setup and credential-safety requirements",
      "Includes backend/frontend workflow structure, service-completion records and test-policy discipline visible in the repository",
      "Positions AI as an assistive compliance layer with human review, auditability and controlled generation as core design constraints",
    ],
    status: "Production-ready repository",
    repoUrl: "https://github.com/OmarA1-Bakri-Org/ruleIQ",
  },
  {
    name: "Helios",
    tagline: "Controlled B2B prospecting and outreach automation platform",
    description:
      "Helios combines an Electron desktop application, Node/Express API server, MCP server, Python Antigravity orchestrator, Graphiti/Neo4j memory layer and CRM/outreach integrations to discover, enrich and engage B2B leads. It is best described as a governed autonomous-sales system, not a generic commercial workflow tool.",
    stack: [
      "Electron",
      "React",
      "Vite",
      "Node.js",
      "Express",
      "FastAPI",
      "MCP",
      "Graphiti",
      "Neo4j",
      "PostgreSQL",
      "Redis",
      "Clerk",
      "Sentry",
      "HubSpot",
      "Postmark",
      "Explorium",
    ],
    highlights: [
      "Electron desktop application with authenticated access, lazy-loaded views and local operator control",
      "Node/Express API layer with route modules, Sequelize ORM, MCP server support and observability hooks",
      "Python orchestration layer using FastAPI, Graphiti and Neo4j for graph-memory and prospecting context",
      "Integrates enrichment, CRM and outreach surfaces while keeping autonomous execution framed around controls and observability",
    ],
    status: "Private build",
  },
  {
    name: "thredOS",
    tagline: "Local-first operating system for governed multi-agent work",
    description:
      "thredOS turns ad hoc prompt chains, shell history and one-off agent sessions into explicit workflows. It defines steps, dependencies, gates and approvals, exposes a shared UI and CLI control plane, tracks runs and provenance, and keeps workflow state, policy and audit history inside the local workspace.",
    stack: [
      "TypeScript",
      "Bun",
      "Next.js",
      "React",
      "CLI runtime",
      "Local-first storage",
      "Policy controls",
      "Provenance tracking",
      "Workflow surfaces",
    ],
    highlights: [
      "Models agent work as structured sequences with dependencies, gates, approvals and thread types",
      "Provides a shared UI and CLI control plane for inspecting runs, surfaces, merges and provenance",
      "Keeps prompts, skills, threads, artifacts, audit history and policy state local under the workspace",
      "Limits the cloud surface to activation, billing and canonical agent registration rather than hosted workflow execution",
    ],
    status: "Pre-launch · active build",
    repoUrl: "https://github.com/OmarA1-Bakri-Org/thredOS",
  },
];

export default products;
