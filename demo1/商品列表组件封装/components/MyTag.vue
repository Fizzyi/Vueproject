<template>
    <div class="my-tag">
        <input v-if="isEdit" v-focus class="input" type="text" placeholder="输入标签" @blur="isEdit = false" :value="value"
            @keyup.enter="handleEnter" />
        <div v-else class="text" @dblclick="handleClick">{{ value }}</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isEdit: false
        }
    },
    methods: {
        handleClick() {
            // 双击后，切换到显示状态
            this.isEdit = true
        },
        handleEnter(e) {
            // 子传父，回车时，输入框的内容需要提交给父组件更新
            // 由于父组件是v-model，触发事件，需要触发input事件
            if(e.target.value.trim() === '') return alert("标签内容不能为空")
            this.$emit("input", e.target.value)
            this.isEdit = false
        }
    },
    props: {
        value: String
    }
}
</script>

<style lang="less" scoped>
.my-tag {
    cursor: pointer;

    .input {
        appearance: none;
        outline: none;
        border: 1px solid #ccc;
        width: 100px;
        height: 40px;
        box-sizing: border-box;
        padding: 10px;
        color: #666;

        &::placeholder {
            color: #666;
        }
    }
}
</style>