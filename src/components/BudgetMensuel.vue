<template>
	<div>
		<div>
			<h3>Votre balance ce mois-ci :</h3>
			<p>+ 500$</p>
			<p>{{ data }}</p>
		</div>
		<div><button @click="nouveauMois(data)">Nouveau mois</button></div>
		<div>
			<h2>Budget mensuel</h2>
			<h3>Revenus</h3>
			<table>
				<thead>
					<tr>
						<th>Description</th>
						<th>Revenu mensuel</th>
						<th>Récurrent</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="transaction in data" :key="transaction.id">
						<td>{{ transaction.description }}</td>
						<td>{{ transaction.amount }}</td>
						<td>{{ transaction.frequency }}</td>
						<td @click="del(transaction.id)">supprime</td>
					</tr>
					<tr>
						<td>cell1_2</td>
						<td>cell2_2</td>
						<td>cell3_2</td>
						<td>cell4_2</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td>foot1</td>
						<td>foot2</td>
						<td>foot3</td>
						<td>foot4</td>
					</tr>
				</tfoot>
			</table>
		</div>
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
