import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(VueRouter) // VueRouter 初始化

import Find from './views/Find.vue'
import Friend from './views/Friend.vue'
import My from './views/My.vue'

const router = new VueRouter({
  routes: [
    { path: "/find", component: Find },
    { path: "/friend", component: Friend },
    { path: "/my", component: My },

  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
