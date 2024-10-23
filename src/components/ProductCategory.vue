<template>
  <div class="bg-[#f1f4f1] p-5 md:px-10 md:py-24 md:pb-40">
    <div
      class="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 h-auto text-[#424b4a]"
    >
      <div class="w-full">
        <div class="text-xl sm:text-2xl">THE BEST OF CERAMICS</div>
        <h1 class="text-3xl sm:text-6xl py-5 font-bold mb-3">
          Our Products Category
        </h1>
        <p class="text-xl sm:text-2xl mb-10">
          Explore our exquisite collection of ceramic treasures that elevate
          your spaces and celebrate the artistry of craftsmanship. From
          dinnerware to decor, each piece in our product range is a testament to
          quality, style, and the timeless beauty of ceramics.
        </p>
        <div
          class="w-full h-[750px] flex items-end"
          :style="{
            backgroundImage: `url('${CategoryImage1}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }"
        >
          <div class="bg-white w-3/4 h-[150px] mx-auto mb-10 p-10">
            <h4 class="text-3xl font-bold mb-3">Stylish Ceramic Home Decor</h4>
            <p class="text-xl">Starting from just $99.00</p>
          </div>
        </div>
      </div>
      <div>hello</div>
    </div>
  </div>
</template>

<script setup>
import CategoryImage1 from '../assets/images/category-01.jpg'
</script>
