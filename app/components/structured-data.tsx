type StructuredDataProps = {
  lastModified?: string;
};

export default function StructuredData({ lastModified }: StructuredDataProps) {
  const dynamicLastModified =
    lastModified ??
    (process.env.BUILD_TIMESTAMP
      ? new Date(process.env.BUILD_TIMESTAMP).toISOString().split("T")[0]
      : "2025-01-01");

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Omar Al-Bakri",
    url: "https://omarbakri.com",
    jobTitle: "AI Engineer & Enterprise Sales Leader",
    description:
      "Former enterprise FinTech sales leader who taught himself to code and shipped three production AI platforms solo. 15 years at BNP Paribas, Bank of America ML, Convera, Banking Circle, RTGS.global.",
    knowsAbout: [
      "Agentic AI",
      "LangGraph",
      "Neo4j GraphRAG",
      "Full-Stack Engineering",
      "Enterprise Sales",
      "FinTech",
      "Cross-border payments",
      "Multi-agent systems",
      "Compliance automation",
    ],
    sameAs: ["https://linkedin.com/in/omaralbakri"],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Nottingham Trent University",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Omar Al-Bakri",
    url: "https://omarbakri.com",
    description:
      "15 years selling FinTech. 3 years learning to build. 3 production AI platforms shipped solo.",
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Omar Al-Bakri",
      url: "https://omarbakri.com",
    },
    dateCreated: "2025-01-01",
    dateModified: dynamicLastModified,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
