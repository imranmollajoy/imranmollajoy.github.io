<script>
	/**
	 * The URL to link to.
	 * @type {string}
	 */
	export let href;

	/**
	 * The image source URL.
	 * @type {string}
	 */
	export let img;

	/**
	 * The title of the item.
	 * @type {string}
	 */
	export let title;

	/**
	 * The description of the item.
	 * @type {string}
	 */
	export let description;

	/**
	 * The category of the item.
	 * @type {string}
	 */
	export let category;
</script>

<a class="block card card-hover variant-ghost-primary" {href}>
	{#if img}
		<header>
			<img
				src="https://source.unsplash.com/random/1280x540?skeleton"
				class="bg-black/50 w-full aspect-[21/9]"
				alt="Post"
			/>
		</header>
	{/if}
	<div class="p-4 flex h-full flex-col justify-between">
		{#if category}
			<h6 class="mb-4">{category}</h6>
		{/if}
		<h3 class="font-bold mb-2" data-toc-ignore>{title}</h3>
	</div>
</a>
