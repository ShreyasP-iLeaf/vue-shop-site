<template>
  <div
    :class="`h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-120px)] bg-black flex justify-center items-center relative`"
  >
    <section
      :class="`w-full transition-all duration-700 ${productsViewed ? 'scale-0' : 'scale-100'} z-20`"
    >
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
          Get quality products at low cost
        </h1>
        <p
          class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"
        >
          A store you cannot afford to miss
        </p>
        <div
          class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
        >
          <button
            @click="showProducts"
            class="inline-flex justify-center items-center py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            View products
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WelcomePage',
  data() {
    return {
      productsViewed: false,
    }
  },
  methods: {
    showProducts() {
      this.productsViewed = true
      this.$emit('viewProducts', true)
    },
  },
}
</script>

<style scoped lang="scss"></style>
