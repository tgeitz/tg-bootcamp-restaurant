import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import TomMenu from '../views/locations/tom/Menu.vue';
import BrandonMenu from '../views/locations/brandon/Menu.vue';

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
    path: '/locations/brandon/menu',
    name: "Brandon's Location Menu",
    component: BrandonMenu
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
