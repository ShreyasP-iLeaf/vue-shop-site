<template>
  <div>
    <BannerSection
      @bannerSection="val => (val ? emit('bannerSection', val) : null)"
    />
    <AboutView
      @aboutSection="val => (val ? emit('aboutSection', val) : null)"
    />
    <ProductCategory />
    <div class="bg-white h-20"></div>
  </div>
</template>

<script setup>
import BannerSection from '@/components/BannerSection.vue'
import AboutView from '@/components/AboutSection.vue'
import ProductCategory from '@/components/CategorySection/ProductCategory.vue'

const emit = defineEmits(['bannerSection', 'aboutSection'])
</script>

<style scoped lang="scss"></style>
