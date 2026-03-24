<template>
	<div class="border-2 border-input-border m-5 p-5 rounded-xl bg-card">
		<div class="flex justify-between mb-4">
			<h3 class="text-xl font-bold mb-1">Dépenses</h3>
			<button class="w-65 px-3.5 py-2.5 rounded-md font-semibold text-white flex items-center justify-center transition-all duration-300 bg-principale hover:opacity-80 hover:shadow-[0_0_15px_#9034b066]">
				<i class="bx bxs-plus-circle text-2xl pr-2"></i>
				Ajouter une dépense
			</button>
		</div>

		<table class="min-w-full mb-10">
			<thead class="text-left">
				<tr>
					<th class="pr-10 py-2">Description</th>
					<th class="pr-10 py-2">Catégorie</th>
					<th class="pr-10 py-2">Coût</th>
					<th class="pr-10 py-2">Récurence</th>
					<th class="pr-10 py-2"></th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="transaction in props.data" :key="transaction.id" class="border-b-2 border-b-input-border">
					<td class="pr-10 py-2">{{ transaction.description }}</td>
					<td class="pr-10 py-2">{{ transaction.category }}</td>
					<td class="pr-10 py-2">{{ transaction.amount }}$</td>
					<td class="pr-10 py-2 text-center">{{ transaction.frequency }}</td>
					<td class="px-10 py-2" @click="del(transaction.id)">
						<i class="bx bxs-trash-alt text-principale text-xl"></i>
					</td>
				</tr>
			</tbody>
		</table>

		<h3 class="text-xl font-bold mb-1">Total des dépenses : {{ totalDepense }}$</h3>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
	data: Array,
});
const isVisible = ref(false);
const totalDepense = computed(() => {
	let total = 0;
	for (const transaction of props.data) {
		total += parseFloat(transaction.amount);
	}
	return total.toFixed(2);
});
</script>

<style lang="scss" scoped></style>
