<template>
    <div class="w-[90%] m-auto">
        <button @click="connectUserOne()">Connect User 2</button>


        <div class="flex justify-between">
            <h2 class="underline">Detail du profil</h2>
            <button type="button" v-if="isDisable" @click="toggleEdit()">Mettre à jour</button>
            <button type="button" v-else @click="handleSubmit()">Enregister</button>
        </div>
        <div class="p-8  w-full flex flex-col">
            <form @submit.prevent="handleSubmit">
                <div>
                    <h2 class="text-2xl font-bold mb-1">Information personnels</h2>
                    <div
                        class="bg-card p-8 rounded-2xl shadow-xl border border-white/5 w-full max-w-2xl flex flex-col gap-6">

                        <div>
                            <label for="firstName" hidden>firstName</label>
                            <input type="text" v-model="userData.firstName" name="firstName" id="firstName"
                                :disabled="isDisable" placeholder="Prénom"
                                class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire">
                        </div>
                        <div>
                            <label for="lastName" hidden>lastName</label>
                            <input type="text" v-model="userData.lastName" name="lastName" id="lastName"
                                :disabled="isDisable" placeholder="Nom"
                                class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire">
                        </div>
                        <div>
                            <label for="birthDate" hidden>birthDate</label>
                            <input type="date" v-model="userData.birthDate" name="birthDate" id="birthDate"
                                :disabled="isDisable" placeholder="Nom"
                                class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire">
                        </div>
                        <div>
                            <label for="email" hidden>email</label>
                            <input type="text" v-model="userData.email" name="email" id="email" :disabled="isDisable"
                                placeholder="Email"
                                class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire">
                        </div>
                        <div class="flex">
                            <label for="password" hidden>password</label>
                            <input :type="showPassword ? 'password' : 'text'" v-model="userData.password"
                                name="password" id="password" :disabled="isDisable" placeholder="Email"
                                :class="isDisable ? 'w-full' : 'w-[70%]'"
                                class="bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire">

                            <button type="button" @click="togglePasswordShow" :class="isDisable ? 'hidden' : ''"
                                class="w-[30%] px-3.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center transition-all duration-300 bg-linear-to-r from-principale to-secondaire hover:shadow-[0_0_15px_#9034b080,0_0_15px_#096cfd80]">Show
                                Password</button>
                        </div>
                    </div>
                </div>

                <div class="  w-full flex flex-col">
                    <h2 class="text-2xl font-bold mb-1">Adresses</h2>
                    <div class="flex w-full justify-between">
                        <div
                            class="bg-card p-8 rounded-2xl shadow-xl border border-white/5 w-[49%] flex flex-col gap-6">
                            <h2 v-if="userAdresseOne.type == 'PERSONAL'" class="text-2xl font-bold mb-1">Maison</h2>
                            <h2 v-else class="text-2xl font-bold mb-1">Travail</h2>

                            <div>
                                <label for="streetNumber" hidden>streetNumber</label>
                                <input type="text" name="streetNumber" id="streetNumber"
                                    v-model="userAdresseOne.streetNumber" :disabled="isDisable"
                                    placeholder="streetNumber"
                                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire">

                            </div>
                            <div>
                                <label for="streetName" hidden>streetNumber</label>
                                <input type="text" name="streetName" id="streetName" v-model="userAdresseOne.streetName"
                                    :disabled="isDisable" placeholder="streetName"
                                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire">

                            </div>
                            <div>
                                <label for="city" hidden>streetNumber</label>
                                <input type="text" name="city" id="city" v-model="userAdresseOne.city"
                                    :disabled="isDisable" placeholder="city"
                                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire">

                            </div>
                            <div>
                                <label for="province" hidden>streetNumber</label>
                                <input type="text" name="province" id="province" v-model="userAdresseOne.province"
                                    :disabled="isDisable" placeholder="province"
                                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire">

                            </div>
                            <div>
                                <label for="country" hidden>streetNumber</label>
                                <input type="text" name="country" id="country" v-model="userAdresseOne.country"
                                    :disabled="isDisable" placeholder="country"
                                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire">

                            </div>
                            <div>
                                <label for="type" hidden>type</label>
                                <input type="text" name="type" id="type" v-model="userAdresseOne.type"
                                    :disabled="isDisable" placeholder="type" hidden>
                            </div>
                            <button type="button" @click="delAdressFunction(userAdresseOne.type)"
                                :class="isDisable ? 'hidden' : ''"
                                class="px-3.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center transition-all duration-300 bg-red-800 hover:shadow-[0_0_15px_#9034b080,0_0_15px_#096cfd80]">Supprimer</button>
                        </div>

                        <div
                            class="bg-card p-8 rounded-2xl shadow-xl border border-white/5 w-[49%] flex flex-col gap-6">

                            <h2 v-if="userAdresseOne.type == 'PERSONAL'" class="text-2xl font-bold mb-1">Travail</h2>
                            <h2 v-else class="text-2xl font-bold mb-1">Maison</h2>
                            <div>
                                <label for="streetNumber" hidden>streetNumber</label>
                                <input type="text" name="streetNumber" id="streetNumber"
                                    v-model="userAdresseTwo.streetNumber" :disabled="isDisable"
                                    placeholder="streetNumber"
                                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire">

                            </div>
                            <div>
                                <label for="streetName" hidden>streetNumber</label>
                                <input type="text" name="streetName" id="streetName" v-model="userAdresseTwo.streetName"
                                    :disabled="isDisable" placeholder="streetName"
                                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire">

                            </div>
                            <div>
                                <label for="city" hidden>streetNumber</label>
                                <input type="text" name="city" id="city" v-model="userAdresseTwo.city"
                                    :disabled="isDisable" placeholder="city"
                                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire">

                            </div>
                            <div>
                                <label for="province" hidden>streetNumber</label>
                                <input type="text" name="province" id="province" v-model="userAdresseTwo.province"
                                    :disabled="isDisable" placeholder="province"
                                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire">

                            </div>
                            <div>
                                <label for="country" hidden>streetNumber</label>
                                <input type="text" name="country" id="country" v-model="userAdresseTwo.country"
                                    :disabled="isDisable" placeholder="country"
                                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl outline-none transition-all duration-300 focus:border-secondaire focus:ring-1 focus:ring-secondaire">

                            </div>
                            <div>
                                <label for="type" hidden>type</label>
                                <input type="text" name="type" id="type" v-model="userAdresseTwo.type"
                                    :disabled="isDisable" placeholder="type" hidden>
                            </div>
                            <button type="button" @click="delAdressFunction(userAdresseTwo.type)"
                                :class="isDisable ? 'hidden' : ''"
                                class="px-3.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center transition-all duration-300 bg-red-800 hover:shadow-[0_0_15px_#9034b080,0_0_15px_#096cfd80]">Supprimer</button>

                        </div>
                    </div>
                </div>

            </form>
        </div>
    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';

