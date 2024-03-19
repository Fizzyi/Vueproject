<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @addNewTodo="addNewTodo"></TodoHeader>
    <TodoMain :list="list" @del="del"></TodoMain>
    <TodoFooter :list="list" @clean="clean"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoMain from './components/TodoMain.vue'


export default {
  // 1. 提供数据 -》 提供在公共的父组件 App.vue
  // 2. 通过父传子， 将数据传递给 TodoMain
  // 3. 利用 v-for渲染
  data() {
    return {
      list: [
        { id: 1, name: '打篮球' },
        { id: 2, name: '看电影' },
        { id: 3, name: '逛街' }
      ],
    }
  },
  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
  },
  methods: {
    addNewTodo(newValue) {
      this.list.unshift({ id: +new Date(), name: newValue })
      console.log(newValue)
    },
    del(id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    clean() {
      this.list = []
    }
  }
}
</script>

<style></style>
