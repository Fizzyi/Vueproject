<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值：<label>{{ count }}</label>
    <br>
    <button>值 + 1</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
console.log(mapState(['count']))
export default {
  computed: {
    ...mapState(['count'])
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