/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yourdomain.com'], // Remplace 'yourdomain.com' par tes domaines d'images autorisés
  },
};

module.exports = nextConfig;
