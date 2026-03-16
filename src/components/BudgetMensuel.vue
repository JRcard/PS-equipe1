<template>
	<div>
		<div>
			<h3>Votre balance ce mois-ci :</h3>
			<p>+ 500$</p>
			<p>{{ data }}</p>
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
/* try {
		const response = await fetch("https://money-pie-1.fly.dev/api/v1/users/1/transactions", {
			method: "GET",
			headers: { "Content-Type": "application/json", Accept: "application/json" },
			body: JSON.stringify({
				prenom: user.prenom,
				nom: user.nom,
				telephone: user.telephone,
				email: user.email,
				password: user.mdp,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			throw data.message || "Erreur lors de l'inscription";
		}

		if (data.user) {
			store.setUser(data.user);
		}

		return { success: true, data };
	} catch (err) {
		store.setError(err);
		return { success: false, error: err };
	} */
</script>

<style lang="scss"></style>
