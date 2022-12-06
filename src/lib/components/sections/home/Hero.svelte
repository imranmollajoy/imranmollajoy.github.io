<script>
	import Typewriter from 'svelte-typewriter';
	import CURVE from '$lib/images/Curve.svg';

	const texts = ['Web developer', 'Web designer', 'Graphic designer', 'UI designer'];
	$: y = 0;
</script>

<svelte:window bind:scrollY={y} />

<main class="hero-container responsive">
	<h3>Hi there, hello!</h3>
	<h1>
		I am an
		<Typewriter mode="loop" interval={100} delay={200} element="span">
			<span class="type"> Web developer </span>
			<span class="type"> Web designer </span>
			<span class="type"> Graphic designer </span>
		</Typewriter>
	</h1>
	<div>
		<a href="#portfolio" class="button button-primary">Portfolio</a>
		<a href="#about" class="button">About me</a>
	</div>
</main>
<img src={CURVE} alt="" style="transform: translate(0,{-y * 0.14}px)" />

<style>
	.hero-container {
		min-height: 95vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	img {
		position: absolute;
		z-index: -2;
		top: 0;
		right: 15%;
	}
	.type {
		background-color: var(--clr-accent);
		color: var(--clr-light);
	}
	h1 {
		transition: all;
	}

	/* media for phone */
	@media (max-width: 768px) {
		img {
			right: 0;
		}
	}
</style>
