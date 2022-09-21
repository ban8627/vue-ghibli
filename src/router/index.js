import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/page-ghibli/home',
      redirect: '/'
    },
    {
      path: '/page-ghibli',
      component: HomeView
    },
    {
      path: '/page-ghibli/detail/:id',
      component: DetailView
    },

    {
      path: "/page-ghibli/404",
      name: "notFound",
      component: NotFound,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },

  ]
});

export default router