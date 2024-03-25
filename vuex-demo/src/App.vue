<template>
  <div id="app">
    <h1>根组件</h1>
    <input type="text" :value="$store.state.count" @input="handleInput">
    <SonOne></SonOne>
    <hr>
    <SonTwo></SonTwo>
  </div>
</template>

<script>
import SonOne from './components/SonOne.vue';
import SonTwo from './components/SonTwo.vue';

export default {
  name: 'App',
  components: {
    SonOne,
    SonTwo
  },
  created() {
    console.log("测试", this.$store)
  },
  methods: {
    handleInput(e) {
      // 1、获取实时输入框的值
      const num = +e.target.value
      console.log(num)
      this.$store.commit('addCount',num)
    }
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
