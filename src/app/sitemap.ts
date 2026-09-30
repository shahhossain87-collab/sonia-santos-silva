import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/i18n/metadata";

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
  "/servicos/nacionalidade",
  "/servicos/visto-d2",
  "/servicos/visto-d7",
  "/servicos/reagrupamento",
  "/servicos/clientes-internacionais",
  "/faq",
  "/privacidade",
  "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
  }));
}
