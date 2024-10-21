<template>
  <div>
    <div
      class="absolute top-25 h-screen z-60 bg-black right-0 flex-row"
      :class="[position === 'footer' ? 'top-[90px] md:top-[120px]' : '']"
    >
      <div
        ref="content"
        class="transition-all duration-700 h-full bg-black flex overflow-hidden items-start justify-center"
        :class="[open ? 'max-w-lg' : 'max-w-0']"
      >
        <div
          class="w-[360px] sm:w-[500px] text-center delay-500 text-white font-bold text-xl p-5 pb-0"
        >
          <div class="flex relative flex-row justify-between items-center">
            <h1 class="flex-grow text-2xl sm:text-3xl p-3">Shopping Cart</h1>
            <svg
              @click="closeCart"
              :class="`inline-block md:hidden cursor-pointer`"
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#FFFFFF"
            >
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
              />
            </svg>
          </div>

          <div
            v-for="item in cartItemsUnique"
            :key="`product-${item.id}`"
            class="text-black bg-white"
          >
            <div
              class="text-left max-w-[350px] md:max-w-full whitespace-nowrap overflow-x-hidden text-ellipsis p-3 pb-0"
            >
              {{ item.title }}
            </div>
            <div class="bg-white p-3 flex justify-between items-center">
              <div
                class="bg-white max-w-[450px] text-black flex justify-between align-middle"
              >
                <img
                  class="w-[100px] max-h-[100px] mx-2 object-contain"
                  :src="item.image"
                  :alt="`product-${item.id} image`"
                />
                <div class="flex items-center justify-around">
                  <div
                    class="grid grid-cols-3 text-center mx-4 w-full max-h-[50px] max-w-[150px] px-0 py-0 self-center text-white bg-black text-xl"
                  >
                    <button
                      @click="removeProductFromCart(item)"
                      class="py-2 px-3"
                    >
                      -
                    </button>
                    <div
                      class="bg-white text-black h-full border-black content-center"
                    >
                      {{ noOfProductInCart(item) }}
                    </div>
                    <button
                      class="text-center px-4"
                      @click="addProductToCart(item)"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div class="text-black bg-white text-2xl">
                ${{ (noOfProductInCart(item) * item.price).toFixed(2) }}
              </div>
            </div>
          </div>
          <div class="flex justify-between bg-black">
            <div class="p-3 text-2xl text-left">Total</div>
            <div class="p-3 text-2xl text-right">${{ getTotal() }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cartStore } from '@/stores/app'
export default {
  name: 'ShoppingCart',
  data() {
    return {
      open: false,
    }
  },
  props: {
    position: {
      type: String,
    },
  },
  computed: {
    cartItems() {
      return cartStore().cart
    },
    isCartOpen() {
      return cartStore().isCartOpen
    },
    cartItemsUnique() {
      let uniqueObjects = {}
      this.cartItems.forEach(obj => {
        uniqueObjects[obj.id] = obj
      })
      let output = Object.values(uniqueObjects)
      return output
    },
  },
  watch: {
    isCartOpen() {
      this.toggle()
    },
  },
  methods: {
    getTotal() {
      let sum = 0
      this.cartItems.forEach(item => {
        sum += item.price
      })
      return sum.toFixed(2)
    },
    toggle() {
      this.open = !this.open
    },
    closeCart() {
      cartStore().toggleCart(false)
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
    },
    removeProductFromCart(product) {
      const cartCopy = [...this.cartItems]
      const itemIndex = cartCopy.findIndex(item => item.id === product.id)
      cartCopy.splice(itemIndex, 1)
      cartStore().updateCart(cartCopy)
    },
  },
}
</script>

<style></style>
