import Vue from 'vue'
import App from './App.vue'
import HmButton from './components/HmButton'
Vue.config.productionTip = false

// 进行全局注册
Vue.component("HmButton", HmButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
