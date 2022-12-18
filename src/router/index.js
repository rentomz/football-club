import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AreasView from '../views/AreasView.vue'
import AreasDetail from '../views/AreasDetail.vue'
import ClubView from '../views/ClubView.vue'
import ClubDetail from '../views/ClubDetail.vue'
import PlayerDetail from '../views/PlayerDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/area',
      name: 'Areas View',
      component : AreasView
    },
    {
      path: "/area/:id",
      name: "Areas Detail",
      component: AreasDetail
    },
    {
      path: "/club",
      name: "Clubs View",
      component: ClubView
    },
    {
      path: "/club/:id",
      name: "Clubs Detail",
      component: ClubDetail
    },
    {
      path: "/player/:id",
      name: "Player Detail",
      component: PlayerDetail
    },
  ]
})

export default router
