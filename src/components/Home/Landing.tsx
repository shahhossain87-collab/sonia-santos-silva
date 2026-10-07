import { mapsLink, site, whatsappHref } from "@/config/site";
import { pathFor, type RouteKey } from "@/i18n/routes";
import Link from "next/link";
import styles from "./Landing.module.css";

type Locale = "pt" | "en";

const copy = {
  pt: {
    place: "Lisboa · Laranjeiras",
    lead: "Acompanhamento jurídico em Lisboa, em português e inglês.",
    role: "Advogada",
    license: "Cédula",
    whatsapp: "Falar no WhatsApp",
    note: "A primeira conversa serve para perceber se o escritório pode aceitar o assunto. Não é aconselhamento online.",
    areas: "Áreas de atuação",
    areasTitle:
      "Imigração e nacionalidade primeiro. O resto do escritório, a seguir.",
    otherTitle: "O meu caso não está aqui",
    otherLead:
      "Pode marcar uma primeira conversa na mesma. O escritório confirma se o assunto se enquadra.",
    office: "Escritório",
    city: "Laranjeiras",
    addressLabel: "Morada",
    maps: "Abrir no Google Maps",
    hoursLabel: "Atendimento",
    hours: "Segunda a sexta, 10:00–18:00",
    languages: "Português e inglês",
    photoAlt: "Lisboa, junto ao escritório em Laranjeiras",
    message: "Olá, gostaria de agendar uma consulta.",
  },
  en: {
    place: "Lisbon · Laranjeiras",
    lead: "Legal support in Lisbon, in Portuguese and English.",
    role: "Lawyer",
    license: "Professional licence",
    whatsapp: "WhatsApp",
    note: "The first conversation is to see whether the office can take the matter. It is not online legal advice.",
    areas: "Areas of practice",
    areasTitle: "Immigration and nationality first. The rest of the office follows.",
    otherTitle: "My case is not listed",
    otherLead:
      "You can still book a first conversation. The office will confirm whether the matter fits.",
    office: "Office",
    city: "Laranjeiras",
    addressLabel: "Address",
    maps: "Open in Google Maps",
    hoursLabel: "Hours",
    hours: "Monday to Friday, 10:00–18:00",
    languages: "Portuguese and English",
    photoAlt: "Lisbon, near the office in Laranjeiras",
    message: "Hello, I would like to book a consultation.",
  },
} as const;

const primary: {
  key: RouteKey;
  image: string;
  pt: { title: string; text: string; alt: string };
  en: { title: string; text: string; alt: string };
}[] = [
  {
    key: "immigration",
    image: "/images/services/imigracao-vistos.jpg",
    pt: {
      title: "Imigração e vistos",
      text: "Vistos, autorização de residência, renovações, reagrupamento familiar e notificações da AIMA.",
      alt: "Passaporte português e visto junto a uma mala no aeroporto de Lisboa",
    },
    en: {
      title: "Immigration and visas",
      text: "Visas, residence permits, renewals, family reunification and AIMA notices.",
      alt: "Portuguese passport and visa beside a suitcase at Lisbon airport",
    },
  },
  {
    key: "nationality",
    image: "/images/services/nacionalidade.jpg",
    pt: {
      title: "Nacionalidade portuguesa",
      text: "Residência, filhos e netos, casamento ou união de facto, e crianças nascidas em Portugal.",
      alt: "Mão a segurar um passaporte português com a bandeira de Portugal ao fundo",
    },
    en: {
      title: "Portuguese nationality",
      text: "Residence, children and grandchildren, marriage or partnership, and children born in Portugal.",
      alt: "Hand holding a Portuguese passport with the flag of Portugal behind",
    },
  },
];

const others: {
  key: RouteKey;
  pt: [string, string];
  en: [string, string];
}[] = [
  {
    key: "tenancy",
    pt: ["Arrendamento", "Contratos, rendas e entrega do imóvel."],
    en: ["Tenancy", "Leases, rent and return of the property."],
  },
  {
    key: "debtRecovery",
    pt: ["Recuperação de crédito", "Cobrança extrajudicial ou em tribunal."],
    en: ["Debt recovery", "Recovery before court, or in court."],
  },
  {
    key: "companyLaw",
    pt: ["Direito das sociedades", "Constituição, quotas e gerência."],
    en: ["Company law", "Formation, quotas and management."],
  },
  {
    key: "propertyInheritance",
    pt: ["Património e sucessões", "Heranças, partilhas e testamentos."],
    en: ["Property and inheritance", "Estates, division and wills."],
  },
  {
    key: "criminalLaw",
    pt: ["Direito penal", "Defesa desde a denúncia ao tribunal."],
    en: ["Criminal law", "Defence from the complaint through to court."],
  },
  {
    key: "administrativeLaw",
    pt: ["Direito administrativo", "Decisões e notificações de entidades públicas."],
    en: ["Administrative law", "Decisions and notices from public bodies."],
  },
];

export default function Landing({ locale = "pt" }: { locale?: Locale }) {
  const text = copy[locale];

  return (
    <>
      <section className={styles.hero} aria-labelledby="home-heading">
        <div className={styles.photo}>
          <img src="/images/home/lisboa-editorial.webp" alt={text.photoAlt} />
        </div>
        <div className={styles.copy}>
          <p className={styles.kicker}>{text.place}</p>
          <h1 id="home-heading">{site.officeName}</h1>
          <p className={styles.lead}>{text.lead}</p>
          <p className={styles.role}>
            {site.lawyerName} · {text.role} · {text.license} {site.license}
          </p>
          <a className={styles.button} href={whatsappHref(text.message)}>
            {text.whatsapp}
          </a>
          <p className={styles.note}>{text.note}</p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="areas-heading">
        <p className={styles.rule}>{text.areas}</p>
        <h2 id="areas-heading">{text.areasTitle}</h2>
        <div className={styles.cards}>
          {primary.map((item, index) => {
            const card = item[locale];
            return (
              <Link className={styles.card} href={pathFor(locale, item.key)} key={item.key}>
                <img src={item.image} alt={card.alt} />
                <div>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <ul className={styles.list}>
          {others.map((item) => {
            const [title, description] = item[locale];
            return (
              <li key={item.key}>
                <Link href={pathFor(locale, item.key)}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.other}>
          <div>
            <strong>{text.otherTitle}</strong>
            <p>{text.otherLead}</p>
          </div>
          <a className={styles.ghost} href={whatsappHref(text.message)}>
            {text.whatsapp}
          </a>
        </div>
      </section>

      <section className={styles.office} aria-labelledby="office-heading">
        <div className={styles.officeInner}>
          <div>
            <p className={styles.rule}>{text.office}</p>
            <h2 id="office-heading">{text.city}</h2>
          </div>
          <div>
            <h3>{text.addressLabel}</h3>
            <p>
              Rua Abranches Ferrão, 11 A
              <br />
              1600-296 Lisboa
            </p>
            <a href={mapsLink}>{text.maps}</a>
          </div>
          <div>
            <h3>{text.hoursLabel}</h3>
            <p>
              {text.hours}
              <br />
              {text.languages}
              <br />
              {site.email}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
