<template>
  <div
    class="transition-all duration-700 absolute top-0 right-0 h-[100vh]"
    :class="`${open ? 'sticky inset-0 flex z-40 bg-[#0006] bg-opacity-75 ' : 'max-w-0'} `"
  >
    <div
      class="absolute transition-all duration-300 top-0 h-[100vh] z-100 bg-white right-0 flex-row"
      :class="[open ? 'max-w-lg' : 'max-w-0']"
    >
      <div
        class="h-full bg-white flex overflow-hidden items-start justify-center"
      >
        <div
          ref="content"
          class="w-[400px] sm:w-[500px] relative flex flex-col h-full text-center delay-500 text-[#025048] font-bold text-xl pb-0"
        >
          <div
            class="flex relative flex-row justify-between items-center border-b-2 mb-5"
          >
            <h1 class="text-xl sm:text-2xl p-5 pr-0 text-left">
              Shopping Cart
            </h1>
            <svg
              @click="closeCart"
              :class="`mr-5 cursor-pointer`"
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
            v-if="cartItems.length"
            class="absolute w-full bottom-0 bg-white"
          >
            <div class="flex border-y-2 flex-row justify-between">
              <div class="p-3 px-5 text-2xl text-left text-[#025048]">
                Subtotal:
              </div>
              <div class="p-3 px-5 text-xl text-right text-[#424b4a]">
                ${{ getTotal() }}
              </div>
            </div>
            <div class="p-5">
              <button
                class="block mb-3 w-full m-auto py-2 border-[#025048] border-2 hover:text-white hover:bg-[#025048]"
              >
                VIEW CART
              </button>
              <button
                class="block w-full m-auto py-2 border-[#025048] border-2 hover:text-white hover:bg-[#025048]"
              >
                CHECKOUT
              </button>
            </div>
          </div>
          <div class="max-h-[calc(100vh-300px)] overflow-y-scroll">
            <div
              v-for="item in cartItemsUnique"
              :key="`product-${item.id}`"
              class="text-black bg-[#f1f4f1]"
            >
              <div class="bg-white p-5 flex justify-between items-center">
                <div class="bg-white max-w-[450px flex">
                  <img
                    class="w-[100px] max-h-[100px] object-contain"
                    :src="`/vue-shop-site/src/assets/images/${item.images[0]}`"
                    :alt="`product-${item.id} image`"
                  />
                  <div>
                    <div
                      class="text-left max-w-[350px] text-[#025048] md:max-w-full whitespace-nowrap overflow-x-hidden text-ellipsis p-3"
                    >
                      {{ item.name }}
                    </div>
                    <div class="flex items-start justify-start">
                      <div
                        class="grid grid-cols-3 text-center mx-4 w-full max-h-[50px] max-w-[150px] px-0 py-0 self-center text-[#424b4a] border-2 bg-white text-xl"
                      >
                        <button
                          @click="removeProductFromCart(item)"
                          class="py-2 px-3"
                        >
                          -
                        </button>
                        <div class="bg-white border-x-2 h-full content-center">
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
                </div>
                <div class="text-[#424b4a] bg-white text-xl self-end">
                  ${{
                    (noOfProductInCart(item) * item.currentPrice).toFixed(2)
                  }}
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="cartItems.length === 0"
            class="text-[#424b4a] p-3 flex h-full justify-center items-center"
          >
            <div>No products in the cart.</div>
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
    isCartOpen() {
      this.toggle()
    },
  },
  methods: {
    getTotal() {
      let sum = 0
      this.cartItems.forEach(item => {
        sum += item.currentPrice
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
