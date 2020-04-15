import Vue from 'vue'
import Vuelidate from 'vuelidate'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuelidate)
// Add the required rule

// Activate the Arabic locale.

// Register it globally
// main.js or any entry file.

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
