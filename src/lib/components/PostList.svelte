<script>
	import PostCard from './PostCard.svelte';

	export let posts;
	export let sectionTitle;
</script>

<section class="space-y-4 mt-16 mb-4" id={sectionTitle}>
	<h2 class="mb-4">{sectionTitle}</h2>
	<div class="grid mt-2">
		{#each posts as { title, description, path, category } (path)}
			<!-- svelte-ignore missing-declaration -->
			<PostCard {title} {category} href={path} {description} />
		{/each}
	</div>
</section>

<style>
	.grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
	}
</style>
