<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import SideBar from "./components/SideBar.vue";
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
