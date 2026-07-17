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
      "Applied AI engineer combining hands-on Python and TypeScript delivery with fifteen years in enterprise payments. Bangkok-based and globally open.",
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
      "Applied AI engineer combining hands-on Python and TypeScript delivery with fifteen years in enterprise payments. Bangkok-based and globally open.",
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
            "Creator-intelligence product connecting public market calls with timestamped price evidence and transparent scoring workflows.",
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
            "Compliance platform connecting frameworks, obligations, controls and evidence through graph and retrieval workflows.",
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
            "AI-assisted commercial workflow platform with explicit controls around automated actions.",
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
            "Typed multi-agent workflow runtime with policy-controlled execution and provenance tracking.",
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
