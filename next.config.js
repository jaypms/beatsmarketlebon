// next.config.js
module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,               // forcer le polling, important sous Termux
      ignored: [
        '**/node_modules',
        '**/.next',
        '/data/**',             // ignore tout sous /data
        '/data/data/**'         // ignore /data/data aussi
      ],
    }
    return config
  },
}
