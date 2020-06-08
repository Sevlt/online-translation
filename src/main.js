import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import 'bootstrap'
import $ from 'jquery'

Vue.use(VueResource)
Vue.config.productionTip = false

new Vue({
    render: (h) => h(App),
}).$mount('#app')
