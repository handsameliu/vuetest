import Vue from 'vue';   //这里是引入vue主文件 
import login from './Login.vue';  // 这里是引入目录下的login.vue模块
import VueResource from 'vue-resource'; // 引入http

Vue.use(VueResource);
Vue.config.productionTip = false;

let loginVm = new Vue({
  el: '#app',  
  template: '<login/>',
  components: { login }
});