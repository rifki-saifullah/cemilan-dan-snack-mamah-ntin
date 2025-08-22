import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s - Cemilan dan Snack Mamah Ntin',
      meta: [
        { name: 'charset', content: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Rifki Saifullah' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png'},
      ],
    },
  },
  modules: ["@nuxtjs/sitemap", "@nuxtjs/robots"],
  sitemap: {
    hostname: "https://cemilan-dan-snack-mamah-ntin.id",
    gzip: true,
  },
  robots: {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: "https://cemilan-dan-snack-mamah-ntin.id",
  },
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
