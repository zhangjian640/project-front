'use strict'
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    open: true,
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      '/': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true
      }
      // [process.env.VUE_APP_BASE_API]: {
      //   target: `${envConfig.apiBaseUrl}${process.env.VUE_APP_BASE_API}`,
      //   changeOrigin: true
      // }
    }
  }
}
