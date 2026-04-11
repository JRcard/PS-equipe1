<template>
  <header class="inset-x-0 top-0 z-50">
    <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
      <RouterLink to="/" class="text-base/7 font-semibold text-white z-99">
        <div class="flex lg:flex-1">
          <div href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Stratos</span>
            <img src="../assets/images/statos-logo-horizontal.png" alt="Stratos logo" class="h-8 w-auto" />
          </div>
        </div>
      </RouterLink>
      <div class="flex lg:hidden">
        <button type="button" command="show-modal" commandfor="mobile-menu"
          class="-m-2.5 inline-flex items-center rounded-md p-2.5 text-gray-200">
          <span class="sr-only">Ouvrir menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
            aria-hidden="true" class="size-6">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <!-- Si l'utilisateur n'est pas connecté, on affichce ceci -->
      <div v-if="!userConnecte" class="hidden lg:flex lg:gap-x-12">
        <RouterLink to="connexion" class="text-base/7 font-semibold text-white z-99 hover:text-secondaire">Se connecter
        </RouterLink>
        <RouterLink to="inscription"
          class="text-base/7 font-semibold text-white z-99 hover:cursor-pointer hover:text-secondaire">S'inscrire
        </RouterLink>
      </div>
      <!-- Si l'utilisateur est connecté, on affichce ceci -->
      <div v-else class="hidden lg:flex items-center">
        <div class="flex gap-x-12 items-center">
          <p>Bienvenue, {{ user.firstName }} {{ user.lastName }}</p>
          <RouterLink to="profil" class="text-base/7 font-semibold text-white z-99 hover:text-secondaire">Profil
          </RouterLink>
          <RouterLink to="budget"
            class="text-base/7 font-semibold text-white z-99 hover:cursor-pointer hover:text-secondaire">Budget mensuel
          </RouterLink>
        </div>
        <button
          class="ml-8.5 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondaire focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondaire cursor-pointer"
          @click="deconnexion">
          SE DÉCONNECTER
        </button>
      </div>
    </nav>
    <!--Menu mobile -->
    <el-dialog>
      <dialog id="mobile-menu" class="backdrop:bg-transparent lg:hidden">
        <div tabindex="0" class="fixed inset-0 focus:outline-none">
          <el-dialog-panel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div class="flex px-3 items-center justify-between">
              <RouterLink to="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Stratos</span>
                <img src="../assets/images/statos-logo-icon.png" alt="Stratos logo" class="h-8 w-auto" />
              </RouterLink>
              <button type="button" command="close" commandfor="mobile-menu"
                class="-m-2.5 rounded-md p-2.5 text-gray-200">
                <span class="sr-only">Fermer menu</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
                  aria-hidden="true" class="size-6">
                  <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-white/10">
                <div class="">
                  <!-- Si l'utilisateur n'est pas connecté, on affichce ceci -->
                  <!-- À noter qu'on utilise ici des balises "a" et des RouterLink afin de recharger la page et faire disparaitre le menu-->
                  <div v-if="!userConnecte" class="space-y-2 py-6">
                    <a href="connexion"
                      class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Se
                      connecter</a>
                    <a href="inscription"
                      class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">S'inscrire</a>
                  </div>
                  <!-- Si l'utilisateur est connecté, on affichce ceci -->
                  <div v-else class="text-white space-y-2 py-6">
                    <p class="px-3">
                      Bienvenue, {{ user.firstName }} {{ user.lastName }}
                    </p>
                    <a href="profil"
                      class="block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Profil</a>
                    <a href="budget"
                      class="block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Budget
                      mensuel</a>
                    <a class="rmx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                      @click="deconnexion">SE DÉCONNECTER</a>
                  </div>
                </div>
              </div>
            </div>
          </el-dialog-panel>
        </div>
      </dialog>
    </el-dialog>
  </header>
</template>

<script setup>
import { ref, onMounted, computed, watch, onUpdated } from "vue";

import { RouterLink } from "vue-router";

const userConnecte = ref(false);
const user = ref(null);

//Recherche du User au startUp
onMounted(async () => {
  if (userConnecte.value && user.value === null) {
    const userId = JSON.parse(localStorage.getItem("userId"));

    const url = `https://money-pie-1.fly.dev/api/v1/users/` + userId;
    const res = await fetch(url);
    const data = await res.json();

    user.value = data;
  }
});

const loadUserFromStorage = () => {
  userConnecte.value = localStorage.getItem("userConnecte") === "true";
  user.value = JSON.parse(localStorage.getItem("user"));
};

onMounted(() => {
  loadUserFromStorage();

  window.addEventListener("userUpdated", loadUserFromStorage);
});

//Système de deconnexion et clean-up du LocalStorage User
const deconnexion = () => {
  localStorage.removeItem("userConnecte");
  localStorage.removeItem("user");

  userConnecte.value = false;
  user.value = null;

  window.location.reload();
};
</script>
