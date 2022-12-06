<script>
	export let title = 'add title';
	export let href = '';
	export let link = '';
</script>

<section>
	<h2>{title}</h2>
	<slot />
	<a {href} class="button button-primary" target="_blank" rel="noreferrer">{link}</a>
</section>

<style>
	a {
		display: inline-block;
	}
</style>
