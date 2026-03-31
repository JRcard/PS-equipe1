<template>
    <div class="bg-background text-sm/6 flex items-center justify-center">
        <!-- card-->
        <div class="bg-card p-8 rounded-2xl shadow-xl border border-white/5 w-full max-w-md flex flex-col gap-6">
            <div>
                <h2 class="text-2xl font-bold mb-1">Inscription</h2>
                <p class="text-text-secondaire text-sm">Entrez vos informations ci-dessous.</p>
            </div>

            <!-- imput -->
            <form class="flex flex-col gap-4" @submit.prevent="handleSubmit">
                <input type="email" placeholder="Adresse email" v-model="inscData.email"
                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                <div class="flex gap-3">
                    <input :type="showPassword ? 'password' : 'text'" placeholder="Mot de passe"
                        v-model="inscData.password"
                        class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                    <button type="button" @click="togglePasswordShow"
                        class="px-4 rounded-md bg-principale hover:opacity-80">
                        👁
                    </button>
                </div>
                <input type="text" placeholder="Prénom" v-model="inscData.firstName"
                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                <input type="text" placeholder="Nom" v-model="inscData.lastName"
                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                <button type="submit""
                    class=" w-full px-3.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center
                    transition-all duration-300 bg-linear-to-r from-principale to-secondaire
                    hover:shadow-[0_0_15px_#9034b080,0_0_15px_#096cfd80]">Inscription</button>

            </form>


        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let showPassword = ref(true)

const togglePasswordShow = () => {
    showPassword.value = !showPassword.value
}

const inscData = ref({
    email: "",
    password: "",
    firstName: "",
    lastName: ""

})

let id = ref("")

const getUserByEmail = async () => {
    try {
        const response = await fetch(`https://money-pie-1.fly.dev/api/v1/users/email/${inscData.email}`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        id.value = data.id

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

const post = async (url, dataToSend) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend.value),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Success:', data);

    } catch (err) {
        console.error('Error:', err);
    }
}

const handleSubmit = () => {
    post(`https://money-pie-1.fly.dev/api/v1/users`, inscData.value)

    console.log(inscData.value)

    inscData.value = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }
    getUserByEmail()
    localStorage.setItem("userId", id)
    id.value = ""
}
</script>

<style></style>