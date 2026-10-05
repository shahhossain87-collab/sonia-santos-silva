import { mapsLink, site, whatsappHref } from "@/config/site";
import styles from "./Landing.module.css";

const services = {
  pt: [
    { title: "Imigração", href: "/servicos/imigracao-e-vistos", image: "/images/services/imigracao-vistos.jpg" },
    { title: "Nacionalidade", href: "/servicos/nacionalidade", image: "/images/services/nacionalidade.jpg" },
    { title: "Arrendamento", href: "/servicos#arrendamento", image: "/images/services/arrendamento.jpg" },
    { title: "Crédito", href: "/servicos#recuperacao-credito", image: "/images/services/recuperacao-credito.jpg" },
    { title: "Sociedades", href: "/servicos#sociedades", image: "/images/services/sociedades.jpg" },
    { title: "Património", href: "/servicos#patrimonio", image: "/images/services/patrimonio.jpg" },
    { title: "Direito penal", href: "/servicos#penal", image: "/images/services/direito-penal.jpg" },
    { title: "Administrativo", href: "/servicos#administrativo", image: "/images/services/direito-administrativo.jpg" },
  ],
  en: [
    { title: "Immigration", href: "/en/services/immigration-and-visas", image: "/images/services/imigracao-vistos.jpg" },
    { title: "Nationality", href: "/en/services", image: "/images/services/nacionalidade.jpg" },
    { title: "Tenancy", href: "/en/services", image: "/images/services/arrendamento.jpg" },
    { title: "Debt recovery", href: "/en/services", image: "/images/services/recuperacao-credito.jpg" },
    { title: "Companies", href: "/en/services", image: "/images/services/sociedades.jpg" },
    { title: "Property", href: "/en/services", image: "/images/services/patrimonio.jpg" },
    { title: "Criminal law", href: "/en/services", image: "/images/services/direito-penal.jpg" },
    { title: "Administrative", href: "/en/services", image: "/images/services/direito-administrativo.jpg" },
  ],
} as const;

const copy = {
  pt: {
    hint: "Escolha o serviço.",
    other: "O meu caso não está aqui",
    otherLead: "Pode marcar uma primeira conversa. Isto não é aconselhamento online.",
    whatsapp: "Falar no WhatsApp",
    book: "Marcar hora",
    contact: "/contacto",
    message: "Olá, o meu caso não está na lista. Gostaria de marcar uma conversa.",
    office: "Escritório",
    role: "Advogada",
  },
  en: {
    hint: "Choose a service.",
    other: "My case is not listed",
    otherLead: "You can book a first conversation. This is not online legal advice.",
    whatsapp: "WhatsApp",
    book: "Book a time",
    contact: "/en/contact",
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
        <div className={styles.other}>
          <strong>{text.other}</strong>
          <p>{text.otherLead}</p>
          <div className={styles.actions}>
            <a href={whatsappHref(text.message)}>{text.whatsapp}</a>
            <a href={text.contact}>{text.book}</a>
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
