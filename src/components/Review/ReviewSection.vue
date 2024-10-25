<template>
  <div class="bg-[#f1f4f1] px-5 py-24 mt-10 lg:px-10">
    <div class="max-w-[1440px] mx-auto text-[#025048]">
      <div class="text-xl sm:text-2xl">TESTIMONIAL</div>
      <div
        class="text-3xl lg:text-6xl py-5 mb-10 font-bold w-full lg:max-w-[90%]"
      >
        What Our Customers Say
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div v-for="review of ReviewData" :key="review.id">
          <RatingCard :review="review" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RatingCard from './RatingCard.vue'
import ReviewData from './data.json'
</script>
