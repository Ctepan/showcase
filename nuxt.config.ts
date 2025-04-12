// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  css: ['~/assets/css/main.scss'],
  svgo: {
    componentPrefix: 'icon',
    defaultImport: 'component',
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/device',
    'nuxt-viewport',
    'nuxt-svgo',
  ],
});
