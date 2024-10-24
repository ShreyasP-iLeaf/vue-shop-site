<template>
  <div class="bg-[#f1f4f1] p-5 lg:px-10 lg:py-24 lg:pb-40">
    <div
      class="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 h-auto text-[#424b4a]"
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
          class="w-full min-h-[750px] flex items-end relative object-contain lg:object-cover"
          :style="{
            backgroundImage: `url('${CategoryImage1}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }"
        >
          <div
            class="bg-white w-[90%] absolute h-[150px] left-1/2 -translate-x-1/2 bottom-20 mx-auto px-5 py-10"
          >
            <h4 class="text-3xl font-bold mb-1">Stylish Ceramic Home Decor</h4>
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
