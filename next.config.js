/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false, // Désactive l'optimisation CSS native (LightningCSS)
  },
};

module.exports = nextConfig;
