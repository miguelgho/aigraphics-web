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
    // Sin versiones de más de 1600 px: las fotos de trabajos no las necesitan y pesarían de más.
    deviceSizes: [640, 750, 828, 1080, 1200, 1600],
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
