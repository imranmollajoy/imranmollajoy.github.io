<script lang="ts">
	export let size: String | 'sm' | 'base' | 'lg' | 'xl' = 'base';
	export let variant: String | 'filled' | 'ghost' | 'soft' | 'ringed' = 'filled';
	export let color:
		| String
		| ''
		| 'surface'
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'success'
		| 'warning'
		| 'error' = 'surface';

	export let disabled = false;

	// Extending example
	// Dont forget to add the extended classType in
	// the button tag
	export let rounded = false;
</script>

<button
	class="btn btn-${size} variant-${variant}-${color}"
	class:disabled
	class:rounded
	on:click
	on:focus
	on:submit
>
	<slot />
</button>
