<template>
  <div class="bg-black">
    <div
      :class="`${areProductsShown && products.length ? 'auto' : 'h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-120px)]'}
       bg-black  flex justify-center items-center relative
       `"
    >
      <section class="w-full z-20 scroll-pt-60">
        <div
          class="py-3 max-w-[1440px] px-4 mx-auto text-center lg:py-5 p-4 before:absolute before:inset-x-0 before:bottom-0 before:h-1 before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent"
        >
          <h1
            v-if="!(products.length && areProductsShown)"
            class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
          >
            Get quality products at low cost
          </h1>
          <p
            v-if="!(products.length && areProductsShown)"
            class="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
          >
            A store you cannot afford to miss
          </p>
          <div class="flex flex-col sm:flex-row sm:justify-center sm:space-y-0">
            <button
              @click="showProducts"
              v-if="!(products.length && areProductsShown)"
              :class="`animate-pulse  transition-all duration-100 inline-flex justify-center items-center py-3 px-5 text-lg font-normal text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300`"
            >
              View Products
              <svg
                class="ml-3"
                xmlns="http://www.w3.org/2000/svg"
                height="18px"
                viewBox="0 -960 960 960"
                width="18px"
                fill="#e8eaed"
              >
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
              </svg>
            </button>
            <div v-else class="text-white text-3xl md:text-5xl border-b-white">
              Our products
            </div>
          </div>
        </div>
      </section>
    </div>
    <ProductList />
  </div>
</template>

<script>
import { productStore } from '@/stores/app'
import ProductList from './ProductList.vue'
export default {
  name: 'LandingPage',
  data() {
    return {
      isProductsShown: false,
    }
  },
  watch: {},
  components: {
    ProductList,
  },
  computed: {
    products() {
      return productStore().products
    },
    areProductsShown() {
      return productStore().isProductsShown
    },
  },
  methods: {
    showProducts() {
      productStore().updateProductsVisibility(true)
    },
  },
}
</script>

<style scoped lang="scss"></style>
