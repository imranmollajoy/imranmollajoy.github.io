<script>
	import PostCard from '../lib/components/PostCard.svelte';

	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	export let data;

	const { latestPost, popular, latest, picks } = data.posts;
</script>

<div class="homepage container mt-8 backgroundg-surface">
	<section class="latest-single space-y-4 my-168">
		<h2>Latest Post</h2>
		<PostCard
			title={latestPost.title}
			category={latestPost.category}
			href={latestPost.path}
			description={latestPost.description}
		/>
	</section>
	<section class="latest space-y-4 my-16">
		<h2 class="mb-4">Latest</h2>
		<div class="grid mt-2">
			{#each latest as { title, description, path, category } (path)}
				<PostCard {title} {category} href={path} {description} />
			{/each}
		</div>
	</section>
	<section class="popular space-y-4 my-16">
		<h2 class="mb-4">Popular</h2>
		<div class="grid mt-2">
			{#each popular as { title, description, path, category } (path)}
				<PostCard {title} {category} href={path} {description} />
			{/each}
		</div>
	</section>
	<section class="random space-y-4 my-16">
		<h2 class="mb-4">Random</h2>
		<div class="grid mt-2">
			{#each picks as { title, description, path, category } (path)}
				<PostCard {title} {category} href={path} {description} />
			{/each}
		</div>
	</section>
</div>

<style>
	.homepage {
		max-width: 1280px;
	}
	.grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
	}
</style>
