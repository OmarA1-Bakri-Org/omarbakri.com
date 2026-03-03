export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Omar Al-Bakri",
    url: "https://omarbakri.com",
    jobTitle: "Director, Partnerships & Customer Solutions",
    worksFor: {
      "@type": "Organization",
      name: "RTGS.global",
      url: "https://rtgs.global",
    },
    description:
      "FinTech sales leader with 15+ years in Financial Services. Specialising in cross-border payments, AI strategy, and business development across ASIAPAC.",
    knowsAbout: [
      "FinTech",
      "Cross-border payments",
      "AI strategy",
      "Business development",
      "Partnership management",
      "Client solutions",
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
      "Personal site of Omar Al-Bakri — Director at RTGS.global. FinTech, AI strategy, and cross-border payments.",
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
    dateModified: new Date().toISOString().split("T")[0],
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
