<template>
  <div ref="about" class="p-5 lg:px-10 lg:py-24 lg:pb-40">
    <div class="max-w-[1440px] mx-auto">
      <div class="mt-10 lg:my-10 text-[#025048]">
        <div class="text-xl sm:text-2xl">Most Popular</div>
        <div class="text-3xl lg:text-6xl py-5 font-bold w-full lg:max-w-[90%]">
          Discover the Latest Additions at Your Top Choice Flower Shop
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="mb-10"
          v-for="(product, index) in productData"
          :key="`product-${index}`"
        >
          <ProductCard :details="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import productData from './data.json'
import ProductCard from './ProductCard.vue'
</script>
