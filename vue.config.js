module.exports = {
  transpileDependencies: ['vuetify'],

  pwa: {
    name: 'Jean Da Rocha - Vuetify Music Player',
    themeColor: '#EE44AA',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      name: 'Jean Da Rocha - Vuetify Music Player',
      scope: '/',
      start_url: '/',
      display: 'standalone',
      theme_color: '#EE44AA',
      background_color: '#000000',
      icons: [
        {
          src: './img/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: './img/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    iconPaths: {
      favicon32: './img/icons/favicon-32x32.png',
      favicon16: './img/icons/favicon-16x16.png',
      appleTouchIcon: './img/icons/apple-touch-icon.png',
      maskIcon: '.img/icons/safari-pinned-tab.svg',
      msTileImage: '.img/icons/mstile-150x150.png',
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // skipWaiting: true,
      swSrc: 'src/service-worker.js',
      exclude: [/.map$/],
    },
  },
};
