import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

Vue.filter('minutes', value => {
  if (!value || typeof value !== 'number') return '00:00';
  let min = parseInt(value / 60),
    sec = parseInt(value % 60);
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;
  value = min + ':' + sec;
  return value;
});

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
