/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/about", destination: "/o-escritorio", permanent: false },
      { source: "/contact", destination: "/contacto", permanent: false },
      { source: "/contato", destination: "/contacto", permanent: false },
      { source: "/en/services/nationality", destination: "/en/services", permanent: false },
      { source: "/en/faq", destination: "/en", permanent: false },
      { source: "/en/privacy", destination: "/en", permanent: false },
      { source: "/en/privacidade", destination: "/en", permanent: false },
      { source: "/en/cookies", destination: "/en", permanent: false },
    ];
  },
};

module.exports = nextConfig;
