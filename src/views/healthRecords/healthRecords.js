import Vue from 'vue';
import router from './router';
import axios from '../../lib/axios.config';
import healthRecords from './HealthRecords.vue';

Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<healthRecords/>',
  components: { healthRecords }
})