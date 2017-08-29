import * as Vue from 'vue';
import * as VueRouter from 'vue-router'
import routes from './routes'
import { Loading, MessageBox, Notification, Message } from 'element-ui'

import { Autocomplete } from 'element-ui'
Vue.use(Autocomplete)

Vue.prototype['$loading'] = Loading.service
Vue.prototype['$alert'] = MessageBox.alert
Vue.prototype['$msgbox'] = MessageBox
Vue.prototype['$confirm'] = MessageBox.confirm
Vue.prototype['$prompt'] = MessageBox.prompt
Vue.prototype['$notify'] = Notification
Vue.prototype['$message'] = Message

Vue.use(VueRouter)

const router = new VueRouter({
    routes: routes
})


const app = new Vue({
    router: router,
    el: '#app'
});