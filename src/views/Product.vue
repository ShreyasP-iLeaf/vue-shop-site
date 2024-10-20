<template>
  <transition
    enter-active-class="duration-300 ease-out"
    enter-from-class="transform opacity-0 scale-75"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-75"
  >
    <div
      v-if="product"
      class="bg-black h-auto sm:h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-120px)] flex justify-center items-center"
    >
      <div
        :class="`max-w-5xl h-full sm:h-auto grid grid-cols-1 md:grid-cols-2 bg-white`"
      >
        <div class="p-10 hover:scale-105 justify-self-center">
          <img :src="product.image" class="max-h-[400px]" alt="product-image" />
        </div>
        <div class="text-black p-10">
          <h3 class="text-3xl mb-5 border-b-2 p-2 pl-0">{{ product.title }}</h3>
          <p class="text-xl mb-5">{{ product.description }}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2">
            <div class="w-fit">
              <div class="flex flex-col justify-center items-center">
                <div
                  class="text-2xl"
                  :id="`r-${product.id}`"
                  v-if="product.rating.rate"
                >
                  <span class="inline-block before:content-['★']"></span>
                  <span class="inline-block before:content-['★']"></span>
                  <span class="inline-block before:content-['★']"></span>
                  <span class="inline-block before:content-['★']"></span>
                  <span class="inline-block before:content-['★']"></span>
                  <span class="text-[21px] pt-1"
                    >({{ product.rating.count }})</span
                  >
                </div>
              </div>
              <div class="text-4xl mb-5">${{ product.price }}</div>
            </div>
            <button
              class="max-h-[70px] inline-block px-3 py-2 bg-black text-white text-xl"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ProductPage',
  data() {
    return {
      product: null,
    }
  },
  beforeMount() {
    fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`)
      .then(res => res.json())
      .then(json => {
        this.product = json
        this.$nextTick(() => this.putRatingOnBooks())
      })
  },
  methods: {
    putRatingOnBooks() {
      const ratingValue = this.product.rating.rate
      const ratingContainer = document.getElementById(`r-${this.product.id}`)
      if (ratingContainer) {
        const ratingStars = ratingContainer.querySelectorAll(`span`)
        // Calculate the number of stars to be filled
        const filledStars = Math.round(ratingValue * 2) / 2

        // Add the 'filled' class to the appropriate number of stars
        ratingStars.forEach((star, index) => {
          if (index < filledStars) {
            star.style.color = 'gold'
          }
        })
      }
    },
  },
}
</script>

<style scoped lang="scss"></style>
