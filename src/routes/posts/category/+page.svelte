<script lang="ts">
	export let data;

	const categories = data.categories;
</script>

{#each categories as cat}
	<h2>{cat}</h2>
{/each}
