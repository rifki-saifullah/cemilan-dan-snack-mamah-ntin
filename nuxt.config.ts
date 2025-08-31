import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: "%s - Cemilan dan Snack Mamah Ntin",
      title: "Cemilan dan Snack Mamah Ntin",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Cemilan & Snack Mamah Ntin dari Kedungdalem Gegesik. Aneka snack, keripik, dan camilan khas rumahan untuk oleh-oleh dan UMKM lokal."
        },
        {
          name: "keywords",
          content:
            "cemilan mamah ntin, snack mamah ntin, kedungdalem gegesik, umkm kedungdalem, camilan rumahan, keripik kedungdalem, snack tradisional"
        },
        { name: "author", content: "Rifki Saifullah" },
        // 🔑 Ganti dengan kode verifikasi dari Google Search Console
        { name: "google-site-verification", content: "snYW0PRTkFfZdYskRIeFCux8LsOFvtQ8bzbKStGlFi4" },
        // Open Graph
        { property: "og:title", content: "Cemilan & Snack Mamah Ntin" },
        {
          property: "og:description",
          content:
            "Cemilan & Snack Mamah Ntin dari Kedungdalem Gegesik. Cita rasa khas rumahan, cocok untuk oleh-oleh dan camilan keluarga."
        },
        { property: "og:image", content: "/og-image.jpg" },
        {
          property: "og:url",
          content: "https://cemilan-dan-snack-mamah-ntin.id"
        },
        { property: "og:type", content: "website" }
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/logo.png" },
        {
          rel: "canonical",
          href: "https://cemilan-dan-snack-mamah-ntin.id"
        }
      ]
    }
  },

  modules: ["@nuxtjs/sitemap", "@nuxtjs/robots"],

  site: {
    url: "https://cemilan-dan-snack-mamah-ntin.id"
  },

  sitemap: {
    hostname: "https://cemilan-dan-snack-mamah-ntin.id",
    gzip: true,
    xsl: false
  },

  robots: {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://cemilan-dan-snack-mamah-ntin.id/sitemap.xml"
  },

  ssr: true,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()]
  }
});

