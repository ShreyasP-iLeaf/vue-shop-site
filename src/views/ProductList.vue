<template>
  <section
    :class="`${products.length && productsViewed ? 'relative' : 'absolute h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] lg:h-[calc(100vh-120px)] bg-black'}  bg-black delay-500 w-full p-5 md:p-10 transition-all duration-1000 ${productsViewed ? '-left-0' : '-left-full'}`"
  >
    <div
      v-show="products.length"
      class="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
    >
      <router-link
        to="/details"
        v-for="(item, index) in products"
        :key="index"
        :id="item.id"
        class="bg-white grid grid-rows-5 p-3 border-2 m-3 text-center relative shadow-inner"
      >
        <div
          class="row-span-1 text-xl self-center font-semibold border-b-2 max-h-10 whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {{ item.title }}
        </div>
        <div class="grid grid-cols-1 row-span-4">
          <img
            class="w-full object-contain max-h-[230px] pb-5 hover:scale-105 duration-100 ease-in"
            :src="item.image"
            :alt="index"
          />
          <div class="flex flex-col justify-center items-center">
            <div class="text-2xl">${{ item.price }}</div>
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
          </div>
        </div>
      </router-link>
    </div>
  </section>
  <NavSection position="footer" />
</template>

<script>
import NavSection from '@/components/common/NavSection.vue'

export default {
  name: 'ProductList',
  data() {
    return {
      productsViewed: false,
      products: [],
    }
  },
  components: {
    NavSection: NavSection,
  },
  beforeMount() {
    this.productsViewed = true
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        this.products = json
        this.products.sort(() => 0.5 - Math.random())
        console.log(this.products)
        this.$nextTick(() => this.putRatingOnBooks())
      })
  },
  methods: {
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
