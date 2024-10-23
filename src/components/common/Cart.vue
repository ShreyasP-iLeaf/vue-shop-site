<template>
  <div
    class="transition-all duration-700 absolute top-0 right-0 h-[100vh]"
    :class="`${open ? 'max-w-full fixed inset-0 flex z-40 bg-[#0006] bg-opacity-75 ' : 'max-w-0'} `"
  >
    <div
      class="absolute top-[80px] md:top-[100px] lg:top-[120px] h-svh z-100 bg-[#f1f4f1] right-0 flex-row"
      :class="[open ? 'max-w-xl' : 'max-w-0']"
    >
      <div
        ref="content"
        class="transition-all duration-700 h-full bg-[#f1f4f1] flex overflow-hidden items-start justify-center"
      >
        <div
          class="w-[360px] sm:w-[500px] text-center delay-500 text-[#025048] font-bold text-xl p-5 pb-0"
        >
          <div class="flex relative flex-row justify-between items-center">
            <h1 class="flex-grow text-2xl sm:text-3xl p-3 text-left">
              Shopping Cart
            </h1>
            <svg
              @click="closeCart"
              :class="`md:hidden inline-block cursor-pointer`"
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#025048"
            >
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
              />
            </svg>
          </div>

          <div
            v-for="item in cartItemsUnique"
            :key="`product-${item.id}`"
            class="text-black bg-[#f1f4f1]"
          >
            <div
              class="text-left max-w-[350px] md:max-w-full whitespace-nowrap overflow-x-hidden text-ellipsis p-3 pb-0"
            >
              {{ item.title }}
            </div>
            <div class="bg-[#f1f4f1] p-3 flex justify-between items-center">
              <div
                class="bg-[#f1f4f1] max-w-[450px] text-black flex justify-between align-middle"
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
                      class="bg-[#f1f4f1] text-black h-full border-black content-center"
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
              <div class="text-black bg-[#f1f4f1] text-2xl">
                ${{ (noOfProductInCart(item) * item.price).toFixed(2) }}
              </div>
            </div>
          </div>
          <div
            v-if="cartItems.length"
            class="flex justify-between bg-[#f1f4f1]"
          >
            <div class="p-3 text-2xl text-left">Total</div>
            <div class="p-3 text-2xl text-right">${{ getTotal() }}</div>
          </div>
          <div
            v-else
            class="text-black p-3 flex justify-start align-middle h-[100vh]"
          >
            <div>No items in cart</div>
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
      dimmer: true,
    }
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
    isCartOpen(value) {
      console.log(value)
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
      if (this.open) document.body.style.overflowY = 'hidden'
      else document.body.style.overflowY = 'auto'
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
