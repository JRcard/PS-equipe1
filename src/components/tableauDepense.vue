<template>
	<div class="border-2 border-input-border m-5 p-5 rounded-xl bg-card">
		<div class="flex justify-between mb-4">
			<h3 class="text-3xl font-bold mb-1">Dépenses</h3>
		</div>
		<table class="min-w-full mb-10">
			<thead class="text-left">
				<tr>
					<th class="pr-10 py-2 text-xl">Description</th>
					<th class="pr-10 py-2 text-xl">Catégorie</th>
					<th class="pr-10 py-2 text-xl">Coût</th>
					<th class="pr-10 py-2 text-xl">Récurrence</th>
					<th class="pr-10 py-2 text-xl"></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="transaction in props.data" :key="transaction.id" @click="editThisRow(transaction.id)" class="border-b-2 border-b-input-border">
					<template v-if="transaction.id !== localEditing.id">
						<td class="pr-10 py-2 text-lg">{{ transaction.description }}</td>
						<td class="pr-10 py-2 text-lg">{{ transaction.category }}</td>
						<td class="pr-10 py-2 text-lg">{{ transaction.amount }}$</td>
						<td class="pr-10 text-center">
							{{ frequencyLabel(transaction.frequency) }}
						</td>
						<td class="px-10 py-2" @click="del(transaction.id)"><i class="bx bxs-trash-alt text-principale text-2xl cursor-pointer"></i></td>
					</template>
					<template v-else>
						<td class="pr-10 py-2 text-lg">
							<input type="text" v-model="localEditing.description" />
						</td>
						<td class="pr-10 py-2 text-lg">
							<input v-model="localEditing.category" />
						</td>
						<td class="pr-10 py-2 text-lg">
							<input v-model="localEditing.amount" type="number" />
						</td>
						<td class="pr-10 py-2 text-center">
							<select v-model="localEditing.frequency" class="bg-background" id="options" name="options">
								<option value="">Choisis la fréquence</option>
								<option :value="1">Quotidien</option>
								<option :value="7">Hebdomadaire</option>
								<option :value="14">bi-mensuel</option>
								<option :value="30">Mensuel</option>
								<option :value="-1">Une seule fois</option>
							</select>
						</td>
						<td class="px-10 py-2">
							<button @click.stop="save()"><i class="bx bxs-check-shield text-green-500 text-2xl cursor-pointer"></i></button>
						</td>
					</template>
				</tr>
				<tr class="border-b-2 border-b-input-border" @click="ajout()">
					<td class="pr-10 py-2 cursor-pointer">Clique pour ajouter</td>
					<td class="pr-10 py-2"></td>
					<td class="pr-10 py-2"></td>
					<td class="pr-10 py-2 text-center"></td>
					<td class="px-10 py-5"></td>
				</tr>
			</tbody>
		</table>
		<h3 class="text-xl font-bold mb-1">Total des dépenses : {{ totalDepense }}$</h3>
	</div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps({
	data: Array,
	editingRow: Object,
});
const newDefautExpense = {
	description: "description",
	category: "catégorie",
	amount: 0,
	type: "Expense",
	isDone: true,
	startDate: "2026-03-16",
	endDate: null,
	frequency: -1,
};
const localEditing = ref({});

const emit = defineEmits(["totalExpense", "deleteID", "newTransaction", "updateTransaction", "editThisRow", "stopEditing"]);

const del = (id) => {
	if (window.confirm("Es-tu sûr·e de vouloir supprimer cette transaction?")) {
		emit("deleteID", id);
	}
};
const ajout = () => {
	emit("newTransaction", newDefautExpense);
};
const editThisRow = (id) => {
	emit("editThisRow", id);
};
const save = () => {
	emit("stopEditing");
};

// Sync quand le parent change editingRow
watch(
	() => props.editingRow,
	(newVal) => {
		localEditing.value = newVal ? { ...newVal } : {};
	},
	{ immediate: true, deep: true },
);
// Émet les changements au parent à chaque modification
watch(
	localEditing,
	(newVal) => {
		if (newVal.id !== undefined) {
			emit("updateTransaction", { ...newVal });
		}
	},
	{ deep: true },
);

const totalDepense = computed(() => {
	let total = 0;
	for (const transaction of props.data) {
		total += parseFloat(transaction.amount);
	}
	emit("totalExpense", total.toFixed(2));
	return total.toFixed(2);
});
const frequencyLabel = (value) => {
	switch (value) {
		case 1:
			return "Quotidien";
		case 7:
			return "Hebdomadaire";
		case 14:
			return "Bi-mensuel";
		case 30:
			return "Mensuel";
		case -1:
			return "Une seule fois";
		default:
			return "Inconnu";
	}
};
</script>

<style lang="scss" scoped></style>
