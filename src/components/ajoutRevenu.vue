<template>
	<div class="fixed inset-0 z-10 backdrop-blur-sm bg-card/30 flex justify-center items-center">
		<div class="max-w-sm max-h-[90vh] overflow-y-auto rounded-lg p-6 flex flex-col bg-card border-2 border-input-border">
			<h2 class="text-xl font-bold my-5">Ajouter un revenu</h2>

			<div class="flex flex-col">
				<form action="#" method="post">
					<div class="flex flex-col">
						<label for="description">Description</label>
						<input type="text" id="description" name="description" placeholder="Description" class="border-2 border-input-border rounded-sm" />
					</div>

					<label for="category">Catégorie</label>
					<input type="text" id="category" name="category" placeholder="Category" />
					<br />

					<label for="amount">Montant</label>
					<input type="number" id="amount" name="amount" min="0" />
					<br />

					<label for="options">Fréquence</label>
					<select id="options" name="options">
						<option value="">Choisissez la fréquence</option>
						<option value="1">Quotidien</option>
						<option value="7">Hebdomadaire</option>
						<option value="14">bi-mensuel</option>
						<option value="30">Mensuel</option>
						<option value="-1">Une seule fois</option>
					</select>
					<br />
					<label for="startDate">Date de début</label>
					<input type="date" id="startDate" name="startDate" />
					<br />

					<label>
						<input type="checkbox" name="isDone" />
						Terminé
					</label>
					<br />

					<label>
						<input type="radio" name="sexe" value="homme" />
						Homme
					</label>
					<label>
						<input type="radio" name="sexe" value="femme" />
						Femme
					</label>
					<br />

					<input type="submit" value="Soumettre" />
				</form>
			</div>
			<div class="flex justify-around items-center mt-5 text-right pb-6">
				<button @click="ajouter()" class="bg-purple-700 text-yellow-50 px-4 py-2 rounded">Ajouter</button>
				<button @click="visible" class="bg-purple-600 text-white px-4 py-2 rounded">Fermer</button>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	visible: Function,
});
</script>

<style lang="scss" scoped></style>
