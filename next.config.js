/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['yourdomain.com'], // ajoute ici les domaines autorisés pour les images (CDN, etc.)
  },
}

module.exports = nextConfig
