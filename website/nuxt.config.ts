// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  srcDir: "src/",

  imports: {
    autoImport: false,
  },

  typescript: {},

  css: ["~/assets/css/main.css", "~/assets/fonts/inter/web/inter.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/eslint"],
});
