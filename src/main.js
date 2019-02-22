import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index.js'
import './store/'
import {
    routerMode
} from './config/env'
import AntDesign from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './style/common.scss'

import './assets/font/iconfont.svg'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(AntDesign)
const router = new VueRouter({
    routes,
    mode: routerMode,
    strict: process.env.MODE_ENV !== 'production',
    scrollBehavior(to, from, savedPosition) {
        console.log('TCL: scrollBehavior -> to', to)
        console.log('TCL: scrollBehavior -> from', from)
        console.log('TCL: scrollBehavior -> savedPosition', savedPosition)
        if (savedPosition) {
            return savedPosition
        } else {
            const position = {}

            if (to.hash) {
                console.log('TCL: scrollBehavior -> to.hash', to.hash)
                position.selector = to.hash

                if (to.hash === '#anchor') {
                    position.offset = {
                        y: 100
                    }
                }

                if (document.querySelector(to.hash)) {
                    return position
                }

                return false
            }

            return new Promise(resolve => {
                if (to.matched.some(m => m.meta.scrollToTop)) {
                    position.x = 0
                    position.y = 0
                }

                this.app.$root.$once('triggerScroll', () => [
                    resolve(position)
                ])
            })
        }
        // if (savedPosition) {
        //     return savedPosition
        // } else {
        //     if (from.meta.keepAlive) {
        //         from.meta.savedPosition = document.body.scrollTop;
        //     }
        //     return {
        //         x: 0,
        //         y: to.meta.savedPosition || 0
        //     }
        // }
    }
})

router.beforeEach((to, from, next) => {
    // 关掉蒙层之后再跳转
    document.querySelector(".v-modal") && document.querySelector(".v-modal").remove();
    next();
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
