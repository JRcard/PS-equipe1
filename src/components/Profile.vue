<template>
    <div class="relative isolate bg-background min-h-screen px-6 lg:px-8 pt-24 text-white">

        <!-- BLOB TOP -->
        <div aria-hidden="true"
            class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                class="relative left-[calc(50%-11rem)] aspect-1155/678 w-xl rotate-30 bg-linear-to-tr from-principale to-secondaire opacity-30 sm:left-[calc(50%-30rem)] sm:w-6xl">
            </div>
        </div>

        <!-- HEADER -->
        <div class="max-w-6xl mx-auto flex justify-between items-center mb-12">
            <h1 class="text-3xl font-bold">Détail du profil</h1>

            <div class="flex gap-4">
                <button @click="connectUserOne()"
                    class="px-4 py-2 rounded-md bg-principale hover:opacity-80 transition">
                    User 2 btn temp
                </button>

                <button v-if="isDisable" @click="toggleEdit()"
                    class="px-4 py-2 rounded-md bg-secondaire hover:opacity-80 transition">
                    Mettre à jour
                </button>

                <button v-else @click="handleSubmit()"
                    class="px-4 py-2 rounded-md bg-linear-to-r from-principale to-secondaire hover:shadow-lg transition">
                    Enregistrer
                </button>
            </div>
        </div>

        <!-- FORM -->
        <form @submit.prevent="handleSubmit" class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">

            <!-- USER -->
            <div class="bg-card/5 p-8 rounded-2xl shadow-xl border border-white/5 flex flex-col gap-6">
                <h2 class="text-2xl font-bold">Informations personnelles</h2>

                <input v-model="userData.firstName" :disabled="isDisable" placeholder="Prénom"
                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                <input v-model="userData.lastName" :disabled="isDisable" placeholder="Nom"
                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                <input type="date" v-model="userData.birthDate" :disabled="isDisable"
                    class="w-full bg-input-bg border border-input-border text-text px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                <input v-model="userData.email" :disabled="isDisable" placeholder="Email"
                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                <div class="flex gap-3">
                    <input :type="showPassword ? 'password' : 'text'" v-model="userData.password" :disabled="isDisable"
                        placeholder="Mot de passe"
                        class="flex-1 bg-input-bg border border-input-border text-text px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                    <button v-if="!isDisable" type="button" @click="togglePasswordShow"
                        class="px-4 rounded-md bg-principale hover:opacity-80">
                        👁
                    </button>
                </div>
            </div>

            <!-- ADDRESSES -->
            <div class="flex flex-col gap-8">

                <!-- MAISON -->
                <div class="bg-card/5 p-8 rounded-2xl shadow-xl border border-white/5 flex flex-col gap-4">
                    <h2 class="text-xl font-bold">Maison</h2>

                    <input v-model="userAdresseOne.streetNumber" :disabled="isDisable" placeholder="Numéro"
                        class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                    <input v-model="userAdresseOne.streetName" :disabled="isDisable" placeholder="Rue"
                        class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                    <input v-model="userAdresseOne.city" :disabled="isDisable" placeholder="Ville"
                        class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                    <input v-model="userAdresseOne.province" :disabled="isDisable" placeholder="Province"
                        class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                    <input v-model="userAdresseOne.country" :disabled="isDisable" placeholder="Pays"
                        class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />


                    <button v-if="!isDisable" @click="delAdressFunction(userAdresseOne.type)" class="group w-fit self-start flex items-center gap-1.5 px-3 py-1.5 rounded-lg 
         bg-linear-to-r from-red-600/80 to-red-800/80 
         hover:from-red-500 hover:to-red-700
         text-white text-sm font-medium
         transition-all duration-300
         shadow-sm hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]">

                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 7h12M9 7V4h6v3m-7 4v6m4-6v6M5 7h14l-1 14H6L5 7z" />
                        </svg>

                        Supprimer
                    </button>
                </div>

                <!-- TRAVAIL -->
                <div class="bg-card/5 p-8 rounded-2xl shadow-xl border border-white/5 flex flex-col gap-4">
                    <h2 class="text-xl font-bold">Travail</h2>

                    <input v-model="userAdresseTwo.streetNumber" :disabled="isDisable" placeholder="Numéro"
                        class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                    <input v-model="userAdresseTwo.streetName" :disabled="isDisable" placeholder="Rue"
                        class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                    <input v-model="userAdresseTwo.city" :disabled="isDisable" placeholder="Ville"
                        class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                    <input v-model="userAdresseTwo.province" :disabled="isDisable" placeholder="Province"
                        class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                    <input v-model="userAdresseTwo.country" :disabled="isDisable" placeholder="Pays"
                        class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />




                    <button v-if="!isDisable" @click="delAdressFunction(userAdresseTwo.type)" class="group w-fit self-start flex items-center gap-1.5 px-3 py-1.5 rounded-lg 
         bg-linear-to-r from-red-600/80 to-red-800/80 
         hover:from-red-500 hover:to-red-700
         text-white text-sm font-medium
         transition-all duration-300
         shadow-sm hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]">

                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 7h12M9 7V4h6v3m-7 4v6m4-6v6M5 7h14l-1 14H6L5 7z" />
                        </svg>

                        Supprimer
                    </button>
                </div>
            </div>

            <!-- SCHOOL -->
            <div class="bg-card/5 p-8 rounded-2xl shadow-xl border border-white/5 flex flex-col gap-4">
                <h2 class="text-2xl font-bold">Scolaire</h2>

                <input v-model="schoolDetail.schoolName" :disabled="isDisable" placeholder="École"
                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                <input v-model="schoolDetail.fieldOfStudy" :disabled="isDisable" placeholder="Domaine"
                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                <input type="date" v-model="schoolDetail.startDate" :disabled="isDisable"
                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                <input type="date" v-model="schoolDetail.projectedEndDate" :disabled="isDisable"
                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />


                <button v-if="!isDisable" @click="delDetailFunction('school-details')" class="group w-fit self-start flex items-center gap-1.5 px-3 py-1.5 rounded-lg 
         bg-linear-to-r from-red-600/80 to-red-800/80 
         hover:from-red-500 hover:to-red-700
         text-white text-sm font-medium
         transition-all duration-300
         shadow-sm hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]">

                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 7h12M9 7V4h6v3m-7 4v6m4-6v6M5 7h14l-1 14H6L5 7z" />
                    </svg>

                    Supprimer
                </button>

            </div>

            <!-- BANK -->
            <div class="bg-card/5 p-8 rounded-2xl shadow-xl border border-white/5 flex flex-col gap-4">
                <h2 class="text-2xl font-bold">Bancaire</h2>

                <input v-model="bankDetail.institutionName" :disabled="isDisable" placeholder="Institution"
                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                <input v-model="bankDetail.accountInfo" :disabled="isDisable" placeholder="Compte"
                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                <input v-model="bankDetail.loanInfo" :disabled="isDisable" placeholder="Prêt"
                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />

                <input v-model="bankDetail.other" :disabled="isDisable" placeholder="Autre"
                    class="w-full bg-input-bg border border-input-border text-text placeholder-text-secondaire px-3.5 py-2.5 rounded-xl focus:border-secondaire focus:ring-1 focus:ring-secondaire" />


                <button v-if="!isDisable" @click="delDetailFunction('banking-details')" class="group w-fit self-start flex items-center gap-1.5 px-3 py-1.5 rounded-lg 
         bg-linear-to-r from-red-600/80 to-red-800/80 
         hover:from-red-500 hover:to-red-700
         text-white text-sm font-medium
         transition-all duration-300
         shadow-sm hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]">

                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 7h12M9 7V4h6v3m-7 4v6m4-6v6M5 7h14l-1 14H6L5 7z" />
                    </svg>

                    Supprimer
                </button>

            </div>
        </form>

        <!-- BLOB BOTTOM -->
        <div aria-hidden="true"
            class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                class="relative left-[calc(50%+3rem)] aspect-1155/678 w-xl -translate-x-1/2 bg-linear-to-tr from-principale to-secondaire opacity-30 sm:left-[calc(50%+36rem)] sm:w-6xl">
            </div>
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

