/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

/**
 * Enforcing, but permissive where Next.js requires it.
 * Inline scripts (the small `js` class bootstrap and the App Router runtime) and
 * style attributes need 'unsafe-inline'. There is no nonce pipeline.
 * Google Maps is allowed only as a frame. No analytics origins are listed because
 * the site does not load any. 'unsafe-eval' is omitted.
 * upgrade-insecure-requests is omitted in `next dev` so localhost stays on http.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src https://maps.google.com https://www.google.com https://www.google.pt",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  isDev ? "" : "upgrade-insecure-requests",
]
  .filter(Boolean)
  .join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=(), browsing-topics=()",
  },
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
];

const nextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: "/about", destination: "/o-escritorio", permanent: true },
      { source: "/contact", destination: "/contacto", permanent: true },
      { source: "/contato", destination: "/contacto", permanent: true },
      { source: "/nacionalidade", destination: "/servicos/nacionalidade", permanent: true },
      // Legacy duplicate service URLs: send straight to the current pages with a 301.
      { source: "/servicos/visto-d2", destination: "/servicos/clientes-internacionais/visto-d2-empreendedores", statusCode: 301 },
      { source: "/servicos/visto-d7", destination: "/servicos/clientes-internacionais/visto-d7-rendimentos", statusCode: 301 },
      { source: "/servicos/reagrupamento", destination: "/servicos/clientes-internacionais/reagrupamento-familiar", statusCode: 301 },
      { source: "/visto-d2", destination: "/servicos/clientes-internacionais/visto-d2-empreendedores", permanent: true },
      { source: "/visto-d7", destination: "/servicos/clientes-internacionais/visto-d7-rendimentos", permanent: true },
      { source: "/reagrupamento", destination: "/servicos/clientes-internacionais/reagrupamento-familiar", permanent: true },
      { source: "/en/services/nationality", destination: "/en/services", permanent: true },
      { source: "/en/privacidade", destination: "/en/privacy", permanent: true },
    ];
  },
};

module.exports = nextConfig;
