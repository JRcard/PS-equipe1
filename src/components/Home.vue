https://budgetbakers.com/fr/
<template>
  <div class="bg-background">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" class="flex items-center justify-between p-6 lg:px-8">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Stratos</span>
            <img src="../assets/statos-logo-horizontal.png" alt="Stratos logo" class="h-8 w-auto" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" command="show-modal" commandfor="mobile-menu" class="-m-2.5 inline-flex items-center rounded-md p-2.5 text-gray-200">
            <span class="sr-only">Ouvrir menu</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
              <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a href="#" class="text-sm/6 font-semibold text-white">Se connecter</a>
          <a href="#" class="text-sm/6 font-semibold text-white">S'inscrire</a>
        </div>
      </nav>
      <el-dialog>
        <dialog id="mobile-menu" class="backdrop:bg-transparent lg:hidden">
          <div tabindex="0" class="fixed inset-0 focus:outline-none">
            <el-dialog-panel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
              <div class="flex items-center justify-between">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Stratos</span>
                  <img src="../assets/statos-logo-icon.png" alt="Stratos logo" class="h-8 w-auto" />
                </a>
                <button type="button" command="close" commandfor="mobile-menu" class="-m-2.5 rounded-md p-2.5 text-gray-200">
                  <span class="sr-only">Fermer menu</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
                    <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
              <div class="mt-6 flow-root">
                <div class="-my-6 divide-y divide-white/10">
                  <div class="space-y-2 py-6">
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Se connecter</a>
                    <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">S'inscrire</a>
                  </div>
                </div>
              </div>
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>
    </header>

    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 rotate-70 bg-linear-to-tr from-principale to-secondaire opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
      </div>
      <div class="max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex">
          <div class="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">Solutions financières complètes pour tous les besoins</div>
        </div>
        <div class="">
          <h1 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Vos finances en un seul endroit</h1>
          <p class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Le savoir, c'est le pouvoir. Vous devez connaître vos finances pour les maîtriser. Wallet rassemble tout votre argent dans une seule application, sous votre contrôle, où que vous soyez.</p>
          <div class="mt-10 flex items-center gap-x-6">
            <a href="#" class="rounded-md bg-secondaire px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondaire focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondaire">Se connecter</a>
            <a href="#" class="text-sm/6 font-semibold text-white">S'inscrire <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div aria-hidden="true" class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-principale to-secondaire opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"></div>
      </div>
    </div>
  </div>

  <div class="bg-background text-sm/6 flex items-center justify-center">
    <!-- card-->
    <div class="bg-card p-8 rounded-2xl shadow-xl border border-white/5 w-full max-w-md flex flex-col gap-6">
      <div>
        <h2 class="text-2xl font-bold mb-1">Connexion</h2>
        <p class="text-text-secondaire text-sm">Entrez vos informations ci-dessous.</p>
      </div>

      <!-- imput -->
      <div class="flex flex-col gap-4">
        <input type="email" placeholder="Adresse email" class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

        <input type="password" placeholder="Mot de passe" class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire" />
      </div>

      <!-- boutons -->
      <div class="flex flex-col gap-4 mt-2">
        <!-- Bouton dégradé-->
        <button class="w-full px-3.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-principale to-secondaire hover:shadow-[0_0_15px_#9034b080,0_0_15px_#096cfd80]">Se connecter</button>

        <div class="flex gap-3">
          <!-- bouton couelur principale -->
          <button class="w-full px-3.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center transition-all duration-300 bg-principale hover:opacity-80 hover:shadow-[0_0_15px_#9034b066]">Action 1</button>

          <!-- Bouton couleur secondaire -->
          <button class="w-full px-3.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center transition-all duration-300 bg-secondaire hover:opacity-80 hover:shadow-[0_0_15px_#096cfd66]">Action 2</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
