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
      class="bg-black relative lg:flex lg:h-[calc(100vh-120px)] lg:justify-center lg:items-center p-5 md:p-10"
    >
      <div
        class="text-white font-bold text-2xl self-start w-full lg:hidden block lg:-top-0 left-5"
      >
        <router-link
          :to="{
            name: 'home',
          }"
          class="cursor-pointer w-3 p-3 pl-0"
          >Our Products</router-link
        >
        <div class="inline-block cursor-pointer w-3">/</div>
        <div class="inline-block cursor-pointer w-3 p-3">Detail</div>
      </div>
      <div
        :class="`relative max-w-7xl h-auto grid grid-cols-1 lg:grid-cols-2 bg-white`"
      >
        <div
          class="text-white font-bold text-2xl self-start hidden lg:block lg:absolute lg:-top-[60px] left-0"
        >
          <router-link
            :to="{
              name: 'home',
            }"
            class="cursor-pointer w-3 p-3 pl-0"
            >Our Products</router-link
          >
          <div class="inline-block cursor-pointer w-3">/</div>
          <div class="inline-block cursor-pointer w-3 p-3">Detail</div>
        </div>
        <div class="p-10 hover:scale-105 justify-self-center self-center">
          <img :src="product.image" class="max-h-[400px]" alt="product-image" />
        </div>
        <div class="text-black p-10">
          <h3 class="text-3xl mb-5 border-b-2 p-2 pl-0">{{ product.title }}</h3>
          <p class="text-xl mb-2">
            Category:
            {{
              product.category.charAt(0).toUpperCase() +
              product.category.slice(1)
            }}
          </p>
          <p class="text-xl mb-5 max-h-80 overflow-y-scroll">
            {{ product.description }}
          </p>
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
              v-if="ifAtleastOneItem(product) === -1"
              @click="addProductToCart(product)"
              class="h-[52px] inline-block px-3 py-2 bg-black text-white text-xl self-center"
            >
              Add to cart
            </button>
            <div
              v-else
              class="grid grid-cols-3 text-center max-h-[70px] max-w-[200px] px-3 py-0 self-center text-white bg-black text-xl"
            >
              <button @click="removeProductFromCart(product)" class="py-3">
                -
              </button>
              <div
                class="bg-white text-black h-full border-black content-center"
              >
                {{ noOfProductInCart(product) }}
              </div>
              <button @click="addProductToCart(product)">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { cartStore } from '@/stores/app'

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
  computed: {
    cartItems() {
      return cartStore().cart
    },
  },
  methods: {
    noOfProductInCart(product) {
      let count = 0
      this.cartItems.forEach(item => (item.id === product.id ? count++ : null))
      return count
    },
    ifAtleastOneItem(product) {
      return this.cartItems.findIndex(item => product.id === item.id)
    },
    addProductToCart(product) {
      cartStore().addToCart(product)
      console.log(cartStore().cart)
    },
    removeProductFromCart(product) {
      const cartCopy = [...this.cartItems]
      const itemIndex = cartCopy.findIndex(item => item.id === product.id)
      cartCopy.splice(itemIndex, 1)
      cartStore().updateCart(cartCopy)
    },
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
