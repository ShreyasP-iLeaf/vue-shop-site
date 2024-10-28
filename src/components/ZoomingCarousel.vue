<template>
  <div class="grid grid-cols-5 gap-3">
    <div class="col-span-1 flex flex-col">
      <img
        v-for="(image, index) in smallImages"
        :src="getImageURL(image)"
        :key="Math.random() * 1000 + '-' + index"
        alt="Product-smaller-image"
        class="w-full mb-3 cursor-pointer border-black focus:border-2"
        tabindex="0"
        @click="myCarousel.slideTo(index)"
      />
    </div>
    <div class="col-span-4 w-full object-contain relative">
      <Carousel ref="myCarousel" class="object-contain">
        <Slide
          v-for="(image, index) in largeImages"
          :key="index + '-' + Math.random() * 1000"
        >
          <div class="carousel__item">
            <inner-image-zoom
              class=""
              :src="getImageURL(image)"
              :zoomSrc="getImageURL(image)"
              :hideHint="true"
              :hasSpacer="true"
              zoomType="hover"
            />
          </div>
        </Slide>
      </Carousel>
      <button
        class="absolute bg-white text-[#424b4a] px-4 drop-shadow-2xl py-1 rounded-2xl top-5 left-5"
      >
        Sale!
      </button>
      <button
        @click="showModal = true"
        class="absolute bg-white text-[#424b4a] px-2 drop-shadow-2xl py-2 rounded-full top-4 right-5"
      >
        <svg
          class="w-6 h-6 text-[#424b4a]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import InnerImageZoom from 'vue-inner-image-zoom'
import { Carousel, Slide } from 'vue3-carousel'

const showModal = ref(false)
const myCarousel = ref(null)
const { productImages } = defineProps(['productImages'])

const smallImages = computed(() =>
  productImages ? productImages.map(image => image[0]) : null,
)
const largeImages = computed(() =>
  productImages ? productImages.map(image => image[1]) : null,
)

function getImageURL(name) {
  const url = new URL(`../assets/images/${name}`, import.meta.url).href
  return url
}
</script>

<style scoped>
.carousel__slide {
  justify-content: start;
  align-items: start;
}
</style>
