<template>
  <div>
    <BannerSection
      @bannerSection="val => (val ? emit('bannerSection', val) : null)"
    />
    <AboutView
      @aboutSection="val => (val ? emit('aboutSection', val) : null)"
    />
  </div>
</template>

<script setup>
import BannerSection from '@/components/BannerSection.vue'
import AboutView from '@/components/AboutSection.vue'

const emit = defineEmits(['bannerSection', 'aboutSection'])
</script>

<style scoped lang="scss"></style>
