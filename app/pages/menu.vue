<script setup>
import Keripik from "@/assets/images/keripik-2.jpeg";
import Keripik3 from "@/assets/images/keripik-3.jpeg";
import Menu1 from "@/assets/images/1.jpeg";
import Menu2 from "@/assets/images/2.jpeg";
import Menu3 from "@/assets/images/3.jpeg";
import Menu8 from "@/assets/images/8.jpeg";
import Menu9 from "@/assets/images/9.jpeg";
import Menu10 from "@/assets/images/10.jpeg";
import Menu11 from "@/assets/images/11.jpeg";
import Menu12 from "@/assets/images/12.jpeg";

useHead({
  title: "Menu - Cemilan & Snack Mamah Ntin Kedungdalem Gegesik",
  meta: [
    {
      name: "description",
      content: "Daftar menu cemilan dan snack Mamah Ntin dari Kedungdalem Gegesik Cirebon. Aneka keripik, ayam bakar, lauk rumahan, gurih & fresh.",
    },
    {
      name: "keywords",
      content: "menu mamah ntin, keripik sukun, keripik pisang, ayam bakar mamah ntin, makanan kedungdalem, snack gegesik",
    },
    { property: "og:title", content: "Menu Cemilan & Snack Mamah Ntin" },
    { property: "og:description", content: "Nikmati berbagai pilihan keripik, lauk, dan makanan khas Kedungdalem." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://cemilan-dan-snack-mamah-ntin.vercel.app/menu" },
  ],
});

// Data menu
const menus = [
  { image: Keripik3, alt: "Keripik Sukun", name: "Keripik Sukun", desc: "Cemilan alami gurih renyah khas Kedungdalem" },
  { image: Keripik, alt: "Keripik Pisang", name: "Keripik Pisang", desc: "Renyah, gurih, manis, cocok untuk semua suasana" },
  { image: Menu1, alt: "Siwang", name: "Siwang", desc: "Siwang terasi pedas dengan bawang goreng" },
  { image: Menu2, alt: "Ayam Bakar", name: "Ayam Bakar", desc: "Paket Ayam Bakar pas buat temen santai" },
  { image: Menu3, alt: "Ayam Goreng", name: "Ayam Goreng", desc: "Ayam goreng gurih cocok jadi camilan sejuta umat" },
  { image: Menu8, alt: "Ayam Bakar Spesial", name: "Ayam Bakar Spesial", desc: "Ayam bakar gurih asin khas Kedungdalem" },
  { image: Menu9, alt: "Oreg", name: "Oreg", desc: "Tempe tumis kecap manis pedas gurih, cocok jadi lauk nasi" },
  { image: Menu10, alt: "Terong Goreng", name: "Terong Goreng", desc: "Potongan terong goreng renyah gurih" },
  { image: Menu11, alt: "Kangkung", name: "Kangkung", desc: "Kangkung segar ditumis bawang dan cabai pedas gurih" },
  { image: Menu12, alt: "Sop Kambing", name: "Sop Kambing", desc: "Sup hangat daging kambing berbumbu rempah" },
];
</script>

<template>
  <div>
    <section class="text-center py-12 px-18">
      <h1 class="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">Daftar Menu Cemilan & Snack Mamah Ntin</h1>
      <h2 class="text-xl text-gray-600 mb-4">Pilihan jajanan khas Kedungdalem Gegesik Cirebon</h2>
      <p class="text-gray-600 max-w-xl mx-auto">
        Semua dibuat dengan bahan berkualitas dan rasa autentik khas UMKM Kedungdalem.
      </p>
    </section>

    <section class="py-8 px-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div v-for="(menu, i) in menus" :key="i" class="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
        <img :src="menu.image" :alt="menu.alt" class="h-64 w-full object-cover" />
        <div class="p-4 text-center">
          <h3 class="font-semibold text-lg">{{ menu.name }}</h3>
          <p class="text-gray-600 text-sm mb-2">{{ menu.desc }}</p>
        </div>
      </div>
    </section>

    <section class="text-center py-16 px-6 shadow-md">
      <h2 class="text-2xl md:text-3xl font-bold mb-4">Mau Pesan Sekarang?</h2>
      <p class="mb-6">Hubungi kami langsung via WhatsApp untuk order cepat.</p>
      <a
        href="https://wa.me/6283147471346"
        target="_blank"
        class="px-8 py-3 bg-gray-600 text-white font-semibold rounded-xl shadow hover:bg-gray-800 transition"
      >
        Pesan via WhatsApp
      </a>
    </section>
  </div>
</template>

