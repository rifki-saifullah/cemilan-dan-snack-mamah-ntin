<script setup>
import IbuNtin from "@/assets/images/ibu-ntin.jpeg";

useHead({
  title: "Tentang Kami - Cemilan dan Snack Mamah Ntin",
  meta: [
    { name: "description", content: "Tentang usaha cemilan dan snack Mama Ntin Kedungdalem. Menyediakan kerupuk, keripik, rempeyek, dan snack rumahan sejak 2010." },
    { property: "og:title", content: "Tentang Ibu Ntin - Cemilan Khas Kedungdalem" },
    { property: "og:description", content: "Kenalan lebih dekat dengan usaha snack dan cemilan khas Ibu Ntin." },
    { property: "og:type", content: "website" },
  ]
})
</script>

<template>
  <div class="px-6 py-12 max-w-4xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">Tentang Kami</h1>
    <p class="text-gray-600 text-lg leading-relaxed mb-6 md:text-justify">
      Usaha cemilan <span class="font-semibold">Ibu Ntin</span> berdiri sejak tahun 2010 di Kedungdalem.
      Berawal dari dapur sederhana, kini kami telah melayani ratusan pelanggan dengan berbagai pilihan makanana, snack dan cemilan
      seperti <strong>kerupuk pisang, ayam bakar, sate</strong>, dan masih banyak lagi.
    </p>
    <p class="text-gray-600 text-lg leading-relaxed md:text-justify">
      Kami selalu berkomitmen untuk menghadirkan produk dengan <strong>rasa otentik, harga terjangkau,</strong>
      dan tentunya <strong>kualitas terbaik</strong>.
    </p>

    <div class="mt-10 flex justify-center">
      <img :src="IbuNtin" alt="Ibu Ntin" class="rounded-2xl shadow-lg w-80 object-cover" />
    </div>

  </div>
</template>

