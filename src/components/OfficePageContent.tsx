import Office from "@/components/Home/Office";
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
      <section className="bg-cream py-6 md:py-8">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl text-navy md:text-3xl">{copy.aboutPage.missionTitle}</h2>
          <div className="prose-legal mt-4">
            {copy.aboutPage.mission.slice(0, 2).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-6 grid gap-3 md:grid-cols-3">
            {copy.aboutPage.values.map((item) => (
              <li key={item.title} className="border border-gold/25 bg-white p-4">
                <h3 className="mb-2 text-sm font-semibold text-navy">{item.title}</h3>
                <p className="text-sm text-body-color">{item.text}</p>
              </li>
            ))}
          </ul>
          <WhatsAppButton label={copy.aboutPage.schedule} className="mt-5" />
        </div>
      </section>
      <Team />
      <Office />
    </>
  );
}
