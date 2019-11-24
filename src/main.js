import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueLazyLoad,{
    loading: '/imgs/loading-svg/loading-bars.svg',
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
