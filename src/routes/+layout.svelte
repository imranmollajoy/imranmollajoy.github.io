<script>
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	import '$lib/styles/normalize.css';
	import '$lib/styles/skeleton.css';
	import '$lib/styles/shared.css';

	import Breadcrumb from '../lib/components/shared/Breadcrumb.svelte';
	import { page } from '$app/stores';

	const portfolioMarkdownImages = import.meta.glob('../data/portfolios/**/*.{png,jpg}');
	const postMarkdownImages = import.meta.glob('../data/blogs/**/*.{png,jpg}');

	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
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
	<!-- TODO Isolate navar to seperate component -->
	<nav class="m l left tiny-padding" id="navigation-rail1">
		<a href="/"
			><img class="circle" src="/favicon.ico" style="border-radius: 23rem;" alt="logo" /></a
		>
		<a href="/"><i>home</i><span>Home</span></a>
		<a href="/portfolios"><i>code</i><span>Portfolio</span></a>
		<a href="/posts"><i>widgets</i><span>Blog</span></a>
	</nav>
{/if}
<Breadcrumb path={$page.url.pathname} />
<slot />

<style>
	nav {
		border-right: 1px solid var(--clr-accent);
	}
</style>
