<template>
    <div class="w-[90%] m-auto">
        <button @click="connectUserOne()">Connect User 1</button>


        <div class="flex justify-between">
            <h2 class="underline">Detail du profil</h2>
            <button v-if="isDisable" @click="toggleEdit()">Mettre à jour</button>
            <button v-else @click="handleSubmit()">Enregister</button>
        </div>
        <div>
            <form @submit.prevent="handleSubmit">
                <fieldset class="border-2">
                    <legend>Information personnels</legend>
                    <div>
                        <label for="firstName" hidden>firstName</label>
                        <input type="text" v-model="userData.firstName" name="firstName" id="firstName"
                            :disabled="isDisable" placeholder="Prénom">
                    </div>
                    <div>
                        <label for="lastName" hidden>lastName</label>
                        <input type="text" v-model="userData.lastName" name="lastName" id="lastName"
                            :disabled="isDisable" placeholder="Nom">
                    </div>
                    <div>
                        <label for="birthDate" hidden>birthDate</label>
                        <input type="date" v-model="userData.birthDate" name="birthDate" id="birthDate"
                            :disabled="isDisable" placeholder="Nom">
                    </div>
                    <div>
                        <label for="email" hidden>email</label>
                        <input type="text" v-model="userData.email" name="email" id="email" :disabled="isDisable"
                            placeholder="Email">
                    </div>
                    <div>
                        <label for="password" hidden>password</label>
                        <input :type="showPassword ? 'password' : 'text'" v-model="userData.password" name="password"
                            id="password" :disabled="isDisable" placeholder="Email">
                        <button @click="togglePasswordShow">Show Password</button>
                    </div>
                </fieldset>

                <fieldset class="border-2 flex justify-around">
                    <legend>Adresses</legend>
                    <div>
                        <h3 v-if="userAdresseOne.type == 'PERSONAL'">Maison</h3>
                        <h3 v-else>Travail</h3>
                        <div>
                            <label for="streetNumber" hidden>streetNumber</label>
                            <input type="text" name="streetNumber" id="streetNumber"
                                v-model="userAdresseOne.streetNumber" :disabled="isDisable" placeholder="streetNumber">
                        </div>
                        <div>
                            <label for="streetName" hidden>streetNumber</label>
                            <input type="text" name="streetName" id="streetName" v-model="userAdresseOne.streetName"
                                :disabled="isDisable" placeholder="streetName">
                        </div>
                        <div>
                            <label for="city" hidden>streetNumber</label>
                            <input type="text" name="city" id="city" v-model="userAdresseOne.city" :disabled="isDisable"
                                placeholder="city">
                        </div>
                        <div>
                            <label for="province" hidden>streetNumber</label>
                            <input type="text" name="province" id="province" v-model="userAdresseOne.province"
                                :disabled="isDisable" placeholder="province">
                        </div>
                        <div>
                            <label for="country" hidden>streetNumber</label>
                            <input type="text" name="country" id="country" v-model="userAdresseOne.country"
                                :disabled="isDisable" placeholder="country">
                        </div>
                    </div>

                    <div>
                        <h3 v-if="userAdresseOne.type == 'PERSONAL'">Travail</h3>
                        <h3 v-else>Maison</h3>
                        <div>
                            <label for="streetNumber" hidden>streetNumber</label>
                            <input type="text" name="streetNumber" id="streetNumber"
                                v-model="userAdresseTwo.streetNumber" :disabled="isDisable" placeholder="streetNumber">
                        </div>
                        <div>
                            <label for="streetName" hidden>streetNumber</label>
                            <input type="text" name="streetName" id="streetName" v-model="userAdresseTwo.streetName"
                                :disabled="isDisable" placeholder="streetName">
                        </div>
                        <div>
                            <label for="city" hidden>streetNumber</label>
                            <input type="text" name="city" id="city" v-model="userAdresseTwo.city" :disabled="isDisable"
                                placeholder="city">
                        </div>
                        <div>
                            <label for="province" hidden>streetNumber</label>
                            <input type="text" name="province" id="province" v-model="userAdresseTwo.province"
                                :disabled="isDisable" placeholder="province">
                        </div>
                        <div>
                            <label for="country" hidden>streetNumber</label>
                            <input type="text" name="country" id="country" v-model="userAdresseTwo.country"
                                :disabled="isDisable" placeholder="country">
                        </div>
                        <div>
                            <label for="type" hidden>type</label>
                            <input type="text" name="type" id="type" v-model="userAdresseTwo.type" :disabled="isDisable"
                                placeholder="type" hidden>
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
        setAddresses(userAdresseOne, data, 0)
        setAddresses(userAdresseTwo, data, 1)
        console.log(data)
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
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
        toggleEdit()
    } catch (err) {
        console.error('Error:', err);
    }
}


const handleSubmit = () => {
    putFunction(`https://money-pie-1.fly.dev/api/v1/users/${localStorage.getItem("userId")}`, userData);
    putFunction(`https://money-pie-1.fly.dev/api/v1/users/${localStorage.getItem("userId")}/addresses`, userAdresseOne)
    putFunction(`https://money-pie-1.fly.dev/api/v1/users/${localStorage.getItem("userId")}/addresses`, userAdresseTwo)

}

onMounted(() => {
    fetchUser();
    fetchUserAdresse();
})

</script>

<style></style>