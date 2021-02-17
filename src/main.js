import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../public/Assets/CSS/style.css'
import '../public/Assets/fontawesome-5.13.0/css/all.min.css'

new Vue({
  render: h => h(App),
}).$mount('#app')


