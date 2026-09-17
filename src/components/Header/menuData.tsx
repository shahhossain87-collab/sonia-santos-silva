import { getCopy } from "@/i18n/copy";

const nav = getCopy("pt").nav;

export const menuData = nav.map((item, index) => ({
  id: index + 1,
  title: item.title,
  path: item.href,
  newTab: false,
}));

export default menuData;
