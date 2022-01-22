import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import TomMenu from '../views/locations/tom/Menu.vue';
import DanMenu from '../views/locations/dan/Menu.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/locations/tom/menu',
    name: "Tom's Location Menu",
    component: TomMenu
  },
  {
    path: '/locations/dan/Menu',
    name: "Dan's Location Menu",
    component: DanMenu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
