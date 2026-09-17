import BrandMark from "@/components/BrandMark";
import Office from "@/components/Home/Office";
import OfficeGallery from "@/components/Home/OfficeGallery";
import Team from "@/components/Home/Team";
import PageHero from "@/components/PageHero";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getCopy } from "@/i18n/copy";
import { pathFor } from "@/i18n/routes";
import type { Locale } from "@/i18n/locales";

export default function OfficePageContent({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <>
      <PageHero
        eyebrow={copy.aboutPage.eyebrow}
        title={copy.aboutPage.title}
        description={copy.aboutPage.description}
        crumbs={[
          { label: copy.nav[0].title, href: pathFor(locale, "home") },
          { label: copy.nav[1].title },
        ]}
      />
      <section className="bg-cream py-16 dark:bg-navy">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="prose-legal">
            <BrandMark className="mb-8" />
            <h2 className="font-display mb-4 text-3xl text-navy dark:text-cream">
              {copy.aboutPage.missionTitle}
            </h2>
            {copy.aboutPage.mission.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <WhatsAppButton label={copy.aboutPage.schedule} className="mt-4" />
          </div>
          <ul className="space-y-4">
            {copy.aboutPage.values.map((item) => (
              <li
                key={item.title}
                className="rounded-sm border border-gold/25 bg-white p-5 dark:bg-navy-soft"
              >
                <h3 className="mb-2 font-semibold text-navy dark:text-cream">
                  {item.title}
                </h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Team />
      <OfficeGallery />
      <Office />
    </>
  );
}
