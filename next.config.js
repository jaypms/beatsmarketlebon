/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false, // On désactive Lightning CSS pour éviter les erreurs natives
  },
}

module.exports = nextConfig
