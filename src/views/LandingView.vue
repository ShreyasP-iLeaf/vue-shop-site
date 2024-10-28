<template>
  <div>
    <BannerSection
      @bannerSection="val => (val ? emit('bannerSection', val) : null)"
    />
    <AboutView
      @aboutSection="val => (val ? emit('aboutSection', val) : null)"
    />
    <ProductCategory />
    <ProductList
      @productSection="val => (val ? emit('productSection', val) : null)"
    />
    <ExploreSection />
    <TrendingSection />
    <ReviewSection />
    <EndBanner />
  </div>
</template>

<script setup>
import EndBanner from '@/components/EndBanner.vue'
import ReviewSection from '@/components/Review/ReviewSection.vue'
import TrendingSection from '@/components/TrendingSection.vue'
import ExploreSection from '@/components/ExploreSection.vue'
import BannerSection from '@/components/BannerSection.vue'
import AboutView from '@/components/AboutSection.vue'
import ProductCategory from '@/components/Category/ProductCategory.vue'
import ProductList from '../components/Product/ProductList.vue'

const emit = defineEmits(['bannerSection', 'aboutSection', 'productSection'])
</script>

<style scoped lang="scss"></style>
