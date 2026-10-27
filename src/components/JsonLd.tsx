import { site } from "@/config/site";
import { getCopy } from "@/i18n/copy";
import type { Locale } from "@/i18n/locales";
import { absoluteUrl } from "@/i18n/metadata";
import { pathFor } from "@/i18n/routes";

export default function JsonLd({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const officeId = `${site.url}/#office`;
  const attorneyId = `${site.url}/#sonia-santos-da-silva`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LegalService", "Attorney"],
        "@id": officeId,
        name: site.officeName,
        alternateName: [site.shortMark, "GJL Advogados"],
        slogan: copy.brand.descriptor,
        description: copy.meta.homeDescription,
        url: site.url,
        image: absoluteUrl("/images/og/gjl-og.png"),
        logo: absoluteUrl("/images/logo/gjl-lockup.png"),
        telephone: `+${site.phoneDigits}`,
        email: site.email,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: `+${site.phoneDigits}`,
            availableLanguage: ["pt-PT", "en"],
          },
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: `+${site.mobileDigits}`,
            availableLanguage: ["pt-PT", "en"],
          },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Abranches Ferrão, 11 A",
          postalCode: "1600-296",
          addressLocality: "Lisboa",
          addressCountry: "PT",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "18:00",
        },
        areaServed: {
          "@type": "Country",
          name: "Portugal",
        },
        knowsLanguage: ["pt-PT", "en"],
        employee: { "@id": attorneyId },
      },
      {
        "@type": "Person",
        "@id": attorneyId,
        name: site.lawyerName,
        jobTitle: locale === "en" ? "Lawyer" : "Advogada",
        url: absoluteUrl(pathFor(locale, "about")),
        worksFor: { "@id": officeId },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: locale === "en" ? "Professional licence" : "Cédula profissional",
          identifier: site.license,
          recognizedBy: {
            "@type": "Organization",
            name: "Ordem dos Advogados",
            url: "https://portal.oa.pt/",
          },
        },
        memberOf: {
          "@type": "Organization",
          name: "Ordem dos Advogados",
          url: "https://portal.oa.pt/",
        },
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
