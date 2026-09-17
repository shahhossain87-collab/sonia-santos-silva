import { Menu } from "@/types/menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Início",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "O Escritório",
    path: "/o-escritorio",
    newTab: false,
  },
  {
    id: 3,
    title: "Serviços",
    path: "/servicos",
    newTab: false,
  },
  {
    id: 4,
    title: "Contacto",
    path: "/contato",
    newTab: false,
  },
];

export const footerNav = {
  escritorio: [
    { title: "O Escritório", path: "/o-escritorio" },
    { title: "Equipa", path: "/o-escritorio#equipa" },
    { title: "FAQ", path: "/faq" },
  ],
  servicos: [
    { title: "Todos os serviços", path: "/servicos" },
    { title: "Imigração e Vistos", path: "/servicos#imigracao" },
    { title: "Nacionalidade Portuguesa", path: "/servicos/nacionalidade" },
    { title: "Arrendamento", path: "/servicos#arrendamento" },
    { title: "Recuperação de Crédito", path: "/servicos#recuperacao-credito" },
    { title: "Direito das Sociedades", path: "/servicos#sociedades" },
    { title: "Património e Sucessões", path: "/servicos#patrimonio" },
  ],
  legal: [
    { title: "Privacidade", path: "/privacidade" },
    { title: "Cookies", path: "/cookies" },
    { title: "Contacto", path: "/contato" },
  ],
};
