<template>
    <div v-if="isOpen" class="fixed inset-0 z-40 flex items-center justify-center bg-black/30 backdrop-blur-sm z-99999"
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
                    ]" />
                    <p v-if="isNotValidEmail" class="text-xs text-red-500">
                        Cet email est invalide
                    </p>
                    <!-- messages -->
                    <p v-if="isCheckingEmail" class="text-xs text-gray-400">
                        Vérification...
                    </p>

                    <p v-if="emailExists" class="text-xs text-red-500">
                        Cet email est déjà utilisé
                    </p>

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
                    <p v-if="isNotValidPswd" class="text-xs text-red-500">
                        Le mot de passe est obligatoire
                    </p>
                    <input type="text" placeholder="Prénom" v-model="inscData.firstName" :class="[
                        'w-full bg-input-bg border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300',
                        errors.firstName ? 'border-red-500' : 'border-input-border'
                    ]"
                        class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire" />
                    <p v-if="isNotValidName" class="text-xs text-red-500">
                        Le prénom est obligatoire
                    </p>

                    <button type="submit" class=" w-full px-3.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center
                    transition-all duration-300 bg-linear-to-r from-principale to-secondaire
                    hover:shadow-[0_0_15px_#9034b080,0_0_15px_#096cfd80]">Inscription</button>

                </form>


            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'


/* =========================
   PROPS & EMITS
========================= */
const props = defineProps({
    isOpen: Boolean
})

const emit = defineEmits(['close'])


/* =========================
   UI STATE
========================= */
let showPassword = ref(true)

const togglePasswordShow = () => {
    showPassword.value = !showPassword.value
}


/* =========================
   FORM DATA
========================= */
const inscData = ref({
    email: "",
    password: "",
    firstName: "",
    isActive: true
})

const id = ref("")


/* =========================
   VALIDATION STATE
========================= */
const errors = ref({
    email: false,
    password: false,
    firstName: false
})

const emailExists = ref(false)
const isCheckingEmail = ref(false)

const isNotValidEmail = ref(false)
const isNotValidName = ref(false)
const isNotValidPswd = ref(false)


/* =========================
   API CALLS
========================= */
const post = async (url, dataToSend) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
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

const getUserByEmail = async () => {
    try {
        const response = await fetch(`https://money-pie-1.fly.dev/api/v1/users/email/${inscData.value.email}`)

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        id.value = await data.id

        console.log("lid dans le local storage est" + localStorage.getItem("userId"))

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

const checkEmailExists = async (email) => {
    try {
        const response = await fetch(`https://money-pie-1.fly.dev/api/v1/users/email/${email}`)
        if (response.ok) return true
        return false
    } catch {
        return false
    }
}


/* =========================
   WATCHERS (EMAIL LIVE CHECK)
========================= */
let debounceTimer = null

watch(() => inscData.value.email, (newEmail) => {

    emailExists.value = false
    errors.value.email = false

    clearTimeout(debounceTimer)

    if (!newEmail.trim()) return

    debounceTimer = setTimeout(async () => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(newEmail)) return

        isCheckingEmail.value = true
        isNotValidEmail.value = false

        const exists = await checkEmailExists(newEmail)

        emailExists.value = exists
        errors.value.email = exists

        isCheckingEmail.value = false

    }, 500)
})


/* =========================
   FORM SUBMIT
========================= */
const handleSubmit = async () => {

    errors.value = {
        email: false,
        password: false,
        firstName: false
    }

    let hasError = false

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!inscData.value.email.trim() || !emailRegex.test(inscData.value.email) || emailExists.value) {
        errors.value.email = true
        hasError = true
        isNotValidEmail.value = true
    } else {
        isNotValidEmail.value = false
    }

    if (!inscData.value.password.trim()) {
        errors.value.password = true
        hasError = true
        isNotValidPswd.value = true
    } else {
        isNotValidPswd.value = false
    }

    if (!inscData.value.firstName.trim()) {
        errors.value.firstName = true
        hasError = true
        isNotValidName.value = true
    } else {
        isNotValidName.value = false
    }

    if (hasError) return

    await post(`https://money-pie-1.fly.dev/api/v1/users`, inscData.value)

    await getUserByEmail()
    localStorage.setItem("userId", id.value)

    emit('close')
}
</script>

<style></style>