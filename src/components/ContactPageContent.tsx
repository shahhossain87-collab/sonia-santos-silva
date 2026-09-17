import BrandMark from "@/components/BrandMark";
import ContactForm from "@/components/ContactForm";
import OfficeMap from "@/components/OfficeMap";
import PageHero from "@/components/PageHero";
import { mapsLink, site } from "@/config/site";
import { getCopy } from "@/i18n/copy";
import { pathFor } from "@/i18n/routes";
import type { Locale } from "@/i18n/locales";

export default function ContactPageContent({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);

  return (
    <>
      <PageHero
        eyebrow={copy.contactPage.eyebrow}
        title={copy.contactPage.title}
        description={copy.contactPage.description}
        crumbs={[
          { label: copy.nav[0].title, href: pathFor(locale, "home") },
          { label: copy.nav[3].title },
        ]}
      />
      <section className="py-16">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <BrandMark className="mb-8" />
            <h2 className="font-display text-3xl">{copy.contactPage.detailsTitle}</h2>
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="tracking-[0.16em] text-gold uppercase">
                  {copy.contactPage.whatsapp}
                </dt>
                <dd className="mt-1">{site.phoneDisplay}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-gold uppercase">
                  {copy.contactPage.email}
                </dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="hover:text-gold-dark">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-gold uppercase">
                  {copy.contactPage.address}
                </dt>
                <dd className="mt-1">
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-dark"
                  >
                    {site.addressLine}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-gold uppercase">
                  {copy.contactPage.license}
                </dt>
                <dd className="mt-1">{site.license}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-gold uppercase">
                  {copy.contactPage.nif}
                </dt>
                <dd className="mt-1">{site.nif}</dd>
              </div>
              <div>
                <dt className="tracking-[0.16em] text-gold uppercase">
                  {copy.contactPage.hours}
                </dt>
                <dd className="mt-1">{copy.home.hours}</dd>
              </div>
            </dl>
            <p className="mt-8 text-sm leading-relaxed text-body-color">
              {site.disclaimer}
            </p>
          </div>
          <ContactForm />
        </div>
        <div className="container mt-12">
          <h2 className="font-display text-3xl">{copy.contactPage.mapTitle}</h2>
          <p className="mt-2 text-sm text-body-color">{copy.contactPage.mapLead}</p>
          <OfficeMap className="mt-6 h-[380px] md:h-[440px]" />
        </div>
      </section>
    </>
  );
}
