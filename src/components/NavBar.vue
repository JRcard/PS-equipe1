<template>
  <header class="inset-x-0 top-0 z-50">
    <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Stratos</span>
          <img src="../assets/statos-logo-horizontal.png" alt="Stratos logo" class="h-8 w-auto" />
        </a>
      </div>
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
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-base/7 font-semibold text-white">Se connecter</a>
        <a class="text-base/7 font-semibold text-white" @click="isOpen = true">
          S'inscrire
        </a>
      </div>

    </nav>
    <el-dialog>
      <dialog id="mobile-menu" class="backdrop:bg-transparent lg:hidden">
        <div tabindex="0" class="fixed inset-0 focus:outline-none">
          <el-dialog-panel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Stratos</span>
                <img src="../assets/statos-logo-icon.png" alt="Stratos logo" class="h-8 w-auto" />
              </a>
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
                <div class="space-y-2 py-6">
                  <a href="#"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Se
                    connecter</a>
                  <a class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    @click="isOpen = true">S'inscrire</a>
                </div>
              </div>
            </div>
          </el-dialog-panel>
        </div>
      </dialog>
    </el-dialog>
  </header>

  <Inscription :isOpen="isOpen" @close="isOpen = false" />
</template>


<script setup>
import { ref } from 'vue'
import Inscription from './inscription.vue';


const isOpen = ref(false)
</script>