<script>
	import ImageLoader from './Image/ImageLoader.svelte';
	export let path;
	export let imgPath;
	export let name;
	export let tags;
	export let featured = false;
</script>

<a href={path} class="post-card" class:featured>
	<ImageLoader src={imgPath} />
	<div class="texts">
		{#each tags as stack, i}
			{#if i < 2}
				<div class="badge uppercase">{stack}</div>
			{/if}
		{/each}
		<h5>{name}</h5>
	</div>
</a>

<style>
	.post-card {
		background-color: var(--white);
		box-shadow: 0px 2px 8px 2px rgba(0, 0, 0, 0.13);
		margin-bottom: 2rem;
		border-radius: 0.4rem;
		text-decoration: none;
		transition: all 0.2s ease-in-out;
		border: 1px solid var(--clr-accent);
		position: relative;
		overflow: hidden;
	}
	.post-card:hover {
		box-shadow: 0px 2px 23px 4px rgba(0, 0, 0, 0.1);
		transform: scale(1.02);
	}
	.post-card .texts {
		padding: 2rem;
	}
	.post-card h5 {
		line-height: normal;
		margin-top: 1rem;
		margin-bottom: 0;
	}
	.post-card p {
		margin: 0;
	}
	.featured {
		border-bottom: 4px solid var(--clr-accent);
	}
</style>
