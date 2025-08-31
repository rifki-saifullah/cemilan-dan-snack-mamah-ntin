<script setup>
import Australia from "@/assets/images/australia.jpg";
import AbuDabi from "@/assets/images/abu-dabi.jpg";
import Hongkong from "@/assets/images/hongkong.jpg";
import Iran from "@/assets/images/iran.jpg";
import Netherland from "@/assets/images/netherland.jpg";
import Singapore from "@/assets/images/singapore.jpg";
import Taiwan from "@/assets/images/taiwan.jpg";

import Keripik2 from "@/assets/images/keripik-2.jpeg";
import Keripik3 from "@/assets/images/keripik-3.jpeg";
import Menu14 from "@/assets/images/14.jpeg";

useHead({
  title: "Cemilan & Snack Mamah Ntin Kedungdalem Gegesik | UMKM Cirebon",
  meta: [
    {
      name: "description",
      content:
        "Cemilan dan Snack Mamah Ntin dari Kedungdalem, Gegesik, Cirebon. Jajanan rumahan gurih, renyah, dan fresh setiap hari. Cocok untuk keluarga & oleh-oleh.",
    },
    {
      name: "keywords",
      content:
        "cemilan mamah ntin, snack mamah ntin, mamah ntin kedungdalem, umkm kedungdalem, cemilan gegesik, snack kedungdalem, makanan ringan mamah ntin, jajanan khas cirebon",
    },
    { property: "og:title", content: "Cemilan & Snack Mamah Ntin Kedungdalem Gegesik" },
    { property: "og:description", content: "UMKM Kedungdalem Gegesik - jajanan khas gurih, renyah, dan enak." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://cemilan-dan-snack-mamah-ntin.vercel.app" },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Cemilan & Snack Mamah Ntin",
        "image": "https://cemilan-dan-snack-mamah-ntin.vercel.app/_nuxt/assets/images/keripik-2.jpeg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Kiwariski No. 134 RT. 03 Rw. 04 Dusun 2 Desa Kedungdalem",
          "addressLocality": "Gegesik",
          "addressRegion": "Cirebon",
          "addressCountry": "ID"
        },
        "telephone": "+62 831 4747 1346",
        "url": "https://cemilan-dan-snack-mamah-ntin.vercel.app"
      }),
    },
  ],
});

// Data negara tujuan
const countries = [
  { name: "Australia", image: Australia, alt: "Australia" },
  { name: "Belanda", image: Netherland, alt: "Belanda" },
  { name: "Taiwan", image: Taiwan, alt: "Taiwan" },
  { name: "Hongkong", image: Hongkong, alt: "Hongkong" },
  { name: "Abu Dabi", image: AbuDabi, alt: "Abu Dabi" },
  { name: "Iran", image: Iran, alt: "Iran" },
  { name: "Singapore", image: Singapore, alt: "Singapura" },
];
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="text-center py-16 px-6">
      <h1 class="text-3xl md:text-5xl font-extrabold text-gray-800">
        Cemilan & Snack Mamah Ntin Kedungdalem Gegesik
      </h1>
      <h2 class="mt-2 text-xl font-semibold text-gray-700">
        UMKM Kedungdalem Cirebon | Jajanan Rumahan Gurih & Renyah
      </h2>
      <p class="mt-4 text-gray-700 max-w-2xl mx-auto">
        Nikmati aneka makanan ringan khas Kedungdalem yang renyah, gurih, dan selalu fresh untuk keluarga tercinta.
      </p>
      <div class="mt-6 flex justify-center gap-4">
        <NuxtLink
          to="/menu"
          class="px-6 py-3 bg-gray-600 text-white rounded-xl shadow hover:bg-gray-700 transition"
        >
          Lihat Menu
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="px-6 py-3 bg-white text-gray-600 border border-gray-600 rounded-xl hover:bg-gray-600 hover:text-white transition"
        >
          Hubungi Kami
        </NuxtLink>
      </div>
    </section>

    <!-- PRODUK POPULER -->
    <section class="py-16 px-6">
      <h2 class="text-2xl font-bold text-center text-gray-800">Produk Populer</h2>
      <p class="text-center text-gray-600 mb-10">Rekomendasi cemilan favorit pelanggan</p>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
          <img :src="Keripik3" alt="Keripik Sukun" class="rounded-lg mx-auto mb-4 h-40 object-cover" />
          <h3 class="font-semibold text-lg">Keripik Sukun</h3>
          <p class="text-gray-600 text-sm">Cemilan alami yang bikin ketagihan di setiap gigitannya</p>
        </div>
        <div class="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
          <img :src="Keripik2" alt="Keripik Pisang" class="rounded-lg mx-auto mb-4 h-40 object-cover" />
          <h3 class="font-semibold text-lg">Keripik Pisang</h3>
          <p class="text-gray-600 text-sm">Renyah, gurih, manis, cocok untuk segala suasana</p>
        </div>
        <div class="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
          <img :src="Menu14" alt="Ayam Bakar" class="rounded-lg mx-auto mb-4 h-40 object-cover" />
          <h3 class="font-semibold text-lg">Ayam Bakar</h3>
          <p class="text-gray-600 text-sm">Paket Ayam Bakar pas buat temen santai</p>
        </div>
      </div>
    </section>

    <!-- INTERNASIONAL -->
    <section class="py-16 px-6 bg-gray-50 rounded-2xl">
      <h2 class="text-2xl font-bold text-center text-gray-800">Sudah Terkirim ke Luar Negeri</h2>
      <p class="text-center text-gray-600 mb-10">
        Cemilan keripik kami telah dipercaya hingga ke mancanegara
      </p>
      <div class="grid md:grid-cols-3 gap-8 text-center">
        <div
          v-for="(country, index) in countries"
          :key="index"
          class="bg-white shadow-md rounded-xl p-6 hover:scale-105 transition"
        >
          <img :src="country.image" :alt="country.alt" class="h-72 mb-4 mx-auto" />
          <h3 class="font-semibold text-lg">{{ country.name }}</h3>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="text-center py-16 px-6 shadow-md">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">Mau Pesan Apa?</h2>
      <p class="mb-6">Lihat pilihan menu kami.</p>
      <NuxtLink
        href="/menu"
        class="px-8 py-3 bg-gray-600 text-white font-semibold rounded-xl shadow hover:bg-gray-800 transition"
      >
        Lihat Menu
      </NuxtLink>
    </section>
  </div>
</template>

