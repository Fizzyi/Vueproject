# Vuex

## 初始化
```jsx
store/index.js

// 导入 vue
import Vue from 'vue'
// 导入 vuex
import Vuex from 'vuex'
// vuex也是vue的插件, 需要use一下, 进行插件的安装初始化
Vue.use(Vuex)

// 创建仓库 store
const store = new Vuex.Store()

// 导出仓库
export default store


main.js
// 在main.js中导入挂载到Vue实例上

import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

```

## 获取仓库中的数据
1、添加数据
```js
const store = new Vuex.Store(
    {
        // state状态，即数据，类似于vue组件中的data
        // 区别： data是组件自己的数据，state中的数据是整个vue项目的组件都能访问到
        state: {
            count: 101
        }
    }
)
```
2、 第一种获取数据的方法

（1）在 Vue模版中使用： {{ $store.state.xxx }}

（2）在组件逻辑中： this.$store.state.xxx

3、 第二种获取数据的方法 mapState
```js
// 导入mapState
import { mapState } from `vuex`

computed:{
    ...mapState(['count'])
}
```

## 修改仓库中的数据 mutations
```js
//开启严格模式
const store = new Vuex.Store(
    {
        // state状态，即数据，类似于vue组件中的data
        // 区别： data是组件自己的数据，state中的数据是整个vue项目的组件都能访问到
        state: {
            count: 101
        },
        strict: true,
    }
)

```

mutations 是一个对象，对象中存放修改state的方法
```js
mutations: {
            addCount(state,num) {
                state.count += num
            }
        }


//组件中提交 mutations 最多只有一个参数，如果有多个参数，组装成map传递
this.$store.commit('方法名','参数')

```

## 辅助函数 mapMutations
mapMutations 和 mapState很像，把位于 mutations中的方法提取出来， 然后就可以直接调用这个函数。
```jsx
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations(['addCount']),

  }
}

```