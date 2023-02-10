import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue")
    },
    {
      path: "/starred",
      name: "starred",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/StarredView.vue")
    },
    {
      path: "/:placeList",
      name: "placeList",
      component: () => import("../views/PlaceList.vue")
    }, {
      path: "/:placeList/:place",
      name: "PlaceInfo",
      component: () => import("../views/PlaceInfo.vue")
    }
]
});

export default router;
