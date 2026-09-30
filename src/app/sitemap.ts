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
