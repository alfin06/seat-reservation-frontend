import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

const routes = [
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/', redirect: '/register' }  // Redirect root to /register
]

export default createRouter({
  history: createWebHistory(),
  routes
})
