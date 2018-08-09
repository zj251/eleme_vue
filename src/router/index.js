import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello'
import top from '@/components/top'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/top',
      name: 'top',
      component: top
    }
  ]
})