const schoolDetail = ref({
    schoolName: "",
    fieldOfStudy: "",
    startDate: "",
    projectedEndDate: ""
})

const bankDetail = ref({
    institutionName: "",
    accountInfo: "",
    loanInfo: "",
    other: ""
})

const setData = (target, data) => {
    target.value = { ...data };
}



const fetchUserAdresse = async () => {
    try {
        const response = await fetch(`https://money-pie-1.fly.dev/api/v1/users/${localStorage.getItem("userId")}/addresses`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const personal = data.find(a => a.type === "PERSONAL");
        const work = data.find(a => a.type === "WORK");

        if (personal) setData(userAdresseOne, personal);
        if (work) setData(userAdresseTwo, work);

    } catch (error) {
        console.error(error);
    }
}

const fetchUserDetails = async (type) => {
    try {
        const response = await fetch(`https://money-pie-1.fly.dev/api/v1/users/${localStorage.getItem("userId")}/${type}`)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();


        if (type === "banking-details") {
            bankDetail.value = {
                institutionName: data.institutionName,
                accountInfo: data.accountInfo,
                loanInfo: data.loanInfo,
                other: data.other
            }
        }
        if (type === "school-details") {
            schoolDetail.value = {
                schoolName: data.schoolName,
                fieldOfStudy: data.fieldOfStudy,
                startDate: data.startDate?.split('T')[0],
                projectedEndDate: data.projectedEndDate?.split('T')[0]
            }
        }

    } catch (error) {
        console.error(error);
    }
}

const delDetailFunction = async (type) => {
    try {
        const response = await fetch(`https://money-pie-1.fly.dev/api/v1/users/${localStorage.getItem("userId")}/${type}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (type === "school-details") {
            schoolDetail.value = {
                schoolName: "",
                fieldOfStudy: "",
                startDate: "",
                projectedEndDate: ""
            }
        }

        if (type === "banking-details") {
            bankDetail.value = {
                institutionName: "",
                accountInfo: "",
                loanInfo: "",
                other: ""
            }
        }


        fetchUserAdresse()
        const data = await response.json();
        console.log('Success:', data);

    } catch (err) {
        console.error('Error:', err);
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

        if (type === "PERSONAL") {
            userAdresseOne.value = {
                streetNumber: "",
                streetName: "",
                city: "",
                province: "",
                country: "",
                type: "PERSONAL"
            };
        }

        if (type === "WORK") {
            userAdresseTwo.value = {
                streetNumber: "",
                streetName: "",
                city: "",
                province: "",
                country: "",
                type: "WORK"
            };
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
    putFunction(`https://money-pie-1.fly.dev/api/v1/users/${localStorage.getItem("userId")}/banking-details`, bankDetail);
    putFunction(`https://money-pie-1.fly.dev/api/v1/users/${localStorage.getItem("userId")}/school-details`, schoolDetail);


    toggleEdit();
    if (showPassword.value === false) {
        togglePasswordShow()
    }
}

onMounted(() => {
    fetchUser();
    fetchUserAdresse();
    fetchUserDetails("school-details");
    fetchUserDetails("banking-details");

})

</script>

<style></style>