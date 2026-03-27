import BudgetMensuel from "@/components/BudgetMensuel.vue";
import Home from "@/components/Home.vue";
import Profile from "@/components/Profile.vue";
import Page404 from "@/components/Page404.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/profil",
      name: "Profil",
      component: Profile,
    },
    {
      path: "/budget",
      name: "budgetMensuel",
      component: BudgetMensuel,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Page404",
      component: Page404,
    },
  ],
});

export default router;
