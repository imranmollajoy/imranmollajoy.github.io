<script>
	import PostCard from '../lib/components/PostCard.svelte';

	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import PostList from '$lib/components/PostList.svelte';
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
	<PostList posts={latest} sectionTitle="Latest" />
	<PostList posts={popular} sectionTitle="Popular" />
	<PostList posts={picks} sectionTitle="Random" />
</div>

<style>
	.homepage {
		max-width: 1280px;
	}
</style>
