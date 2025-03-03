import { createRouter, createWebHistory } from 'vue-router'
// import maine from '../views/HomeView.vue'
import maine from '@/scripts/compose/base1.vue'
import Base1 from '@/scripts/compose/base1.vue';

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'maine',
//       component: maine,
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/App.vue'),
//     },
//   ],
// })
const routes = [
  {
  path: '/',
  name: 'base1',
  component: Base1,
  }
]


const router = createRouter({
  routes,
  history: createWebHistory()
});




export default router
