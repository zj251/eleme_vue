import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import pagenow from '@/components/pagenow'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/pagenow',
      name: 'pagenow',
      component: pagenow
    }
  ]
})
