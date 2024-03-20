// 导入App.vue，基于App.vue创建结构渲染index.html
import Vue from 'vue'
import App from './App.vue'
import './styles/base.css' // css 样式重置
import './styles/common.css' // 公共全局样式
import './assets/iconfont/iconfont.css' // 字体图标的样式
import BaseGoodsItem from './components/BaseGoodsItem.vue'
import BaseBrandItem from './components/BaseBrandItem.vue'
import BaseTopiceItem from './components/BaseTopicItem.vue'
// 提示当前处于什么环境
Vue.config.productionTip = false

// 全局注册组件
Vue.component("BaseGoodsItem", BaseGoodsItem)
Vue.component("BaseBrandItem", BaseBrandItem)
Vue.component("BaseTopiceItem", BaseTopiceItem)
// Vue实例化
new Vue({
  render: h => h(App),
}).$mount('#app')
