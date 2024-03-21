<template>
  <div id="app">
    <h1>根组件</h1>
    <input type="text">
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
