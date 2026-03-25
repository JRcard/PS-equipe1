<template>
	<div>
		<div>
			<h3>Votre balance ce mois-ci :</h3>
			<p>+ 500$</p>
			<p>{{ data }}</p>
		</div>
		<div><button @click="nouveauMois()">Nouveau mois</button></div>
		<div>
			<h2>Budget mensuel</h2>
			<div class="flex gap-3 justify-center">
				<TableauRevenu @revenuDeleteID="deleteRevenu" @newRevenu="ajoutRevenu" @updatedRevenu="updatedRevenu" :data="revenuList" :current="currentRevenuTransaction" />
				<TableauDepense :data="depenseList" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import TableauRevenu from "./tableauRevenu.vue";
import TableauDepense from "./tableauDepense.vue";

const userId = 2; //window.localStorage.getItem("userId");
const url = `https://money-pie-1.fly.dev/api/v1/users/${userId}/transactions`;
const revenuList = ref([]);
const depenseList = ref([]);
const data = ref([]);
const currentRevenuTransaction = ref([]);

const useAPI = (url) => {
	fetch(url)
		.then((res) => res.json())
		.then((json) => {
			data.value = json;
			revenuList.value = json.filter((t) => t.type === "Revenue").sort((a, b) => a.id - b.id);
			depenseList.value = json.filter((t) => t.type === "Expense");
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
const ajoutRevenu = async (load) => {
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

		currentRevenuTransaction.value = await response.json();
		console.log("Success:", currentRevenuTransaction.value.id);
	} catch (err) {
		console.error("Error:", err);
	}
	useAPI(url);
};
const updatedRevenu = async (load) => {
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

		currentRevenuTransaction.value = [];
	} catch (err) {
		console.error("Error:", err);
	}
	useAPI(url);
};
const deleteRevenu = async (id) => {
	try {
		await fetch(`${url}/${id}`, { method: "DELETE" });
		console.log("Renevu supprimé");
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
