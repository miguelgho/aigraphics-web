// Las direcciones viejas en español ahora viven bajo /es.
const spanishMoves = [
  ["/productos", "/es/productos"],
  ["/productos/:slug", "/es/productos/:slug"],
  ["/taller", "/es/taller"],
  ["/diseno-web", "/es/diseno-web"],
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    return [
      ...spanishMoves.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
