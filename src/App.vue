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
