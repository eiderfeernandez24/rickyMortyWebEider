import { createRouter, createWebHistory } from "vue-router";
import EpisodeList from "../pages/EpisodeList.vue";
import CharacterDetail from "../pages/CharacterDetail.vue";
import EpisodeCharacters from "@/components/EpisodeCharacters.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/episodes",
    name: "EpisodeList",
    component: EpisodeList,
  },
  {
    path: "/character/:id",
    name: "CharacterDetail",
    component: CharacterDetail,
    props: true,
  },
  {
    path: "/episode/:id/characters",
    name: "EpisodeCharacters",
    component: EpisodeCharacters,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
