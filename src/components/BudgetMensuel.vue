<template>
	<!-- Des burst de couleur -->
	<div class="relative isolate px-6 pt-14 lg:px-8 -z-99">
		<div aria-hidden="true" class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
			<div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 rotate-70 bg-linear-to-tr from-principale to-secondaire opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
		</div>
	</div>
	<div class="max-w-475 mx-auto mt-10">
		<div class="flex text-xl md:text-2xl font-bold ml-5">
			<h3 class="mr-2 mb-10">Votre balance ce mois-ci :</h3>
			<p v-if="balance >= 0">{{ balance }}$</p>
			<p v-else class="text-red-500">{{ balance }}$</p>
		</div>
		<div></div>
		<div>
			<div class="flex justify-around md:justify-between my-10 mx-5">
				<h1 class="text-3xl md:text-4xl font-bold mb-1">Budget mensuel</h1>
				<button @click="nouveauMois()" class="z-99 px-5.5 md:px-8.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center transition-all duration-300 bg-linear-to-r from-principale to-secondaire hover:shadow-[0_0_15px_#9034b080,0_0_15px_#096cfd80]">NOUVEAU MOIS</button>
			</div>

			<div class="flex flex-col gap-3 justify-center">
				<TableauRevenu @totalRevenu="totalRevenue = $event" @deleteID="deleteTransaction" @newTransaction="ajoutTransaction" @updateTransaction="updateTransaction" @editThisRow="editThisRow" @stopEditing="stopEditing" :data="revenueList" :editingRow="currentEditing" class="z-99" />
				<!-- Des burst de couleur -->
				<div class="relative isolate px-6 pt-14 lg:px-8">
					<div aria-hidden="true" class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
						<div style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-principale to-secondaire opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"></div>
					</div>
				</div>
				<TableauDepense @totalExpense="totalExpense = $event" @deleteID="deleteTransaction" @newTransaction="ajoutTransaction" @updateTransaction="updateTransaction" @editThisRow="editThisRow" @stopEditing="stopEditing" :data="expenseList" :editingRow="currentEditing" class="z-99" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import TableauRevenu from "./tableauRevenu.vue";
import TableauDepense from "./tableauDepense.vue";

let url = "";

const userConnecte = localStorage.getItem("userConnecte");
const revenueList = ref([]);
const expenseList = ref([]);
const data = ref([]);

const currentEditing = ref([]);

const totalRevenue = ref(0);
const totalExpense = ref(0);
const balance = computed(() => totalRevenue.value - totalExpense.value);

/* Appelle l'API et peuple les listes revenueList et expenseList */
const useAPI = (url) => {
	fetch(url)
		.then((res) => res.json())
		.then((json) => {
			if (json) {
				data.value = json;
				revenueList.value = json.filter((t) => t.type === "Revenue").sort((a, b) => a.id - b.id);
				expenseList.value = json.filter((t) => t.type === "Expense").sort((a, b) => a.id - b.id);
			}
		})
		.catch((err) => {
			console.log("Erreur: " + err + " | " + url);
			return;
		});
};

/* Supprime toutes les transactions non récurenctes */
const nouveauMois = async () => {
	const toDelete = data.value.filter((t) => t.frequency === -1);

	for (const transaction of toDelete) {
		try {
			await fetch(`${url}/${transaction.id}`, { method: "DELETE" });
			console.log(transaction.id + " supprimé");
		} catch (err) {
			console.log("Erreur: " + err + " | " + url);
		}
	}
	useAPI(url);
};

/* Détermine quel ID est sélectionné pour l'édition de la rangé dans un des tableaux */
const editThisRow = (id) => {
	currentEditing.value = data.value.find((t) => t.id === id);
};

/* Réinitialise la variable currenEditing et rafraichis les tableaux en appelant l'API */
const stopEditing = () => {
	currentEditing.value = [];
	useAPI(url);
};

/* Ajoute une transaction remplis avec des valeurs par défaut */
const ajoutTransaction = async (load) => {
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(load),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const newRow = await response.json();
		currentEditing.value = newRow;
	} catch (err) {
		console.error("Error:", err);
	}
	useAPI(url);
};

/* Modifie la transaction selon la rangé qui a été selectionné avec le editThisRow() */
const updateTransaction = async (load) => {
	if (load.id == undefined) {
		return;
	}
	try {
		const response = await fetch(`${url}/${load.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(load),
		});
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
	} catch (err) {
		console.error("Error:", err);
	}
	useAPI(url);
};

/* Supprime les transactions cliquées en fonction de leur ID */
const deleteTransaction = async (id) => {
	try {
		await fetch(`${url}/${id}`, { method: "DELETE" });
	} catch (err) {
		console.log("Erreur: " + err + " | " + url);
	}
	useAPI(url);
};

/* Lors du chargement de la page, la fonction useAPI() est appelé automatiquement pour peupler les tableaux */
onMounted(() => {
	if (userConnecte) {
		const user = JSON.parse(localStorage.getItem("user"));
		const userId = user.id;
		url = `https://money-pie-1.fly.dev/api/v1/users/${userId}/transactions`;
		useAPI(url);
	} else return;
});
</script>

<style lang="scss"></style>
