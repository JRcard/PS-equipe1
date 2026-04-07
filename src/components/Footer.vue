<template>
  <footer>
    <div
      class="bg-linear-to-t from-principale/10 to-transparent lg:h-[15vh] flex items-center justify-between p-5 lg:p-20 lg:mt-30 flex-col lg:flex-row text-center lg:text-left"
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
