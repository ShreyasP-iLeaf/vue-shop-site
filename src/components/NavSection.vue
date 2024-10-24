<script setup>
import ShoppingCart from './CartSection.vue'
import SocialMedia from './SocialMedia.vue'
import CartIcon from './CartIcon.vue'
import MenuItems from './MenuItems.vue'
import { ref, computed, defineProps, onMounted, onUnmounted, watch } from 'vue'
const isMenuOpen = ref(null)
const browserWidth = ref(null)

const appWidth = computed(() => browserWidth.value)

const { position, bannerRef, aboutRef } = defineProps([
  'position',
  'bannerRef',
  'aboutRef',
])

onMounted(() => {
  window.addEventListener('resize', onResize)
})
onUnmounted(() => {
  window.addEventListener('resize', onResize)
})

watch(appWidth, () => {
  console.log(appWidth.value, isMenuOpen.value)
  if (appWidth.value > 768 && isMenuOpen.value) isMenuOpen.value = false
  else return
})

const onResize = event => {
  browserWidth.value = event.target.innerWidth
}
</script>

<template>
  <div :class="[position === 'header' ? 'relative' : '']">
    <div
      :class="`transition-all font-roboto ${position === 'header' ? 'bg-[#025048] text-white h-[80px] md:h-[120px] sticky top-0 z-50' : 'bg-[#f1f4f1] text-[#025048] h-auto min-h-[100px] p-10 '} flex justify-center items-center px-5 md:px-10`"
    >
      <nav
        :class="`max-w-[1500px] grid ${position === 'footer' ? 'max-sm:grid-cols-1 max-sm:space-y-5 justify-center items-center max-md:grid-cols-3 grid-cols-5' : 'grid-cols-5'} w-full items-center justify-center`"
      >
        <RouterLink
          :to="{
            name: 'home',
          }"
          class="title col-span-1 text-left max-sm:text-center text-3xl font-bold"
          >CeramicShop</RouterLink
        >
        <ul
          :class="`m-auto grid text-2xl  w-[75%] max-w-[400px] text-center ${position === 'header' ? 'max-md:hidden grid-cols-4 col-span-3' : 'grid-cols-1 md:grid-cols-4 md:col-span-3'}`"
        >
          <li
            :class="`px-5 ${position === 'header' ? 'hover:scale-x-110 hover:scale-y-110 duration-100 ease-in-out' : 'my-1'}`"
          >
            <router-link
              :to="{
                name: 'home',
              }"
              @click="bannerRef.scrollIntoView()"
              href="#"
              class="cursor-pointer"
              >HOME</router-link
            >
          </li>
          <li
            :class="`px-5 ${position === 'header' ? 'hover:scale-x-110 hover:scale-y-110 duration-100 ease-in-out' : 'my-1'}`"
          >
            <a
              class="cursor-pointer"
              @click="aboutRef ? aboutRef.scrollIntoView() : null"
              >ABOUT</a
            >
          </li>
          <li
            :class="`px-5 ${position === 'header' ? 'hover:scale-x-110 hover:scale-y-110 duration-100 ease-in-out' : 'my-1'}`"
          >
            <a class="cursor-pointer" href="#">SHOP</a>
          </li>
          <li
            :class="`px-5 ${position === 'header' ? 'hover:scale-x-110 hover:scale-y-110 duration-100 ease-in-out' : 'my-1'}`"
          >
            <a class="cursor-pointer" href="#">CONTACT</a>
          </li>
        </ul>

        <CartIcon
          v-if="position === 'header'"
          :isMenuOpen="isMenuOpen"
          @isMenuOpenChanged="value => (isMenuOpen = value)"
        />

        <SocialMedia v-if="position === 'footer'" />
      </nav>
    </div>
    <MenuItems
      v-if="position === 'header'"
      :isMenuOpen="isMenuOpen"
      :aboutRef="aboutRef"
      :bannerRef="bannerRef"
      @closeMenu="() => (isMenuOpen = false)"
    />
    <div v-if="position === 'footer'" class="bg-[#f1f4f1] border-t-2">
      <div
        class="max-w-[1500px] m-auto text-[#424B4A] text-xl p-5 md:px-10 min-[1500px]:px-0 grid grid-cols-2 m-auto'}`"
      >
        <div class="col-span-1">Copyright © 2024</div>
        <div class="col-span-1 text-right">All rights reserved</div>
      </div>
    </div>
    <ShoppingCart v-if="position === 'header'" />
  </div>
</template>

<style scoped lang="scss"></style>
