<script lang="ts">
	import type { Cover } from '$lib/types';
	/**
	 * The URL to link to.
	 */
	export let href: string;

	/**
	 * The image source URL.
	 */
	export let cover: Cover;

	/**
	 * The title of the item.
	 */
	export let title: string;

	/**
	 * The category of the item.
	 */
	export let category: string;
</script>

<a
	class="block card card-hover variant-ghost-primary flex flex-col lg:flex-row justify-between"
	{href}
>
	{#if cover.image}
		<header>
			<img src="{href}/{cover?.image}" class="bg-black/50 w-[full]" alt={cover?.alt} />
		</header>
	{/if}
	<div class="p-4 mt-auto">
		{#if category}
			<h6 class="mb-4">{category}</h6>
		{/if}
		<h2 class="font-bold mb-2" data-toc-ignore>{title}</h2>
	</div>
</a>
