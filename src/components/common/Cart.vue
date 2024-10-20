<template>
  <div>
    <div
      class="absolute top-25 h-screen z-60 bg-black"
      :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
    >
      <div
        ref="content"
        class="transition-all duration-700 h-full bg-black overflow-hidden flex items-start justify-center"
        :class="[open ? 'max-w-lg' : 'max-w-0']"
      >
        <div
          class="w-[300px] md:w-[500px] text-center delay-500 text-white font-bold text-xl p-5"
        >
          <h1 class="text-4xl border-b-2 border-white p-3 mb-2">
            Shopping Cart
          </h1>
          <div v-for="item in cartItemsUnique" :key="`product-${item.id}`">
            <div
              class="text-white text-left max-w-[500px] overflow-x-ellipsis p-2 pl-0"
            >
              {{ item.title }}
            </div>
            <div class="flex justify-between items-center">
              <div
                class="bg-white max-w-[450px] text-black flex justify-between align-middle p-3"
              >
                <img
                  class="max-w-[100px] max-h-[100px] mx-2"
                  :src="item.image"
                  :alt="`product-${item.id} image`"
                />
                <div class="flex items-center justify-around">
                  ${{ item.price }}
                  <div
                    class="grid grid-cols-3 text-center ml-2 w-full max-h-[50px] max-w-[150px] px-3 py-0 self-center text-white bg-black text-xl"
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
                    <button @click="addProductToCart(item)">+</button>
                  </div>
                </div>
              </div>
              <div class="text-2xl">
                ${{ noOfProductInCart(item) * item.price }}
              </div>
            </div>
          </div>
        </div>
        <slot></slot>
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
      right: true,
    }
  },
  props: {
    openCart: {
      type: Boolean,
    },
  },
  computed: {
    cartItems() {
      return cartStore().cart
    },
    cartItemsUnique() {
      let uniqueObjects = {}
      this.cartItems.forEach(obj => {
        uniqueObjects[obj.id] = obj
      })
      let output = Object.values(uniqueObjects)
      console.log(output)
      return output
    },
  },
  watch: {
    openCart() {
      this.toggle()
    },
  },
  methods: {
    toggle() {
      this.open = !this.open
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
  },
}
</script>

<style>
html {
  background: #efefef;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
