// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/index.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
  ],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },
  imports: {
    autoImport: true,
    dirs: [
      "./blocks",
      "./components",
      "./configs",
      "./utils",
    ],
  },
})
