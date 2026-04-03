<script setup>
import { RouterView } from "vue-router";
import { provide, ref } from "vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import SideBar from "./components/SideBar.vue";

const userConnecte = ref(false);

const setUserConnecte = (etat) => {
  userConnecte.value = etat;
};

const user = ref(null);

const setUser = (info) => {
  user.value = info;
};

provide("userConnecte", userConnecte);
provide("setUserConnecte", setUserConnecte);

provide("user", user);
provide("setUser", setUser);
</script>

<template>
  <!-- ne pas oublier de remplacer "nomDeLaVariable" par la vraie variable / Si l'utilisateur n'est pas connecté on affiche la Navbar -->
  <NavBar v-if="!nomDeLaVariable" />
  <!-- si utilisateur connecté, on affiche la SideBar -->
  <SideBar v-else />
  <RouterView />
  <Footer />
</template>

<style></style>
