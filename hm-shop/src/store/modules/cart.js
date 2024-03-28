import { getCartList } from '@/api/cart'
export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  mutations: {
    setCartList (state, newList) {
      state.cartList = newList
    },
    toggleCheck (state, goodsId) {
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      goods.isChecked = !goods.isChecked
    },
    toggleAllCheck (state, flag) {
      state.cartList.forEach(item => {
        item.isChecked = flag
      })
    }
  },
  actions: {
    async getCartAction (context) {
      const { data } = await getCartList()
      data.list.forEach(item => {
        item.isChecked = true
      })
      context.commit('setCartList', data.list)
    }
  },
  getters: {
    // 获取商品总数
    cartTotal (state) {
      return state.cartList.reduce((sum, item, index) => sum + item.goods_num, 0)
      // reduce 接收一个回调函数和一个初始值作为参数，然后对数组的每个元素依次调用回调函数，将回调函数的返回值累加到初始值上，最终返回一个单一的值
      // 第一个参数为累加器，第二个参数为 当前值，第三个参数为 当前索引
    },
    // 选中的商品列表
    selCartList (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    // 选中的商品总数
    selCount (state, getters) {
      return getters.selCartList.reduce((sum, item, index) => sum + item.goods_num, 0)
    },
    // 选中的商品总价
    selPrice (state, getters) {
      return getters.selCartList.reduce((sum, item, index) => { return sum + item.goods_num * item.goods.goods_price_min }, 0).toFixed(2)
      // return getters.selCartList.reduce((sum, item, index) => { return sum + item.goods_num * item.goods.goods_price_min }, 0).toFixed(2)
    },
    // 购物车全选反选功能
    isAllChecked (state) {
      // every方法来判断每个元素是否具有isChecked属性并且该属性的值为true。 如果都满足这个条件，则函数返回true，否则返回false。
      return state.cartList.every(item => item.isChecked)
    }
  }
}
