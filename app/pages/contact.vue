<script setup>
useHead({
  title: "Kontak Mamah Ntin - Pesan Cemilan Kedungdalem Gegesik",
  meta: [
    { name: "description", content: "Hubungi Mamah Ntin Kedungdalem Gegesik Cirebon untuk pemesanan keripik, snack, dan makanan lainnya." },
    { name: "keywords", content: "kontak mamah ntin, pesan snack kedungdalem, umkm gegesik, order keripik cirebon" },
    { property: "og:title", content: "Kontak Mamah Ntin - Cemilan Kedungdalem" },
    { property: "og:description", content: "Pesan snack favoritmu dengan mudah lewat WhatsApp atau kunjungi lokasi kami di Kedungdalem, Gegesik, Cirebon." },
    { property: "og:type", content: "website" },
  ]
})
</script>

<template>
  <div class="px-6 py-12 max-w-3xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 text-center">Kontak Kami</h1>
    <p class="text-gray-600 text-lg text-center mb-8">
      Ada pertanyaan atau mau pesan langsung? Hubungi kami melalui kontak berikut.
    </p>

    <!-- Info Kontak -->
    <div class="space-y-6">
      <div class="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition">
        <span class="text-red-500 text-2xl">📞</span>
        <div>
          <h3 class="font-semibold text-lg">Telepon / WhatsApp</h3>
          <a href="https://wa.me/6283147471346" target="_blank" class="text-red-500 hover:underline">0831 4747 1346</a>
        </div>
      </div>

      <div class="bg-white shadow-md rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition">
        <span class="text-red-500 text-2xl">📍</span>
        <div>
          <h3 class="font-semibold text-lg">Alamat</h3>
          <p class="text-gray-600">Jl. Kiwariski No. 134 RT. 03 Rw. 04 Dusun 2 Desa Kedungdalem Kec. Gegesik Kab. Cirebon</p>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="mt-12 text-center">
      <a
        href="https://wa.me/6283147471346"
        target="_blank"
        class="px-8 py-3 bg-gray-600 text-white font-semibold rounded-xl shadow hover:bg-gray-800 transition"
      >
        Pesan via WhatsApp
      </a>
    </div>
  </div>
</template>

