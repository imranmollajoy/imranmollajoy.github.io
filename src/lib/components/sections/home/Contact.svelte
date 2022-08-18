<script>
	import CURVE from '$lib/images/Curve-light.svg';
</script>

<div class="u-full-width">
	<img src={CURVE} alt="" />
	<div class="container">
		<h2>Have something great in mind?</h2>
		<a href="mailto:imj_portfolio.3z5y3@simplelogin.com" class="button button-secondary">Email me</a
		>
	</div>
</div>

<style>
	.u-full-width {
		min-height: 50vh;
		display: flex;
		justify-content: center;
		flex-direction: column;
		background: var(--clr-accent);
		margin-top: 10rem;
		position: relative;
		overflow: hidden;
	}
	img {
		position: absolute;
		top: 0;
		left: 50%;
		transform: rotate(30deg);
	}
	/* media for mobile */
	@media (max-width: 425px) {
		img {
			transform: rotate(15deg);
			left: 40%;
		}
	}
</style>
