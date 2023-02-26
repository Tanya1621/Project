import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Project/",
      name: "home",
      component: () => import("../views/HomeView.vue")
    },
    {
      path: "/Project/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue")
    },
    {
      path: "/Project/starred",
      name: "starred",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/StarredView.vue")
    },
    {
      path: "/Project/:placeList",
      name: "placeList",
      component: () => import("../views/PlaceList.vue")
    }, {
      path: "/Project/:placeList/:place",
      name: "PlaceInfo",
      component: () => import("../views/PlaceInfo.vue")
    }
]
});

export default router;
