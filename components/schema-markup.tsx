export function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BlackBlockSheep",
    url: "https://blackblocksheep.com",
    logo: "https://blackblocksheep.com/logo.png",
    sameAs: ["https://medium.com/@blackblocksheep", "https://twitter.com/blackblocksheep"],
    founder: {
      "@type": "Person",
      name: "Mayra Silva",
    },
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mayra Silva",
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "BlackBlockSheep",
    },
    description: "Bitcoin educator focused on making Bitcoin accessible to everyone through grassroots education",
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BlackBlockSheep",
    url: "https://blackblocksheep.com",
    description: "Easy Bitcoin Help for Beginners with Real Support and Safe Usage",
    publisher: {
      "@type": "Organization",
      name: "BlackBlockSheep",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
