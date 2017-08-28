import * as Vue from 'vue';
import * as VueRouter from 'vue-router'
import routes from './routes'

import { Autocomplete, Message } from 'element-ui'

Vue.use(Autocomplete);
Vue['$message'] = Message

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})


const app = new Vue({
    router: router,
    el: '#app'
});