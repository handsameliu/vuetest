import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'record',
      component:require('../components/recordIndex')
    },{
      path: '/recordTimeLine',
      name: 'timeLine',
      component:require('../components/recordTimeLine')
    }
  ]
})