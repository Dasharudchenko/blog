import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

document.addEventListener('DOMComponentLoaded', () => {
  document.querySelector('textarea').addEventListener('input', e => {
    e.target.style.height = 'auto'
    e.target.style.height = e.target.scrollHeight + 1 + 'px'
  })
})