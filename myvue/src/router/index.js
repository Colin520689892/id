import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/log',
    name:'log',
    component: () => import('@/views/element/LogView.vue')
  },
  {
    path: '/emp',
    name: 'emp',
    component: () => import( '@/views/element/EmpView.vue')
  },{
    path: '/shi',
    name: 'shi',
    component: () => import( '@/views/element/ShiView.vue')
  },
    {
      path:'/ri',
      name:'ri',
      component: () => import('@/views/element/RiView.vue')
    },{
      path:'/zi',
      name:'zi',
      component: () => import('@/views/element/BroView.vue')
    },
  {
    path:'/',
    redirect:'/log'
  }
]

const router = new VueRouter({
  routes
})

export default router
