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
    class="bg-[#025048] lg:h-[750px] p-5 pb-10 lg:p-10 text-white"
  >
    <div class="max-w-[1440px] m-auto grid grid-cols-1 lg:grid-cols-2">
      <div
        class="flex flex-col justify-center text-center lg:justify-items-center lg:text-left items-center mb-10"
      >
        <div class="">
          <div class="text-xl sm:text-2xl">WELCOME TO CERAMIC SHOP</div>
          <h1
            class="text-4xl sm:text-8xl py-5 font-semibold max-w-full m-auto lg:ml-0"
          >
            Elevate Your Space with Ceramic Elegance.
          </h1>
          <p class="text-xl sm:text-3xl font-bold mb-5">
            Starting from just $149.00
          </p>
        </div>
        <button
          class="self-center min-w-[160px] hover:bg-white hover:text-[#025048] text-white text-xl sm:text-2xl font-normal lg:self-start block px-5 py-3 mb-0 lg:mb-10 border-white border-2"
        >
          SHOP NOW
        </button>
      </div>
      <div class="flex justify-end">
        <div
          class="h-[780px] w-full lg:w-[70%] relative"
          :style="{
            backgroundImage: `url(${BannerImage1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }"
        >
          <img
            class="absolute lg:translate-x-[-50%] -translate-x-1/2 left-1/2 lg:left-0 -translate-y-1/2 top-1/2"
            :src="`${BannerImage2}`"
            alt="banner-image"
          />
        </div>
      </div>
    </div>
  </div>
</template>
