<template>
    <!-- 输入框 -->
    <header class="header">
        <h1>小黑记事本</h1>
        <input placeholder="请输入任务" class="new-todo" @key.enter="addNewTodo" v-model="todoName" />
        <button class="add" @click="addNewTodo">添加任务</button>
    </header>

</template>

<script>
export default {
    data() {
        return {
            todoName: ''
        }
    },
    props: {
        newTodo: String
    },
    methods: {
        addNewTodo() {
            if (this.todoName.trim() === '') {
                alert("任务名称不能填空")
                return
            }
            this.$emit("addNewTodo", this.todoName)
            this.todoName = ""
        }
    }
}
</script>

<style></style>