import Vue from 'vue'
import App from './App.vue'
import router from './router'
import tb from "@/components/attr-table.vue"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/mobile/public.scss'
import VueSignaturePad from 'vue-signature-pad'

Vue.component("attr-table", tb)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(VueSignaturePad)


Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
