import Vue from 'vue'
// 导入vuex
import Vuex from 'vuex'
// 初始化vuex
Vue.use(Vuex)
// 创建仓库
const store = new Vuex.Store(
    {
        // state状态，即数据，类似于vue组件中的data
        // 区别： data是组件自己的数据，state中的数据是整个vue项目的组件都能访问到
        state: {
            count: 101
        },
        strict: true,
        mutations: {
            addCount(state,num) {
                state.count += num
            }
        }
    }
)
// 导出仓库
export default store