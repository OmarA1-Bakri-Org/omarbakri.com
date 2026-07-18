export interface Publication {
  title: string;
  excerpt: string;
  publishedAt: string;
  topics: string[];
  source: "Intelligent Rails" | "LinkedIn";
  href: string;
  external: boolean;
  featured?: boolean;
}

const publications: Publication[] = [
  {
    title: "The War for Float",
    excerpt:
      "Stablecoins are sold as a payments upgrade. In reality, they are a bid for the banking system's cheapest funding.",
    publishedAt: "2026-04-24",
    topics: ["Stablecoins", "Banking", "Payments"],
    source: "Intelligent Rails",
    href: "/newsletter/the-war-for-float",
    external: false,
    featured: true,
  },
  {
    title: "Your payment stack is bleeding 5% of revenue",
    excerpt:
      "Fragmented providers inflate transaction costs, consume finance-team time and hide operational losses from the board.",
    publishedAt: "2026-03-16",
    topics: ["Payments", "Infrastructure", "Margin"],
    source: "LinkedIn",
    href: "https://www.linkedin.com/posts/omaralbakri_your-payment-stack-is-bleeding-5-of-revenue-activity-7439405717083611136-fnfl",
    external: true,
  },
  {
    title: "Most salespeople use AI to write more emails",
    excerpt:
      "The good ones use it to write fewer. AI scales judgement when the seller already knows which accounts deserve attention.",
    publishedAt: "2026-03-14",
    topics: ["Applied AI", "Sales", "Judgement"],
    source: "LinkedIn",
    href: "https://www.linkedin.com/posts/omaralbakri_most-salespeople-use-ai-to-write-more-emails-activity-7438394959415697408-zljd",
    external: true,
  },
  {
    title: "APAC corridors locking capital",
    excerpt:
      "Pre-funding across SGD-INR, HKD-PHP and JPY-IDR ties up working capital and adds FX drag before settlement begins.",
    publishedAt: "2026-03-11",
    topics: ["APAC", "Liquidity", "Cross-border payments"],
    source: "LinkedIn",
    href: "https://www.linkedin.com/posts/omaralbakri_sgd-inr-hkd-php-jpy-idr-three-corridors-activity-7437556705246273536-CMkG",
    external: true,
  },
  {
    title: "Network beats corridor",
    excerpt:
      "Nexus, Visa and Bridge, and OSN point to the same model: integrate once, then reach every connected market.",
    publishedAt: "2026-03-10",
    topics: ["Payment networks", "Cross-border", "Strategy"],
    source: "LinkedIn",
    href: "https://www.linkedin.com/posts/omaralbakri_you-spent-8-months-opening-one-corridor-activity-7437064902600617984-xxIx",
    external: true,
  },
  {
    title: "Agentic AI in financial services",
    excerpt:
      "Autonomous systems need bounded authority, clear ownership and human intervention before they enter regulated workflows.",
    publishedAt: "2026-02-17",
    topics: ["Agentic AI", "Financial services", "Governance"],
    source: "LinkedIn",
    href: "https://www.linkedin.com/posts/omaralbakri_agenticai-financialservices-bankinginnovation-activity-7429456575603376128-sbCj",
    external: true,
  },
];

export function formatPublicationDate(date: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default publications;
