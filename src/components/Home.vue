https://budgetbakers.com/fr/
<template>
  <div class="bg-background">
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div
        aria-hidden="true"
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
          class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 rotate-70 bg-linear-to-tr from-principale to-secondaire opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        ></div>
      </div>
      <div class="max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex">
          <div
            class="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20"
          >
            Solutions financières complètes pour tous les besoins
          </div>
        </div>
        <div class="">
          <h1
            class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl"
          >
            Vos finances en un seul endroit
          </h1>
          <p
            class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"
          >
            Le savoir, c'est le pouvoir. Vous devez connaître vos finances pour
            les maîtriser. Wallet rassemble tout votre argent dans une seule
            application, sous votre contrôle, où que vous soyez.
          </p>
          <div v-if="!userConnecte" class="mt-10 flex items-center gap-x-6">
            <a
              href="/connexion"
              class="rounded-md bg-secondaire px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-secondaire focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondaire"
              >Se connecter</a
            >
            <a href="#" class="text-sm/6 font-semibold text-white"
              >S'inscrire <span aria-hidden="true">→</span></a
            >
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          "
          class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-principale to-secondaire opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        ></div>
      </div>
    </div>
  </div>

  <div
    v-if="!userConnecte"
    class="bg-background text-sm/6 flex items-center justify-center mt-20"
  >
    <!-- card-->
    <div
      class="bg-card p-8 rounded-2xl shadow-xl border border-white/5 w-full max-w-md flex flex-col gap-6"
    >
      <div>
        <h2 class="text-2xl font-bold mb-1">Connexion</h2>
        <p class="text-text-secondaire text-sm">
          Entrez vos informations ci-dessous.
        </p>
      </div>

      <!-- imput -->
      <div class="flex flex-col gap-4">
        <input
          v-model="email"
          type="email"
          placeholder="Adresse email"
          class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire"
        />

        <input
          v-model="password"
          type="password"
          placeholder="Mot de passe"
          class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire"
        />
      </div>

      <!-- boutons -->
      <div class="flex flex-col gap-4 mt-2">
        <!-- Bouton dégradé-->
        <button
          @click="connexion"
          class="w-full px-3.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center transition-all duration-300 bg-gradient-to-r from-principale to-secondaire hover:shadow-[0_0_15px_#9034b080,0_0_15px_#096cfd80]"
        >
          Se connecter
        </button>

        <div class="flex gap-3">
          <!-- bouton couelur principale -->
          <button
            class="w-full px-3.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center transition-all duration-300 bg-principale hover:opacity-80 hover:shadow-[0_0_15px_#9034b066]"
          >
            Action 1
          </button>

          <!-- Bouton couleur secondaire -->
          <button
            class="w-full px-3.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center transition-all duration-300 bg-secondaire hover:opacity-80 hover:shadow-[0_0_15px_#096cfd66]"
          >
            Action 2
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, ref } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const userConnecte = inject("userConnecte");
const setUserConnecte = inject("setUserConnecte");

const email = ref("");
const password = ref("");

const user = inject("user");
const setUser = inject("setUser");

const connexion = async () => {
  try {
    const url = `https://money-pie-1.fly.dev/api/v1/users/email/` + email.value;
    const res = await fetch(url);
    const data = await res.json();
    user.value = data;
  } catch (err) {
    console.log(err);
  }

  if (!user.value) {
    window.alert("User pas encore chargé");
    return;
  }
  if (
    user.value.email === email.value &&
    user.value.password === password.value
  ) {
    setUserConnecte(true);
    setUser(user.value);
    router.push("/");
  } else {
    window.alert("Mauvais user ou password");
  }
};
</script>

<style></style>
