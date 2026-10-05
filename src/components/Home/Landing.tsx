import { mapsLink, site, whatsappHref } from "@/config/site";
import styles from "./Landing.module.css";

const services = {
  pt: [
    { title: "Imigração", href: "/servicos/imigracao-e-vistos", image: "/images/services/imigracao-vistos.jpg", items: ["Vistos D1, D2, D3 e D6", "Reagrupamento familiar", "AIMA e renovações"] },
    { title: "Nacionalidade", href: "/servicos/nacionalidade", image: "/images/services/nacionalidade.jpg", items: ["Tempo de residência", "Descendência", "Casamento ou união"] },
    { title: "Arrendamento", href: "/servicos#arrendamento", image: "/images/services/arrendamento.jpg", items: ["Contrato", "Despejo", "Obras e caução"] },
    { title: "Crédito", href: "/servicos#recuperacao-credito", image: "/images/services/recuperacao-credito.jpg", items: ["Faturas por pagar", "Injunção", "Acordo de pagamento"] },
    { title: "Sociedades", href: "/servicos#sociedades", image: "/images/services/sociedades.jpg", items: ["Abrir empresa", "Sócios", "Contratos comerciais"] },
    { title: "Património", href: "/servicos#patrimonio", image: "/images/services/patrimonio.jpg", items: ["Compra e venda", "Heranças", "Partilhas"] },
    { title: "Direito penal", href: "/servicos#penal", image: "/images/services/direito-penal.jpg", items: ["Queixa", "Defesa", "Primeiro atendimento"] },
    { title: "Administrativo", href: "/servicos#administrativo", image: "/images/services/direito-administrativo.jpg", items: ["Finanças", "Licenças", "Atos da administração"] },
  ],
  en: [
    { title: "Immigration", href: "/en/services/immigration-and-visas", image: "/images/services/imigracao-vistos.jpg", items: ["D1, D2, D3 and D6 visas", "Family reunion", "AIMA and renewals"] },
    { title: "Nationality", href: "/en/services", image: "/images/services/nacionalidade.jpg", items: ["Residence time", "Descent", "Marriage or partnership"] },
    { title: "Tenancy", href: "/en/services", image: "/images/services/arrendamento.jpg", items: ["Lease", "Eviction", "Works and deposit"] },
    { title: "Debt recovery", href: "/en/services", image: "/images/services/recuperacao-credito.jpg", items: ["Unpaid invoices", "Payment order", "Payment plan"] },
    { title: "Companies", href: "/en/services", image: "/images/services/sociedades.jpg", items: ["Open a company", "Shareholders", "Commercial contracts"] },
    { title: "Property", href: "/en/services", image: "/images/services/patrimonio.jpg", items: ["Buying and selling", "Inheritance", "Division of assets"] },
    { title: "Criminal law", href: "/en/services", image: "/images/services/direito-penal.jpg", items: ["Complaint", "Defence", "First meeting"] },
    { title: "Administrative", href: "/en/services", image: "/images/services/direito-administrativo.jpg", items: ["Tax office", "Licences", "Public decisions"] },
  ],
} as const;

const copy = {
  pt: {
    hint: "Escolha o serviço.",
    more: "Dentro de cada área",
    other: "Outro assunto",
    otherLead: "Não encontrou o seu caso? Pode marcar uma conversa. Isto não é aconselhamento online.",
    whatsapp: "Falar no WhatsApp",
    book: "Marcar hora",
    contact: "/contacto",
    contactLabel: "Contactar",
    message: "Olá, o meu caso não está na lista. Gostaria de marcar uma conversa.",
    office: "Escritório",
    role: "Advogada",
  },
  en: {
    hint: "Choose a service.",
    more: "Inside each area",
    other: "Other matter",
    otherLead: "Did not find your case? Book a conversation. This is not online legal advice.",
    whatsapp: "WhatsApp",
    book: "Book a time",
    contact: "/en/contact",
    contactLabel: "Contact us",
    message: "Hello, my case is not listed. I would like to book a conversation.",
    office: "Office",
    role: "Lawyer",
  },
} as const;

export default function Landing({ locale = "pt" }: { locale?: "pt" | "en" }) {
  const text = copy[locale];

  return (
    <section className={styles.landing} aria-labelledby="home-heading">
      <div className={styles.bg} aria-hidden="true">
        <img src="/images/home/lisboa-editorial.webp" alt="" />
      </div>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <div className={styles.logo}>GJL</div>
          <div>
            <small>LISBOA</small>
            <strong>{site.officeName}</strong>
          </div>
          <div className={styles.langs}>
            <a href="/" aria-current={locale === "pt" ? "page" : undefined}>PT</a>
            <a className={styles.en} href="/en" aria-current={locale === "en" ? "page" : undefined}>EN · English</a>
          </div>
        </div>
        <div className={styles.photo}>
          <img src="/images/team/equipa.jpg" alt="Equipa do Gabinete Jurídico Laranjeiras" />
        </div>
        <h1 id="home-heading">{site.lawyerName}</h1>
        <p className={styles.role}>{text.role} · Cédula {site.license}</p>
        <p className={styles.hint}>{text.hint}</p>
        <div className={styles.grid}>
          {services[locale].map((service) => (
            <a className={styles.card} href={service.href} key={service.title}>
              <img src={service.image} alt="" />
              <span>{service.title}</span>
            </a>
          ))}
        </div>
        <h2 className={styles.more}>{text.more}</h2>
        <div className={styles.groups}>
          {services[locale].map((service) => (
            <article className={styles.group} key={service.title}>
              <a href={service.href}>{service.title}</a>
              <ul>
                {service.items.map((item) => (
                  <li key={item}><a href={service.href}>{item}</a></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className={styles.other} id="outro">
          <strong>{text.other}</strong>
          <p>{text.otherLead}</p>
          <div className={styles.actions}>
            <a href={whatsappHref(text.message)}>{text.whatsapp}</a>
            <a href={text.contact}>{text.book}</a>
            <a href={text.contact}>{text.contactLabel}</a>
          </div>
        </div>
        <a className={styles.place} href={mapsLink}>
          <div>
            <small>{text.office}</small>
            <p>{site.addressLine}</p>
          </div>
          <span className={styles.map}>Google Maps</span>
        </a>
      </div>
    </section>
  );
}
