<template>
  <div
    class="bg-[#f1f4f1] px-5 py-14 lg:py-0 mt-10 lg:px-10 h-auto lg:h-[1450px]"
  >
    <div
      class="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 text-[#424b4a]"
    >
      <div class="flex flex-col justify-center">
        <div class="w-full">
          <div class="text-xl sm:text-2xl">THE BEST OF CERAMICS</div>
          <h1 class="text-3xl sm:text-6xl py-5 font-bold lg:mb-3">
            Our Products Category
          </h1>
          <p class="text-xl sm:text-2xl mb-10">
            Explore our exquisite collection of ceramic treasures that elevate
            your spaces and celebrate the artistry of craftsmanship. From
            dinnerware to decor, each piece in our product range is a testament
            to quality, style, and the timeless beauty of ceramics.
          </p>
          <ProductCard
            :imageURL="CategoryImage1"
            category="Stylish Ceramic Home Decor"
            startPrice="Starting from just $99.00"
          />
        </div>
      </div>
      <div class="relative h-full">
        <ProductCard
          class="absolute mb-10 lg:mb-0 lg:-top-[80px]"
          :imageURL="CategoryImage2"
          category="Trending Ceramic Dinnerware"
          startPrice="Starting from just $299.00"
        />
        <ProductCard
          class="absolute lg:-bottom-[20px]"
          :imageURL="CategoryImage3"
          category="Garden and Outdoor Accents"
          startPrice="Starting from just $149.00"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import CategoryImage1 from '../../assets/images/category-01.jpg'
import CategoryImage2 from '../../assets/images/category-02.jpg'
import CategoryImage3 from '../../assets/images/category-03.jpg'
import ProductCard from './ProductCard.vue'
</script>
