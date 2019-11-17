import Vue from 'vue'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import App from './app.vue'
import router from './router'
import store from './store'
import {init} from './libs/utools_events'

Vue.config.productionTip = false
Vue.use(ViewUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

init(router)
