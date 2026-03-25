<template>
	<div class="border-2 border-input-border m-5 p-5 rounded-xl bg-card">
		<div class="flex justify-between mb-4">
			<h3 class="text-xl font-bold mb-1">Revenus</h3>
		</div>
		<table class="min-w-full mb-10">
			<thead class="text-left">
				<tr>
					<th class="pr-10 py-2">Date</th>
					<th class="pr-10 py-2">Description</th>
					<th class="pr-10 py-2">Revenu mensuel</th>
					<th class="pr-10 py-2">Récurrent</th>
					<th class="pr-10 py-2"></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="transaction in props.data" :key="transaction.id" class="border-b-2 border-b-input-border">
					<template v-if="transaction.id !== props.current.id">
						<td class="pr-10 py-2">{{ transaction.startDate }}</td>
						<td class="pr-10 py-2">{{ transaction.description }}</td>
						<td class="pr-10 py-2">{{ transaction.amount }}$</td>
						<td class="pr-10 text-center" v-if="transaction.frequency != -1"><i class="bx bxs-check-square text-xl text-secondaire"></i></td>
						<td class="pr-10 py-2 text-center" v-else><i class="bx bx-square text-xl text-secondaire"></i></td>
						<td class="px-10 py-2" @click="del(transaction.id)"><i class="bx bxs-trash-alt text-principale text-xl"></i></td>
					</template>
					<template v-else>
						<td class="pr-10 py-2">
							<input type="date" v-model="props.current.startDate" class="bg-white text-background" />
						</td>
						<td class="pr-10 py-2">
							<input v-model="props.current.description" />
						</td>
						<td class="pr-10 py-2">
							<input v-model="props.current.amount" type="number" />
						</td>
						<td class="pr-10 py-2 text-center">
							<select v-model="props.current.frequency" class="bg-background" id="options" name="options">
								<option value="">Choisis la fréquence</option>
								<option value="1">Quotidien</option>
								<option value="7">Hebdomadaire</option>
								<option value="14">bi-mensuel</option>
								<option value="30">Mensuel</option>
								<option value="-1">Une seule fois</option>
							</select>
						</td>
						<td class="px-10 py-2">
							<button @click="save(props.current.id)">Save</button>
						</td>
					</template>
				</tr>
				<tr class="border-b-2 border-b-input-border" @click="ajout()">
					<td class="pr-10 py-2">Clique pour ajouter</td>
					<td class="pr-10 py-2"></td>
					<td class="pr-10 py-2"></td>
					<td class="pr-10 py-2 text-center"></td>
					<td class="px-10 py-5"></td>
				</tr>
			</tbody>
		</table>
		<h3 class="text-xl font-bold mb-1">Total des revenus : {{ totalRevenu }}$</h3>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";
const newDefautRevenu = {
	description: "description",
	category: "catégorie",
	amount: 0,
	type: "Revenue",
	isDone: true,
	startDate: "2026-03-16",
	endDate: null,
	frequency: -1,
};
const props = defineProps({
	data: Array,
	current: Object,
});
const emit = defineEmits(["revenuDeleteID", "newRevenu", "updatedRevenu"]);

const del = (id) => {
	if (window.confirm("Es-tu sûr·e de vouloir supprimer cette transaction?")) {
		emit("revenuDeleteID", id);
	}
};
const ajout = () => {
	emit("newRevenu", newDefautRevenu);
};
const save = () => {
	emit("updatedRevenu", props.current);
};

const totalRevenu = computed(() => {
	let total = 0;
	for (const transaction of props.data) {
		total += parseFloat(transaction.amount);
	}
	return total.toFixed(2);
});
</script>

<style lang="scss" scoped></style>
