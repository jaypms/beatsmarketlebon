/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    disableCssModulesLightningCss: true
  },
  images: {
    domains: ['yourdomain.com'],
  },
}

module.exports = nextConfig
