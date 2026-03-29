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
    jobTitle: "Applied AI Product Builder",
    description:
      "AI Product Builder who shipped three production platforms (ruleIQ, Helios, ThreadOS). Full-stack engineer with 15+ years enterprise sales leadership in financial services.",
    knowsAbout: [
      "Agentic AI",
      "LangGraph",
      "Neo4j GraphRAG",
      "Full-Stack Engineering",
      "Enterprise Sales",
      "FinTech",
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
      "Personal site of Omar Al-Bakri — AI Product Builder. Agentic AI, full-stack engineering, and enterprise sales.",
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
