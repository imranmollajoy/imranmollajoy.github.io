<script>
	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	export let data;

	const { latestPost } = data.posts;
</script>

<Container>
	<article class="card variant-filled-surface p-4">
		<h3 class="mb-2">Card title</h3>
		<p class="mb-4">
			Some quick example text to build on the card title and make up the bulk of the card's content.
		</p>
		<button type="button" class="btn variant-ghost-primary"> Button </button>
	</article>

	<a href={latestPost.path} class="card">{latestPost.title}</a>
</Container>
