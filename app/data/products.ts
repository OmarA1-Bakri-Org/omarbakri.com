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
    tagline: "Market calls, measured against what happened next",
    description:
      "CallScore turns public crypto commentary into an auditable performance record. It ingests creators, videos and transcripts, extracts market calls, matches them to price windows and ranks creators against timestamped outcomes. The live product includes leaderboards, creator profiles, methodology, API and export paths, Whop access and governed operations.",
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
      "Creator, video and transcript ingestion -> call extraction -> symbol and time-window matching -> deterministic scoring",
      "Scores alpha, win rate, consistency and self-correction from timestamped market outcomes",
      "Public leaderboards, creator profiles, methodology, API keys, exports and webhooks",
      "Pipeline audits, freshness checks and fail-closed gates govern restricted actions",
    ],
    status: "Live product",
    url: "https://call-score.com",
    repoUrl: "https://github.com/OmarA1-Bakri/CallScore",
  },
  {
    name: "ruleIQ",
    tagline: "Compliance automation built around evidence, controls and review",
    description:
      "ruleIQ links regulatory obligations to controls, evidence and human review. The repository combines FastAPI, Next.js, retrieval and agent workflows, PostgreSQL, Redis, vector search, credential hardening and an extensive automated-test surface.",
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
      "Maps assessments, obligations, policies, controls and evidence into one workspace",
      "Uses retrieval and agent workflows to assist research and drafting while keeping review explicit",
      "Environment and credential controls fail closed and block unsafe defaults",
      "Backend and frontend tests make the repository state inspectable",
    ],
    status: "Production-ready repository",
    repoUrl: "https://github.com/OmarA1-Bakri-Org/ruleIQ",
  },
  {
    name: "Helios",
    tagline: "Governed B2B prospecting from one operator surface",
    description:
      "Helios coordinates B2B prospecting, enrichment and outreach from a desktop operator surface. Electron, Node and Express handle the application and API layer. A Python FastAPI orchestrator, Graphiti and Neo4j carry context across MCP, CRM and outreach integrations.",
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
      "Discover -> enrich -> qualify -> engage through one governed workflow",
      "Electron operator surface with authenticated access and local control",
      "Graph memory carries prospect and campaign context across agent actions",
      "HubSpot, Postmark and Explorium integrations sit behind observability and execution controls",
    ],
    status: "Private build",
  },
  {
    name: "thredOS",
    tagline: "Local-first control plane for long-horizon agent work",
    description:
      "thredOS gives long-horizon agent work a local operating model. Sequences define steps, dependencies, gates and approvals. A shared UI and CLI expose runs, surfaces, merges and provenance while workflow state stays inside the workspace.",
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
      "Prompts, skills, threads, surfaces, runs and artefacts stay in the local workspace",
      "Dependencies and gates are defined before execution",
      "UI and CLI operate on the same workflow model",
      "Policy, approvals and audit history live inside .threados/",
    ],
    status: "Pre-launch · active build",
    repoUrl: "https://github.com/OmarA1-Bakri-Org/thredOS",
  },
];

export default products;
