<script>
	import PostCard from '$lib/components/PostCard.svelte';

	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import PostList from '$lib/components/PostList.svelte';
	import Seo from '$lib/components/SEO.svelte';
	export let data;

	const title = 'Projects';
</script>

<Seo {title} />
<Container>
	<div class="container mt-8 backgroundg-surface">
		<PostList posts={data.posts} sectionTitle="Projects" />
	</div>
</Container>
