<template>
  <div class="relative">
    <div class="top-0 z-10" :class="!isCartOpen ? 'sticky' : ''">
      <NavSection
        position="header"
        :bannerRef="bannerRef ? bannerRef.value : null"
        :aboutRef="aboutRef ? aboutRef.value : null"
        :productsRef="productsRef ? productsRef.value : null"
      />
    </div>
    <router-view v-slot="{ Component }">
      <component
        :is="Component"
        @bannerSection="value => (value ? setBannerRef(value) : null)"
        @aboutSection="value => (value ? setAboutRef(value) : null)"
        @productSection="value => (value ? setProductsRef(value) : null)"
      />
    </router-view>
    <NavSection
      :bannerRef="bannerRef ? bannerRef.value : null"
      :aboutRef="aboutRef ? aboutRef.value : null"
      :productsRef="productsRef ? productsRef.value : null"
      position="footer"
    />
    <CartDrawer />
    <div
      @click="bannerRef ? bannerRef.value.scrollIntoView() : null"
      class="w-8 h-8 bg-[#025048] flex justify-center items-center text-white fixed bottom-5 right-5 cursor-pointer"
    >
      <svg
        fill="#FFFFFF"
        height="20px"
        width="20px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 511.735 511.735"
        xml:space="preserve"
        stroke="#FFFFFF"
        stroke-width="23.028075"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <g>
              <path
                d="M508.788,371.087L263.455,125.753c-4.16-4.16-10.88-4.16-15.04,0L2.975,371.087c-4.053,4.267-3.947,10.987,0.213,15.04 c4.16,3.947,10.667,3.947,14.827,0l237.867-237.76l237.76,237.76c4.267,4.053,10.987,3.947,15.04-0.213 C512.734,381.753,512.734,375.247,508.788,371.087z"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import NavSection from './components/Navbar/NavSection.vue'
import CartDrawer from './components/Cart/CartDrawer.vue'
import { ref, computed } from 'vue'
import { cartStore } from './stores/app'

const isCartOpen = computed(() => cartStore().isCartOpen)
const bannerRef = ref(null)
const aboutRef = ref(null)
const productsRef = ref(null)

function setBannerRef(val) {
  bannerRef.value = val
}
function setAboutRef(val) {
  aboutRef.value = val
}
function setProductsRef(val) {
  productsRef.value = val
}
</script>
