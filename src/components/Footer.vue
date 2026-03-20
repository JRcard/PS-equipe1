<template>
  <footer>
    <div class="h-[5vh] bg-linear-to-t from-indigo-200 to-transparent"></div>
    <div class="bg-indigo-200 h-[15vh] flex items-center justify-between px-20">
      <img class="h-[15vh]" :src="logo" alt="Logo Stratos" />

      <h3>
        Projet conçu et réalisé par :
        <br />
        <strong class="text-violet-700"
          >Marie-Pier Simard, Lucas Minville,<br />
          Jérémie Ricard & Allan Tri Tam Pham.</strong
        >
      </h3>
    </div>
  </footer>
</template>

<script setup>
import logo from "../assets/images/stratosLogo.png";
</script>
