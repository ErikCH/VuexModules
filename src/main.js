import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import store from './state/store';
import router from './router'

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
