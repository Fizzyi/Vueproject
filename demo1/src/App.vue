<template>
  <div class="App">
    <!-- 头部组件 -->
    <HmHeader></HmHeader>
    <!-- 主体组件 -->
    <HmMain></HmMain>
    <!-- 底部组件 -->
    <HmFooter></HmFooter>
  </div>
</template>

<script>
import HmFooter from './components/HmFooter.vue';
import HmHeader from './components/HmHeader.vue';
import HmMain from './components/HmMain.vue';
export default {
  components: {
    HmHeader,
    HmFooter,
    HmMain,
  }
}
</script>

<style>
.App {
  width: 600px;
  height: 700px;
  background-color: #87ceeb;
  margin: 0 auto;
  padding: 20px;
}
</style>