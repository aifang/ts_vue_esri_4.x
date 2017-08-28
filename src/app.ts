import * as Vue from 'vue';
import * as VueRouter from 'vue-router'
import * as ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css';
import routes from './routes'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})


const app = new Vue({
    router: router,
    el: '#app'
});