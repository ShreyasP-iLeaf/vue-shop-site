<template>
  <div>
    <div
      class="w-full h-[380px] mb-5 relative cursor-pointer"
      :style="{
        backgroundImage: `url(
          '/vue-shop-site/src/assets/images/${details.images[0]}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
      @mouseenter="showCartIcon(true)"
      @mouseleave="showCartIcon(false)"
    >
      <button
        class="absolute bg-white text-[#424b4a] px-4 drop-shadow-2xl py-1 rounded-2xl top-5 left-5"
      >
        Sale!
      </button>
      <button
        v-if="isCartShown"
        class="flex justify-center drop-shadow-2xl opacity-50 hover:opacity-100 rounded-full w-9 h-9 absolute top-5 right-5 bg-white"
        :class="{ 'animate-bounce': isProductAdded }"
        @mouseover.stop="showTooltip(true)"
        @mouseout.stop="showTooltip(false)"
        :data-tooltip-target="`tooltip-default-${details.id}`"
        @click="
          () => {
            addToCart(details)
            showTooltip(false)
          }
        "
      >
        <svg
          class="self-center"
          xmlns="http://www.w3.org/2000/svg"
          height="28px"
          viewBox="0 -960 960 960"
          width="28px"
          fill="#025048"
        >
          <path
            d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
          />
        </svg>
      </button>
      <div
        :id="`tooltip-default-${details.id}`"
        role="tooltip"
        :class="{ 'opacity-100': isTooltipShown }"
        class="absolute text-md z-10 top-5 right-14 inline-block px-3 py-2 font-medium text-white transition-opacity duration-300 bg-[#025048] rounded-lg opacity-0 shadow-sm tooltip"
      >
        Add to cart
      </div>
    </div>
  </div>
  <div class="text-xl text-[#424b4a] opacity-60">{{ details.category }}</div>
  <div
    class="py-2 pb-1 text-xl font-bold lg:text-3xl text-[#025048] cursor-pointer"
  >
    {{ details.name }}
  </div>
  <div class="text-2xl">
    <span class="text-[#424b4a] inline-block before:content-['☆']"></span>
    <span class="text-[#424b4a] inline-block before:content-['☆']"></span>
    <span class="text-[#424b4a] inline-block before:content-['☆']"></span>
    <span class="text-[#424b4a] inline-block before:content-['☆']"></span>
    <span class="text-[#424b4a] inline-block before:content-['☆']"></span>
  </div>
  <div class="pb-1 text-xl text-[#424b4a] font-extrabold lg:text-3xl">
    <span class="line-through opacity-50 font-extrabold mr-2"
      >${{ details.lastPrice.toFixed(2) }}</span
    >
    <span class="font-extrabold">${{ details.currentPrice.toFixed(2) }}</span>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { cartStore } from '@/stores/app'

const { details } = defineProps(['details'])

const isTooltipShown = ref(false)
const isCartShown = ref(false)
const isProductAdded = ref(false)

function showTooltip(val) {
  isTooltipShown.value = val
}
function showCartIcon(val) {
  isCartShown.value = val
}
function addToCart(val) {
  isProductAdded.value = true
  cartStore().addToCart(val)
  setTimeout(() => {
    isProductAdded.value = false
  }, 2000)
}
</script>