const connectUserOne = () => {
    localStorage.setItem("userId", 2)
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

const userData = ref({
    firstName: "",
    lastName: "",
    birthDate: "",
    email: "",
    password: "",
});
const fetchUser = async () => {
    try {
        const response = await fetch(`https://money-pie-1.fly.dev/api/v1/users/${localStorage.getItem("userId")}`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        userData.value.firstName = data.firstName
        userData.value.lastName = data.lastName
        userData.value.email = data.email
        userData.value.birthDate = data.birthDate
        userData.value.password = data.password
        console.log(userData)
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


const userAdresseOne = ref({
    streetNumber: "",
    streetName: "",
    city: "",
    province: "",
    country: "",
    type: "PERSONAL"
})

const userAdresseTwo = ref({
    streetNumber: "",
    streetName: "",
    city: "",
    province: "",
    country: "",
    type: "WORK"
})

const setAddresses = (addresses, data, index) => {
    addresses.value.streetNumber = data[index].streetNumber
    addresses.value.streetName = data[index].streetName
    addresses.value.city = data[index].city
    addresses.value.province = data[index].province
    addresses.value.country = data[index].country
    addresses.value.type = data[index].type
}



const fetchUserAdresse = async () => {

    try {
        const response = await fetch(`https://money-pie-1.fly.dev/api/v1/users/${localStorage.getItem("userId")}/addresses`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data[0].type === "PERSONAL") {
            setAddresses(userAdresseOne, data, 0)
            setAddresses(userAdresseTwo, data, 1)
        } else if (data[0].type === "WORK") {
            setAddresses(userAdresseOne, data, 1)
            setAddresses(userAdresseTwo, data, 0)
        }


        console.log(data)
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

const delAdressFunction = async (type) => {
    try {
        const response = await fetch(`https://money-pie-1.fly.dev/api/v1/users/${localStorage.getItem("userId")}/addresses/${type}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        fetchUserAdresse()
        const data = await response.json();
        console.log('Success:', data);

    } catch (err) {
        console.error('Error:', err);
    }

}

const putFunction = async (url, dataToSend) => {
    try {
        const response = await fetch(url, {
            method: 'PUT',
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
    putFunction(`https://money-pie-1.fly.dev/api/v1/users/${localStorage.getItem("userId")}`, userData);
    putFunction(`https://money-pie-1.fly.dev/api/v1/users/${localStorage.getItem("userId")}/addresses`, userAdresseOne);
    putFunction(`https://money-pie-1.fly.dev/api/v1/users/${localStorage.getItem("userId")}/addresses`, userAdresseTwo);
    toggleEdit();
    if (showPassword.value === false) {
        togglePasswordShow()
    }
}

onMounted(() => {
    fetchUser();
    fetchUserAdresse();
})

</script>

<style></style>