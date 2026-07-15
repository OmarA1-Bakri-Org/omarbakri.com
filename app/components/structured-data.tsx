type StructuredDataProps = {
  lastModified?: string;
};

export default function StructuredData({ lastModified }: StructuredDataProps) {
  const dynamicLastModified =
    lastModified ??
    (process.env.BUILD_TIMESTAMP
      ? new Date(process.env.BUILD_TIMESTAMP).toISOString().split("T")[0]
      : "2026-07-07");

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Omar Al-Bakri",
    url: "https://www.omarbakri.com",
    jobTitle: "Applied AI Engineer & Product Builder",
    description:
      "Applied AI engineer and FinTech operator building AI products across creator intelligence, compliance, commercial workflows, and multi-agent systems.",
    knowsAbout: [
      "Applied AI engineering",
      "Agentic AI",
      "LangGraph",
      "GraphRAG",
      "AI automation",
      "Crypto creator intelligence",
      "Market call scoring",
      "Full-stack TypeScript",
      "Python",
      "FinTech",
      "Cross-border payments",
      "Multi-agent systems",
    ],
    sameAs: [
      "https://linkedin.com/in/omaralbakri",
      "https://github.com/OmarA1-Bakri",
      "https://call-score.com",
    ],
    knowsLanguage: ["English"],
    hasOccupation: {
      "@type": "Occupation",
      name: "Applied AI Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "United Kingdom",
      },
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Nottingham Trent University",
    },
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Applied AI consulting services",
    itemListElement: [
      "AI Opportunity Audit",
      "Agent Prototype Sprint",
      "RAG and Evaluation Hardening",
      "FinTech GTM Automation",
      "Fractional Applied AI Lead",
      "Payments AI Advisory",
    ].map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@type": "Service", name, provider: { "@type": "Person", name: "Omar Al-Bakri" } },
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Omar Al-Bakri",
    url: "https://www.omarbakri.com",
    description:
      "Applied AI engineering portfolio covering crypto creator intelligence, compliance automation, commercial AI automation, and multi-agent systems.",
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Omar Al-Bakri",
      url: "https://www.omarbakri.com",
    },
    dateCreated: "2025-01-01",
    dateModified: dynamicLastModified,
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Omar Al-Bakri AI product portfolio",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "WebApplication",
          name: "CallScore",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          url: "https://call-score.com",
          description:
            "Crypto creator-intelligence platform that scores public market calls against real price data.",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "ruleIQ",
          applicationCategory: "BusinessApplication",
          description:
            "Agentic compliance automation platform using GraphRAG and regulatory knowledge graphs.",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "SoftwareApplication",
          name: "Helios",
          applicationCategory: "BusinessApplication",
          description:
            "Autonomous B2B sales automation platform for AI-driven commercial execution.",
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "SoftwareApplication",
          name: "thredOS",
          applicationCategory: "DeveloperApplication",
          description:
            "Multi-agent workflow runtime for policy-controlled long-horizon AI work.",
        },
      },
    ],
  };

  return (
    <>
      {[personSchema, websiteSchema, profilePageSchema, projectsSchema, servicesSchema].map(
        (schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ),
      )}
    </>
  );
}
