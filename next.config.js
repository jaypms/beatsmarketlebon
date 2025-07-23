/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yourdomain.com'], // Remplace 'yourdomain.com' par les domaines d'images autorisés (ex: 'localhost', 'vercel.app', etc.)
  },
};

module.exports = nextConfig;
