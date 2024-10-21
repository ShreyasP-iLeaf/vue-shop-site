import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const cartStore = defineStore('cart', () => {
  let cart = ref([])
  let isCartOpen = ref(false)
  const noOfItemsInCart = computed(() => cart.value.length)
  function addToCart(newProdcut) {
    cart.value.push(newProdcut)
  }
  function updateCart(newProducts) {
    cart.value = newProducts
  }
  function toggleCart(value) {
    isCartOpen.value = value
  }

  return {
    cart,
    isCartOpen,
    noOfItemsInCart,
    addToCart,
    updateCart,
    toggleCart,
  }
})

export const productStore = defineStore('products', () => {
  const products = ref([])
  let isProductsShown = ref(false)
  function updateProductsVisibility(value) {
    isProductsShown.value = value
  }
  function updateProducts(newProdcut) {
    products.value.push(...newProdcut)
  }

  return { products, isProductsShown, updateProductsVisibility, updateProducts }
})
