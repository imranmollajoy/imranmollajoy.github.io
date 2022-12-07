<script>
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	import '$lib/styles/normalize.css';
	import '$lib/styles/skeleton.css';
	import '$lib/styles/shared.css';

	import Breadcrumb from '../lib/components/shared/Breadcrumb.svelte';
	import { page } from '$app/stores';
	import Analytics from '../lib/components/shared/Analytics.svelte';
	import NavRail from '../lib/components/shared/NavRail.svelte';

	const portfolioMarkdownImages = import.meta.glob('./portfolios/**/*.{png,jpg}');
	const postMarkdownImages = import.meta.glob('./blogs/**/*.{png,jpg}');

	NProgress.configure({
		minimum: 0.16,
		showSpinner: true
	});
	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

{#if $page.url.pathname !== '/'}
	<NavRail />
{/if}

<Analytics />

<Breadcrumb path={$page.url.pathname} />
<slot />

<style>
	nav {
		border-right: 1px solid var(--clr-accent);
	}
</style>
