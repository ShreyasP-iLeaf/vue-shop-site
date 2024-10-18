<template>
  <div
    :class="`${products.length && productsViewed ? 'h-auto' : 'h-[95vh]'} bg-black flex justify-center items-center relative`"
  >
    <section
      :class="`absolute w-full transition-all duration-700 ${productsViewed ? 'scale-0' : 'scale-100'} z-20`"
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
          <a
            href="#"
            @click="showProducts"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            View products
          </a>
        </div>
      </div>
    </section>
    <section
      :class="`${products.length && productsViewed ? 'relative' : 'absolute'}  bg-black delay-500 w-full p-5 md:p-10 transition-all duration-1000 ${productsViewed ? '-left-0' : '-left-full'}`"
    >
      <div
        v-show="products.length"
        class="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div
          v-for="(item, index) in products"
          :key="index"
          :id="item.id"
          class="bg-white grid grid-rows-5 p-3 border-2 m-3 text-center relative shadow-inner hover:scale-105 duration-100 ease-in"
        >
          <div class="row-span-1 text-xl self-center">{{ item.title }}</div>
          <div class="grid grid-cols-1 row-span-3">
            <img
              class="w-full object-contain max-h-[300px]"
              :src="item.image"
              :alt="index"
            />
            <div class="flex justify-center mt-10 cursor-pointer items-end">
              <button
                class="bg-black text-white hover:scale-110 transition-all ease-in px-7 py-3"
              >
                Add To Cart
                <svg
                  class="inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="white"
                >
                  <path
                    d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex justify-between self-end row-span-1">
            <div
              class="rating-container"
              :id="`r-${item.id}`"
              v-if="item.rating.rate"
            >
              <span class="rating-star"></span>
              <span class="rating-star"></span>
              <span class="rating-star"></span>
              <span class="rating-star"></span>
              <span class="rating-star"></span>
              <span class="rating-count text-2xl"
                >({{ item.rating.count }})</span
              >
            </div>
            <div class="text-2xl">${{ item.price }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      productsViewed: false,
      products: [],
    }
  },
  methods: {
    showProducts() {
      this.productsViewed = true
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
          this.products = json
          this.products.sort(() => 0.5 - Math.random())
          console.log(this.products)
          this.putRatingOnBooks()
          this.$nextTick(() => this.putRatingOnBooks())
        })
    },
    putRatingOnBooks() {
      this.products.forEach(each => {
        const ratingValue = each.rating.rate
        const ratingContainer = document.getElementById(`r-${each.id}`)
        if (ratingContainer) {
          const ratingStars = ratingContainer.querySelectorAll(`.rating-star`)
          // Calculate the number of stars to be filled
          const filledStars = Math.round(ratingValue * 2) / 2

          // Add the 'filled' class to the appropriate number of stars
          ratingStars.forEach((star, index) => {
            if (index < filledStars) {
              star.classList.add('filled')
            }
          })
        }
      })
    },
  },
  beforeMount() {},
}
</script>

<style scoped lang="scss">
.rating-container {
  font-size: 24px;
  display: flex;
  .rating-star {
    display: inline-block;
    &.filled {
      color: gold; /* Color for filled stars */
    }
    &::before {
      content: '★';
    }
  }
  .rating-count {
    font-size: 21px;
    padding-top: 3px;
  }
}
</style>
