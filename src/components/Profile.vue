<template>
    <div class="w-[90%] m-auto">
        <button @click="connectUserOne()">Connect User 1</button>


        <div class="flex justify-between">
            <h2 class="underline">Detail du profil</h2>
            <button v-if="isDisable" @click="toggleEdit()">Mettre à jour</button>
            <button v-else @click="toggleEdit()">Enregister</button>
        </div>
        <div>
            <form @submit.prevent="handleSubmit">
                <fieldset class="border-2">
                    <legend>Information personnels</legend>
                    <div>
                        <label for="firstName" hidden>firstName</label>
                        <input type="text" name="firstName" id="firstName" :value="userData.firstName"
                            :disabled="isDisable" placeholder="Prénom">
                    </div>
                    <div>
                        <label for="lastName" hidden>lastName</label>
                        <input type="text" name="lastName" id="lastName" :value="userData.lastName"
                            :disabled="isDisable" placeholder="Nom">
                    </div>
                    <div>
                        <label for="birthDate" hidden>birthDate</label>
                        <input type="date" name="birthDate" id="birthDate" :value="userData.birthDate"
                            :disabled="isDisable" placeholder="Nom">
                    </div>
                    <div>
                        <label for="email" hidden>email</label>
                        <input type="text" name="email" id="email" :value="userData.email" :disabled="isDisable"
                            placeholder="Email">
                    </div>
                    <div>
                        <label for="password" hidden>password</label>
                        <input :type="showPassword ? 'password' : 'text'" name="password" id="password"
                            :value="userData.password" :disabled="isDisable" placeholder="Email">
                        <button @click="togglePasswordShow">Show Password</button>
                    </div>
                </fieldset>

                <fieldset class="border-2">
                    <legend>Adresses</legend>
                    <div>
                        <h3>Maison</h3>
                        <div>
                            <label for="firstName" hidden>firstName</label>
                            <input type="text" name="firstName" id="firstName" :value="userData.firstName"
                                :disabled="isDisable" placeholder="Prénom">
                        </div>
                    </div>

                </fieldset>

            </form>
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';

const connectUserOne = () => {
    localStorage.setItem("userId", 1)
    console.log(localStorage.getItem("userId"))

}

let showPassword = ref(true)

const togglePasswordShow = () => {
    showPassword.value = !showPassword.value
}

let isDisable = ref(true)

const toggleEdit = () => {
    isDisable.value = !isDisable.value
}

const userData = ref([]);


const fetchUser = async () => {
    try {
        const response = await fetch(`https://money-pie-1.fly.dev/api/v1/users/${localStorage.getItem("userId")}`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        userData.value = data
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}



const handleSubmit = () => {

}

onMounted(() => {
    fetchUser();
})

</script>

<style></style>