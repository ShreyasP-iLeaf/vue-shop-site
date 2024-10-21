<template class="max-w-[1440px] relative">
  <NavSection class="sticky top-0 z-50" position="header" />
  <router-view />
</template>

<script>
import NavSection from './components/common/NavSection.vue'
export default {
  components: {
    NavSection: NavSection,
  },
}
</script>

<style scoped lang="scss"></style>
