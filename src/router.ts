import { createWebHistory, createRouter } from "vue-router";
import LandingPage from "@/components/LandingPage.vue";
import GamePlayPage from "@/components/GamePlayPage.vue";
import EndGamePage from "@/components/EndGamePage.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/GamePlayPage",
    name: "GamePlayPage",
    component: GamePlayPage,
  },
  {
    path: "/EndGamePage",
    name: "EndGamePage",
    component: EndGamePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;