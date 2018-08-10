// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource);
// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;


/* eslint-disable no-new */
// ESLint 是一个开源的 JavaScript 代码检查工具，直接 eslint-disable 的作用是完全禁用ESLint进行检测
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
