<template>
  <button
    class="relative cols-span-2 max-md:col-span-4 flex justify-end self-center items-center"
  >
    <div
      :class="`max-md:hidden absolute right-0 -top-4 rounded-full bg-[#e8eaed] text-black w-5 h-5 ${cartValue ? 'animate-pulse' : ''}`"
    >
      {{ cartValue }}
    </div>
    <svg
      @click="isCartOpen ? closeCart() : openCart()"
      :class="`max-md:hidden ${cartValue ? 'animate-pulse' : ''}`"
      xmlns="http://www.w3.org/2000/svg"
      height="30px"
      viewBox="0 -960 960 960"
      width="30px"
      fill="#e8eaed"
    >
      <path
        d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
      />
    </svg>
    <svg
      @click="$emit('isMenuOpenChanged', true)"
      :class="`${!isMenuOpen ? 'md:hidden' : 'hidden'}`"
      xmlns="http://www.w3.org/2000/svg"
      height="30px"
      viewBox="0 -960 960 960"
      width="30px"
      fill="#e8eaed"
    >
      <path
        d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
      />
    </svg>
    <svg
      @click="$emit('isMenuOpenChanged', false)"
      :class="`${isMenuOpen ? 'md:hidden' : 'hidden'}`"
      xmlns="http://www.w3.org/2000/svg"
      height="30px"
      viewBox="0 -960 960 960"
      width="30px"
      fill="#e8eaed"
    >
      <path
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </svg>
  </button>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { cartStore } from '@/stores/app'

const { isMenuOpen } = defineProps(['isMenuOpen'])

const isCartOpen = computed(() => cartStore().isCartOpen)
const cartValue = computed(() => cartStore().noOfItemsInCart)

function openCart() {
  cartStore().toggleCart(true)
}
function closeCart() {
  cartStore().toggleCart(false)
}
</script>
