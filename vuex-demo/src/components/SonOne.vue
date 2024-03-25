<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值：<label>{{ $store.state.count }}</label>
    <br>
    <button @click="addCount(1)">值 + 1</button> <button @click="addCount(5)">值 + 5</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: {
    ...mapMutations(['addCount']),

  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}

h2 {
  margin-top: 10px;
}
</style>