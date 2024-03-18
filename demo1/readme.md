# 组件通信  
父子关系：props 和 $emit
1、父组件通过 props 将数据传递给子组件 
（1）父组件中给组件添加标签，添加属性的方式，传值
（2）子组件中通过props进行接收
（3）渲染使用
2、子组件利用 $emit通知父组件修改更新
（1）使用$emit触发事件，给父组件发送消息通知 this.$emit("方法名",value)
(2) 父组件监听事件
(3) 提供处理函数，形参中获取参数

非父子关系：provide & inject eventbus

# 普通组件的注册使用
## 局部注册
哪里需要使用就在哪里进行注册

（1）创建.vue组件（单文件组件）

（2）使用的组件内导入，并且局部注册 components:{组件名：组件对象}
## 全局注册
在main.js 中进行全局注册

（1）创建.vue组件（单文件组件）

（2）main.js内导入，并且全局注册 Vue.component(组件名，组件对象)

# scoped样式冲突
1、 默认的style样式，会作用于全局样式
2、 加上了scoped属性的style样式，只会作用于当前组件 局部样式  
```
<style scoped>
```
原理： （1）给当前组件模版的所有元素，添加上一个自定义属性的 data-v-hash值，区分不同的组件
（2）css选择器后面，被自动处理，添加上了属性选择器。

推荐加上 scoped

# props校验
```vue
## 基础写法 只校验类型
props :{
    校验的属性名：类型 // Number，String，Boolean 
}
## 完整写法
props : {
    校验的属性名:{
        type:类型， // Number，String，Boolean
        required: true, //是否必填
        default:  默认值,
        validator(value){
            // 自定义校验逻辑
            return 是否通过校验
        }
    }
}

```
