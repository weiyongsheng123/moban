import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/icons' // icon
import '@/styles/xr-theme.scss'
import '@/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css';
// import '@/utils/permission';

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
