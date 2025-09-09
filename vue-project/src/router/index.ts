import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import store from '@/store' 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { guestOnly: true }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
  ],
})

router.beforeEach((to) => {

  const isLogin = store.getters.getIsLogin as boolean
    if(to.meta.requiresAuth && !isLogin) {
      return '/'
    }
    if(to.meta.guestOnly && isLogin) {
       return '/home'
    }

    return true
})

export default router
