<template>
  <div
    class="flex items-center justify-center h-[550px] bg-center bg-fixed bg-cover bg-no-repeat"
    :style="{
      backgroundImage: `url('${ParallaxImage}')`,
    }"
  >
    <div
      class="bg-white w-[70%] lg:w-[50%] px-10 py-14 text-[#025048] text-center"
    >
      <h1 class="text-3xl md:text-6xl">
        Begin Your Ceramic Journey Explore Our Stunning Collections
      </h1>
      <div>
        <p class="text-xl sm:text-2xl my-5 mb-6">Starting from just $149.00</p>
        <button
          class="min-w-[160px] mx-auto hover:bg-[#025048] hover:text-white text-[#025048] text-xl sm:text-2xl font-normal self-start block px-6 py-2 border-[#025048] border-2"
        >
          SHOP NOW
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import ParallaxImage from '../assets/images/cta-bg.jpg'
</script>
