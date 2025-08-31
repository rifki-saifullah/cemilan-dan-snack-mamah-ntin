<script setup>
import IbuNtin from "@/assets/images/ibu-ntin.jpeg";

useHead({
  title: "Tentang Mamah Ntin - Cemilan & Snack Kedungdalem Gegesik",
  meta: [
    { name: "description", content: "Tentang usaha UMKM Cemilan & Snack Mamah Ntin Kedungdalem Gegesik, Cirebon. Menyediakan keripik dan jajanan rumahan sejak 2010." },
    { name: "keywords", content: "tentang mamah ntin, umkm kedungdalem, snack gegesik, cemilan cirebon, usaha rumahan" },
    { property: "og:title", content: "Tentang Mamah Ntin - Cemilan Kedungdalem" },
    { property: "og:description", content: "Kenalan lebih dekat dengan usaha snack & cemilan Mamah Ntin Kedungdalem." },
    { property: "og:type", content: "website" },
  ]
})
</script>

<template>
  <div class="px-6 py-12 max-w-4xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">
      Tentang Cemilan & Snack Mamah Ntin Kedungdalem
    </h1>
    <h2 class="text-xl text-gray-700 text-center mb-6">UMKM Kedungdalem Gegesik Cirebon sejak 2010</h2>
    <p class="text-gray-600 text-lg leading-relaxed mb-6 md:text-justify">
      Usaha <span class="font-semibold">Mamah Ntin</span> berdiri sejak tahun 2010 di Kedungdalem, Gegesik, Cirebon.
      Berawal dari dapur sederhana, kini kami telah melayani ratusan pelanggan dengan berbagai pilihan makanan, snack dan cemilan
      seperti <strong>keripik sukun, keripik pisang, ayam bakar, sate</strong>, dan masih banyak lagi.
    </p>
    <p class="text-gray-600 text-lg leading-relaxed md:text-justify">
      Kami berkomitmen menghadirkan produk dengan <strong>rasa otentik, harga terjangkau,</strong> dan tentunya <strong>kualitas terbaik</strong>.
    </p>
    <div class="mt-10 flex justify-center">
      <img :src="IbuNtin" alt="Ibu Ntin" class="rounded-2xl shadow-lg w-80 object-cover" />
    </div>
  </div>
</template>

