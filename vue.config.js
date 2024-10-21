import defineConfig from '@vue/cli-service'

export default defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/main.scss";`,
      },
    },
  },
  configureWebpack: {
    resolve: {
      modules: [
        'node_modules', // Include the default 'node_modules' directory
      ],
    },
  },
  publicPath: import.meta.env.MODE === 'production' ? '/vue-shop-site/' : '/',
})
