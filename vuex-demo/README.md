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

## actions 异步操作

```js
// 定义actions

mutations:{
    changeCount(state,newCount){
        state.count = newCount
    }
}


actions:{
    setAsyncCount(context,num){
        // 一秒钟后，给一个数，去修改num
        setTimeout(()=>{
            context.commit('changeCount',num)
        },1000)
    }
}
// 在组件中通过dispatch调用
setAsyncCount(){
    this.$store.dispatch('setAsyncCount',666)
}

// 1.在actions中调用mutations中的方法
// 2.mutations中的方法，修改state中的数据


// 辅助函数 mapActions
// 把位于actions中的方法提取出来，映射到组件methods中。

import { mapActions } from 'vuex'
methods:{
    ...mapActions(['changeCountAction'])
}

// 直接使用 this.方法就可以调用
<button @click='changeCountAction(200)'> 异步</button>

```

## getters 对state中的数据进行筛选后返回

```js
// 1.定义getters
getters:{
    // getters函数的第一个参数是state
    // 必须要有返回值
    filterList: state => state.list.filter(item => item > 5)
}


// 2.使用getters
// 2.1 原始方式 $store
<div>{{ $store.getters.filterList }} </div>
// 2.2 辅助函数 mapGetters
computed:{
    ...mapGetters([]'filterList')
}
<div>{{ filterList }}</div>
```

![68344213391](src/assets/1683442133911.png)



# module
在 store下新建文件夹 modules存放模块。
```js
const state = {
  userInfo: {
    name: 'zs',
    age: 18
  }
}

const mutations = {}

const actions = {}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}

```

在 store/index.js文件中的modules配置项中，注册模块
```js
import user from './modules/user'
import setting from './modules/setting'

const store = new Vuex.Store({
    modules:{
        user,
        setting
    }
})
```
## 获取模块内的state数据

1、直接使用模块名访问 $store.state.模块名.xxx

2、通过mapState访问

（1）默认根级别的映射： mapState(['xxx'])

（2）子模块的映射：mapState('模块名',['xxx']) - 需要在子模块中开启命名空间 namespaced:true
```js
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
```
## 获取模块内的getters数据
1、直接通过模块名访问 $store.getters['模块名/xxx']

2、通过mapGetters映射

(1)默认根级别的映射 mapGetters(['xxx'])

(2)子模块的映射 mapGetters('模块名',['xxx'])

## 获取模块内的mutations方法
需要开启命名空间，才能挂在到子模块。

1、直接通过store调用 $store.commit('模块名/xxx',额外参数)

2、通过 mapMutations映射

（1）默认根级别的映射 mapMutations(['xxx'])

（2）子模块的映射 mapMutations('模块名',['xxx']) - 需要开启命名空间

## 获取模块内的actions方法

1、 直接通过store 调用 $store.dispatch('模块名/xxx',额外参数)

2、通过mapActions映射

(1)默认根级别的映射 mapActions(['xxx'])

(2)子模块的映射 mapActions('模块名',['xxx'])