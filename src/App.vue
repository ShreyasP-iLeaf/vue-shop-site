<template>
  <div class="relative">
    <div class="sticky top-0 z-10">
      <NavSection
        position="header"
        :bannerRef="bannerRef ? bannerRef.value : null"
        :aboutRef="aboutRef ? aboutRef.value : null"
      />
    </div>
    <router-view v-slot="{ Component }">
      <component
        :is="Component"
        @bannerSection="value => (value ? setBannerRef(value) : null)"
        @aboutSection="value => (value ? setAboutRef(value) : null)"
      />
    </router-view>
    <NavSection
      :bannerRef="bannerRef ? bannerRef.value : null"
      :aboutRef="aboutRef ? aboutRef.value : null"
      position="footer"
    />
  </div>
</template>

<script setup>
import NavSection from './components/Navbar/NavSection.vue'
import { ref } from 'vue'

const bannerRef = ref(null)
const aboutRef = ref(null)

function setBannerRef(val) {
  console.log(val)
  bannerRef.value = val
}
function setAboutRef(val) {
  aboutRef.value = val
}
</script>
