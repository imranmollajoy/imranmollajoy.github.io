<script>
	import PostCard from '$lib/components/PostCard.svelte';

	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import PostList from '$lib/components/PostList.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import LatestPostCard from '$lib/components/LatestPostCard.svelte';
	export let data;

	const { latestPost, popular, latest, picks } = data.posts;
	const title = 'Blog';
</script>

<Seo {title} />
<Container>
	<div class="homepage container mt-8 backgroundg-surface">
		<section class="latest-single space-y-4 my-168">
			<h2>Latest Post</h2>
			<LatestPostCard
				title={latestPost.title}
				category={latestPost.category}
				href={latestPost.path}
				description={latestPost.description}
				cover={latestPost.cover}
			/>
		</section>
		<PostList posts={latest} sectionTitle="Latest" />
		<PostList posts={popular} sectionTitle="Popular" />
		<PostList posts={picks} sectionTitle="Random" />
	</div>
</Container>
