import { createRouter, createWebHistory } from "vue-router";
import EpisodeList from "../views/EpisodeList.vue"; // Importa tu componente

const routes = [
  {
    path: "/",
    name: "EpisodeList",
    component: EpisodeList, // Cambia aquí para usar EpisodeList
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
