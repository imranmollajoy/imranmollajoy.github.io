<script>
	import CURVE from '$lib/images/Curve-light.svg';
	import BG from '$lib/images/Contact-bg.svg';
	$: y = 0;
</script>

<svelte:window bind:scrollY={y} />
<!-- style="background-image:url({BG}) ; -->
<div class="about-container responsive max">
	<img
		src={CURVE}
		alt=""
		class="curve"
		style="transform: translate(0,{-y * 0.27 + 300}px) rotate(80deg);"
	/>
	<img src={BG} alt="" class="bg" style="transform: translate(0,{-y * 0.1}px)" />
	<main class="responsive">
		<h1>Have something great in mind?</h1>
		<a href="mailto:imj_portfolio.3z5y3@simplelogin.com" class="button">Email me</a>
	</main>
</div>

<style>
	.about-container {
		min-height: 50vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		background-color: var(--clr-accent);
		margin-top: 10rem;
		position: relative;
		overflow: hidden;
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: fixed;
		isolation: isolate;
	}
	.about-container > main.responsive {
		z-index: 3;
	}
	.bg {
		position: absolute;
		top: 0;
		object-fit: cover;
		height: 100vh;
		width: 100%;
		z-index: 1;
	}
	.curve {
		position: absolute;
		top: 0;
		left: 50%;
		transform: rotate(230deg);
		z-index: 2;
	}
	h1 {
		color: var(--clr-light);
	}
	@media (prefers-color-scheme: dark) {
		h1 {
			color: var(--clr-dark);
		}
	}
	/* media for mobile */
	@media (max-width: 425px) {
		.curve {
			transform: rotate(15deg);
			left: 40%;
		}
	}
</style>
