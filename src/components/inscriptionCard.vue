<template>


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
                <input :type="showPassword ? 'password' : 'text'" placeholder="Mot de passe" v-model="inscData.password"
                    :class="[
                        'w-full bg-input-bg border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300',
                        errors.password ? 'border-red-500' : 'border-input-border'
                    ]"
                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                <button type="button" @click="togglePasswordShow"
                    class="px-4 rounded-md bg-principale hover:opacity-80">
                    <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" class="bi bi-eye">
                        <path
                            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path
                            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                </button>

            </div>
            <p v-if="isNotValidPswd" class="text-xs text-red-500">
                Le mot de passe est obligatoire
            </p>
            <p v-if="isNotLongPswd" class="text-xs text-red-500">
                Le mot de passe doit contenir au moin 8 character
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


const user = ref(null);

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
const isNotLongPswd = ref(false)


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
        user.value = data;

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
        console.log(inscData.value.email)
    } else {
        isNotValidEmail.value = false

    }

    if (!inscData.value.password.trim()) {
        errors.value.password = true
        hasError = true
        isNotValidPswd.value = true
        isNotLongPswd.value = false
    } else if (inscData.value.password.trim().length <= 8) {
        errors.value.password = true
        hasError = true
        isNotLongPswd.value = true
        isNotValidPswd.value = false
    } else {
        isNotValidPswd.value = false
        isNotLongPswd.value = false

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
    localStorage.setItem("userConnecte", "true");
    localStorage.setItem("user", JSON.stringify(user.value));
    console.log(localStorage.getItem("user"))
    window.location.href = "/profil"

}
</script>


<style scoped></style>