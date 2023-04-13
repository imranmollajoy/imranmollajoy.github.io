<script>
	import { scale, slide } from 'svelte/transition';

	export let href;
	export let img;
	export let title;
	export let description;
	export let category;
</script>

<a class="block card card-hover variant-filled-primary" {href}>
	{#if img}
		<header>
			<img
				src="https://source.unsplash.com/random/1280x540?skeleton"
				class="bg-black/50 w-full aspect-[21/9]"
				alt="Post"
			/>
		</header>
	{/if}
	<div class="p-4">
		<h6 class="mb-4">{category}</h6>
		<h3 class="font-bold mb-2" data-toc-ignore>{title}</h3>
		<article>
			<p>
				{description}
			</p>
		</article>
	</div>
</a>
