import Vue from 'vue'
import App from './app'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Axios from 'axios';
import { baseURL } from '@/utils/baseURL'

Vue.config.productionTip = false

Axios.defaults.baseURL = baseURL()

console.log('Pusher Tutorial : https://pusher.com/tutorials/live-game-laravel')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')