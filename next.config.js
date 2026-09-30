/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/o-escritorio", permanent: true },
      { source: "/contact", destination: "/contacto", permanent: true },
      { source: "/contato", destination: "/contacto", permanent: true },
      { source: "/nacionalidade", destination: "/servicos/nacionalidade", permanent: true },
      { source: "/visto-d2", destination: "/servicos/visto-d2", permanent: true },
      { source: "/visto-d7", destination: "/servicos/visto-d7", permanent: true },
      { source: "/reagrupamento", destination: "/servicos/reagrupamento", permanent: true },
      { source: "/en/services/nationality", destination: "/en/services", permanent: true },
      { source: "/en/faq", destination: "/en", permanent: true },
      { source: "/en/privacy", destination: "/en", permanent: true },
      { source: "/en/privacidade", destination: "/en", permanent: true },
      { source: "/en/cookies", destination: "/en", permanent: true },
    ];
  },
};

module.exports = nextConfig;
