import Vue from 'vue'
import VueRouter from 'vue-router'
import ModalLogin from '../views/ModalLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ModalLogin',
    component: ModalLogin
  },
  {
    path: '/todo',
    name: 'Todos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Todos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
