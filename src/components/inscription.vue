<template>
<<<<<<< HEAD
    <div v-if="isOpen" class="fixed inset-0 z-40 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        @click.self="emit('close')">

        <div class="bg-background rounded-2xl text-sm/6 flex items-center justify-center">
            <!-- card-->
            <div class="bg-card p-8 rounded-2xl shadow-xl border border-white/5 w-full max-w-md flex flex-col gap-6">
                <div>
                    <h2 class="text-2xl font-bold mb-1">Inscription</h2>
                    <p class="text-text-secondaire text-sm">Entrez vos informations ci-dessous.</p>
                </div>

                <!-- imput -->
                <form class="flex flex-col gap-4" novalidate @submit.prevent="handleSubmit">
                    <input type="email" placeholder="Adresse email" v-model="inscData.email" :class="[
                        'w-full bg-input-bg border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300',
                        errors.email ? 'border-red-500' : 'border-input-border'
                    ]"
                        class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                    <div class="flex gap-3">
                        <input :type="showPassword ? 'password' : 'text'" placeholder="Mot de passe"
                            v-model="inscData.password" :class="[
                                'w-full bg-input-bg border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300',
                                errors.password ? 'border-red-500' : 'border-input-border'
                            ]"
                            class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                        <button type="button" @click="togglePasswordShow"
                            class="px-4 rounded-md bg-principale hover:opacity-80">
                            👁
                        </button>
                    </div>
                    <input type="text" placeholder="Prénom" v-model="inscData.firstName" :class="[
                        'w-full bg-input-bg border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300',
                        errors.firstName ? 'border-red-500' : 'border-input-border'
                    ]"
                        class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire" />


                    <button type="submit" class=" w-full px-3.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center
                    transition-all duration-300 bg-linear-to-r from-principale to-secondaire
                    hover:shadow-[0_0_15px_#9034b080,0_0_15px_#096cfd80]">Inscription</button>

                </form>


            </div>
=======
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


>>>>>>> c1d23e7eea3299c31fc66a6dd6d6677f9e36212e
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

<<<<<<< HEAD
const props = defineProps({
    isOpen: Boolean
})

const emit = defineEmits(['close'])

=======
>>>>>>> c1d23e7eea3299c31fc66a6dd6d6677f9e36212e
let showPassword = ref(true)

const togglePasswordShow = () => {
    showPassword.value = !showPassword.value
}

const inscData = ref({
    email: "",
    password: "",
    firstName: "",
<<<<<<< HEAD
    isActive: true
})

const id = ref("")

const getUserByEmail = async () => {
    try {
        const response = await fetch(`https://money-pie-1.fly.dev/api/v1/users/email/${inscData.value.email}`)
=======
    lastName: ""

})

let id = ref("")

const getUserByEmail = async () => {
    try {
        const response = await fetch(`https://money-pie-1.fly.dev/api/v1/users/email/${inscData.email}`)
>>>>>>> c1d23e7eea3299c31fc66a6dd6d6677f9e36212e
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
<<<<<<< HEAD
        id.value = await data.id
        localStorage.setItem("userId", id.value)
        console.log("lid dans le local storage est" + localStorage.getItem("userId"))
=======
        id.value = data.id

>>>>>>> c1d23e7eea3299c31fc66a6dd6d6677f9e36212e
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
<<<<<<< HEAD
            body: JSON.stringify(dataToSend),
=======
            body: JSON.stringify(dataToSend.value),
>>>>>>> c1d23e7eea3299c31fc66a6dd6d6677f9e36212e
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

<<<<<<< HEAD
const errors = ref({
    email: false,
    password: false,
    firstName: false
})



const handleSubmit = async () => {


    errors.value = {
        email: false,
        password: false,
        firstName: false
    }

    let hasError = false


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


    if (!inscData.value.email.trim() || !emailRegex.test(inscData.value.email)) {
        errors.value.email = true
        hasError = true
    }


    if (!inscData.value.password.trim()) {
        errors.value.password = true
        hasError = true
    }


    if (!inscData.value.firstName.trim()) {
        errors.value.firstName = true
        hasError = true
    }


    if (hasError) {
        return
    }


    await post(`https://money-pie-1.fly.dev/api/v1/users`, inscData.value)
    await getUserByEmail()

=======
const handleSubmit = () => {
    post(`https://money-pie-1.fly.dev/api/v1/users`, inscData.value)

    console.log(inscData.value)
>>>>>>> c1d23e7eea3299c31fc66a6dd6d6677f9e36212e

    inscData.value = {
        email: "",
        password: "",
        firstName: "",
<<<<<<< HEAD
        isActive: true
    }

    emit('close')
=======
        lastName: ""
    }
    getUserByEmail()
    localStorage.setItem("userId", id)
    id.value = ""
>>>>>>> c1d23e7eea3299c31fc66a6dd6d6677f9e36212e
}
</script>

<style></style>