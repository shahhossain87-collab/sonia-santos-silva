import PageHero from "@/components/PageHero";
import { pageMetadata } from "@/i18n/metadata";

export const metadata = pageMetadata("en", "faq", {
  title: "Frequently asked questions",
  description:
    "Answers about consultations, documents, timeframes and what the office can (and cannot) guarantee.",
});

const faqs = [
  {
    q: "Does the initial consultation have a cost?",
    a: "The consultation terms will be confirmed at first contact. No fee information is published on this website until an approved fee schedule is in place.",
  },
  {
    q: "Can you guarantee approval of a visa or nationality application?",
    a: "No. No communication from this office should be read as a guarantee of outcome. The decision always rests with the competent authority.",
  },
  {
    q: "Do you provide services in English?",
    a: "Yes. Services are available in Portuguese and English.",
  },
  {
    q: "Do I need to be in Portugal to get started?",
    a: "It depends on the type of application. Many matters start remotely, with scanned documents sent first and originals provided later when required.",
  },
  {
    q: "How do you handle my data?",
    a: "Only to provide legal services and comply with legal obligations. See the Privacy page.",
  },
];

export default function EnglishFaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="General information. It does not replace an assessment of your case."
        crumbs={[{ label: "Home", href: "/en" }, { label: "FAQ" }]}
      />
      <section className="py-16">
        <div className="container max-w-3xl divide-y divide-navy/10 bg-white px-6 shadow-one sm:px-10">
          {faqs.map((item) => (
            <details key={item.q} className="py-6">
              <summary className="cursor-pointer font-semibold">{item.q}</summary>
              <p className="mt-3 text-sm leading-relaxed text-body-color">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
