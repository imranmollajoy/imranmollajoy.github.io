<script lang="ts">
	export let data;

	const categories = data.categories;
</script>

{#each categories as cat}
	<a href="/blog/category/{cat}">{cat}</a>
{/each}
