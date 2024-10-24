<template>
  <div>
    <BannerSection
      @bannerSection="val => (val ? emit('bannerSection', val) : null)"
    />
    <AboutView
      @aboutSection="val => (val ? emit('aboutSection', val) : null)"
    />
    <ProductCategory />
    <ProductList />
  </div>
</template>

<script setup>
import BannerSection from '@/components/BannerSection.vue'
import AboutView from '@/components/AboutSection.vue'
import ProductCategory from '@/components/Category/ProductCategory.vue'
import ProductList from '../components/Product/ProductList.vue'

const emit = defineEmits(['bannerSection', 'aboutSection'])
</script>

<style scoped lang="scss"></style>
