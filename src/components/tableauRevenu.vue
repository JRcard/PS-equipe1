<template>
	<div class="border-2 border-input-border m-5 p-5 rounded-xl bg-card">
		<div class="flex justify-between mb-4">
			<h3 class="text-3xl font-bold mb-1">Revenus</h3>
		</div>
		<div class="overflow-x-auto">
			<table class="min-w-full mb-10 table-fixed">
				<thead class="text-left">
					<tr>
						<th class="w-32 py-2 md:text-xl">Date</th>
						<th class="w-48 py-2 md:text-xl">Description</th>
						<th class="w-32 py-2 md:text-xl">Revenu mensuel</th>
						<th class="w-24 py-2 md:text-xl">Récurrent</th>
						<th class="w-16 py-2 md:text-xl"></th>
					</tr>
				</thead>

				<tbody>
					<tr v-for="transaction in props.data" :key="transaction.id" @click="transaction.id !== localEditing.id && editThisRow(transaction.id)" class="border-b-2 border-b-input-border">
						<!-- MODE AFFICHAGE -->
						<template v-if="transaction.id !== localEditing.id">
							<td class="w-32 pr-5 py-2 md:text-lg truncate min-w-0">
								{{ transaction.startDate }}
							</td>

							<td class="w-48 py-2 md:text-lg truncate min-w-0">
								{{ transaction.description }}
							</td>

							<td class="w-32 py-2 md:text-lg min-w-0">{{ transaction.amount }}$</td>

							<td class="w-24 py-2 min-w-0">
								<i v-if="transaction.frequency != -1" class="bx bxs-check-square md:text-2xl text-secondaire" alt="Icône de case à cocher rempli"></i>
								<i v-else class="bx bx-square md:text-2xl text-secondaire" alt="Icône de case à cocher vide"></i>
							</td>

							<td class="w-16 py-2">
								<i class="bx bxs-trash-alt text-principale text-2xl cursor-pointer" @click.stop="del(transaction.id)" alt="Icône de poubelle"></i>
							</td>
						</template>

						<!-- MODE ÉDITION -->
						<template v-else>
							<td class="w-32 pr-5 py-2 min-w-0 md:text-lg" @click.stop>
								<input type="date" v-model="localEditing.startDate" class="w-full min-w-0 bg-white text-background" />
							</td>

							<td class="w-48 py-2 min-w-0 md:text-lg" @click.stop>
								<input v-model="localEditing.description" class="w-full min-w-0 bg-transparent" />
							</td>

							<td class="w-32 py-2 min-w-0 md:text-lg" @click.stop>
								<input v-model="localEditing.amount" type="number" class="w-full min-w-0 bg-transparent" />
							</td>

							<td class="w-24 py-2 min-w-0 text-center" @click.stop>
								<select v-model="localEditing.frequency" class="w-full min-w-0 bg-background">
									<option value="">Choisis la fréquence</option>
									<option :value="1">Quotidien</option>
									<option :value="7">Hebdomadaire</option>
									<option :value="14">Bi-mensuel</option>
									<option :value="30">Mensuel</option>
									<option :value="-1">Une seule fois</option>
								</select>
							</td>

							<td class="w-16 py-2">
								<button @click.stop="save()">
									<i class="bx bxs-check-shield text-green-500 text-2xl cursor-pointer" alt="Icône de sauvegarde"></i>
								</button>
							</td>
						</template>
					</tr>

					<!-- LIGNE AJOUT -->
					<tr class="border-b-2 border-b-input-border cursor-pointer hover:shadow-[0_0_15px_#096cfd66]" @click="ajout()">
						<td class="w-32 py-2 font-bold text-secondaire">Clique pour ajouter</td>
						<td class="w-48 py-2"></td>
						<td class="w-32 py-2"></td>
						<td class="w-24 py-2"></td>
						<td class="w-16 py-2"></td>
					</tr>
				</tbody>
			</table>
		</div>
		<h3 class="text-xl font-bold mb-1 text-right">Total des revenus : {{ totalRevenu }}$</h3>
	</div>
</template>

<script setup>
import { computed, ref, watch } from "vue";
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
	editingRow: Object,
});
// Copie locale pour éviter la mutation de prop
const localEditing = ref({});

const emit = defineEmits(["totalRevenu", "deleteID", "newTransaction", "updateTransaction", "editThisRow", "stopEditing"]);

const del = (id) => {
	if (window.confirm("Es-tu sûr·e de vouloir supprimer cette transaction?")) {
		emit("deleteID", id);
	}
};
const ajout = () => {
	emit("newTransaction", newDefautRevenu);
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

const totalRevenu = computed(() => {
	let total = 0;
	for (const transaction of props.data) {
		total += parseFloat(transaction.amount);
	}
	emit("totalRevenu", total.toFixed(2));
	return total.toFixed(2);
});
</script>

<style lang="scss" scoped></style>
