import { createRouter, createWebHistory } from 'vue-router'
import productos from '../views/VistaProductos.vue'
import inicio from '../views/VistaInicio.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: inicio
  },
  {
    path: '/tienda',
    name: 'tienda',
    component: productos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
