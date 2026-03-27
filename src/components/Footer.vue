<template>
  <footer>
    <div
      class="bg-linear-to-t from-principale/10 to-transparent h-[15vh] flex items-center justify-between p-20 mt-30"
    >
      <img class="h-[15vh]" :src="logo" alt="Logo Stratos" />

      <h3>
        Projet conçu et réalisé par :
        <br />
        <strong class=""
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
