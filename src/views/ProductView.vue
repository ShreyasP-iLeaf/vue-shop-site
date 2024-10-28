<template>
  <div v-if="product" class="p-5 lg:px-10 lg:py-24">
    <div class="max-w-[1440px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div class="grid grid-cols-5 gap-3">
          <div class="col-span-1 flex flex-col">
            <img
              v-for="(image, index) in smallImages"
              :src="getImageURL(image)"
              :key="product.id + '-' + index"
              alt="Product-smaller-image"
              class="w-full mb-3 cursor-pointer border-black focus:border-2"
              tabindex="0"
              @click="myCarousel.slideTo(index)"
            />
          </div>
          <div class="col-span-4 w-full h-full">
            <Carousel ref="myCarousel">
              <Slide
                v-for="(image, index) in largeImages"
                :key="index + '-' + product.id"
              >
                <div class="carousel__item">
                  <inner-image-zoom
                    class="object-cover w-full"
                    :src="getImageURL(image)"
                    :height="600"
                    :zoomSrc="getImageURL(image)"
                    :hideHint="true"
                    :hasSpacer="true"
                    zoomType="hover"
                  />
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
        <div class="">
          <div class="text-[#025048] mb-3">
            <div class="text-xl md:text-2xl mb-2">{{ product.category }}</div>
            <div class="text-3xl">{{ product.name }}</div>
          </div>
          <div class="">
            <div class="pb-1 text-xl text-[#424b4a] lg:text-3xl">
              <span
                v-if="product.lastPrice"
                class="line-through opacity-50 font-normal mr-2"
                >${{ product.lastPrice.toFixed(2) }}</span
              >
              <span class="font-bold"
                >${{ product.currentPrice.toFixed(2) }}</span
              >
              <span class="text-xl"> & Free Shipping</span>
            </div>
            <div class="text-[#424b4a] text-xl mb-3">
              Discover the beauty of ceramics with our handcrafted. This
              exquisite piece combines artistry and function, making it a
              versatile addition to any space. Whether used as a decorative
              accent or a practical item, this ceramic creation adds a touch of
              elegance to your surroundings.
            </div>
            <button
              v-if="ifAtleastOneItem() === -1"
              @click="addProductToCart(product)"
              class="h-[52px] inline-block px-8 py-3 hover:bg-[#025048] hover:text-white max-w-[200px] border-[#025048] border-2 bg-white text-[#025048] text-lg self-center"
            >
              Add to cart
            </button>
            <div v-else class="h-[52px] flex flex-row">
              <div
                class="grid grid-cols-3 text-center w-full max-h-[50px] max-w-[150px] px-0 py-0 self-center text-[#424b4a] border-2 bg-white text-xl"
              >
                <button @click="removeProductFromCart()" class="py-2 px-3">
                  -
                </button>
                <div class="bg-white border-x-2 h-full content-center">
                  {{ noOfProductInCart() }}
                </div>
                <button class="text-center px-4" @click="addProductToCart()">
                  +
                </button>
              </div>
            </div>
            <div class="border-t-2 mt-5">
              <div class="text-xl text-[#424b4a] mt-2">
                Category:
                <span class="text-[#025048]">{{ product.category }}</span>
                <div class="font-bold my-2">
                  Free shipping on orders over $50!
                </div>
                <div class="flex flex-row items-center mb-1">
                  <svg
                    fill="#424b4a"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#424b4a"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"
                      ></path>
                    </g>
                  </svg>
                  <span class="ml-3">No-Risk Money Back Guarantee!</span>
                </div>
                <div class="flex flex-row items-center mb-1">
                  <svg
                    fill="#424b4a"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#424b4a"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"
                      ></path>
                    </g>
                  </svg>
                  <span class="ml-3">No Hassle Refunds</span>
                </div>
                <div class="flex flex-row items-center">
                  <svg
                    fill="#424b4a"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#424b4a"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"
                      ></path>
                    </g>
                  </svg>
                  <span class="ml-3">Secure Payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref, computed } from 'vue'
import productData from '../components/Product/data.json'
import productData2 from '../components/Trending/data.json'
import { cartStore } from '@/stores/app'
import InnerImageZoom from 'vue-inner-image-zoom'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
const myCarousel = ref(null)
const product = ref(null)

const cartItems = computed(() => cartStore().cart)
const smallImages = computed(() => product.value.images.map(image => image[0]))
const largeImages = computed(() => product.value.images.map(image => image[1]))

function getImageURL(name) {
  console.log(product.value.images)
  const url = new URL(`../assets/images/${name}`, import.meta.url).href
  return url
}
onMounted(() => {
  const route = useRoute()
  const productId = Number(route.params.id)
  product.value =
    productData.find(product => product.id === productId) === undefined
      ? productData2.find(product => product.id === productId)
      : productData.find(product => product.id === productId)
})

function ifAtleastOneItem() {
  return cartItems.value.findIndex(item => product.value.id === item.id)
}

function addProductToCart() {
  cartStore().addToCart(product.value)
}

function noOfProductInCart() {
  let count = 0
  cartItems.value.forEach(item =>
    item.id === product.value.id ? count++ : null,
  )
  return count
}
function removeProductFromCart() {
  const cartCopy = [...cartItems.value]
  const itemIndex = cartCopy.findIndex(item => item.id === product.value.id)
  cartCopy.splice(itemIndex, 1)
  cartStore().updateCart(cartCopy)
}
</script>

<style scoped lang="scss"></style>
