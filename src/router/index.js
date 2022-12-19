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
      component: HomeView,
      meta: {
        title: "Home",
      }
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
      component : AreasView,
      meta: {
        title: 'Area',
      }
    },
    {
      path: "/area/:id",
      name: "Areas Detail",
      component: AreasDetail,
      meta: {
        title: 'Areas Detail',
      }
    },
    {
      path: "/club",
      name: "Clubs View",
      component: ClubView,
      meta: {
        title: 'Club',
      }
    },
    {
      path: "/club/:id",
      name: "Clubs Detail",
      component: ClubDetail,
      meta: {
        title: 'Clubs Detail',
      }
    },
    {
      path: "/player/:id",
      name: "Player Detail",
      component: PlayerDetail,
      meta: {
        title: 'Player Detail',
      }
    },
  ]
})

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });
router.beforeEach((to, from, next) => {
  // console.log(to);
  document.title = "Football - " + to.meta.title;
  next();
});

export default router
