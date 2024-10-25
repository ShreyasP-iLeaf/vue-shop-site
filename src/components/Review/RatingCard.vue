<template>
  <div class="bg-white p-10">
    <RatingIcons />
    <div class="text-[#424b4a] text-lg mt-5">{{ review.review }}</div>
    <div class="flex flex-row mt-5 items-center">
      <div class="mr-3">
        <img
          class="rounded-full"
          :src="getImageURL"
          :alt="`review-image-${review.id}`"
        />
      </div>
      <div>
        <div class="text-xl">{{ review.name }}</div>
        <p class="text-md text-[#424b4a]">{{ review.designation }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import RatingIcons from './RatingIcons.vue'
import { defineProps, computed } from 'vue'

const { review } = defineProps(['review'])

const getImageURL = computed(() => {
  const url = new URL(`../../assets/images/${review.image}`, import.meta.url)
    .href
  console.log(url)
  return url
})
</script>
