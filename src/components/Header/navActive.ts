const serviceLegacyPaths = ["/nacionalidade", "/visto-d2", "/visto-d7", "/reagrupamento"];
const contactLegacyPaths = ["/contato", "/contact", "/contacto"];

export function isNavActive(pathname: string, href: string, id: string) {
  if (href === "/" || href === "/en") {
    return pathname === href;
  }
  if (pathname === href || pathname.startsWith(`${href}/`)) {
    return true;
  }
  if (id === "servicos") {
    return serviceLegacyPaths.some(
      (path) => pathname === path || pathname.startsWith(`${path}/`),
    );
  }
  if (id === "contato") {
    return contactLegacyPaths.some(
      (path) => pathname === path || pathname.startsWith(`${path}/`),
    );
  }
  return false;
}
