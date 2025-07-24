/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Désactive l'utilisation de lightningcss
    swcPlugins: [],
    optimizeCss: false,
  },
};

module.exports = nextConfig;
