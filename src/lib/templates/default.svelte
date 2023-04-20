<script>
	import { onMount } from 'svelte';
	import '../../code.postcss';
	import { TableOfContents } from '@skeletonlabs/skeleton';
	import Seo from '$lib/components/SEO.svelte';
	export let title;
	export let category;
	export let description;
	export let date;
	let key = title.replace(/\s/g, '');
	let action = 'view';
	let namespace = 'imranmollajoy.gihub.io';
	let options = { behavior: 'view' }; //see options list
	$: view = 0;
	onMount(() => {
		//increase a counter
		window.counterApi.increment(key, action, namespace, options, function (err, res) {});

		window.counterApi.read(key, action, namespace, options, function (err, res) {
			view = res.value;
		});
	});

	// Classes
	const cBase = 'page-padding lg:flex lg:items-start  lg:gap-10 ';

	// Reactive
	$: classesBase = `${cBase} ${$$props.class ?? ''}`;
</script>

<Seo {title} keywords={[category]} {description} />

<div class={classesBase}>
	<div class="p-4 max-w-2xl mx-auto lg:max-w-3xl lg:ml-auto lg:mr-0">
		<article class="prose max-w-none lg:prose-xl dark:prose-invert" id="toc-target">
			<p><span> View {view}</span><span> - {new Date(date).toLocaleDateString()}</span></p>
			<a href="/blog/category/{category}">
				<h5>{category}</h5>
			</a>
			<h1>{title}</h1>
			<slot />
		</article>
	</div>
	<aside class="sticky top-10 hidden lg:block space-y-4 w-72 ml-auto">
		<TableOfContents target="#toc-target" minimumHeadings={2} />
	</aside>
</div>
