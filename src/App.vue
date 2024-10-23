<template>
  <div class="relative">
    <div class="sticky top-0 z-10">
      <NavSection position="header" />
    </div>
    <router-view />
    <NavSection position="footer" />
  </div>
</template>

<script setup>
import NavSection from './components/common/NavSection.vue'
// import ShoppingCart from './components/common/Cart.vue'
</script>
