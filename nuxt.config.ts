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
    autoImport: true,
    configFile: './configs/formkit.config.ts',
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
  components: {
    global: true,
    dirs: ['~/blocks', '~/components'],
  },
  typescript: {
    strict: true,
  },
})
