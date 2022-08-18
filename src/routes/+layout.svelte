<script>
	import '$lib/styles/normalize.css';
	import '$lib/styles/skeleton.css';
	import '$lib/styles/shared.css';
	import { onMount } from 'svelte';
	import Breadcrumb from '../lib/components/shared/Breadcrumb.svelte';

	export let data;
	const postMarkdownImages = import.meta.glob('../lib/images/*.{png,jpg}');
	const { url, origin, pathname } = data;

	// construct breadcrumb links
	let splitted = pathname.split('/');
	let newSplitted = [];
	let links = [];
</script>

<slot />
