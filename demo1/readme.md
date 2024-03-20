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

# v-model 原理
本质上是个语法糖，是 value属性和input事件的合写。

# .sync 修饰符

# $nextTick
vue是异步更新DOM的。

等DOM更新后，才会触发执行此方法里的函数体
```
this.$nextTick(() => {
    执行函数
})
```

# 自定义指令
封装一些dom操作，扩展额外功能。
```js
// 全局注册
Vue.directive('指令名',{
    "inserted"(el){ // inserted会在 指令所在的元素，被插入到页面时触发
        // 可以对el标签，扩展额外的功能 el就是指令所绑定的元素
        el.focus()
    }
})

// 局部注册
directives:{
    "指令名":{
        inserted(el,binding){
            el.style.color = binding.value // 获取指令的值
            el.focus()
        },
        // update 指令的值修改的时候出发，提供值变化后，dom更新逻辑
        updated(el,binding){
            el.style.color = binding.value
        }
    }
}

// 使用
<input v-指令名 type='text'>



```


# 插槽
基本语法

1.组件内需要定制的结构部分，改用<slot></slot>站位。

2.使用组件时，<MyDialog></MyDialog>标签内部，传入结构替换slot

## 后备内容（默认值）
在slot标签内，放置内容，如果不传，则显示默认内容。

## 具名插槽
一个组件内有多处结构，需要外部传入标签，进行定制。
1. 多个slot使用name属性区分名称  <slot name="name1"></slot> <slot name="name2"></slot>
2. template配合v-slot:名字来分发对应标签
```js
<MyDialog>
<template v-slot:name1>  //可以简化为 #name1
</template>
<template v-slot:name2>
</template>
</MyDialog>
```

## 作用域插槽
作用：给插槽绑定数据，供将来使用组件时使用
使用步骤
（1）给slot标签，以 添加属性的方式传值
（2）所有属性都会被添加到一个对象中
（3）template中，通过 ‘#插槽名="obj"’ 接收，默认的插槽名为 default

```js
<slot :row="item" msg="测试文本"></slot>


<template #default="obj">
    <button @click="del(obj.row.id)">删除</button>
</template>

```


# VueRouter

```js
import VueRouter from 'vue-router' // 引入
Vue.use(VueRouter) // VueRouter 初始化注册
const router = new VueRouter({ //创建路由对象
  routes: [
    { path: "/find", component: Find }, // 创建组件，配置规则
    { path: "/friend", component: Friend },
    { path: "/my", component: My },

  ]
})
new Vue({ 
  render: h => h(App),
  router // 注入Vue实例
}).$mount('#app')


<template>
  <div>
    <div class="footer_wrap">
      <a href="#/find">发现音乐</a> // 配置导航
      <a href="#/my">我的音乐</a>
      <a href="#/friend">朋友</a>
    </div>
    <div class="top">
      <router-view></router-view> // 配置路由出口 router-view 组件展示的位置
    </div>
  </div>
</template>


```

页面组件 页面展示-配合路由使用 放在 src/views文件夹
复用组件 展示数据-常用于复用 放在 src/components文件夹


# router-link
vue-router提供的全局组件，用于替换a标签

必须传入to属性，指定路由路径值
```js
<router-link to="路径值"></router-link> 


.footer_wrap a.router-link-active {
  background-color: pink;
}
```
能跳转，能高亮（自带激活时的类名）