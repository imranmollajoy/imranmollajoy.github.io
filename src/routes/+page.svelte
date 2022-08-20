<script>
	import Hero from '$lib/components/sections/home/Hero.svelte';
	import AboutMe from '$lib/components/sections/home/AboutMe.svelte';
	import Contact from '$lib/components/sections/home/Contact.svelte';
	import Portfolio from '$lib/components/sections/home/Portfolio.svelte';
	import Blog from '../lib/components/sections/home/Blog.svelte';
	export let data;
</script>

<Hero />
<Portfolio portfolios={data.portfolios} />
<AboutMe />
<Contact />
<!-- <Blog blogs={data.blogs} /> -->
