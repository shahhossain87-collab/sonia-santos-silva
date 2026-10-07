/** @type {import('next').NextConfig} */
const nextConfig = {
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
      { source: "/en/faq", destination: "/en", permanent: true },
      { source: "/en/privacy", destination: "/en", permanent: true },
      { source: "/en/privacidade", destination: "/en", permanent: true },
      { source: "/en/cookies", destination: "/en", permanent: true },
    ];
  },
};

module.exports = nextConfig;
