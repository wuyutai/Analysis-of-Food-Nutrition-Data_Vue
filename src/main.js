import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';//element-ui全部组件
import 'element-ui/lib/theme-chalk/index.css';//element-ui样式
import vueAxios from 'vue-axios'


Vue.use(vueAxios, axios)
Vue.use(ElementUI)//使用element-ui，必须再use

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')