type StructuredDataProps = {
  lastModified?: string;
};

export default function StructuredData({ lastModified }: StructuredDataProps) {
  const dynamicLastModified =
    lastModified ??
    (process.env.BUILD_TIMESTAMP
      ? new Date(process.env.BUILD_TIMESTAMP).toISOString().split("T")[0]
      : "2026-07-18");

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Omar Al-Bakri",
    url: "https://www.omarbakri.com",
    jobTitle: "Applied AI Engineer",
    description:
      "Applied AI engineer building agent systems and full-stack products for financial services. Fifteen years in enterprise payments. Hands-on Python and TypeScript delivery.",
    homeLocation: {
      "@type": "Place",
      name: "Bangkok, Thailand",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangkok",
        addressCountry: "TH",
      },
    },
    knowsAbout: [
      "Applied AI engineering",
      "Agent systems",
      "LangGraph",
      "GraphRAG",
      "Retrieval and evaluation",
      "Python",
      "TypeScript",
      "FinTech",
      "Enterprise payments",
    ],
    sameAs: [
      "https://linkedin.com/in/omaralbakri",
      "https://github.com/OmarA1-Bakri",
      "https://call-score.com",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Nottingham Trent University",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Omar Al-Bakri",
    url: "https://www.omarbakri.com",
    description:
      "Applied AI engineer building agent systems and full-stack products for financial services. Fifteen years in enterprise payments. Hands-on Python and TypeScript delivery.",
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: personSchema,
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
            "Creator-intelligence product that extracts public market calls, matches them to timestamped price outcomes and scores creator performance.",
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
            "Compliance platform built around obligations, controls, evidence, retrieval and explicit review.",
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
            "Governed sales-automation system combining prospecting workflows, graph memory and operator controls.",
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
            "Local-first operating system for structured multi-agent workflows, policy, approvals and provenance.",
        },
      },
    ],
  };

  return (
    <>
      {[personSchema, websiteSchema, profilePageSchema, projectsSchema].map(
        (schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )
      )}
    </>
  );
}
