import Vue from 'vue'
import Router from 'vue-router'

// route level code-splitting
// this generates a separate chunk (wallet.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const wallet = () => import(/* webpackChunkName: "wallet" */ './pages/wallet.vue')
const explorer = () => import(/* webpackChunkName: "explorer" */ './pages/explorer.vue')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'wallet',
            component: wallet,
        },
        {
            path: '/explorer',
            name: 'explorer',
            component: explorer,
        }
    ]
})
