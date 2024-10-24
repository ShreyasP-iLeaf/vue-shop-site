<script setup>
import { ref, onMounted } from 'vue'
const about = ref(null)

const emit = defineEmits(['aboutSection'])

onMounted(() => {
  if (about.value) {
    emit('aboutSection', about)
  }
})
</script>

<template>
  <div ref="about" class="p-5 lg:px-10 lg:py-24 lg:pb-40">
    <div class="max-w-[1440px] mx-auto">
      <div class="mt-10 lg:my-10 text-[#025048]">
        <div class="text-xl sm:text-2xl">ABOUT CERAMIC SHOP</div>
        <div class="text-3xl lg:text-6xl py-5 font-bold w-full lg:max-w-[90%]">
          The versatility of ceramics is what makes them truly remarkable, with
          their presence in various forms such as stoneware and porcelain.
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 lg:gap-1=20">
        <img
          class="w-full lg:min-h-[700px]"
          src="../assets/images/about-01.jpg"
          alt="about-1-image"
        />
        <div class="flex flex-col justify-end">
          <img
            class="w-full"
            src="../assets/images/about-02.jpg"
            alt="about-2-image"
          />
          <div
            class="text-2xl sm:text-3xl py-4 sm:py-8 font-semibold text-[#025048]"
          >
            Welcome to Ceramic Shop, where passion meets craftsmanship to bring
            you a world of timeless beauty and creativity.
          </div>
          <div
            class="text-xl sm:text-2xl sm:py-8 py-4 pt-0 sm:pt-0 text-[#424b4a]"
          >
            Our journey is steeped in the art of ceramics, where each piece
            tells a unique story. Get to know the heart and soul behind our
            store.
          </div>
          <button
            class="min-w-[160px] hover:bg-[#025048] hover:text-white text-[#025048] text-xl sm:text-2xl font-semibold self-start block px-5 py-3 border-[#025048] border-2"
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
