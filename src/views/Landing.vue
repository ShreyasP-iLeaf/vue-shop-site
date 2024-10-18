<template>
  <div class="bg-black">
    <Welcome v-show="!viewProducts" @viewProducts="viewProducts = true" />
    <ProductList :viewProducts="viewProducts" />
  </div>
</template>

<script>
import Welcome from './Welcome.vue'
import ProductList from './ProductList.vue'
export default {
  name: 'LandingPage',
  data() {
    return {
      viewProducts: false,
    }
  },
  watch: {
    viewProducts(value) {
      console.log(value)
    },
  },
  components: {
    Welcome,
    ProductList,
  },
  methods: {},
}
</script>

<style scoped lang="scss"></style>
