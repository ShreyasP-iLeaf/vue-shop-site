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
      class="bg-black relative lg:flex lg:h-[calc(100vh-120px)] lg:justify-center lg:items-center p-5 md:p-10 mb-10"
    >
      <div
        class="text-white flex justify-between items-center font-bold text-2xl self-start w-full lg:hidden lg:-top-0 left-5"
      >
        <div>
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
        <button class="relative h-[30px]" @click="openCart">
          <div
            :class="`md:hidden text-sm absolute right-0 -top-3 rounded-full bg-[#e8eaed] text-black w-5 h-5 ${cartValue ? 'animate-pulse' : ''}`"
          >
            {{ cartValue }}
          </div>
          <svg
            :class="`md:hidden ${cartValue ? 'animate-pulse' : ''}`"
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#e8eaed"
          >
            <path
              d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
            />
          </svg>
        </button>
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
              @click="
                cartItems.length <= 2
                  ? addProductToCart(product)
                  : (restrictBuy = true)
              "
              class="h-[52px] inline-block px-3 py-2 max-w-[200px] bg-black text-white text-xl self-center"
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
            <div clas="text-black" v-if="restrictBuy">
              Can buy only 3 items at once
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <NavSection v-show="product" position="footer" />
</template>

<script>
import { cartStore } from '@/stores/app'
import NavSection from '@/components/common/NavSection.vue'
export default {
  name: 'ProductPage',
  data() {
    return {
      product: null,
      restrictBuy: false,
    }
  },
  components: {
    NavSection,
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
    noOfCartItems() {
      return cartStore().noOfItemsInCart
    },
    cartValue() {
      return cartStore().noOfItemsInCart
    },
  },
  watch: {
    noOfCartItems(value) {
      value <= 2 ? (this.restrictBuy = true) : (this.restrictBuy = false)
    },
  },
  methods: {
    openCart() {
      cartStore().toggleCart(true)
    },
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
