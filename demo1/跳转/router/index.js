import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) // VueRouter 初始化

// @ 代表绝对路径 从src开始

import Find from '@/views/Find.vue'
import Friend from '@/views/Friend.vue'
import My from '@/views/Friend.vue'
import NotFind from '@/views/NotFind.vue'

const router = new VueRouter({
    routes: [
        { path: "/", redirect: "/my" },
        { path: "/find", component: Find },
        { path: "/friend", component: Friend },
        { path: "/my", component: My },
        { path: "*",component: NotFind}

    ],
    mode:"history"
})

export default router