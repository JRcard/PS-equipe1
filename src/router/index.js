import BudgetMensuel from "@/components/BudgetMensuel.vue";
import Home from "@/components/Home.vue";
import Profile from "@/components/Profile.vue";
import Page404 from "@/components/Page404.vue";
import Connexion from "@/components/Connexion.vue";
import { createRouter, createWebHistory } from "vue-router";
import Inscription from "@/components/inscription.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "home",
            component: Home,
            meta: { auth: false },
        },
        {
            path: "/profil",
            name: "Profil",
            component: Profile,
            meta: { auth: true },
        },
        {
            path: "/budget",
            name: "budgetMensuel",
            component: BudgetMensuel,
            meta: { auth: true },
        },
        {
            path: "/connexion",
            name: "connexion",
            component: Connexion,
            meta: { auth: false },
        },
        {
            path: "/inscription",
            name: "inscription",
            component: Inscription,
            meta: { auth: false },
        },
        {
            path: "/:pathMatch(.*)*",
            name: "Page404",
            component: Page404,
            meta: { auth: false },
        },
    ],
});
router.beforeEach((to, from) => {
    const isConnected = localStorage.getItem("userConnecte");
    if (to.meta.auth == true && !isConnected) return { name: "home" };
    else return true;
});
export default router;