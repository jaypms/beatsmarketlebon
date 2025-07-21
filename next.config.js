/** @type {import('next').NextConfig} */
const nextConfig = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      ignored: [
        '**/node_modules',
        '**/.next',
        '/data/**',        // ignore tous les dossiers /data
        '/data/data/**',   // ignore aussi /data/data
        '/',               // ignore la racine /
      ],
    }
    return config
  },
}

module.exports = nextConfig
