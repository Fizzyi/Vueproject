import axios from 'axios'

export default {
  namespaced: true,
  state () {
    return {
      list: []
    }
  },
  mutations: {
    updateList (state, payload) {
      state.list = payload
    },
    updateCount (state, payload) {
      const goods = state.list.find((item) => item.id === payload.id)
      goods.count = payload.count
    }
  },
  actions: {
    async getList (context) {
      const res = await axios.get('http://127.0.0.1:3000/cart')
      console.log(res.data)
      context.commit('updateList', res.data)
    },
    async updateCountAsync (context, payload) {
      if (payload.count >= 1) {
        console.log(payload)
        const res = await axios.patch('http://127.0.0.1:3000/cart/' + payload.id, {
          count: payload.count
        })
        console.log(res)
        context.commit('updateCount', payload)
      }
    }
  },
  getters: {
    total (state) {
      return state.list.reduce((sum, item) => sum + item.count, 0)
    },
    totalPrice (state) {
      return state.list.reduce((sum, item) => sum + item.count * item.price, 0)
    }
  }
}
