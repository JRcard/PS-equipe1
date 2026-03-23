<template>
	<div>
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
				<tr v-for="transaction in props.data" :key="transaction.id">
					<td>{{ transaction.description }}</td>
					<td>{{ transaction.amount }}$</td>
					<td>{{ transaction.frequency }}</td>
					<td @click="del(transaction.id)">supprime</td>
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
		<h3>Total des revenus : {{ totalRevenu }}$</h3>
	</div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
	data: Array,
});
const totalRevenu = computed(() => {
	let total = 0;
	for (const transaction of props.data) {
		total += parseFloat(transaction.amount);
	}
	return total.toFixed(2);
});
</script>

<style lang="scss" scoped></style>
