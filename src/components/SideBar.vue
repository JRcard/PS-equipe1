<template>
  <div class="bg-background text-sm/6 flex">
    <!-- card-->
    <div class="bg-card border-b -mt-2 p-8 shadow-xl h-screen border border-white/5 w-full max-w-md flex flex-col gap-6">
      <a href="#" class="border-b border-white/5 pb-6">
        <span class="sr-only">Stratos</span>
        <img src="../assets/statos-logo-horizontal.png" alt="Stratos logo" class="h-8 w-auto" />
      </a>
      <div class="border-b border-white/5 pb-6 flex items-center gap-x-4">
        <div class="h-12 w-12 rounded-full bg-amber-50"></div>
        <p class="text-base/7">UserName</p>
      </div>

      <div class="space-y-2">
        <RouterLink to="/budget" class="-mx-3 px-3 py-2 text-base/7 flex gap-6 text-white hover:border-l-3 border-secondaire hover:font-semibold"
          ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          Profil</RouterLink
        >

        <RouterLink to="/profil" class="-mx-3 px-3 py-2 flex text-base/7 gap-6 text-white hover:border-l-3 border-secondaire hover:font-semibold"
          ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>
          Budget mensuel</RouterLink
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
