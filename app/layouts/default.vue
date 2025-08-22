<script setup lang="ts">
import { ref } from "vue";
import Logo from "@/assets/images/logo.png";

const isOpen = ref(false);

// route aktif
const route = useRoute();
</script>

<template>
  <div>
    <header class="shadow py-4 px-8 md:px-12 flex justify-between items-center">
      <h1 class="flex gap-2 items-center font-extrabold text-lg tracking-wide drop-shadow">
        <img :src="Logo" class="w-10" />
         CEMILAN & SNACK IBU NTIN
      </h1>

      <nav class="hidden md:flex gap-6 text-sm font-medium">
        <NuxtLink to="/" class="relative group transition text-black" > Beranda
          <span
            class="absolute left-0 -bottom-1 h-0.5 bg-black transition-all"
            :class="route.path === '/' ? 'w-full' : 'w-0 group-hover:w-full'"
          ></span>
        </NuxtLink>

        <NuxtLink to="/menu" class="relative group transition text-black" > Menu
          <span
            class="absolute left-0 -bottom-1 h-0.5 bg-black transition-all"
            :class="route.path === '/menu' ? 'w-full' : 'w-0 group-hover:w-full'"
          ></span>
        </NuxtLink>

        <NuxtLink to="/about" class="relative group transition text-black" > Tentang
          <span
            class="absolute left-0 -bottom-1 h-0.5 bg-black transition-all"
            :class="route.path === '/about' ? 'w-full' : 'w-0 group-hover:w-full'"
          ></span>
        </NuxtLink>

        <NuxtLink to="/contact" class="relative group transition text-black" > Kontak
          <span
            class="absolute left-0 -bottom-1 h-0.5 bg-black transition-all"
            :class="route.path === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'"
          ></span>
        </NuxtLink>
      </nav>

      <button class="md:hidden cursor-pointer text-xl" @click="isOpen = !isOpen" > ☰ </button>
    </header>

    <transition name="fade">
      <nav
        v-if="isOpen"
        class="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-6 text-lg"
      >
        <button
          class="absolute cursor-pointer top-4 right-6 text-2xl"
          @click="isOpen = false"
        >
          ✕
        </button>

        <NuxtLink
          to="/"
          @click="isOpen = false"
          class="relative group transition text-black"
        >
          Beranda
          <span
            class="absolute left-0 -bottom-1 h-0.5 bg-black transition-all"
            :class="route.path === '/' ? 'w-full' : 'w-0 group-hover:w-full'"
          ></span>
        </NuxtLink>

        <NuxtLink
          to="/menu"
          @click="isOpen = false"
          class="relative group transition text-black"
        >
          Menu
          <span
            class="absolute left-0 -bottom-1 h-0.5 bg-black transition-all"
            :class="route.path === '/menu' ? 'w-full' : 'w-0 group-hover:w-full'"
          ></span>
        </NuxtLink>

        <NuxtLink
          to="/about"
          @click="isOpen = false"
          class="relative group transition text-black"
        >
          Tentang
          <span
            class="absolute left-0 -bottom-1 h-0.5 bg-black transition-all"
            :class="route.path === '/about' ? 'w-full' : 'w-0 group-hover:w-full'"
          ></span>
        </NuxtLink>

        <NuxtLink
          to="/contact"
          @click="isOpen = false"
          class="relative group transition text-black"
        >
          Kontak
          <span
            class="absolute left-0 -bottom-1 h-0.5 bg-black transition-all"
            :class="route.path === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'"
          ></span>
        </NuxtLink>
      </nav>
    </transition>

    <main class="min-h-screen">
      <slot />
    </main>

<footer class="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-6 mt-8">
  <div class="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
    <h2 class="font-bold text-lg tracking-wide">🍪 CEMILAN & SNACK IBU NTIN</h2>

  </div>

  <!-- Divider -->
  <div class="border-t border-gray-600 mt-4 pt-4 text-center text-sm text-gray-300">
    2025 by <NuxtLink href="https://www.threads.com/@rifki_.21" target="_blank" class="text-red-400">Rifki Saifullah</NuxtLink> KKM UMC 43 2025
  </div>
</footer>

  </div>
</template>

