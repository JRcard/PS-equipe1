<template>
  <div class="bg-background h-[80vh] flex items-center justify-center">
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div aria-hidden="true"
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div style="
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
          class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 rotate-70 bg-linear-to-tr from-principale to-secondaire opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75">
        </div>
      </div>

      <div v-if="!userConnecte" class="lg:w-[50vw] w-full flex justify-center flex-col items-center">
        <div class="bg-card p-8 rounded-2xl shadow-xl border border-white/5 w-full max-w-md flex flex-col gap-6 item">
          <div>
            <h1 class="text-2xl font-bold mb-1">Connexion</h1>
            <p class="text-text-secondaire text-sm">
              Entrez vos informations ci-dessous.
            </p>
          </div>

          <!-- input -->
          <div class="flex flex-col gap-4">
            <input v-model="email" type="email" placeholder="Adresse email"
              class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

            <div class="flex gap-2">
              <input v-model="password" :type="showPassword ? 'password' : 'text'" placeholder="Mot de passe"
                class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire" />
              <button type="button" @click="togglePasswordShow"
                class="px-4 w-fit rounded-md bg-principale hover:opacity-80">
                <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor" class="bi bi-eye">
                  <path
                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- boutons -->
          <div class="flex flex-col gap-4 mt-2">
            <!-- Bouton connexion-->
            <button type="submit" @click="connexion"
              class="w-full px-3.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center transition-all duration-300 bg-linear-to-r from-principale to-secondaire hover:shadow-[0_0_15px_#9034b080,0_0_15px_#096cfd80] cursor-pointer">
              Se connecter
            </button>
          </div>
        </div>
        <p class="mt-2">Pas encore de compte ?</p>
        <RouterLink to="/inscription"
          class="hover:cursor-pointer text-principale hover:text-secondaire transition-all duration-300">
          Inscrivez-vous
        </RouterLink>
      </div>

      <div v-else>
        <div class="max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h2 class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Oups...
          </h2>
          <h3 class="my-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Vous êtes déjà connecté !
          </h3>
          <a href="/"
            class="rounded-md bg-secondaire px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-principale focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondaire">
            Retour à la page d'accueil
          </a>
        </div>
      </div>

      <div aria-hidden="true"
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div style="
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
          class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-principale to-secondaire opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

//Creation des const du User et inputs
const user = ref(null);
const userConnecte = ref(localStorage.getItem("userConnecte") === "true");

const email = ref("");
const password = ref("");

//Systeme de connexion via API emailUser
const connexion = async () => {
  try {
    const url = `https://money-pie-1.fly.dev/api/v1/users/email/` + email.value;
    const res = await fetch(url);
    const data = await res.json();

    user.value = data;
  } catch (err) {
    console.log(err);
  }

  //Loading quand API est lent
  if (!user.value) {
    window.alert("Utilisateur  pas encore chargé");
    return;
  }
  //Match si le email et le password du input est bon
  if (
    user.value.email === email.value &&
    user.value.password === password.value
  ) {
    window.alert("Connexion réussi !");

    //Update le localSotrage avec le User
    localStorage.setItem("userConnecte", "true");
    localStorage.setItem("user", JSON.stringify(user.value));

    //Redirection vers le Budget
    window.location.href = "/budget";
  } else {
    window.alert("Mauvais user ou mot de passe");
  }
};

//Logique pour afficher MDP

let showPassword = ref(true);

const togglePasswordShow = () => {
  showPassword.value = !showPassword.value;
};
</script>
