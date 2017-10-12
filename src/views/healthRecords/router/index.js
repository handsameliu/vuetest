import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'record',
      component:resolve => require(['../components/recordIndex'],resolve)  // 改为异步加载
    },{
      path: '/recordTimeLine',
      name: 'timeLine',
      component:resolve => require(['../components/recordTimeLine'],resolve)
    }
  ]
})

// 参考 vue2懒加载  http://www.cnblogs.com/zhanyishu/p/6587571.html