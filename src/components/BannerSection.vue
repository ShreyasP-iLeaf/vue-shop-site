<script setup>
import BannerImage1 from '../assets/images/hero-01.jpg'
import BannerImage2 from '../assets/images/hero-02.jpg'
import { ref, onMounted, defineEmits } from 'vue'

const banner = ref(null)

const emit = defineEmits(['bannerSection'])

onMounted(() => {
  if (banner.value) {
    emit('bannerSection', banner)
  }
})
</script>

<template>
  <div
    ref="banner"
    class="bg-[#025048] md:h-[700px] p-5 pb-10 md:p-10 text-white"
  >
    <div class="max-w-[1440px] m-auto grid grid-cols-1 md:grid-cols-2">
      <div
        class="flex flex-col justify-center text-center md:justify-items-center md:text-left items-center mb-10"
      >
        <div class="">
          <div class="text-xl sm:text-2xl">WELCOME TO CERAMIC SHOP</div>
          <h1
            class="text-3xl sm:text-7xl py-5 font-semibold max-w-[80%] m-auto md:ml-0"
          >
            Elevate Your Space with Ceramic Elegance.
          </h1>
          <p class="text-md sm:text-2xl font-bold mb-5">
            Starting from just $149.00
          </p>
        </div>
        <button
          class="self-center min-w-[160px] hover:bg-white hover:text-[#025048] text-white text-xl sm:text-2xl font-semibold md:self-start block px-5 py-3 border-white border-2"
        >
          SHOP NOW
        </button>
      </div>
      <div class="flex justify-end">
        <div
          class="h-[700px] w-full md:w-[68%] relative"
          :style="{
            backgroundImage: `url(${BannerImage1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }"
        >
          <img
            class="absolute md:translate-x-[-50%] -translate-x-1/2 left-1/2 md:left-0 -translate-y-1/2 top-1/2"
            :src="`${BannerImage2}`"
            alt="banner-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>
