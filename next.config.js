/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yourdomain.com'], // Remplace 'yourdomain.com' par ton ou tes domaines réels, ex: 'localhost', 'vercel.app'
  },
};

module.exports = nextConfig;
