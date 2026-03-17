<template>
	<div>
		<div>
			<h3>Votre balance ce mois-ci :</h3>
			<p>+ 500$</p>
			<p>{{ data }}</p>
		</div>
		<div><button @click="nouveauMois(data)">Nouveau mois</button></div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const url = "https://money-pie-1.fly.dev/api/v1/users/1/transactions";
const useAPI = (url) => {
	const data = ref(null);
	fetch(url)
		.then((res) => res.json())
		.then((json) => (data.value = json))
		.catch((err) => {
			console.log("Erreur: " + err + " | " + url);
			return;
		});
	return data;
};
const data = useAPI(url);

const nouveauMois = (data) => {
	data.forEach((transaction) => {
		console.log(transaction.id);
		if (transaction.frequency == -1) {
			fetch(`${url}/${transaction.id}`, { method: "DELETE" })
				.then((res) => res.json())
				.then((json) => console.log(json))
				.catch((err) => {
					console.log("Erreur: " + err + " | " + url);
					return;
				});
			console.log(transaction.id + ": delete!");
		}
	});
};
</script>

<style lang="scss"></style>
