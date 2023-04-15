<script>
	import PostCard from '../lib/components/PostCard.svelte';

	import Button from '$lib/components/Button.svelte';
	import Container from '$lib/components/Container.svelte';
	import PostList from '$lib/components/PostList.svelte';
	export let data;
</script>

<section class="hero py-64">
	<div class="container sticky">
		<h1 class="font-bold leading-tight">Web developer. Web designer</h1>
		<p class="subtitle mt-4 text-xl max-w-2xl text-opacity-80">
			Hi, I'm Imran Molla Joy, a web developer and designer passionate about crafting beautiful and
			intuitive digital experiences. With expertise in HTML, CSS, JavaScript, and UX/UI design, I
			specialize in building responsive, dynamic, and user-friendly websites that meet and exceed
			client expectations.
		</p>
		<a href="#portfolio" class="btn variant-filled-error mt-4">Portfolio</a>
	</div>
</section>

<section class="py-8">
	<Container>
		<div class="post-list">
			<PostList posts={data.portfolios} sectionTitle="Projects" />
			<a href="/blog" class="btn variant-filled-secondary mt-4">More</a>
		</div>
	</Container>
</section>

<section class="bg-surface-50-900-token py-8">
	<Container>
		<div class="post-list">
			<PostList posts={data.posts} sectionTitle="Blog" />
			<a href="/portfolio" class="btn variant-filled-secondary mt-4">More</a>
		</div>
	</Container>
</section>

<style>
	.hero .container h1 {
		font-size: 4rem;
		line-height: 3.4rem;
	}
	.subtitle {
		opacity: var(--tw-text-opacity);
	}
	section.post-list:not(:only-child) {
		margin-bottom: 1rem;
		margin-top: 4rem;
	}
</style>
