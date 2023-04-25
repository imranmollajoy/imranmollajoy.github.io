<script>
	import Container from '$lib/components/Container.svelte';
	import PostList from '$lib/components/PostList.svelte';
	import Seo from '$lib/components/SEO.svelte';
	export let data;

	const title = 'Home';
</script>

<Seo {title} />
<section class="hero py-64">
	<div class="container sticky">
		<h1 class="font-bold leading-tight">
			<span class="gradient-heading from-primary-500 to-secondary-500">Web</span>
			developer<span class="text-primary-500">.</span>
			<span class="gradient-heading from-secondary-500 to-primary-500">Web</span>
			designer<span class="text-secondary-500">.</span>
		</h1>
		<p class="subtitle mt-4 max-w-2xl text-opacity-80">
			Hi, I'm Imran Molla Joy, a web developer and designer passionate about crafting beautiful and
			intuitive digital experiences. With expertise in HTML, CSS, JavaScript, and UX/UI design, I
			specialize in building responsive, dynamic, and user-friendly websites that meet and exceed
			client expectations.
		</p>
		<a href="#portfolio" class="btn variant-filled-tertiary mt-4">Portfolio</a>
	</div>
</section>

<section class="py-8" id="portfolio">
	<Container>
		<div class="post-list">
			<PostList posts={data.portfolios} sectionTitle="Projects" />
			<a href="/portfolio" class="btn variant-soft-secondary mt-4">More</a>
		</div>
	</Container>
</section>
<section class="variant-filled-secondary py-32">
	<Container>
		<div class="flex items-center justify-between gap-8">
			<div>
				<h1>Let's work together!</h1>
				<p class="subtitle mt-4 max-w-2xl text-opacity-80">
					I'd love to hear from you. Send me a message and let's chat about how I can help you.
				</p>
			</div>
			<div>
				<form action="https://formspree.io/f/mknakkoq" method="post" class="space-y-4">
					<label for="email" class="label">
						<span>Your email:</span>
						<input
							type="email"
							name="email"
							id="email"
							class="input text-black dark:text-white"
							required
						/>
					</label>

					<label for="message" class="label">
						<span> Your message:</span>
						<textarea
							name="message"
							id="message"
							class="textarea text-black dark:text-white"
							rows="5"
							placeholder="Write your message here."
							required
						/>
					</label>
					<input type="text" name="_gotcha" style="display:none" />
					<button class="btn variant-filled-surface" type="submit">Send</button>
				</form>
			</div>
		</div>
	</Container>
</section>

<section class="bg-surface-50-900-token py-8">
	<Container>
		<div class="post-list">
			<PostList posts={data.posts} sectionTitle="Blog" />
			<a href="/blog" class="btn variant-soft-secondary mt-4">More</a>
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
	/* section.post-list:not(:only-child) {
		margin-bottom: 1rem;
		margin-top: 4rem;
	} */
</style>
