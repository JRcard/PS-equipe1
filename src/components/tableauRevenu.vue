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
	</div>
</template>

<script setup>
const props = defineProps({
	data: Array,
});
</script>

<style lang="scss" scoped></style>
