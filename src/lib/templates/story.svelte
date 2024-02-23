<script>
	import Seo from '$lib/components/SEO.svelte';

	export let title;
	export let tags;
	export let date;
	export let updates;
	export let description;

	const OPTIONS = { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' };

	function getBDDate(date) {
		return new Date(date).toLocaleDateString('bn-BD', OPTIONS);
	}
</script>

<Seo {title} {description} keywords={tags} />
<div class="p-4 max-w-2xl mx-auto lg:max-w-3xl">
	<article class="prose max-w-none lg:prose-xl dark:prose-invert" id="toc-target">
		<div class="mt-12 space-y-0">
			<p class="text-neutral-500">{description}</p>
			<h1>{title}</h1>
			<p>ইমরান মোল্লা জয়</p>
			<p>প্রথম প্রকাশ: {getBDDate(date)}</p>
		</div>
		<slot />
		{#if updates}
			<hr />
			{#each updates as update, index (update)}
				সংস্করণ {(index + 2).toLocaleString('bn-BD')}: {getBDDate(update)}
			{/each}
		{/if}
	</article>
</div>
