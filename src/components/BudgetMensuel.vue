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
			<TableauRevenu :data="revenuList" />
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import TableauRevenu from "./tableauRevenu.vue";

const url = "https://money-pie-1.fly.dev/api/v1/users/1/transactions";
const revenuList = ref([]);
const depenseList = ref([]);
const data = ref([]);

const useAPI = (url) => {
	fetch(url)
		.then((res) => res.json())
		.then((json) => {
			data.value = json;
			revenuList.value = json.filter((t) => t.type === "Revenue");
			depenseList.value = json.filter((t) => t.type === "Expense");
			console.log(revenuList.value);
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

onMounted(() => {
	useAPI(url);
});
</script>

<style lang="scss"></style>
