import BrandMark from "@/components/BrandMark";
import ContactForm from "@/components/ContactForm";
import CtaLink, { WhatsAppIcon } from "@/components/CtaLink";
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
      <section className="border-b border-navy/10 bg-white py-6 md:py-7">
        <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[11px] tracking-[0.16em] text-gold uppercase">
              {copy.contactPage.whatsapp}
            </p>
            <a
              href={`https://wa.me/${site.phoneDigits}`}
              className="mt-1 block text-sm text-navy hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {site.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.16em] text-gold uppercase">
              {copy.contactPage.email}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block break-all text-sm text-navy hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.16em] text-gold uppercase">
              {copy.contactPage.address}
            </p>
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm text-navy hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              {site.addressLine}
            </a>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.16em] text-gold uppercase">
              {copy.contactPage.hours}
            </p>
            <p className="mt-1 text-sm text-navy">{copy.home.hours}</p>
          </div>
        </div>
        <div className="container mt-5">
          <CtaLink>
            <WhatsAppIcon />
            {copy.common.whatsapp}
          </CtaLink>
        </div>
      </section>
      <section className="py-10 md:py-12">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <BrandMark className="mb-6" />
            <h2 className="font-display text-3xl">{copy.contactPage.detailsTitle}</h2>
            <dl className="mt-6 space-y-4 text-sm">
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
            </dl>
            <p className="mt-8 text-sm leading-relaxed text-body-color">
              {site.disclaimer}
            </p>
          </div>
          <ContactForm />
        </div>
        <div className="container mt-10">
          <h2 className="font-display text-3xl">{copy.contactPage.mapTitle}</h2>
          <p className="mt-2 text-sm text-body-color">{copy.contactPage.mapLead}</p>
          <OfficeMap className="mt-6 h-[320px] md:h-[380px]" />
        </div>
      </section>
    </>
  );
}
