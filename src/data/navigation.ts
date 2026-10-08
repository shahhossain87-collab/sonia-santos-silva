import { practiceAreas, type PracticeAreaKey } from "@/data/practice-areas";
import { immigrationItems } from "@/i18n/copy";
import type { Locale } from "@/i18n/locales";
import { pathFor, practiceTopicPath } from "@/i18n/routes";

export type NavLink = { title: string; href: string };
export type NavColumn = { title: string; href?: string; links: NavLink[] };
export type NavItem = {
  id: string;
  title: string;
  href: string;
  /** Path prefixes that mark this item as active. */
  match: string[];
  columns?: NavColumn[];
  /** Link shown at the foot of the dropdown. */
  more?: NavLink;
};

function area(key: PracticeAreaKey) {
  const found = practiceAreas.find((item) => item.key === key);
  if (!found) throw new Error(`Missing practice area ${key}`);
  return found;
}

function topicLinks(locale: Locale, key: PracticeAreaKey): NavLink[] {
  const practice = area(key);
  return practice.topics.map((topic) => ({
    title: topic.title[locale],
    href: practiceTopicPath(locale, practice, topic),
  }));
}

const otherAreas: PracticeAreaKey[] = [
  "tenancy",
  "propertyInheritance",
  "debtRecovery",
  "companyLaw",
  "criminalLaw",
  "administrativeLaw",
];

const labels = {
  pt: {
    home: "Início",
    office: "O Escritório",
    officeLink: "O escritório",
    team: "A equipa",
    faq: "Perguntas frequentes",
    contact: "Contacto",
    immigration: "Imigração e Vistos",
    international: "Clientes Internacionais",
    nationality: "Nacionalidade",
    nationalityFull: "Nacionalidade Portuguesa",
    other: "Outros Serviços",
    otherAreas: "Outras áreas de atuação",
    allAreas: "Ver todas as áreas de atuação",
    seeArea: "Ver a área",
  },
  en: {
    home: "Home",
    office: "The Office",
    officeLink: "About the office",
    team: "The team",
    faq: "FAQ",
    contact: "Contact",
    immigration: "Immigration & Visas",
    international: "International Clients",
    nationality: "Nationality",
    nationalityFull: "Portuguese Nationality",
    other: "Other Services",
    otherAreas: "Other areas of practice",
    allAreas: "View all areas of practice",
    seeArea: "View the area",
  },
} as const;

export function getMainNav(locale: Locale): NavItem[] {
  const t = labels[locale];
  const about = pathFor(locale, "about");
  const services = pathFor(locale, "services");
  const immigration = pathFor(locale, "immigration");
  const international = pathFor(locale, "internationalClients");
  const nationality = pathFor(locale, "nationality");
  const contact = pathFor(locale, "contact");

  const officeLinks: NavLink[] = [
    { title: t.officeLink, href: about },
    { title: t.team, href: `${about}#equipa` },
    ...(locale === "pt" ? [{ title: t.faq, href: "/faq" }] : []),
    { title: t.contact, href: contact },
  ];

  return [
    { id: "home", title: t.home, href: pathFor(locale, "home"), match: [] },
    {
      id: "office",
      title: t.office,
      href: about,
      match: [about],
      columns: [{ title: t.office, links: officeLinks }],
    },
    {
      id: "immigration",
      title: t.immigration,
      href: immigration,
      match: [immigration, international],
      columns: [
        {
          title: t.immigration,
          href: immigration,
          links: immigrationItems[locale].map((item) => ({ title: item.label, href: item.href })),
        },
        {
          title: t.international,
          href: international,
          links: topicLinks(locale, "internationalClients"),
        },
      ],
      more: { title: `${t.seeArea}: ${t.immigration}`, href: immigration },
    },
    {
      id: "nationality",
      title: t.nationality,
      href: nationality,
      match: [nationality],
      columns: [
        { title: t.nationalityFull, href: nationality, links: topicLinks(locale, "nationality") },
      ],
      more: { title: `${t.seeArea}: ${t.nationalityFull}`, href: nationality },
    },
    {
      id: "other",
      title: t.other,
      href: services,
      match: otherAreas.map((key) => pathFor(locale, key)),
      columns: [
        {
          title: t.otherAreas,
          links: otherAreas.map((key) => ({
            title: area(key).title[locale],
            href: pathFor(locale, key),
          })),
        },
      ],
      more: { title: t.allAreas, href: services },
    },
    { id: "contact", title: t.contact, href: contact, match: [contact, "/contato"] },
  ];
}

export function isNavItemActive(pathname: string, item: NavItem) {
  if (item.id === "home") return pathname === item.href;
  return item.match.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}
