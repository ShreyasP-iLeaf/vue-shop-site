<template>
  <div
    class="w-full min-h-[750px] flex items-end relative object-contain lg:object-cover"
    :style="{
      backgroundImage: `url('${imageURL}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
    }"
  >
    <div
      class="bg-white w-[90%] absolute h-auto left-1/2 -translate-x-1/2 bottom-20 mx-auto p-8"
    >
      <h4 class="text-2xl md:text-3xl font-bold mb-1">{{ category }}</h4>
      <p class="text-lg md:text-xl">{{ startPrice }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const { imageURL, category, startPrice } = defineProps([
  'imageURL',
  'category',
  'startPrice',
])
</script>
