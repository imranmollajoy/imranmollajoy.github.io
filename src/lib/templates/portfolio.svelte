<script>
	export let title;
	export let tags;

</script>
<div class="p-4 max-w-2xl mx-auto lg:max-w-3xl ">
		<article class="prose max-w-none lg:prose-xl dark:prose-invert" id="toc-target">
			<h1>{title}</h1>
			<slot />
		</article>
</div>
