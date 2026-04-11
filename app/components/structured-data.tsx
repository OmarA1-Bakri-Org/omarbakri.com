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
    jobTitle: "AI Product Builder & Enterprise Sales Leader",
    description:
      "AI product builder combining hands-on engineering with 15 years of enterprise FinTech sales leadership. Three production platforms shipped solo: ruleIQ, Helios, thredOS.",
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
      "AI product builder with enterprise FinTech expertise. Three production platforms: ruleIQ, Helios, thredOS.",
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
