import { site } from "@/config/site";
import { getCopy } from "@/i18n/copy";
import type { Locale } from "@/i18n/locales";
import { pathFor } from "@/i18n/routes";
import { absoluteUrl } from "@/i18n/metadata";

export default function JsonLd({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.officeName,
    alternateName: site.shortMark,
    slogan: copy.brand.descriptor,
    description: copy.meta.homeDescription,
    url: absoluteUrl(pathFor(locale, "home")),
    image: absoluteUrl("/images/logo/jgl-lockup.png"),
    telephone: `+${site.phoneDigits}`,
    email: site.email,
    areaServed: {
      "@type": "Country",
      name: "Portugal",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Abranches Ferrão, 11 A",
      postalCode: "1600-296",
      addressLocality: "Lisboa",
      addressCountry: "PT",
    },
    knowsLanguage: ["pt", "en"],
    employee: {
      "@type": "Person",
      name: site.lawyerName,
      jobTitle: locale === "en" ? "Lawyer" : "Advogada",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
