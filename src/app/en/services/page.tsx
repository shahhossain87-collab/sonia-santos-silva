import PageHero from "@/components/PageHero";
import ServicesIndex from "@/components/ServicesIndex";
import { getCopy } from "@/i18n/copy";
import { pageMetadata } from "@/i18n/metadata";
import { pathFor } from "@/i18n/routes";

const copy = getCopy("en");

export const metadata = pageMetadata("en", "services", {
  title: copy.meta.servicesTitle,
  description: copy.meta.servicesDescription,
});

export default function EnglishServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={copy.servicesPage.eyebrow}
        title={copy.servicesPage.title}
        description={copy.servicesPage.description}
        crumbs={[
          { label: copy.nav[0].title, href: pathFor("en", "home") },
          { label: copy.nav[2].title },
        ]}
      />
      <ServicesIndex locale="en" />
    </>
  );
}
