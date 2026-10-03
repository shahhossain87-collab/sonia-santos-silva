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
      <section className="border-b border-navy/10 bg-white py-5 md:py-6">
        <div className="container grid gap-6 lg:grid-cols-2 lg:items-start">
          <div>
            <CtaLink>
              <WhatsAppIcon />
              {copy.contactPage.whatsapp}
            </CtaLink>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-[11px] tracking-[0.16em] text-gold uppercase">{copy.contactPage.email}</dt>
                <dd className="mt-1">
                  <a
                    href={"mailto:" + site.email}
                    className="break-all text-navy hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] tracking-[0.16em] text-gold uppercase">{copy.contactPage.address}</dt>
                <dd className="mt-1">
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    {site.addressLine}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] tracking-[0.16em] text-gold uppercase">{copy.contactPage.hours}</dt>
                <dd className="mt-1 text-navy">{copy.home.hours}</dd>
              </div>
            </dl>
          </div>
          <div>
            <h2 className="font-display text-2xl">{copy.contactPage.mapTitle}</h2>
            <p className="mt-1 text-sm text-body-color">{copy.contactPage.mapLead}</p>
            <OfficeMap className="mt-3 h-52 md:h-64" />
          </div>
        </div>
      </section>
      <section className="py-8 md:py-10">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl">{copy.contactPage.detailsTitle}</h2>
            <dl className="mt-4 text-sm">
              <dt className="tracking-[0.16em] text-gold uppercase">{copy.contactPage.license}</dt>
              <dd className="mt-1">{site.license}</dd>
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-body-color">{site.disclaimer}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
