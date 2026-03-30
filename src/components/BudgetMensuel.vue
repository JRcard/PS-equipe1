<template>
	<div class="max-w-475 mx-auto mt-10">
		<div class="flex text-2xl font-bold">
			<h3 class="mr-2 mb-10">Votre balance ce mois-ci :</h3>
			<p v-if="balance > 0">{{ balance }}$</p>
			<p v-else class="text-red-500">{{ balance }}$</p>
		</div>
		<div></div>
		<div>
			<div class="flex justify-between my-10">
				<h2 class="text-4xl font-bold mb-1">Budget mensuel</h2>
				<button @click="nouveauMois()" class="px-8.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center transition-all duration-300 bg-linear-to-r from-principale to-secondaire hover:shadow-[0_0_15px_#9034b080,0_0_15px_#096cfd80]">NOUVEAU MOIS</button>
			</div>
			<div class="flex gap-3 justify-center">
				<TableauRevenu @totalRevenu="totalRevenu = $event" @deleteID="deleteTransaction" @newTransaction="ajoutTransaction" @updateTransaction="updateTransaction" @editThisRow="editThisRow" @stopEditing="stopEditing" :data="revenuList" :editingRow="currentEditing" />
				<TableauDepense @totalExpense="totalExpense = $event" @deleteID="deleteTransaction" @newTransaction="ajoutTransaction" @updateTransaction="updateTransaction" @editThisRow="editThisRow" @stopEditing="stopEditing" :data="depenseList" :editingRow="currentEditing" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import TableauRevenu from "./tableauRevenu.vue";
import TableauDepense from "./tableauDepense.vue";

const userId = 2; //window.localStorage.getItem("userId");
const url = `https://money-pie-1.fly.dev/api/v1/users/${userId}/transactions`;
const revenuList = ref([]);
const depenseList = ref([]);
const data = ref([]);
const currentEditing = ref([]);
const totalRevenu = ref(0);
const totalExpense = ref(0);
const balance = computed(() => totalRevenu.value - totalExpense.value);

const useAPI = (url) => {
	fetch(url)
		.then((res) => res.json())
		.then((json) => {
			data.value = json;
			revenuList.value = json.filter((t) => t.type === "Revenue").sort((a, b) => a.id - b.id);
			depenseList.value = json.filter((t) => t.type === "Expense").sort((a, b) => a.id - b.id);
		})
		.catch((err) => {
			console.log("Erreur: " + err + " | " + url);
			return;
		});
};
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
const editThisRow = (id) => {
	currentEditing.value = data.value.find((t) => t.id === id);
};
const stopEditing = () => {
	currentEditing.value = [];
	useAPI(url);
};

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
const deleteTransaction = async (id) => {
	try {
		await fetch(`${url}/${id}`, { method: "DELETE" });
	} catch (err) {
		console.log("Erreur: " + err + " | " + url);
	}
	useAPI(url);
};

onMounted(() => {
	useAPI(url);
});
</script>

<style lang="scss"></style>
