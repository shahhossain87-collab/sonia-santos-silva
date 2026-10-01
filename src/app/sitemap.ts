import type { MetadataRoute } from "next";
import { practiceAreas } from "@/data/practice-areas";
import { absoluteUrl } from "@/i18n/metadata";
import { practiceAreaPath, practiceTopicPath } from "@/i18n/routes";

const paths = [
  "/",
  "/en",
  "/o-escritorio",
  "/en/about",
  "/contacto",
  "/en/contact",
  "/servicos",
  "/en/services",
  "/servicos/imigracao-e-vistos",
  "/en/services/immigration-and-visas",
  "/servicos/imigracao-e-vistos/vistos-e-autorizacao-de-residencia",
  "/en/services/immigration-and-visas/visas-and-residence-permits",
  "/servicos/imigracao-e-vistos/renovacao-e-regularizacao-da-residencia",
  "/en/services/immigration-and-visas/residence-renewal-and-regularisation",
  "/servicos/imigracao-e-vistos/reagrupamento-familiar",
  "/en/services/immigration-and-visas/family-reunification",
  "/servicos/imigracao-e-vistos/notificacoes-audiencia-previa-e-indeferimentos-da-aima",
  "/en/services/immigration-and-visas/aima-notices-audiencia-previa-and-refusals",
  "/servicos/imigracao-e-vistos/processos-judiciais-contra-a-aima",
  "/en/services/immigration-and-visas/court-proceedings-against-aima",
  "/servicos/imigracao-e-vistos/nacionalidade-portuguesa",
  "/en/services/immigration-and-visas/portuguese-nationality",
  "/servicos/visto-d2",
  "/servicos/visto-d7",
  "/servicos/reagrupamento",
  "/faq",
  "/privacidade",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const practicePaths = practiceAreas.flatMap((area) => [
    practiceAreaPath("pt", area),
    practiceAreaPath("en", area),
    ...area.topics.flatMap((topic) => [
      practiceTopicPath("pt", area, topic),
      practiceTopicPath("en", area, topic),
    ]),
  ]);

  return [...paths, ...practicePaths].map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
  }));
}
