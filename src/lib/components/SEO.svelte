<!-- SEO.svelte -->

<script lang="ts">
	import { siteName, siteUrl, siteDescription, categories } from '$lib/api/config';

	/**
	 * The title of the page.
	 */
	export let title: string = siteName;

	/**
	 * The description of the page.
	 */
	export let description: string = siteDescription;

	/**
	 * The keywords associated with the page.
	 */
	export let keywords: string[] = categories;

	/**
	 * The Open Graph (OG) type of the page.
	 * @default 'website'
	 */
	export let ogType: string = 'website';

	/**
	 * The URL of the image to use as the OG image for the page.
	 * @default ''
	 */
	export let ogImage: string = '';
</script>

<svelte:head>
	{#if title}
		<title>{title}</title>
	{/if}

	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
	{/if}
	{#if keywords.length > 0}
		<meta name="keywords" content={keywords.join(',')} />
	{/if}
	{#if ogImage}
		<meta property="og:image" content={ogImage} />
	{/if}

	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={window.location.href} />
	<meta property="og:title" content={title} />
</svelte:head>
