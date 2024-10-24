<template>
  <div
    :class="`h-auto text-2xl w-full absolute transition-all duration-500 bg-[#f1f4f1] ${isMenuOpen ? 'max-md:block -left-0' : '-left-full'} z-10`"
  >
    <ul class="cursor-pointer">
      <li
        class="px-5 py-3 hover:bg-[#fafafb]"
        @click="
          () => {
            emit('closeMenu')
            bannerRef ? bannerRef.scrollIntoView() : null
          }
        "
      >
        <a>HOME</a>
      </li>
      <li
        class="px-5 py-3 hover:bg-[#fafafb]"
        @click="
          () => {
            emit('closeMenu')
            aboutRef ? aboutRef.scrollIntoView() : null
          }
        "
      >
        <a>ABOUT</a>
      </li>
      <li class="px-5 py-3 hover:bg-[#fafafb]">
        <a href="">SHOP</a>
      </li>
      <li class="px-5 py-3 hover:bg-[#fafafb]">
        <a href="">CONTACT</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const { isMenuOpen, bannerRef, aboutRef } = defineProps([
  'isMenuOpen',
  'bannerRef',
  'aboutRef',
])

const emit = defineEmits(['closeMenu'])
</script>
