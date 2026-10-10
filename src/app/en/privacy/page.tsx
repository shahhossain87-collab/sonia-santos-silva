import PageHero from "@/components/PageHero";
import { site } from "@/config/site";
import { pageMetadata } from "@/i18n/metadata";

export const metadata = pageMetadata("en", "privacy", {
  title: "Privacy",
  description: "Information about the processing of personal data on this website.",
});

export default function EnglishPrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        description="Provisional text, aligned with the GDPR, pending final details of the data controller."
        crumbs={[{ label: "Home", href: "/en" }, { label: "Privacy" }]}
      />
      <section className="py-16">
        <div className="container max-w-3xl space-y-6 text-sm leading-relaxed text-body-color">
          <p>
            The data controller is {site.officeName} ({site.descriptor.en}),
            with a professional address at {site.addressLine}.
            Lawyer responsible: {site.lawyerName}, professional licence {site.license}.
            Contact: {site.email}.
          </p>
          <h2 className="font-display text-2xl text-navy">Data we may process</h2>
          <p>
            Identification, contact details, information about your legal matter
            and documents you send us for legal review.
          </p>
          <h2 className="font-display text-2xl text-navy">Purposes</h2>
          <p>
            Responding to contact requests, providing legal services, complying
            with legal obligations and, if you consent, sending informational
            communications.
          </p>
          <h2 className="font-display text-2xl text-navy">Retention and rights</h2>
          <p>
            Data is retained for as long as necessary for its purpose and to meet
            legal obligations. You may request access, rectification, erasure,
            restriction and portability, object to processing, and lodge a complaint
            with the Portuguese Data Protection Authority (Comissão Nacional de Proteção de Dados).
          </p>
          <p>
            The homepage and contact page include an embedded Google Maps map,
            which loads content from Google and may set Google cookies, as described
            in Google&apos;s{" "}
            <a href="https://policies.google.com/privacy?hl=en" className="text-gold-dark underline hover:text-navy">
              privacy policy
            </a>.
          </p>
          <p>
            The information on this website does not constitute legal advice or a
            guarantee of results. Each case depends on an assessment of the individual
            circumstances and the decision of the competent authorities.
          </p>
        </div>
      </section>
    </>
  );
}
