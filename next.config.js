/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['yourdomain.com'],
  },
  experimental: {
    disableCssModulesLightningCss: true,
  },
};

module.exports = nextConfig;
